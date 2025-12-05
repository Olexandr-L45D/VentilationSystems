// CartIconHeder
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../CartProvider";
import css from "./CartIconHeder.module.css";
import { BiSolidCartAlt } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";

const CartIconHeder = () => {
  const [open, setOpen] = useState(false);

  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // Рахуємо загальну суму
  const totalPrice = cart.reduce((sum, item) => {
    const price = Number(item.price) || 0; // захист від undefined
    return sum + price * item.qty;
  }, 0);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <section style={{ position: "relative", display: "inline-block" }}>
      {/* ГОЛОВНА КНОПКА */}
      <button
        onClick={toggleMenu}
        style={{
          padding: "0px 0px",
          background: "#2286f8ff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(107, 104, 104, 0.15)",
          // fontWeight: "800",
        }}
      >
        <div className={css.activeButton}>
          {/* <div className={css.icon}> 🛒</div>
           */}
          <div className={css.iconBlok}>
            <BiSolidCartAlt className={css.iconReact} />
          </div>

          <span className={css.iconCount}>{totalCount}</span>
          {/* <span className={css.iconCount}> € {totaPrice}</span> */}
        </div>
      </button>

      {/* ВИПАДАЮЧЕ МЕНЮ */}
      {open && (
        <div
          style={{
            marginTop: "60px",
            marginRight: "50px",
            position: "absolute",
            left: -300,
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "6px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            padding: "10px",
            minWidth: "400px",
            zIndex: 100,
          }}
        >
          {/* Вміст корзини */}
          <section className={css.hedBlock}>
            <h2 className={css.titleIcon}>
              КОРЗИНА <div className={css.icon}> 🛒</div>
            </h2>
            {/* Кнопка Очистити корзину як передети метод видалити з корзини? */}
            <a style={{ textDecoration: "none" }}>
              <button
                onClick={clearCart} // <<< Головне — викликати clearCart() для очистки корзини
                style={{
                  width: "120px",
                  padding: "5px",
                  margin: "5px",
                  border: "none",
                  borderRadius: "4px",
                  background: "rgba(249, 15, 210, 1)",
                  cursor: "pointer",
                }}
              >
                Очистити корзину
              </button>
            </a>
          </section>

          {/* Тут малюєш список товарів */}
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <div className={css.itemBlock}>
                  {item.name} — {item.qty} шт, &nbsp;
                  <p className={css.textPrice}>{item.price} €</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className={css.itemButton}
                  >
                    <BiTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h2 className={css.iconCount}> Total cost, € = {totalPrice}</h2>
        </div>
      )}
    </section>
  );
};

export default CartIconHeder;
