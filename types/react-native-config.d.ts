declare module 'react-native-config' {
    interface EnvConfig {
        DEFAULT_WEB_CLIENT_ID: string;
        IOS_CLIENT_ID: string;
    }
    const Config: EnvConfig

    export default Config
}
