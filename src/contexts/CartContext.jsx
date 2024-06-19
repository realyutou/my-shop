import { createContext, useContext, useState } from "react";

const defaultCartContext = {
  products: null,
  addToCart: null,
  removeFromCart: null,
  totalPrice: 0,
};

const CartContext = createContext(defaultCartContext);

const sum = (products) => {
  let total = 0;
  products.map((prod) => (total += prod.quantity * prod.price));

  return total;
};

export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  let totalPrice = 0;
  if (products?.length > 0) {
    totalPrice += sum(products);
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addToCart: (item) => {
          if (products?.length > 0) {
            const checker = products.find((prod) => item.id === prod.id);
            if (checker) {
              const newProducts = products.map((prod) => {
                if (item.id === prod.id) {
                  prod.quantity += item.quantity;
                }
                return prod;
              });
              setProducts(newProducts);
            } else {
              setProducts((prev) => {
                return [...prev, item];
              });
            }
          } else {
            setProducts([item]);
          }
        },
        removeFromCart: (prodId) => {
          const newProducts = products.filter((prod) => prodId !== prod.id);
          setProducts(newProducts);
        },
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
