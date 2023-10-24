import React from 'react';

export const useNames = ( state, action ) => {
    switch( action.type ) {
        case "SET_NAME":
            return { ...state, name: action.payload };
        case "ADD_NAME":
            return { ...state, names: [ ...state.names, state.name ], name: "" };
    }
};
