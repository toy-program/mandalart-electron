import React from "react";
import {List, Collapse, ListItemText, ListItem} from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import {TeamEntity, SiloEntity} from "@toy-program/mandalart-model";

interface Props {
  team: TeamEntity;
  isOpen: boolean;
  onClickFold: () => void;
  onClickSilo: (siloId: number) => () => void;
}

export default function Presenter(props: Props) {
  const {isOpen, team, onClickFold, onClickSilo} = props;
  const siloList = team.silos as Array<SiloEntity>;

  return (
    <List>
      <ListItem button onClick={onClickFold}>
        <ListItemText primary={team.name} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isOpen} timeout="auto">
        <List component="div" disablePadding>
          {siloList.map((silo, index) => {
            return (
              <ListItem key={index} button onClick={onClickSilo(silo.id)}>
                <ListItemText primary={silo.name} />
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </List>
  );
}
