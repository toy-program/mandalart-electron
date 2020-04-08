import React from "react";
import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  src?: string;
}

const LogoComponent: React.FC<Props> = props => {
  const {
    width = "1.5rem",
    height = "1.5rem",
    src = require("@/assets/profile.jpg")
  } = props;
  return <Logo height={height} width={width} src={src} />;
};

export default LogoComponent;

const Logo = styled.img<{width: string; height: string}>`
  width: ${({width}) => width};
  height: ${({height}) => height};
`;
