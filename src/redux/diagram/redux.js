import { createStore } from "redux";
//сделали экшн
const dataMonth = month => {
    return {
        type: 'dataMonth',
        payload: { month },
    };
};
//сделали reducer обрабатывать экшн
function getDataMonth(state = 0, action) {
    switch (action.type) {
        case 'dataMonth':
            return  action.payload.month;
            
        default:
            return state;
    }
}
//сделали store 
const store = createStore(getDataMonth);

//привязка к компоненту и отправляем экшн
{/* <button onClick={REDUX.dispatch(dataMonth(2))}></button> */}