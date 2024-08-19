import React from 'react'
import "./cards.css"
import "../index.css"
import Button from './Button'
import { Link } from 'react-router-dom'
import SingleRecipe from './pages/SingleRecipe'

const Cards = ({ data }) => {



  


  return (

    <div className='card-container' >
      <div className="wrapper">
        <div className="main-card">
          <img src={ data.image ? (data.image) : ("Loading ...")} alt="" className='card-img' />
          <div className="detail">
            <h2 className="dish-name">{data.name}</h2>


          </div>
          <div className='tag'>

            <p className='tags'>{data.cuisine}</p>
            <Link to={`/recipes/${data.id}`}>
            <Button text={"Recipe"} />
            </Link>
          </div>
        </div>

      </div>




    </div>
  )
}

export default Cards
