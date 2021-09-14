import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const OneBeer = styled.div`
  position: relative;
  height: 50vh;
  width: 75%;
  box-shadow: 0 0 2px #0e0e0e;
  margin: 2% auto;
  display: flex;
  flex-direction: rox;
  justify-content: space-around;
`;

const Container = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &.right-container {
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #f9c448;
  text-shadow: 0 0 2px #0e0e0e;
  margin: 25px 15px;
`;

const Text = styled.p`
  margin: 25px 15px;
`;

const Image = styled.img`
  max-height: 90%;
  max-width: 90%;
  height: auto;
  width: auto;
  margin: auto;
`;

const Button = styled.button`
  background-color: #f9c448;
  border: none;
  box-shadow: 0 0 2px #0e0e0e;
  position: absolute;
  top: 4%;
  right: 2%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #ffd063;
  }
`;

export default function Beer() {
  const [beer, setBeer] = useState({});
  let { id } = useParams();

  console.log(id);
  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBeer(data[0]);
        console.log(data[0]);
      })
      .catch((error) => console.log("error", error));
  }, [id]);

  return (
    <OneBeer>
      <Container>
        <Title>{beer.name}</Title>
        <Text>{beer.first_brewed}</Text>
        <Text>{beer.description}</Text>
      </Container>
      <Container className="right-container">
        <Image src={beer.image_url} />
      </Container>
      <NavLink to="/beers">
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
          </svg>
        </Button>
      </NavLink>
    </OneBeer>
  );
}
