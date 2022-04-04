import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryform from './Components/AddEntry/AddEntryform';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';
import './App.css';

function App() {
  
  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}])  
  
  function addNewEntry(entry){
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }
  
  
  
  return (
    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Weight Tracker</h3>
        <div className='col-md-6'>
          <div className='border-box'>
            <DisplayEntries parentEntries={entries} />
            
          </div>
          <div className='border-box'></div>
            <AddEntryform addNewEntryProperty={addNewEntry} />
        </div>
        <div className='col-md-6'>
          <div className='border-box'>
            <EntriesChartTracker parentEntries={entries} />
          </div>
        </div>
      </div>
    
    
     
    </div>
  );
}

export default App;
