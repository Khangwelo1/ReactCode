import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    Members: [
        { "id": 1, "name": "Khangwelo Mamatho", "Job_Description": "Software Developer" }
    ]
}
// const fetchTasks = async () => {
//     const res = await fetch('http://localhost:5000/Members')
//     const data = await res.json()
//   // console.log(data)
//   return data
//   }
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    function removeMember(id) {
        dispatch({
            type: 'REMOVE_Member',
            payload: id
        });
    };

    function addMember(Members) {
        dispatch({
            type: 'ADD_Members',
            payload: Members,
        });
    };

    function editMember(Members) {
        dispatch({
            type: 'EDIT_Member',
            payload: Members
        });
    };

    return (<GlobalContext.Provider value={{
        Members: state.Members,
        removeMember,
        addMember,
        editMember
    }}>
        {children}
    </GlobalContext.Provider>);
}