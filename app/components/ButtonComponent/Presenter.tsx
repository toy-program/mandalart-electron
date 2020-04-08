import React from "react";
import {Button} from "@material-ui/core";

interface Props {
  title: string;
}

const ButtonComponent: React.FC<Props> = props => {
  const {title} = props;
  return <Button variant="outlined">{title}</Button>;
};

export default ButtonComponent;
