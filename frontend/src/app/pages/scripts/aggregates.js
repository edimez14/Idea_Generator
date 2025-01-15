// "use client";

// import { useState } from 'react';
import { BackendRequest } from "@/app/utils/Request.api";

export default function aggregates(add) {
    const prompt = {
        "prompt": `hola me gustaria que me dieras solo una idea de ${add}`
    }
    try {
        const response = BackendRequest('POST', 'idea-generator/', prompt);
        // console.log("respuesta de aggregates: ", response);
        return response;
    } catch (error) {
        console.error("Error en aggregates:", error);
        throw error;
    }
}