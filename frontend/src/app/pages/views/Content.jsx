"use client";

import { useState, useEffect } from 'react';
import aggregates from "../scripts/aggregates";
import AIResponse from '../components/AIResponse';
import Categories from '../components/Categories';
import GenerateButton from '../components/GenerateButton';

export default function Content() {
    const [message, setMessage] = useState("Hola, genera una idea de el tema que quieras");
    const [selectCategory, setSelectCategory] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const test  = async () => {
        if (!selectCategory) {
            setMessage("Por favor, seleccione una categoria primero.");
            return;
        }

        setIsLoading(true);

        try {
            const response = await aggregates(selectCategory);
            // console.log("Respuesta de aggregates en test:", response);
            setMessage(response || "Sin mensaje recibido."); 
        } catch (error) {
            console.error("Error en test:", error);
            setMessage("Error al obtener datos.");
        } finally {
            setIsLoading(false); 
        }
    }

    return (
        <div className="grid gap-4 justify-center items-center w-full break-words p-0 m-0 sm:p-10 sm:m-10">
            <Categories onSelectCategory={(category) => setSelectCategory(category)}/>
            <AIResponse prompt={message} isLoading={isLoading} />
            <GenerateButton onClick={test} />
        </div>
    );
}