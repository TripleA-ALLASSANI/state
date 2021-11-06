import React from "react";
import PropTypes from "prop-types";
import { Container, Card } from "react-bootstrap";

function Person({ bio, fullName, imgSrc,profession }) {
    return (
    <Container>
        <Card className="mb-3 mt-3" style={{ color: "#000" }}>
        <Card.Img src={imgSrc}  alt="Card image" aria-label={fullName}/>
        <Card.Body>
            <Card.Title>
            {fullName}
            </Card.Title>
            <Card.Text>
            {profession}
            </Card.Text>
            <Card.Text>
            {bio}
            </Card.Text>
        </Card.Body>
        </Card>
    </Container>
    );
}

Person.propTypes = {
    bio: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
};

Person.defaultProps = {
    bio: "Hi humans! Abdoul Aziz here, I like development, new challenges, profitable business and sports. I like to have fun whenever I get the chance.",
    fullName: "ABDOUL AZIZ ALLASSANI",
    profession: "Developper",
};

export default Person;
