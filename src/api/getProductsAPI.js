export const getProductsAPI = (quantity = 12) => {
  return fetch("https://6849567745f4c0f5ee70fe69.mockapi.io/products")
    .then((res) => res.json()).then(data => data.slice(0, quantity));
};
