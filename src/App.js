import React from 'react';
import RESPONSE from './mockData'
import SearchScreen from './SearchScreen/SearchScreen';


function App() {
  console.log('here is response')
  console.log(RESPONSE);
  return (
    <main className='App'>
      <h1 className="Banner">Google Book Search</h1>
      <SearchScreen responseItems={RESPONSE.items} />
    </main>
  );
}

export default App;

