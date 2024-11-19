// import axios from "axios";
// import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function ProductsPage() {
  // const [recipes, setRecipes] = useState([]); // instead of: let recipes = [];

  // const handleIndex = () => {
  //   axios.get("http://localhost:3000/recipes.json").then((response) => {
  //     console.log(response);
  //     setRecipes(response.data); // instead of: recipes = response.data;
  //   });
  // };

  // useEffect(handleIndex, []); // instead of: handleIndex();
  let products = [
    {
      id: 1,
      title: "___",
      info: "___",
      image: "___",
    },
    {
      id: 2,
      title: "___",
      info: "___",
      image: "___",
    },
    {
      id: 3,
      title: "___",
      info: "___",
      image: "___",
    },
  ];

  return (
    <main>
      <ProductsNew />
      <ProductsIndex products={products} />
    </main>
  );
}
