import React from "react";
import {useForm} from "react-hook-form";
import Presenter from "./Presenter";
import {api} from "@/utils/api";
import {ENDPOINTS} from "@/constants";

interface LoginForm {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const {handleSubmit, control} = useForm<LoginForm>();

  const onSubmit = handleSubmit(async ({email, password}) => {
    try {
      const {data} = await api.post(ENDPOINTS.LOCALLOGIN, {
        email,
        password,
        provider: "local"
      });

      // @TODO: 글로벌한 스테이트를 변경해주고, 알람창이 뜨도록 바꾸자
      alert(data);
    } catch (e) {
      // @TODO: 글로벌한 스테이트를 변경해주고, 알람창이 뜨도록 바꾸자
      alert(e?.response?.data?.message);
    }
  });

  const handleGoogleLogin = () => {};

  return (
    <Presenter
      onSubmit={onSubmit}
      control={control}
      handleGoogleLogin={handleGoogleLogin}
    />
  );
}
