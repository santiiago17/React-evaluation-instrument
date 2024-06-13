import React from 'react'
import './Paint.css'
import { RandomImages } from '../../RandomImages/RandomImages'
import { NavLink } from 'react-router-dom'

export const Paint = () => {

  const randomNumber = (min,max) => Math.random() * (max - min) + min

  const handleImages = () => {    
    console.log(RandomImages())
  }



  return (
    <div className='paint'>
      {/* <NavLink to={}></NavLink> */}
      <img src="https://res.cloudinary.com/erpersonalprojects/image/upload/v1718282311/01_lyqqvq.jpg" alt="" />
      <button className='btnPictures' onClick={handleImages}>Imagen aleatoria</button>
    </div>
  )
}
