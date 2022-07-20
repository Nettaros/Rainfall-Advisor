import {useEffect, useState} from 'react'

const Precipitacion = () => {
    const [precipitacion, setPrecipitacion] = useState(0.0)
    const key = "4eca0073128e406ba75160847222905"
    const place = "La Plata"
    const fetchPrecipitacion = async () => {
        const response = await globalThis.fetch('https://api.weatherapi.com/v1/current.json?key='+key+"&q="+place+"&aqi=no")
        const json = await response.json()
        setPrecipitacion(json.current.precip_mm)
        return precipitacion
    }
    useEffect(() => {
        fetchPrecipitacion()
    },[precipitacion])
        
    return (
        precipitacion
    )
}

export default Precipitacion
