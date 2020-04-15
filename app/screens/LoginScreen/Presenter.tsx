import React, {FormEvent} from "react";
import styled from "styled-components";
import {TextField, Button, Link, Breadcrumbs} from "@material-ui/core";

interface Props {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  register: any;
  handleGithubLogin: () => void;
}

export default function Presenter(props: Props) {
  const {onSubmit, register, handleGithubLogin} = props;
  return (
    <Container onSubmit={onSubmit}>
      <TextField
        id="standard-basic"
        required
        margin="normal"
        label="email"
        name="email"
        ref={register}
      />

      <TextField
        id="standard-basic"
        required
        margin="normal"
        label="password"
        name="password"
        type="password"
        ref={register}
      />

      <ButtonContainer>
        <Button type="submit">Login</Button>
        <Button onClick={handleGithubLogin}>Github Login</Button>
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
