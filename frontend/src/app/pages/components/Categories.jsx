"use client";

import {Button} from "@nextui-org/react";
import { CiCirclePlus } from "react-icons/ci";

export default function Categories({ onSelectCategory }) {
    const all_categories = {
        "Compras": "primary",
        "Viajes": "secondary",
        "Comida": "success",
        "Ropa": "warning",
        "negocios": "danger"
    };

    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold pb-2">Tema de la idea:</h1>
            <div className="flex gap-2">
                {Object.entries(all_categories).map(([category, color], index, array) => (
                    <Button
                        key={category}
                        color={color}
                        variant="ghost"
                        className={index !== array.length - 1 ? "mr-2" : ""}
                        onPress={() => onSelectCategory(category)}
                    >
                        {category}
                    </Button>
                ))}
                <Button isIconOnly color="primary" className="flex items-center p-0 rounded-lg text-2xl"> 
                    <CiCirclePlus />
                </Button>
            </div>
        </div>
    );
}