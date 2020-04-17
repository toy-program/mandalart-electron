import React, {useState} from "react";
import {TeamEntity} from "@toy-program/mandalart-model";
import {useSelector} from "react-redux";
import Presenter from "./Presenter";
import {authApi} from "@/utils/api";
import {GET_SILO_CHART} from "@/constants/endpoints";

interface Props {
  team: TeamEntity;
}

export default function SiloListSection(props: Props) {
  const {accessToken} = useSelector<Mandalart.State, Mandalart.AuthState>(
    store => store.auth
  );
  const {team} = props;
  const [isOpen, setOpen] = useState<boolean>(false);

  const onClickFold = () => {
    setOpen(!isOpen);
  };

  const onClickSilo = (siloId: number) => async () => {
    const {data} = await authApi(accessToken as string).get(
      GET_SILO_CHART(siloId)
    );
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
