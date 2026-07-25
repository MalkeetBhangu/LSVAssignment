import React, { useState } from 'react'
import { View, Image, Alert } from 'react-native'
import styles from './styles'
import { getTexts } from '@translations/TranslationHelper'
import { DEFAULT_LANGUAGE_CODE } from '@constants/Constants'
import TextView from '@components/commonUI/TextView'
import TextInput from '@components/commonUI/TextInput'
import Button from '@components/commonUI/Button'
import { signInWithGoogle } from 'config/google'

const Login: React.FC = () => {
    const t = getTexts(DEFAULT_LANGUAGE_CODE)
    const [emailOrPhone, setEmailOrPhone] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        // Handle login logic
    try {
      const userCredential = await signInWithGoogle();

      console.log(userCredential.user);

      Alert.alert(
        'Success',
        `Welcome ${userCredential.user.displayName}`,
      );
    } catch (error) {
      console.log(error);
            const message = error instanceof Error ? error.message : 'Google Login Failed';
            Alert.alert('Google Login Failed', message);
    }
  };
    

    const handleForgotPassword = () => {
        // Handle forgot password logic
    }

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <View style={styles.imageWrapper}>
                    <Image source={require('@assets/images/logo.png')} style={styles.imageStyle} />
                </View>
                <TextView style={styles.welcomeTitle} text={t.login.welcomeText} />
                <TextView style={styles.welcomeSubtitle} text={t.login.welcomeSubtitle} />
            </View>

            <View style={styles.middleSection}>
                <TextInput label={t.login.emailOrPhoneLabel} placeholder={t.login.emailOrPhonePlaceholder} value={emailOrPhone} onChangeText={setEmailOrPhone} keyboardType="email-address" autoCapitalize="none" />
                <TextInput label={t.login.passwordLabel} placeholder={t.login.passwordPlaceholder} value={password} onChangeText={setPassword} isPassword />
                <View style={styles.forgotPasswordContainer}>
                    <TextView style={styles.forgotPasswordText} text={t.login.forgotPassword} onPress={handleForgotPassword} />
                </View>
                <Button title={t.login.loginButton} onPress={handleLogin} />
            </View>
        </View>
    )
}

export default Login