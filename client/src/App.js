import React from 'react';
import logo from './logo.svg';
import './App.css';

import Jobs from './Jobs';

const mockJobs = [

{title: 'Software Engineer I', company: 'Google'},
{title: 'Software Engineer I', company: 'Facebook'},
{title: 'SW 1', company: 'Google'},
{title: 'Software Engineer II', company: 'Palantir'},



]

function App() {
  return (
    <div className="App">

      <Jobs jobs={mockJobs} />
      
    </div>
  );
}

export default App;
