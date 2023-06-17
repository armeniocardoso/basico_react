import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { publicarVaga } from "../infra/Vagas";

export default function PublicarVaga() {

    const [vaga, setVaga] = useState({ idVaga: "", idUsuario: "", cargo: "", descricao: "", criterios: Array(0) });
    const [criterio, setCriterio] = useState({ nome: "", descricao: "", perfil: 0, peso: 0 });
    let { idUsuario } = useParams();

    useEffect(() => {
        if (vaga.idVaga.length > 0) {
            alert("Vaga publicada com sucesso");
            setVaga({ idVaga: "", idUsuario: "", cargo: "", descricao: "", criterios: Array(0) });
        }
    }, [vaga]);

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        switch (event.target.dataset.form) {
            case "vaga":
                if (vaga.idUsuario.length === 0) {
                    vaga.idUsuario = idUsuario;
                }
                setVaga((objetoAtual) => {
                    return { ...objetoAtual, [fieldName]: fieldValue }
                });
                break;
            case "criterio":
                setCriterio((objetoAtual) => {
                    return { ...objetoAtual, [fieldName]: fieldValue }
                });
                break;
        }
    };

    const handleNovoCriterio = (event) => {
        const criterios = vaga.criterios;
        criterios.push(criterio);
        setCriterio({ nome: "", descricao: "", perfil: 0, peso: 0 });
        setVaga((objetoAtual) => {
            return { ...objetoAtual, ["criterios"]: criterios }
        });
    }

    const handlePublicarVaga = (event) => {
        publicarVaga(vaga, setVaga);
    }

    return (
        <div className="publicarVaga">
            <h3 align="center">Publicar Vaga</h3>
            <h4>Dados da Vaga</h4>
            <table>
                <tbody>
                    <tr>
                        <td>Cargo:</td>
                        <td>
                            <input type="text" name="cargo" data-form="vaga" value={vaga.cargo} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>Descrição:</td>
                        <td>
                            <input type="text" name="descricao" data-form="vaga" value={vaga.descricao} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} align="center">
                            <button disabled={vaga.criterios.length === 0} onClick={handlePublicarVaga}>Publicar Vaga</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h4>Critérios da Vaga</h4>
            <table id="criterios">
                <tbody>
                    <tr>
                        <td>Nome</td>
                        <td>Descrição</td>
                        <td>PMD</td>
                        <td>Peso</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" name="nome" data-form="criterio" value={criterio.nome} onChange={handleChange} />
                        </td>
                        <td>
                            <input type="text" name="descricao" data-form="criterio" value={criterio.descricao} onChange={handleChange} />
                        </td>
                        <td>
                            <input type="text" name="perfil" data-form="criterio" size={3} value={criterio.perfil} onChange={handleChange} />
                        </td>
                        <td>
                            <input type="text" name="peso" data-form="criterio" size={3} value={criterio.peso} onChange={handleChange} />
                        </td>
                        <td>
                            <button onClick={handleNovoCriterio}><img src="/adicionar.png" /></button>
                        </td>
                    </tr>
                    {vaga.criterios.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.nome}</td>
                                <td>{item.descricao}</td>
                                <td>{item.perfil}</td>
                                <td>{item.peso}</td>
                                <td><button><img src="/lixeira.png" /></button></td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    );
}