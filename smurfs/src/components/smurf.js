import React, { useEffect } from 'react';
import SmurfCard from './SmurfCard';
import { fetchData } from '../actions/action';
import { connect } from 'react-redux';

const Smurf = ( props ) => {
  const { fetchData, smurfData, isFetching, error } = props;
  useEffect( () => {
    fetchData();
  }, [ fetchData ] );
  if ( isFetching ) {
    return (
      <div>
        <h2>Fetching your Smurf</h2>
      </div>
    );
  }
  return (
    <div>
      { error && <p>{ error }</p> }
      { smurfData.map( data => (
        <SmurfCard key={ data.id } data={ data } />
      ) ) }
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

export default connect(
  mapStateToProps,
  { fetchData }
)( Smurf );