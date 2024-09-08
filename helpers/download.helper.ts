import mime from "mime";
import download from 'downloadjs';

const downloadFile = async (filename: string, filepath: string) => {
    try {
        
        const response = await fetch(filepath);

        if (!response.ok) {
            throw new Error(`Failed to fetch file from ${filepath}`);
        }

        const blob = await response.blob();

        const mimeType = mime.getType(filepath) || "application/octet-stream";

        download(blob, filename, mimeType);
    } catch (error) {
        console.error("Error downloading file:", error);
    }
};

export default downloadFile;
