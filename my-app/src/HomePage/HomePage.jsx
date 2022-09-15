import React from 'react';
import { Bar } from '../Bar/Bar';
import './style.css';
import { Product } from '../Product/Product';

 export const HomePage = ({commodity}) => {
return (<>
<Bar/>
<h1 className='main-title'>Aktuální nabídka</h1>
<p className='text'>Nejnovější prémiové produkty od předních českých desingnerů. <br></br>Doprava zdarma až k vám domů.</p>
{<Product item={commodity} />}
</>)
}