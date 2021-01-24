import React from "react";
import { Provider } from "react-redux";
import store from "../components/store";
import { productData } from "../services/data";

import Header from "../components/Header";
import Products from "../components/Products";
import ProductsDoces from "../components/ProductsDoces";
import Feature from "../components/Feature";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Provider store={store}>
      <Header />
      <Products heading="Escolha o seu favorito." />
      <Feature />
      <ProductsDoces heading="Linha de doces." data={productData} />
      <Footer />
    </Provider>
  );
};

export default Home;
