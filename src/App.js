import React from 'react';
import './App.css';
import MaterialListContainer from './containers/materials/materiallistcontainer'

function App() {
  return (
    <div className='app'>
      <MaterialListContainer materialUuids={['18952eae-2b35-11eb-adc1-0242ac120002', '3999fec2-30bc-11eb-adc1-0242ac120002']} />
    </div>
  );
}

export default App;
