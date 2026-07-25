import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';

// Default web client ID (from Firebase -> OAuth 2.0 client IDs -> Web client).
const DEFAULT_WEB_CLIENT_ID =
  '61815331485-fh9hsuncjslb8ui2fikg20cnvdjs1uc6.apps.googleusercontent.com';

// iOS client ID (from GoogleService-Info.plist -> CLIENT_ID)
const IOS_CLIENT_ID =
  '61815331485-hm20me4o4uhiv20rjdhff3615101t4d1.apps.googleusercontent.com';

export function configureGoogle(options?: { webClientId?: string; iosClientId?: string }) {
  const webClientId =  DEFAULT_WEB_CLIENT_ID;
  const iosClientId =  IOS_CLIENT_ID;

  GoogleSignin.configure({
    webClientId,
    iosClientId,
    offlineAccess: true,
  });
}

// Auto-configure with the default web client ID and the iOS client ID.
configureGoogle();

export async function signInWithGoogle() {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    const response = await GoogleSignin.signIn();
    if (!isSuccessResponse(response)) {
      throw new Error('Google Sign-In flow did not complete successfully.');
    }

    const tokens = await GoogleSignin.getTokens();
    const idToken = response.data?.idToken ?? tokens.idToken ?? null;
    const accessToken = tokens.accessToken ?? null;

    console.warn('GoogleSignin response:', JSON.stringify(response));
    console.warn('GoogleSignin tokens:', { idToken, accessToken });

    if (!idToken && !accessToken) {
      throw new Error(
        'Google Sign-In failed: No ID token or access token received. Check your webClientId and Android SHA1 configuration.',
      );
    }

    const credential = auth.GoogleAuthProvider.credential(idToken, accessToken);
    return auth().signInWithCredential(credential);
  } catch (error: unknown) {
    const err = error as { code?: string; message?: string };
    if (err.code === statusCodes.SIGN_IN_CANCELLED) {
      throw new Error('Google Sign-In was cancelled by the user.');
    }
    if (err.code === statusCodes.IN_PROGRESS) {
      throw new Error('Google Sign-In is already in progress.');
    }
    if (err.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      throw new Error('Google Play Services is not available or needs to be updated.');
    }
    throw new Error(err.message ?? 'Unknown Google Sign-In error.');
  }
}