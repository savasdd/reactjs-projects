import React from 'react';
import {useDispatch} from "react-redux";
import {arrtir, azalt} from "../store/action/counter";
import {listeyeEkle} from "../store/action/liste";


function Sorgula() {
    const dispatch = useDispatch();

    const sayacArt = (e) => {
        e.preventDefault();
        console.log("merhaba");
        dispatch(arrtir());
    };

    const sayacAzal = (e) => {
        e.preventDefault();
        dispatch(azalt());
    };

    const ekle = (e) => {
        e.preventDefault();
        const name = ["Savas"];
        dispatch(listeyeEkle(name[0]));
    };

    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={sayacArt}>+</button>
            &nbsp;
            <button type="button" className="btn btn-danger" onClick={sayacAzal}>-</button>
            &nbsp;
            <button type="button" className="btn btn-success" onClick={ekle}>-</button>
        </div>
    )


};
export default Sorgula;