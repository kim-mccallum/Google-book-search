import React from 'react';
import RESPONSE from './mockData'
import SearchScreen from './SearchScreen/SearchScreen';


function App() {
  return (
    <main className='App'>
      <SearchScreen responseItems={RESPONSE.items} />
    </main>
  );
}

export default App;

