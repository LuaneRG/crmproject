"use client";

import { useState } from "react";
import "../app/globals.css";
import Clients from "../components/Clients";
import AddClients from "../components//AddClients";

export default function Home() {
    const [clients, setClients] = useState([
        {
            id: 1,
            name: "Exemplo",
            email: "exemplo@gmail.com",
            category: "Tecnologia",
        },
    ]);

    function addingClients(name: string, email: string, category: string) {
        const newClients = [
            ...clients,
            {
                id: Math.floor(Math.random() * 10000),
                name,
                email,
                category,
            },
        ];
        setClients(newClients);
    }

    return (
        <div className="app">
            <h1 className="font-bold text-4xl">Clientes</h1>
            <AddClients addingClients={addingClients}></AddClients>
            <div className="client-list">
                {clients.map((client) => (
                    <Clients key={client.id} client={client} />
                ))}
            </div>
        </div>
    );
}
