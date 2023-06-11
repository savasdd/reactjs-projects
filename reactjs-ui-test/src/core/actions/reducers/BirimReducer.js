import { Map } from "immutable";
import {
    BIRIM_DETAY, BIRIM_DETAY_UPDATE,
    BIRIM_EDIT,
    GVN_BIRIM,
    GVN_BIRIM_GET, GVN_BIRIM_YETKI
} from "../Type";

let initialState = {
    birimDto: {},
    yetki: {},
    animasyon: false,
    editMode: true,
    sorguIds: null,
};


export default function birimReducer(state = Map(initialState), action) {
    switch (action.type) {
        case GVN_BIRIM:
            return state.merge({
                animasyon: action.data.animasyon,
                update: action.data.update,
                birimDto: action.data.birimDto,
                sorguIds: action.data.sorguIds,
            });

        case GVN_BIRIM_GET:
            return state.merge({
                gridApi: action.data.gridApi,
                param: action.data.param,
            });

        case BIRIM_EDIT:
            return state.merge({
                editMode: action.data.editMode
            });

        case BIRIM_DETAY:
            return state.merge({
                detayDto: action.data.detayDto,
            });

        case BIRIM_DETAY_UPDATE:
            return state.merge({
                detay: action.data.detay,
            });

        case GVN_BIRIM_YETKI:
            return state.merge({
                yetki: action.data.yetki,
            });

        default:
            return state
    }
};
