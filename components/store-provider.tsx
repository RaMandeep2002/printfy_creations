"use client";
import { createContext, useContext, useMemo, useState } from "react";
import { CustomModelOrder, Product } from "@/types/product";
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  customization?: CustomModelOrder;
}
interface Store {
  cart: CartItem[];
  addProduct: (product: Product) => void;
  addCustomModel: (order: CustomModelOrder) => void;
  removeItem: (id: string) => void;
  changeQuantity: (id: string, quantity: number) => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
}
const StoreContext = createContext<Store | null>(null);
export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const addProduct = (p: Product) => {
    setCart((items) => {
      const found = items.find((i) => i.id === p.id);
      return found
        ? items.map((i) =>
            i.id === p.id ? { ...i, quantity: i.quantity + 1 } : i,
          )
        : [
            ...items,
            {
              id: p.id,
              name: p.name,
              price: p.price,
              image: p.image,
              quantity: 1,
            },
          ];
    });
    setCartOpen(true);
  };
  const addCustomModel = (o: CustomModelOrder) => {
    setCart((items) => [
      ...items,
      {
        id: `custom-${Date.now()}`,
        name: "Custom 3D Model",
        price: o.calculatedPrice,
        image: o.image,
        quantity: 1,
        customization: o,
      },
    ]);
    setCartOpen(true);
  };
  const removeItem = (id: string) =>
    setCart((items) => items.filter((i) => i.id !== id));
  const changeQuantity = (id: string, quantity: number) =>
    setCart((items) =>
      items.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i,
      ),
    );
  const value = useMemo(
    () => ({
      cart,
      addProduct,
      addCustomModel,
      removeItem,
      changeQuantity,
      cartOpen,
      setCartOpen,
    }),
    [cart, cartOpen],
  );
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}
export function useStore() {
  const value = useContext(StoreContext);
  if (!value) throw new Error("useStore must be used inside StoreProvider");
  return value;
}
