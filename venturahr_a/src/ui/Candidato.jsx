import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Candidato({ usuario, setUsuario }) {
    
    const navigate = useNavigate();

    useEffect(() => {
        if (usuario.tipo != "Candidato") {            
            navigate("/", "replace");
        }
    });

    return (
        <div className="principal">
            <h2>Bem Vindo, {usuario.nome}</h2>
            <h3>Candidato</h3>
        </div>
    )
}
