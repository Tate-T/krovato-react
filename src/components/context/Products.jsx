import { useContext, createContext, useState, useEffect } from "react";

const ProductContext = createContext(null);

export const useProducts = () => useContext(ProductContext);

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://6849567745f4c0f5ee70fe69.mockapi.io/products"
      )
        .then((res) => res.json())
        .then((data) => setProducts(data.slice(0, 12)));
    }

    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
