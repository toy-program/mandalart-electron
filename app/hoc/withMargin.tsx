import React from "react";
import styled from "styled-components";

function withMargin<T>(Component: React.FC<T>): React.FC<T> {
  const ReturnComponent: React.FC<T> = props => (
    <MarginContainer>
      <Component {...props} />
    </MarginContainer>
  );

  return ReturnComponent;
}

export default withMargin;

const MarginContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
`;
