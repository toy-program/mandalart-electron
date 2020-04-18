import React from "react";
import styled from "styled-components";
import {TeamEntity} from "@toy-program/mandalart-model";
import SlimLineDivComponent from "@/components/SlimLineDiv";
import LogoComponent from "@/components/LogoComponent";
import SiloListSection from "@/containers/SiloListSection";

interface Props {
  teamList: Array<TeamEntity>;
}

const Presenter = (props: Props) => {
  const {teamList} = props;
  return (
    <Container>
      <SlimLineDivComponent height="100%" width="17.0625rem">
        <LogoBox>
          <LogoComponent />
        </LogoBox>
        {teamList.map((team, index) => (
          <SiloListSection key={index} team={team} />
        ))}
      </SlimLineDivComponent>
      <HomeDashboard />
    </Container>
  );
};

export default Presenter;

const Container = styled.div`
  padding: 0.5rem;
  width: 100%;
  height: 100vh;
  display: flex;
`;

const LogoBox = styled.div`
  padding: 3.125rem 0;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const HomeDashboard = styled(SlimLineDivComponent)`
  flex-grow: 1;
  margin-left: 2rem;
`;
