import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../../store/ProductSlice';
import './Style.css';
import { addCart } from '../../store/CartSlice';
import { Link } from 'react-router-dom';
import Skeleton from '../skeleton/Skeleton';
import Popup from '../popUp/Popup';

const Products = () => {
  const prodducts = useSelector(state => state.allProducts.products)
  const status = useSelector(state => state.allProducts.status)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts('products'))
  }, [])

  // console.log(prodducts)

  const [show, setShow] = useState(false)
    const handleClick = (el) => {
        setShow(true)
        dispatch(addCart(el))
        let clr = setInterval(()=>{
            setShow(false)
            clearInterval(clr)
        },1000)        
    }

  return (
    <>
        {
            show  ? <Popup /> : ""
        }
    <div className='container'>
      <h2 className='heading'>All Products</h2>
      <div className="allProd">
        <div className='row'>
          {
            status === 'wait' ?
              (<>
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
              ) :
              prodducts?.map((el, i) => {
                return (
                  <div key={el.id} className="col col-3 col-m-12">
                    <div className="box">

                      <Link to={"/ProductDetail/" + el.id}>
                        <img src={el.image} alt={el.title} width={160} height={200} />
                      </Link>
                      <p className='title'> {el.title} </p>
                      <p className='price' >  $ {el.price}</p>

                      <div className="textCenter">
                        <button className='btnCart' onClick={() => handleClick(el)}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                          </svg>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default Products;