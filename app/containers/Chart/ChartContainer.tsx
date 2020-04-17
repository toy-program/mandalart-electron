import React, {useEffect, useState} from "react";
import {ChartEntity, BlockEntity} from "@toy-program/mandalart-model";
import Presenter from "./Presenter";
import {authApi} from "@/utils/api";
import {GET_CHART} from "@/constants/endpoints";

interface Props {
  chartId: number;
}

export default function ChartContainer(props: Props) {
  const [chart, setChart] = useState<ChartEntity>();
  const [elementList, setElementList] = useState<
    Array<ChartEntity | BlockEntity>
  >([]);
  const {chartId} = props;

  const getData = async (id: number) => {
    const {data} = await authApi("token").get(GET_CHART(id));
    const chartData = data.result as ChartEntity;

    const {subCharts, blocks} = chartData;

    const list = new Array<ChartEntity | BlockEntity>(8);
    const chartList = subCharts as Array<ChartEntity>;
    const blockList = blocks as Array<BlockEntity>;
    chartList.map(c => {
      list[c.seat as number] = c;
    });
    blockList.map(block => {
      list[block.seat as number] = block;
    });

    setChart(chartData);
    setElementList(list);
  };

  useEffect(() => {
    getData(chartId);
  });

  return <Presenter chart={chart} elementList={elementList} />;
}
