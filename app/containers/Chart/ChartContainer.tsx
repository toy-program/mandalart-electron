import React from "react";
import Presenter from "./Presenter";

interface Props {
  chartId: number;
}

export default function ChartContainer(props: Props) {
  return <Presenter />;
}
