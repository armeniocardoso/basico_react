import { logarSistema } from "../infra/Usuarios";

export default function Login({usuario, setUsuario, setErro}) {

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setUsuario((objetoAtual) => {
            return { ...objetoAtual, [fieldName]: fieldValue }
        });
    };

    const handleLogin = (event) => {
        event.preventDefault();
        logarSistema(usuario, setUsuario, setErro);
    }

    return (        
        <div className="login">
            <h3>Acesso ao Sistema</h3>
            <form>
                <table border={0} width={"100%"}>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="email">Email:</label>
                            </td>
                            <td>
                                <input type="text" name="email" value={usuario.email} onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="senha">Senha:</label>
                            </td>
                            <td>
                                <input type="password" name="senha" value={usuario.senha} onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} align="center">
                                <input type="submit" value="Entrar" 
                                disabled={usuario.email.length === 0 || usuario.senha.length === 0}
                                onClick={handleLogin} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}