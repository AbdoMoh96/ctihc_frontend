import { Client, Databases, Query } from 'appwrite';

class AppWrite {

    private static client: Client = new Client();
    private static databases: Databases;

    constructor() {
        AppWrite.client
            .setEndpoint('https://appwrite.abdomoh.com/v1')
            .setProject('665f74440004fd53de63');

        AppWrite.databases = new Databases(AppWrite.client);
    }

    static read = async () => {
        try {
            let response = await AppWrite.databases.listDocuments(
                '665f758b0033ac601c18',
                '66602a77001e4e77b8e5',
                [
                    Query.equal('swiper', 'home_slider'),
                    Query.select(['$id', 'image', 'title_en', 'title_ar', 'description_en', 'description_ar']),
                ]
            );
            console.log('Data :: ', response);
        } catch (error) {
            console.error('Error fetching slide data:', error);
        }
    }
}

export default AppWrite;