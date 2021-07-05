export const  COLORS = [ "#55a84f" ,"#a3c853" ,"#fff833" ,"#f29c33" , "#e93f33" ,"#af2d24"]

export const CATEGORY_CHART_OBJECT = {
  "GOOD" : {
    "color" : "#55a84f",
    "range" : "0-50",
    "text" : "Air quality is good and poses no risk to health."
  },
  "SATISFACTORY" : {
    "color" : "#a3c853",
    "range" : "50-100",
    "text" : "Air quality is acceptable. However, minor breathing discomfort to sensitive people."
  },
    "MODERATE" : {
    "color" : "#fff833",
    "range" : "100-200",
    "text" : "Breathing discomfort to the people with lungs, asthma and heart diseases."
  },
  "POOR" : {
    "color" : "#f29c33",
    "range" : "200-300",
    "text" : "Breathing discomfort to most people on prolonged exposure."
  },
  "VERY POOR" : {
    "color" : "#e93f33",
    "range" : "300-400",
    "text" : "Alarming situation. Respiratory illness on prolonged exposure"
  },
  "SEVERE" : {
    "color" : "#af2d24",
    "range" : "400-500",
    "text" : "Health warning of emergency conditions: everyone is more likely to be affected."
  },
}


export function getColorCode(aqi)  {
if (aqi > 0 & aqi < 51){
    return COLORS[0]
  } else if (aqi > 50 & aqi < 101){
    return COLORS[1]
  } else if (aqi > 100 & aqi < 201){
    return COLORS[2]
  } else if (aqi > 200 & aqi < 301){
    return COLORS[3]
  } else if (aqi > 300 & aqi < 401){
    return COLORS[4]
  } else if (aqi > 400 & aqi < 501){
    return COLORS[5]
  } 
}