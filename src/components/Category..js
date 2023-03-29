import React from 'react'
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap'

function Category({handleCat, options}) {
  return (
    <>
    <Col className='cate-container'>
        <h1>Categories</h1>
        <ListGroup>
        {options.map((item, index) => (
            <ListGroupItem key={index} onClick={() => handleCat(item)} className="cate-list">
                {item}
            </ListGroupItem>
            
        ))}
        </ListGroup>

    </Col>

    </>
  )
}

export default Category