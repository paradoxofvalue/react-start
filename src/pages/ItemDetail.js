import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function ItemDetail({ match }) {

  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    images: {}
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`)
    const item = await fetchItem.json();
    setItem(item);
  }


  return (
    <div>
      <h1>Item Detail: {item.name}</h1>
      <img src={item.images.transparent} alt=""/>
    </div>
  );
}

export default ItemDetail;