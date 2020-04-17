import React from "react";
import styled from "styled-components";
import {GridList, GridListTile} from "@material-ui/core";
import {ChartEntity, BlockEntity} from "@toy-program/mandalart-model";
import BlockComponent from "@/components/Block";

interface Props {
  elementList: Array<BlockEntity | ChartEntity>;
  chart?: ChartEntity;
}

export default function Presenter(props: Props) {
  return (
    <Container>
      <GridList cols={3} cellHeight="auto">
        <GridListTile />
      </GridList>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  height: 80%;
`;
