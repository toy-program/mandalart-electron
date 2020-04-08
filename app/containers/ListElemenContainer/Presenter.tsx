import React from "react";
import styled from "styled-components";
import LogoComponent from "@/components/ChartLogoComponent";
import {COLORS} from "@/constants";

interface Props {
  src?: string;
  name: string;
  onClick: () => void;
}

const ListElementContainer: React.FC<Props> = props => {
  const {src, name, onClick} = props;
  return (
    <Container onClick={onClick}>
      <LogoComponent src={src} />
      <Title>{name}</Title>
    </Container>
  );
};

export default ListElementContainer;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  color: ${COLORS.UNSELECTED_TEXT};
`;
