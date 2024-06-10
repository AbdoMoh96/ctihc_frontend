import { Client, Databases } from 'appwrite';
import config from "@/helpers/config.helper";

class AppWrite {

    private static client: Client = new Client();
    private static databases: Databases;

    constructor() {
        AppWrite.client
            .setEndpoint(config.AppWriteUrl)
            .setProject(config.AppWriteProjectId);

        AppWrite.databases = new Databases(AppWrite.client);
    }

    public static read = async (collectionId: string, queries: string[] = []) => {
        try {
            return await AppWrite.databases.listDocuments(
                config.AppWriteDataBaseId,
                collectionId,
                queries
            );
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}

export default AppWrite;