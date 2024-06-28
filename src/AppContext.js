// AppContext.js
import React, { createContext, useReducer, useContext } from 'react';

// Define el estado inicial
const initialState = {
  user: null,
  pacientes: [],
};

// Define las acciones del reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'ADD_PACIENTE':
      return {
        ...state,
        pacientes: [...state.pacientes, action.payload],
      };
    // Puedes agregar más acciones aquí
    default:
      return state;
  }
};

// Crea el contexto
const AppContext = createContext();

// Crea un proveedor de contexto
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useAppContext = () => {
  return useContext(AppContext);
};
