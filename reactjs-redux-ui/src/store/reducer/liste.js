import {LISTE_EKLE} from "../type";

const defult_state = [];

const ListeReducer = (state = defult_state, action) => {
    switch (action.type) {
        case LISTE_EKLE:
            return [...state, action.payload+","];
            break;

        default:
            return state;

    }

};
export default ListeReducer;