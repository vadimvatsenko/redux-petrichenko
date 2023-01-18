import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//action
import { addINC, addDEC } from "index";

export default function Buttons({ children }) {
    const value = useSelector(state => state);
    console.log(value)// значение state в h1

    //доступ к actions
    const dispatch = useDispatch();

    
    const onClickButton = (e) => {
        console.log(e.target.name)
        dispatch(addINC());//вызываем action
    }
    const onClickDec = () => {
        if (value !== 0) {
            dispatch(addDEC());//вызываем action
        }
    }

    return (
        <div>
            <div style={{
                display: 'flex'
            }}>
                <button
                    onClick={onClickDec}
                    name='DEC'
                    type="button">DEC</button>
                
                <button
                    onClick={onClickInc}
                    name='INC'
                    type="button">INC</button>
            
            </div>
            <h1>{value}</h1>
        </div>
    );
}