import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//action
import { addINC, addDEC, clickRND } from "index";

export default function Buttons() {
    const value = useSelector(state => state);
    console.log(value)// значение state в h1

    //доступ к actions
    const dispatch = useDispatch();

    
    const onClickButton = (e) => {
        if(e.target.name === 'DEC' && value !==0) {
            dispatch(addDEC());
        }
        if(e.target.name === 'INC') {
            dispatch(addINC());
        }
    }

    const onClickRND = () => {
        dispatch(clickRND())
    }


    return (
        <div>
            <div style={{
                display: 'flex'
            }}>
                <button
                    onClick={onClickButton}
                    name='DEC'
                    type="button">DEC</button>
                
                <button
                    onClick={onClickButton}
                    name='INC'
                    type="button">INC</button>
                <button
                    onClick={onClickRND}
                    name='RND'
                    type="button">RND</button>
            
            </div>
            <h1>{value}</h1>
        </div>
    );
}