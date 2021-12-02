import React from "react";
import {  Container } from "react-bootstrap";
import "../style/card.css";

const Card = (props) => {
  const { character } = props;
  return (
    <div>
      <Container className="cards my-2">
        {character.map((char, index) => (
          <div className="col-12 col-6 " key={char.index}>
            <div className="single_advisor_profile wow fadeInUp">
              <div className="advisor_thumb">
                <img src={char.image} alt={char.name} />
                <div className="info">
                  <h6>{char.name}</h6>
                  
                </div>
              </div>
              <div className="single_advisor_details_info">
                <p className="designation">{char.species}</p>
                <p className="card-text">{char.gender}</p>
                <p className="card-text">{char.origin}</p>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Card;
