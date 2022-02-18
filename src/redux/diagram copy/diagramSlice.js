import { createSlice } from "@reduxjs/toolkit";
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1";

const diagramSlice = createSlice({
    name: 'diagram',
    
    initialState: {
        month: '',
        year: '',
        userDataInfo: {
            id: "1",
            balance: "24000",
            category: {
                costs: {
                    '1': '100',
                    '2':'200',
                },
                isIncome: {
                    '1':'ok'
                }
            }
        },
        category: {
            '1': "food",
            '2':'auto',
        },
    },
    reducers: {
        getCategoriesCosts(state, action) {
            console.log(state)
            console.log(action)
           state.month =action.payload
        }
    }
})

export const { getCategoriesCosts } = diagramSlice.actions;
export default diagramSlice.reducer;
