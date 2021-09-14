import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BeersContainer = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  margin: 50px auto 0 auto;
  justify-content: space-around;
`;

const OneBeer = styled.div`
  height: 500px;
  width: 400px;
  box-shadow: 0 0 2px #0e0e0e;
  margin: 2.5% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled(NavLink)`
  font-size: 1.5rem;
  color: #f9c448;
  text-shadow: 0 0 2px #0e0e0e;
  margin: 25px 15px;
`;

const Text = styled.p`
  margin: 25px 15px;
`;

const Button = styled.button`
  position: fixed;
  height: 150px;
  width: 75px;
  top: 45%;
  background-color: #f9c448;
  border: none;
  box-shadow: 0 0 2px #0e0e0e;
  &:hover {
    background-color: #ffd063;
  }
  &.next {
    right: 5%;
  }
  &.previous {
    left: 5%;
  }
`;

export default function BeerList() {
  const [beers, setBeers] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  console.log(pageIndex);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${pageIndex}&per_page=20
    `)
      .then((response) => response.json())
      .then((data) => {
        setBeers(data);
        console.log(data);
      })
      .catch((error) => console.log("error", error));
  }, [pageIndex]);

  function handleNext() {
    setPageIndex(pageIndex + 1);
  }

  function handlePrevious() {
    setPageIndex(pageIndex - 1);
  }

  return (
    <>
      <BeersContainer>
        {beers.map((beer, i) => (
          <OneBeer key={i}>
            <Title to={`/${beer.id}`}>{beer.name}</Title>
            <Text>{beer.first_brewed}</Text>
            <Text>{beer.description}</Text>
          </OneBeer>
        ))}
      </BeersContainer>

      <Button
        className="previous"
        type="button"
        onClick={handlePrevious}
        disabled={pageIndex <= 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-caret-left"
          viewBox="0 0 16 16"
        >
          <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
        </svg>
      </Button>

      <Button className="next" type="button" onClick={handleNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-caret-right"
          viewBox="0 0 16 16"
        >
          <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
        </svg>
      </Button>
    </>
  );
}
