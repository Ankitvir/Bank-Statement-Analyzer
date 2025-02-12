import transactionsData from '../data/transactions.json';

export const fetchTransactions = async () => {
    try {
        // Simulate an API call by returning the static JSON data
        return transactionsData;
    } catch (error) {
        console.error("Error fetching transactions:", error);
        throw error;
    }
};

export const uploadFile = async (file) => {
    try {
        // Simulating a successful upload response
        const newUpload = [
            {
                id: Date.now(),
                fileName: file.name,
                status: "uploaded",
                uploadedAt: new Date().toISOString()
            }
        ];

        console.log("Returning Upload Data:", newUpload);
        return newUpload; // Ensure it returns an array
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
};
