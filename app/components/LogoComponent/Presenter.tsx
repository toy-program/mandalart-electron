import React from "react";
import styled from "styled-components";

function LogoComponent() {
  return <LogoCircle />;
}

export default LogoComponent;

const LogoCircle = styled.div`
  width: 4.9575rem;
  height: 4.9575rem;
  border-radius: 50%;
  background-color: #ee6232;
`;
