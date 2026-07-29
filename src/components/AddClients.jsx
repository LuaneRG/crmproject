import { useState } from "react";

const AddClient = () => {
    return (
        <div>
            <h2>Adicionar Cliente</h2>
            <form>
                <h3>Nome:</h3>
                <input type="text" placeholder="Digite o nome" />
                <h3>Setor de Interesse:</h3>
                <select>
                    <option value="" hidden>
                        Selecione:
                    </option>
                    <option value="Tecnologia">Tecnologia</option>
                    <option value="Moda Fitness">Moda Fitness</option>
                    <option value="Produtos de beleza">
                        Produtos de beleza
                    </option>
                    <option value="Mundo Animal">Mundo Animal</option>
                </select>
                <input type="submit" value="Adicionar a Lista" />
            </form>
        </div>
    );
};

export default AddClient;
