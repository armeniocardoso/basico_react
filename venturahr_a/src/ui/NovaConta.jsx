import React, { useEffect, useState } from "react";
import { criarConta } from "../infra/Usuarios";

export default function NovaConta({usuario, setUsuario}) { 

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setUsuario((objetoAtual) => {
            return { ...objetoAtual, [fieldName]: fieldValue }
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        criarConta(usuario, setUsuario);
    }

    return (
        <div className="principal">
            <div className="novaConta">
                <h3 align="center">Nova Conta</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="nome">Nome:</label>
                            </td>
                            <td>
                                <input type="text" name="nome"
                                    value={usuario.nome} onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="email">Email:</label>
                            </td>
                            <td>
                                <input type="text" name="email"
                                    value={usuario.email} onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="fone">Telefone:</label>
                            </td>
                            <td>
                                <input type="text" name="fone"
                                    value={usuario.fone} onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="senha">Senha:</label>
                            </td>
                            <td>
                                <input type="password" name="senha"
                                    value={usuario.senha} onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="tipo">Tipo de Conta:</label>
                            </td>
                            <td>
                                <input type="radio" name="tipo"
                                    value="Empresa" onChange={handleChange} /> Empresa
                                <input type="radio" name="tipo"
                                    value="Candidato" onChange={handleChange} /> Candidato
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} align="center">
                                <input type="submit" value="Criar Conta" onClick={handleSubmit} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
