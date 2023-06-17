import { Link } from "react-router-dom";

export default function CriarConta() {
    return (
        <div className="criarConta">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p align="center"><b>Não tem conta no site?</b></p>
                            <p align="center">
                            <Link to={"/criarConta"}>Criar Uma Nova Conta</Link>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p align="center"><b>Benefícios de se cadastrar como membro:</b></p>
                            <p align="left">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Fusce urna orci, semper vitae justo sed, varius lacinia dui.
                                Praesent non neque elementum, accumsan nibh eget, elementum nisl.
                            </p>
                            <p align="left">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Fusce urna orci, semper vitae justo sed, varius lacinia dui.
                                Praesent non neque elementum, accumsan nibh eget, elementum nisl.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
