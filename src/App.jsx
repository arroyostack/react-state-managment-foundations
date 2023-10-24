import { useReducer, useState } from 'react';

// Continue in minute 29'44.
function App () {
  const [ state, dispatch ] = useReducer( ( state, action ) => {
    switch( action.type ) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "ADD_NAME":
        return { ...state, names: [ ...state.names, state.name ], name: "" };
    }
  }, {
    name: '',
    names: []
  } );

  return (
    <>
      <h1>Hello Mars</h1>
      <input
        type="text"
        value={ state.name }
        onChange={ event => dispatch( { type: "SET_NAME", payload: event.target.value } ) }
      />

      <div>
        Name: { state.name }
      </div>
      <div>
        List of Names: { state.names }
      </div>

      <button onClick={ () => dispatch( { type: "ADD_NAME" } ) }>Add Name</button>

    </>
  );
}

export default App; 
