import React from "react"
import "./Legend.scss"
import { CATEGORY_CHART_OBJECT } from "../Utils"


export default function Legend(){

  const legendArray = Object.entries(CATEGORY_CHART_OBJECT).map((entry, index)=>{
    const [category , value] = entry
    const {color} = value
    return (
      <div className="legend__value" key={index}>
        <span className="dot" style={{background : `${color}`}}></span>
        {category}
      </div>
    )
  })

  return(
    <div className = "legend__container">
      {legendArray}
    </div>
  )
}