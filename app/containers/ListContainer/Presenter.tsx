import React from "react";
import styled from "styled-components";
import Collapsible from "react-collapsible";
import ListElementContainer from "../ListElemenContainer";

interface Props {
  headerTitle: string;
  list: Array<{src?: string; name: string; onClick: () => void}>;
}

const ListContainer: React.FC<Props> = props => {
  const {list, headerTitle} = props;
  return (
    <Collapsible trigger={headerTitle}>
      <Container>
        {list.map((element, index) => (
          <ListElementContainer
            key={index}
            onClick={element.onClick}
            name={element.name}
          />
        ))}
      </Container>
    </Collapsible>
  );
};

export default ListContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
