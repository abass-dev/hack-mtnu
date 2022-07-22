import Axios from 'axios'
import { useEffect } from 'react'


const Hacked = () => {
    useEffect(() => {
        Axios.get('http://localhost:3001/hacked').then((response) => {
            console.log(response.data)
        })
    })
    return <h1>Hacked</h1>
}

export default Hacked