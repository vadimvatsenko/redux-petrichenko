import { useSelector, useDispatch } from "react-redux";
//action
import { addINC, addDEC, clickRND } from '../../actions';

export default function Buttons() {
    const value = useSelector(state => state.value);
    console.log(value.value)// значение state в h1

    //доступ к actions
    const dispatch = useDispatch();

    
    const onClickButton = (e) => {
        if(e.target.name === 'DEC' && value !==0) {
            dispatch(addDEC());
        }
        if (e.target.name === 'INC') {
            
            dispatch(addINC());
        }
    }

    const onClickRND = () => {
        const rundomValue = Math.floor(Math.random() * 10);
        console.log(rundomValue)
        dispatch(clickRND(rundomValue))
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