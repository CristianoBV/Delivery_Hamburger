import React from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import { Provider } from "react-redux";

import store from "../components/store";

const Home = () => {
  return (
    <Provider store={store}>
      <Header />
      <Products heading="Escolha o seu favorito" />
      {/* <BurgerList /> */}
    </Provider>
  );
};

export default Home;
