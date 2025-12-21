import React, { createContext, useEffect, useReducer } from "react";
import {onAuthStateChanged} from 'firebase/auth'
import {auth } from '../../Utils/firebase'
import { Type } from "../../Utils/action.type";

export const DataContext = createContext();

function DataProvider({ children, reducer, initialState }) 
{
  return (
    <DataContext.Provider value={useReducer(reducer,initialState)}>{children}</DataContext.Provider>
  );
}

export default DataProvider;
