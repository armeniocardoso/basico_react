import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export const publicarVaga = async (vaga, setVaga) => {

    const refVaga = doc(collection(db, "vagas"));
    await setDoc(refVaga, vaga);
    setVaga((objetoAtual) => {
        return { ...objetoAtual, ["idVaga"]: refVaga.id }
    });

}
