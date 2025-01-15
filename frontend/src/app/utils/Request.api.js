import axios from 'axios';

const DEBUG = false;
const api = axios.create({
    baseURL: !DEBUG ? 'https://idea-generator-pb5d.onrender.com/api/' : 'http://localhost:8000/api/',
});

export const BackendRequest = async (typeRequest, url, prompt) => {
    const headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    }

    const bodyContent = JSON.stringify(prompt);

    const reqOptions = {
        url: url,
        method: typeRequest,
        headers: headersList,
        data: bodyContent,
    }

    try {
        const response = await api.request(reqOptions);
        if (response.data && response.data.gemini) {
            // console.log("Respuesta completa de la API:", response.data.gemini);
            return response.data.gemini;
        }
        else {
            throw new Error("No output returned from the backend");
        }
    } catch (error) {
        console.error("Error en BackendRequest:", error);
        throw error;
    }
};