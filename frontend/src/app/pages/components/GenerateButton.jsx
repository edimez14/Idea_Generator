"use client";

import { Button } from "@nextui-org/react";

export default function GenerateButton({ onClick }) {
    return (
        <Button 
            onPress={onClick} 
            variant="solid" 
            className="bg-gradient-to-tr from-pink-500 to-yellow-500"
        >
            Generar idea
        </Button>
    );
}
