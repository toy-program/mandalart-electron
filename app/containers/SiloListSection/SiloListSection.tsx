import React, {useState} from "react";
import {TeamEntity} from "@toy-program/mandalart-model";
import {useSelector, useDispatch} from "react-redux";
import Presenter from "./Presenter";
import {getSiloChartList} from "@/redux/modules/silo";

interface Props {
  team: TeamEntity;
}

export default function SiloListSection(props: Props) {
  const {accessToken} = useSelector<Mandalart.State, Mandalart.AuthState>(
    store => store.auth
  );
  const dispatch = useDispatch();

  const {team} = props;
  const [isOpen, setOpen] = useState<boolean>(false);

  const onClickFold = () => {
    setOpen(!isOpen);
  };

  const onClickSilo = (siloId: number) => async () => {
    dispatch(getSiloChartList(siloId, accessToken as string));
  };

  return (
    <Presenter
      team={team}
      isOpen={isOpen}
      onClickFold={onClickFold}
      onClickSilo={onClickSilo}
    />
  );
}
