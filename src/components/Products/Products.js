import React, { Component } from 'react';
import { Card, Row, Col, Icon } from 'antd';
import './Products.scss';

const { Meta } = Card;

export const Products = (props) => {
  const { products } = props;
    return (
      <div className="products-list">
      <Row gutter={32}>
        {products.map(product =>
          <Col className="product" md={6}>
            <Card
              key={product.id}
              hoverable
              cover={<img alt={product.name} src={product.imageUrl} />}
              actions={['Add to cart']}
            >
              <Meta
                title={`${product.name} <span>€${product.price}</span>`}
              />
            </Card> 
          </Col>
        )}
      </Row>
    </div>
    );
};
