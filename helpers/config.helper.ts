interface IConfig {
    AppWriteUrl: string;
    AppWriteProjectId: string;
    AppWriteDataBaseId: string;
    AppWriteApiKey: string;
    Server : {
        AppWriteServerApiKey: string;
    }
}

const config : IConfig = {
    AppWriteUrl: process.env.NEXT_PUBLIC_SERVER_URL ?? '',
    AppWriteProjectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? '',
    AppWriteDataBaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID ?? '',
    AppWriteApiKey: process.env.NEXT_PUBLIC_APPWRITE_API_KEY ?? '',
    Server : {
        AppWriteServerApiKey : process.env.APPWRITE_SERVER_API_KEY ?? ''
    }
}

export default config;