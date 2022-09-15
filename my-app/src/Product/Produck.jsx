import React from "react";
import './style.css';


export const Product = ({item}) => {

  return (
  <>
  {item.map((e) => ( <div>
  <img className="poduct_pic" src={e.image} alt="picture"></img>
  <h2 className="product_name">{e.name}</h2> </div>) )}
  </> )
}