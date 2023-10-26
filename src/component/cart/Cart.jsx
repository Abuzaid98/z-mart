import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Style.css';
import { deacreaseItem, increaseItem, removeCartItem, totalPrice } from '../../store/CartSlice';
import { Link } from 'react-router-dom';
const Cart = () => {
    const cartp = useSelector(state => state.carts.cart)
    const subTotal = Number(useSelector(state => state.carts.subTotal))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(totalPrice())
        localStorage.setItem("z-cart", JSON.stringify(cartp))
    }, [cartp])

    return (
        <div className='container'>
            <div className="cart">
                <div className="cartHeader hidemobile">
                    <div className="row ">
                        <p className='col col-4' >ITEM</p>
                        <p className='col col-2'>PRICE</p>
                        <p className='col col-2'>QUANTITY</p>
                        <p className='col col-2'>SUBTOTAL</p>
                        <p className='col col-2'>REMOVE</p>
                    </div>
                </div>

                {
                    cartp?.map((el, i) => {
                        return (
                            <div key={i} className="cartItem">
                                <div className="row">
                                    <Link to={"/ProductDetail/" + el.id} className='flex col col-4 col-m-12'>
                                        <img className='cartImg p-10 ' src={el.image} alt={el.title} width={70} height={90} />
                                        <p className='cartTitle p-10 '>{el.title}</p>
                                    </Link>
                                    <div className="col col-2 col-m-3">
                                        <p className='p-10 p-0'>$ {el.price}</p>

                                    </div>

                                    <div className="col col-2 col-m-5">
                                        <div className="p-10 cartQnt">
                                            <button className='' onClick={() => dispatch(deacreaseItem(el))}>-</button>
                                            <span>{el.q}</span>
                                            <button className='' onClick={() => dispatch(increaseItem(el))}>+</button>

                                        </div>
                                    </div>
                                    <div className="col col-2 col-m-4">
                                        <p className='p-10'>     $ {(el.price * el.q).toFixed(2)}    </p>
                                    </div>
                                    <div className="col col-2 col-m-12">
                                        <div className="p-10">
                                            <button className='cartRemove' onClick={() => dispatch(removeCartItem(i))}>Remove</button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        )
                    })
                }

                {
                    cartp.length > 0 ?
                        <div className="subTotal">
                            <div className="checkout">
                                <div className="totalPrice">
                                    <span>Sub Total: </span>
                                    <strong>$ {subTotal.toFixed(2)} </strong>
                                </div>
                                <div className="DelCharge">
                                    <span>Delivery Charge: </span>
                                    <strong>$ 0.00 </strong>
                                </div>
                                <div className="btn">
                                    <button>CheckOut</button>
                                </div>
                            </div>
                        </div>
                        :
                        (
                            <div className='goShop'>
                                <Link to='/'>
                                    <button>Go To Shopping</button>
                                </Link>
                            </div>
                        )
                }

            </div>
        </div>
    )
}

export default Cart