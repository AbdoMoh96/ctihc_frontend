interface IConfig {
    AppWriteUrl: string;
    AppWriteProjectId: string;
    AppWriteDataBaseId: string;
}

const config : IConfig = {
    AppWriteUrl: process.env.NEXT_PUBLIC_SERVER_URL ?? '',
    AppWriteProjectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? '',
    AppWriteDataBaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID ?? ''
}

export default config;