import React from 'react'
import './NavImage.css'
import AI_Pic_Tranparent from "../../assets/AI_Pic_Tranparent.png"

const NavImage = () => {
  return (
    <div className='NavImage'>
        <img className= "Hero-AIPic" src={ AI_Pic_Tranparent } alt= "AI logo" />
    </div>
  )
}

export default NavImage