import { useState } from "react";

const AddClient = (addingClients) => {
    const [valuename, setValueName] = useState("");
    const [valuemail, setValueMail] = useState("");
    const [category, setCategory] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!valuename || !valuemail || !category) return;
        addingClients(valuename, valuemail, category);
        setValueName("");
        setValueMail("");
        setCategory("");
    }

    return (
        <div>
            <h2 className="font-bold text-2xl">Adicionar Clientes</h2>
            <form onSubmit={handleSubmit}>
                <h3>Nome:</h3>
                <input
                    type="text"
                    placeholder="Digite o nome"
                    value={valuename}
                    onChange={(e) => setValueName(e.target.value)}
                />
                <h3>Email:</h3>
                <input
                    value={valuemail}
                    type="email"
                    placeholder="Digite o email"
                    onChange={(e) => setValueMail(e.target.value)}
                />
                <h3>Setor de Interesse:</h3>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
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
