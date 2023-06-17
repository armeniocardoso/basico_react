import UltimasVagas from "./UltimasVagas";
import Login from "./Login";
import CriarConta from "./CriarConta";

export default function Home({usuario, setUsuario, setErro}) {
    return (
        <div className="principal">
            <UltimasVagas />
            <Login usuario={usuario} setUsuario={setUsuario} setErro={setErro} />
            <CriarConta />
        </div>
    );
}
