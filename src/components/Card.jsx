import React from 'react'

const Card = (props) => {
    return (
      <>
      <div class="card" style={{width: "18rem"}}>
              <img src={props.image} class="card-img-top" alt="..."/>
              <div class="card-body">
                  <h5 class="card-title">{props.name}</h5>
                  <p class="card-text">{props.description} white sneakers</p>
                  <p className="card-text">${props.price}</p>
                  <div className='mb-3 d-flex justify-content-evenly'>
                  {/* <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar /> */}
                  </div>
                  <a href="#" class="btn btn-danger w-100"> Add to Cart</a>
              </div>
              </div>
      </>
    )
  }

export default Card