import React from 'react'
import '../../components/categoriesAbout/categoriesAbout.css'
import spicePowder from '../../images/spicePowder.jpg'
import spices from '../../images/spices.jpg'
import pomegranate from '../../images/pomegranate.jpg'
import ginger from '../../images/ginger.jpg'

export const CategoriesAbout = () => {
  return (
    <div className='categoriesAbout'>
        <h4 className='categoriesAboutHead'>About Us</h4>
        <h3 className='categoriesAboutSubHead'>What We Offer You</h3>
        <div className='productCategoriesAbout'>
       <figure className='spicyFig'> <img src={spicePowder} className='spicy'/> <figcaption>Spicy</figcaption></figure>
       <figure className='nutsFig'> <img src={spices} className='nutsNFeesd'/><figcaption>Nuts & Feesd</figcaption></figure>
        <figure className='fruitsFig'><img src={pomegranate} className='fruits'/><figcaption>Fruits</figcaption></figure>
        <figure className='vegetablesFig'><img src={ginger} className='vegetables'/><figcaption>Vegetable</figcaption></figure>
        </div>

    </div>
  )
}
