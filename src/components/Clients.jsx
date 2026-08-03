import React from "react";

const clients = ({ client }) => {
    return (
        <div className="clients-area">
            <h2 className="font-bold text-2xl">Lista de Clientes</h2>
            <div className="client-infos">
                <p>{client.name}</p>
                <p>{client.email}</p>
                <p>{client.category}</p>
            </div>
            <div className="controls">
                <button>Excluir Cliente</button>
            </div>
        </div>
    );
};

export default clients;
