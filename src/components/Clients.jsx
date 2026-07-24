import React from "react";
import "../app/globals.css";

const clients = ({ client }) => {
    return (
        <div className="clients-area">
            <div className="client-infos">
                <p>{client.name}</p>
                <p>{client.email}</p>
            </div>
            <div className="controls">
                <button>Excluir Cliente</button>
            </div>
        </div>
    );
};

export default clients;
