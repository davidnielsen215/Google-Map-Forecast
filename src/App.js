import React from 'react';
import MapContainer from './MapContainer'
import DisplayTable from './DisplayTable'
import Title from './Title'

function App() {
  return (
    <div className="App">
      <Title/>
      <MapContainer/>
      <DisplayTable/>
    </div>
  );
}

export default App;
