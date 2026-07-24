"use client";

import Clients from "../components/Clients";

import { useState } from "react";

export default function Home() {
    const [clients, setClients] = useState([
        {
            name: "Exemplo",
            email: "exemplo@gmail.com",
        },
    ]);

    return (
        <div className="app">
            <h1 className="text-white font-bold text-2xl">Lista de Clientes</h1>
            <div className="client-list">
                {clients.map((client) => (
                    <Clients client={client} />
                ))}
            </div>
        </div>
    );
}
