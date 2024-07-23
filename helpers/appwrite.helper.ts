import {Client, Databases, Query, Storage} from 'node-appwrite';
import config from "@/helpers/config.helper";

class AppWrite {

    private static client: Client = new Client().setEndpoint(config.AppWriteUrl).setProject(config.AppWriteProjectId).setKey(config.AppWriteApiKey);
    private static databases: Databases = new Databases(AppWrite.client);
    private static storage: Storage = new Storage(AppWrite.client);

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

    public static readData = async (group: string) => {
        try {
            let response = await AppWrite.databases.listDocuments(
                config.AppWriteDataBaseId,
                '66602d4d0014ec6ce792',
                [
                    Query.equal('group', group),
                    Query.select(['key', 'value'])
                ]
            );
            let dataObj : {[key: string]: string} = {};
            response.documents.forEach(item => {
                dataObj[item.key] = item.value;
            });
            return dataObj;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    public static getImageUrl = (buketId : string, imageId : string) => {
        return `${config.AppWriteUrl}/storage/buckets/${buketId}/files/${imageId}/view?project=${config.AppWriteProjectId}`;
    }

    public static downloadFile = async (bucketId: string, fileId: string) => {
        try {
            const response = await AppWrite.storage.getFileDownload(bucketId, fileId);
            return response; // Return response directly if it is a Blob
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    }
}

export default AppWrite;