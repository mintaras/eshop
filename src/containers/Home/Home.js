import React, { Component } from 'react';
import './Home.scss';
import { Products } from "../../components/Products/Products";

class Home extends Component {
  render() {
    const products = [
      {id: 1, name: 'T-Shirt', description: 'Used once or twice. 100% cotton.', imageUrl: 'https://www.citysoccerpro.com/wp-content/uploads/2017/11/shirt.jpg', price: 10},
      {id: 2, name: 'Sneakers', description: 'Used once or twice. Almost new.', imageUrl: 'https://simages.ericdress.com/Upload/Image/2017/22/watermark/74ea1cfb-056e-4dd7-8e19-e732dfba56eb.jpg', price: 36},
      {id: 3, name: 'Belt', description: 'Used once or twice. Handmade.', imageUrl: 'https://cdn.shopify.com/s/files/1/0928/3148/products/dartington-belt-cocoa.jpg?v=1447153500', price: 13},
      {id: 4, name: 'Shirt', description: 'Used once or twice. Casual.', imageUrl: 'https://riverisland.scene7.com/is/image/RiverIsland/305160_main?wid=1200', price: 12},
      {id: 5, name: 'Sweat pants', description: 'Used once or twice. Adidas original.', imageUrl: 'https://images.champssports.com/is/image/EBFL2/BS4541_fr_sc7?hei=1500&wid=1500', price: 32},
];
    return (
        <Products products={products}/>
    );
  }
}

export default Home;
