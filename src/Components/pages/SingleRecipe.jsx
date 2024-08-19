import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../header';
import "./singlerecipe.css"
import { useParams } from 'react-router-dom';
const SingleRecipe = () => {
  const { id } = useParams()

  const [rec, setRec] = useState();
  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((respon) => respon.json())
      .then((data) => {
        console.log("data single recipe", data)
        setRec(data)
      })
      .catch((error) => {
        console.log("error", error)
      })

  }, [id])

  if (!rec) {
    return (
      <>
        <div>Loading....</div>
      </>
    )
  }


  return (
    <div>
      <Header />
      <div className="container">
        <div className="info">



          <img src={rec?.image} alt={rec?.img} id='img' />
          <br />
          <h2 className='dishName'>{rec?.name}</h2>
          <br />
          <h3>Ingredient :</h3>
          <br />


          {rec?.ingredients.map((v, i) => {
            return (
              <>
                <ul className='ul'>
                  <li key={i}>{v}</li>
                </ul>
              </>
            )

          })}
          <br />
          <h3>Instructions : </h3>
          {rec?.instructions.map((v, i) => {
            return (
              <>
              <ul>
                <li key={i}>{v}</li></ul></>
            )

          })}
        </div>

      </div>
      <Link to={"/"} id='backbutton'><p>Want to go Back</p></Link>
    </div>
  )
}

export default SingleRecipe;
