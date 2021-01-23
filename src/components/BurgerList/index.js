import React from "react";
import { useSelector, useDispatch } from "react-redux";

const BurgerList = () => {
  const burger = useSelector((state) => state.data);

  return (
    <>
      <ul>
        {burger.map((burger) => (
          <li key={burger}>{burger}</li>
        ))}
      </ul>
      <button type="button" onClick={addBurger}>
        add burger
      </button>
    </>
  );
};

export default BurgerList;
