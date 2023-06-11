import {SAYAC_ARTTIR, SAYAC_AZALT} from "../type";

const defult_state = 0;

const CountReducer = (state = defult_state, action) => {
    switch (action.type) {
        case SAYAC_ARTTIR: {
            return state + 1;
            break;
        }

        case SAYAC_AZALT:
            return state - 1;
            break;
        default:
            return state;

    }

};
export default CountReducer;