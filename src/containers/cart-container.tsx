import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { CartItem } from "../components";
import { FlyoutHeader } from "../components/flyout-header";
import {
  cartItemUpdated,
  itemRemovedFromCart,
} from "../redux/features/customer";
import {
  productStockRestored,
  productStockUpdated,
} from "../redux/features/product";
import { customUseSelector, StoreDispatch } from "../redux/store";

export const Cart = () => {
  const dispatch = useDispatch<StoreDispatch>();

  const {
    customer: { cart },
    product: { productList },
  } = customUseSelector((state) => state);

  const incrementQuantity = useCallback(
    (id: number, event: boolean) => {
      const productInStock = productList.some(
        (product) => product.id === id && product.stockLeft
      );
      productInStock &&
        dispatch(cartItemUpdated({ id, event })) &&
        dispatch(productStockUpdated({ id, event: false }));
    },
    [dispatch, productList]
  );

  const quantityCheck = useCallback(
    (id: number) => {
      return cart.some((item) => item.id === id && item.quantity === 1);
    },
    [cart]
  );

  const decrementQuantity = useCallback(
    (id: number, event: boolean) => {
      dispatch(cartItemUpdated({ id, event }));
      dispatch(productStockUpdated({ id, event: true }));
      quantityCheck(id) &&
        dispatch(itemRemovedFromCart(id)) &&
        dispatch(productStockRestored(id));
    },
    [dispatch, quantityCheck]
  );

  const deleteItem = useCallback(
    (id: number) => {
      dispatch(itemRemovedFromCart(id));
      dispatch(productStockRestored(id));
    },
    [dispatch]
  );

  const totalPrice = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  }, [cart]);

  return (
    <CartWrapper>
      <FlyoutHeader flyoutName={"Cart"} />
      <CartItemsWrapper>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            deleteItem={deleteItem}
          />
        ))}
      </CartItemsWrapper>
      <h2>Total Price: Rs.{totalPrice}</h2>
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  position: fixed;
  right: 0px;
  padding: 20px;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 0.2fr 0.8fr 1fr;
  border: 1px solid rgba(0, 0, 0, 0.2);
  z-index: 2;
  background-color: #fff;
  width: 500px;
  height: 100%;
  overflow-y: scroll;
  animation: flyout 1s;

  @keyframes flyout {
    0% {
      opacity: 0%;
      transform: translateX(400px);
    }

    100% {
      opacity: 100%;
      transform: translate(0);
    }
  }
`;

const CartItemsWrapper = styled.div`
  height: fit-content;
  display: grid;
  grid-gap: 20px;
`;
