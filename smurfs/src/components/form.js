import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/action';

const Form = ( props ) => {
  const { smurfData, addSmurf } = props;
  const [ newSmurf, setNewSmurf ] = useState( {
    name: '',
    age: '',
    height: ''
  } );

  const handleSubmit = e => {
    // e.preventDefault();
    addSmurf( newSmurf );
    setNewSmurf( {
      name: '',
      age: '',
      height: ''
    } );
  };

  const handleChanges = e => {
    let name = e.target.name;

    setNewSmurf( { ...newSmurf, [ name ]: e.target.value } );
  };
  return (
    <div>
      <form>
        <input name="name" type="text" placeholder="Smurf's Name" value={ smurfData.name } onChange={ handleChanges } />
        <br /><br />
        <input name="age" type="text" placeholder="Smurf's Age" value={ smurfData.age } onChange={ handleChanges } />
        <br /><br />
        <input name="height" type="text" placeholder="Smurf's Height" value={ smurfData.height } onChange={ handleChanges } />
        <br /><br />

        <button type="submit" onClick={ handleSubmit }>Add New Smurf</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfData: state.smurfData,
    isFetching: state.isFetching,
    error: state.error
  };
};


export default connect( mapStateToProps, { addSmurf } )( Form );