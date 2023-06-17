import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

export const logarSistema = (usuario, setUsuario, setErro) => {
    signInWithEmailAndPassword(auth, usuario.email, usuario.senha)
        .then(async (credenciais) => {
            const docRef = doc(db, "usuarios", credenciais.user.uid);
            const docSnap = await getDoc(docRef);
            setUsuario((objetoAtual) => {
                const retorno = {
                    ...objetoAtual,
                    ["id"]: credenciais.user.uid,
                    ["nome"]: docSnap.data().nome,
                    ["email"]: docSnap.data().email,
                    ["fone"]: docSnap.data().fone,
                    ["senha"]: docSnap.data().senha,
                    ["tipo"]: docSnap.data().tipo
                };
                return retorno;
            });
        })
        .catch((error) => {
            console.log(`${error.code} = ${error.message}`);
            setErro("Login Inválido");
        });
};

export const criarConta = async (usuario, setUsuario) => {
    await createUserWithEmailAndPassword(auth, usuario.email, usuario.senha)
        .then((credenciais) => {
            setUsuario((objetoAtual) => {
                const retorno = { ...objetoAtual, ["id"]: credenciais.user.uid };
                return retorno;
            });
            const usuarios = collection(db, "usuarios");
            setDoc(doc(db, "usuarios", credenciais.user.uid), usuario);
        })
        .catch((error) => {
            console.log(`${error.code} = ${error.message}`);
        });
}
