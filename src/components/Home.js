import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { cardData } from "./cardData";

function Home() {
  return (
    <Container>
      {cardData.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
