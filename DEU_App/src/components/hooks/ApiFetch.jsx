import {useEffect, useState} from 'react'
import {Text} from 'react-native'
import { onChange } from 'react-native-reanimated'

const Precipitacion = (props) => {
    const [precipitacion, setPrecipitacion] = useState(0.0)
    const key = "4eca0073128e406ba75160847222905"
    const place = "La Plata"
    const fetchPrecipitation = async () => {
        const response = await globalThis.fetch('https://api.weatherapi.com/v1/current.json?key='+key+"&q="+place+"&aqi=no")
        const json = await response.json()
        setPrecipitacion(json.current.precip_mm)
    }
    
    /*useEffect(() => {
        fetchPrecipitation()
        const interval = setInterval(() => fetchPrecipitation(), 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])*/

    useEffect(() => {
        const interval = setInterval(() => setPrecipitacion(precipitacion+1),1000 )
        return () => {
            clearInterval(interval)
        }
    })


    return (
        <Text style={props.style} onChange={props.onChange}>{precipitacion}</Text>
    )
}

export default Precipitacion
