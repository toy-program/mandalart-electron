import React, {Fragment} from "react";
import {render} from "react-dom";
import {AppContainer as ReactHotAppContainer} from "react-hot-loader";
import {Provider} from "react-redux";
import Root from "./App";
import store from "@/redux/configureStore";

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener("DOMContentLoaded", () =>
  render(
    <AppContainer>
      <Provider store={store}>
        <Root />
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  )
);
