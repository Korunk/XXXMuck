import React, { useEffect, useState } from 'react';
import { HomePage } from './HomePage/HomePage';
import { createRoot } from 'react-dom/client';
import './style.css';


const App = () => {
  const [commodity, setCommodity] = useState([]) 

  useEffect(() => {
fetch('https://apps.kodim.cz/react-2/xxxmuck/products')
.then((response) => response.json())
.then((data) => setCommodity(data)
)
  }, [])

  return (
    <>
    <HomePage commodity = {commodity} />
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
