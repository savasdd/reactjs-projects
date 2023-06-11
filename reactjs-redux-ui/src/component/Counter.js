import React from 'react';
import {useSelector} from "react-redux";

function Counter() {
    const {counter, list} = useSelector(state => state);

    return (
        <div className="card">
            <div className="card">
                <div className="card-body">
                    <h2>{counter}</h2>
                </div>
            </div>
            &nbsp;
            <div className="card">
                <div className="card-body">
                    <h2>{list}</h2>
                </div>
            </div>
        </div>
    )
};
export default Counter;