import { Client, Databases } from 'appwrite';
import config from "@/helpers/config.helper";

class AppWrite {

    private static client: Client = new Client().setEndpoint(config.AppWriteUrl).setProject(config.AppWriteProjectId);
    private static databases: Databases = new Databases(AppWrite.client);

    public static read = async (collectionId: string, queries: string[] = [], databaseId  = '') => {
        try {
            let response = await AppWrite.databases.listDocuments(
                databaseId.length > 1 ? databaseId : config.AppWriteDataBaseId,
                collectionId,
                queries
            );
            return response.documents;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    public static readFile = (buketId : string, fileId : string) => {
        return `${config.AppWriteUrl}/storage/buckets/${buketId}/files/${fileId}/view?project=${config.AppWriteProjectId}`;
    }
}

export default AppWrite;