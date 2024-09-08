import mime from "mime";
import download from 'downloadjs';

const downloadFile = async (filename: string, filepath: string) => {
    try {
        // Fetch the file from the given URL (filepath)
        const response = await fetch(filepath);

        if (!response.ok) {
            throw new Error(`Failed to fetch file from ${filepath}`);
        }

        // Get the file data as a blob
        const blob = await response.blob();

        // Get the mime type based on the file extension
        const mimeType = mime.getType(filepath) || "application/octet-stream";

        // Use the downloadjs library to download the file
        download(blob, filename, mimeType);
    } catch (error) {
        console.error("Error downloading file:", error);
    }
};

export default downloadFile;
