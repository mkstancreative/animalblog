import React from "react";
import { Col, Container } from "react-bootstrap";


function Search({ handleSumit, onSearchInputChange, searchValue }) {
 
  return (
    <>
      <Container fluid >
        <Col className="search-cont" data-aos="fade-right">
          <form onSubmit={handleSumit}>
            <input
              type="search"
              onChange={onSearchInputChange}
              value={searchValue}
              placeholder="Search"
            />
            <button>Search</button>
          </form>
        </Col>
      </Container>
    </>
  );
}

export default Search;
