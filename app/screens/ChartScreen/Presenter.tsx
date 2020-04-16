import React from "react";
import styled from "styled-components";
import ChartContainer from "@/containers/Chart";

export default function Presenter() {
  return (
    <Container>
      <ChartContainer chartId={1} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
