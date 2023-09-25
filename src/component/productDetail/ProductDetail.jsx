import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import './Style.css';
import { addCart } from '../../store/CartSlice'
import Popup from '../popUp/Popup';

const ProductDetail = () => {
  const [data, setData] = useState([])
  const { id } = useParams()
  const dispatch = useDispatch()

  const [show, setShow] = useState(false)
  const handleClick = (el) => {
    setShow(true)
    dispatch(addCart(el))
    let clr = setInterval(() => {
      setShow(false)
      clearInterval(clr)
    }, 1000)
  }

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setData([...data, res.data])
      })
  }, [])

  return (
    <>
      {
        show ? <Popup /> : ""
      }
      <div className='container'>
        <div className="bigBox">

          {
            data.map((item) => {
              return (

                <div key={item.id} className="row">
                  <div className="col col-6 col-m-12">
                    <div className="bigImg">
                      <img src={item.image} alt={item.title} />
                    </div>
                  </div>

                  <div className="col col-6 col-m-12">
                    <div className="text-content">
                      <h1 className="title"> {item.title}</h1>
                      <h2 className='category'>Category : {item.category}</h2>
                      <p className='desc'>{item.description}</p>
                      <div className="pR">
                        <p className="price"> {item.price} $ </p>
                        <p className='rating'> {item.rating.rate}  <span> ★★★★</span></p>
                      </div>
                      <div className="allCenter">
                        <button className='btnCart' onClick={()=>handleClick(item)}> Add to Cart </button>

                      </div>
                    </div>
                  </div>
                </div>

              )
            })
          }
        </div>

      </div>
    </>
  )
}

export default ProductDetail