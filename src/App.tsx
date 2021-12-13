import React, { useEffect, useState } from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import { getParameterByName, handleSearch } from './components/utils/utils';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const onChange = () => {
      setSearchQuery(getParameterByName('q') || '');
    }
    onChange();
    window.addEventListener('hashchange', onChange);
    return () => {
      window.removeEventListener('hashchange', onChange);
    }
  }, []);

  useEffect(()=>{
    handleSearch(searchQuery);
  }, [searchQuery]);

  return (
    <MainPage/>
  );
}

export default App;
