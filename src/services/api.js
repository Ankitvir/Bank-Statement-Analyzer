import transactionsData from '../data/transactions.json';

export const fetchTransactions = async () => {
    try {
        
        return transactionsData;
    } catch (error) {
        console.error("Error fetching transactions:", error);
        throw error;
    }
};

export const uploadFile = async (file) => {
    try {
        
        const newUpload = [
            {
                id: Date.now(),
                fileName: file.name,
                status: "uploaded",
                uploadedAt: new Date().toISOString()
            }
        ];

        console.log("Returning Upload Data:", newUpload);
        return newUpload; 
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
};
