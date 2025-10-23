import './ShoppingCart.css';

function ShoppingCart({ items, onRemove, onClear }) {
  return (
    <div className="cart">
      <h2 className="cart-title">Tu carrito</h2>

      {items.length === 0 ? (
        <p className="cart-empty">El carrito está vacío</p>
      ) : (
        <>
          <ul className="cart-list">
            {items.map(item => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <span className="cart-item-title">{item.title}</span>
                  <span className="cart-item-quantity">
                    x {item.quantity}
                  </span>
                  <span className="cart-item-price">
                    ${item.price * item.quantity}
                  </span>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="cart-item-remove"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          <button onClick={onClear} className="cart-clear">
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;
