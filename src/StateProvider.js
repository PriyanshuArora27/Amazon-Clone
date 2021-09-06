//setup data layer 
// we need this to track the basket

import React,{ createContext, useContext, useReducer} from 'react';


//this is data layer
export const StateContext=createContext();

//BUILD A PROVIDER
export const StateProvider =({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//This is how we use this inside of a component
export const useStateValue =()=> useContext(StateContext);