import React, { useState } from 'react'
import './Paint.css'
import { RandomImages } from '../../RandomImages/RandomImages'
import { NavLink } from 'react-router-dom'
export const Paint = () => {

  const randomNumber = () => Math.round( Math.random() * (10 - 0) + 0)

  const [image, setImage] = useState('') 
  
  function handleImages() {
    // console.log(randomNumber())
    // console.log(RandomImages(randomNumber()))
    
    setImage(RandomImages(randomNumber()))
  }

  return (
    <div className='paint'>
      <img src={image} alt="" />
      <button className='btnPictures' onClick={handleImages}>Imagen aleatoria</button>
      <br />
      <br />
      <NavLink to='/' className='btnPictures'>Volver</NavLink>
    </div>
  )
}
