import {LISTE_EKLE, SAYAC_ARTTIR, SAYAC_AZALT} from "../type";


export const listeyeEkle = (deger) => {
    return {
        type: LISTE_EKLE,
        payload: deger,
    };
};
