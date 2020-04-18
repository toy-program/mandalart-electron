import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {TeamEntity} from "@toy-program/mandalart-model";
import Presenter from "./Presenter";
import {getTeams} from "@/redux/modules/team";

const HomeScreen: React.FC = () => {
  const {accessToken, user} = useSelector<Mandalart.State, Mandalart.AuthState>(
    store => store.auth
  );
  const {teamList, error} = useSelector<Mandalart.State, Mandalart.TeamState>(
    store => store.team
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert(error);
    } else {
      dispatch(getTeams(user?.id as number, accessToken as string));
    }
  }, [teamList, error]);

  return <Presenter teamList={teamList as Array<TeamEntity>} />;
};

export default HomeScreen;
