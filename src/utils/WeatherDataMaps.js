import { ClearImg, CloudImg, DrizzleImg, HumidityImg, RainImg, SearchImg, SnowImg, WindImg } from '../assets/images';


export const WeatherIconMap = {
    "01d": ClearImg,
    "02d": CloudImg,
    "03d": DrizzleImg,
    "04d": HumidityImg,
    "05d" : RainImg,
    "06d": SearchImg,
    "07d" : SnowImg,
    "08d": WindImg
}

export const unitsMap = {
  "imperial": "F",
  "metric" : "C"
}