import React, {FormEvent} from "react";
import styled from "styled-components";
import {Controller} from "react-hook-form";
import {TextField, Button, Link, Breadcrumbs} from "@material-ui/core";

interface Props {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  control: any;
  handleGoogleLogin: () => void;
}

export default function Presenter(props: Props) {
  const {onSubmit, control, handleGoogleLogin} = props;
  return (
    <Container onSubmit={onSubmit}>
      <Controller
        name="email"
        as={
          <TextField
            id="standard-basic"
            required
            margin="normal"
            label="email"
          />
        }
        control={control}
      />
      <Controller
        name="password"
        control={control}
        as={
          <TextField
            id="standard-basic"
            required
            margin="normal"
            label="password"
            type="password"
          />
        }
      />

      <ButtonContainer>
        <Button type="submit">Login</Button>
        <Button onClick={handleGoogleLogin}>Google Login</Button>
      </ButtonContainer>
      <AddonContainer>
        <Breadcrumbs>
          <Link variant="body2" color="textPrimary" href="#">
            Sign up
          </Link>
          <Link variant="body2" color="textPrimary" href="#">
            Find email or password
          </Link>
        </Breadcrumbs>
      </AddonContainer>
    </Container>
  );
}

const ButtonContainer = styled.div``;

const Container = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
`;

const AddonContainer = styled.div`
  margin-top: 1rem;
`;
