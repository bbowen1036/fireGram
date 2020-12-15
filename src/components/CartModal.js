import React from 'react';

const CartModal = ({ toggle, setToggle }) => {


  return (
    <section className='cart-container'>
      <h2 onClick={() => setToggle(!toggle)}>
        {toggle ? "OPEN CART" : "Closed Cart"}
      </h2>

    </section>
  )
}

export default CartModal;