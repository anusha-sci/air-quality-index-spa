import React from "react"
import "./CategoryCardDiv.scss"
import {CATEGORY_CHART_OBJECT} from "../Utils"
import CategoryCard from "./CategoryCard"


export default function CategoryCardDiv(){
  
  const cardsArray = Object.entries(CATEGORY_CHART_OBJECT).map((entry, index)=>{
      const [category, value] = entry
      const {color , range , text} = value
      return (
        <CategoryCard key={index} category = {category.toLowerCase()} range = {range} color ={color} text ={text}/>
      )
  })
  
  return (
    <div className = "category__division">
      {cardsArray}
    </div>
  )
}