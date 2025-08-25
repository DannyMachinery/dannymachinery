import axios from "axios";

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
});

export const apiFetcher = async (url) => {
    const response = await apiClient.get(url);
    return response.data;
};

export const sendContactMessage = async (payload) => {
    const response = await apiClient.post('/mail-contact', payload);
    return response.data;
};

export const sendPartnershipMessage = async (payload) => {
    const response = await apiClient.post('/mail-partner', payload);
    return response.data;
};