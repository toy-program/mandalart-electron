import styled from "styled-components";
import {COLORS} from "@/constants";

const LineDiv = styled.div<{width?: string; height?: string}>`
  ${({width}) => (width ? `width: ${width};` : null)}
  ${({height}) => (height ? `height: ${height};` : null)}
  background-color: ${COLORS.BACKGROUND_BLACK};
  border: 1px solid ${COLORS.LINE_GRAY};
`;

export default LineDiv;
