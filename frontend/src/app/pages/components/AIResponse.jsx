"use client";

import Markdown from 'react-markdown';

export default function AIResponse({ prompt, isLoading }) {
    return (
        <div className="text-xl break-words overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-bold pb-2">Tu idea es:</h3>
            {isLoading ? (
                <p className="text-center text-gray-500">Cargando...</p>
            ) : (
                <Markdown>{prompt}</Markdown>
            )}
        </div>
    );
}
