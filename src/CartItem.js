import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Mobile Phone",
      qty: 1,
      img: "",
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }
  increaseQuantity = () => {
    console.log("this", this.state);
  };
  render() {
    const { title, price, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>{price}</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn.iconscout.com/icon/free/png-256/free-plus-90-433856.png?f=webp&w=256"
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn.iconscout.com/icon/free/png-256/free-minus-1439740-1214312.png?f=webp&w=256"
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn.iconscout.com/icon/free/png-256/free-delete-2902143-2411575.png?f=webp&w=256"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },
};
export default CartItem;
