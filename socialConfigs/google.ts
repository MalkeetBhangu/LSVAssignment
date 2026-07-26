import auth from '@react-native-firebase/auth';
import { GoogleSignin, isSuccessResponse, statusCodes, } from '@react-native-google-signin/google-signin';
import Config from 'react-native-config'
import { getTexts } from '@translations/TranslationHelper'
import { DEFAULT_LANGUAGE_CODE } from '@constants/Constants'

export function configureGoogle() {
  GoogleSignin.configure({
    webClientId: Config.DEFAULT_WEB_CLIENT_ID,
    iosClientId: Config.IOS_CLIENT_ID,
    offlineAccess: true,
  });
}

configureGoogle();

export async function signInWithGoogle() {
  const t = getTexts(DEFAULT_LANGUAGE_CODE);
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    const response = await GoogleSignin.signIn();
    if (!isSuccessResponse(response)) {
      throw new Error(t.login.signInFlowNotComplete);
    }

    const tokens = await GoogleSignin.getTokens();
    const idToken = response.data?.idToken ?? tokens.idToken ?? null;
    const accessToken = tokens.accessToken ?? null;

    if (!idToken && !accessToken) {
      throw new Error(t.login.noTokenReceived);
    }

    const credential = auth.GoogleAuthProvider.credential(idToken, accessToken);
    return auth().signInWithCredential(credential);
  } catch (error: unknown) {
    const err = error as { code?: string; message?: string };
    if (err.code === statusCodes.SIGN_IN_CANCELLED) {
      throw new Error(t.login.signInCancelled);
    }
    if (err.code === statusCodes.IN_PROGRESS) {
      throw new Error(t.login.signInInProgress);
    }
    if (err.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      throw new Error(t.login.playServicesNotAvailable);
    }
    throw new Error(err.message ?? t.login.unknownError);
  }
}