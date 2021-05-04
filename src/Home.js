import { useEffect, useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Home = () => {
    const [coronas, setCorona] = useState([])
    const [isPending, setIsPending] = useState(true)
    useEffect(() => {
        fetch('https://corona.askbhunte.com/api/v1/data/nepal').then(function (res) {
            return res.json()
        }).then(function (data) {
            setCorona(data)
            setIsPending(false)
            console.log(data)
        }).catch(function (err) {
            console.log(err)
        })
    }, [])
    return (
        <div className='name'>
            {isPending && <div>Loading...</div>}

            <div className='container'>
                <h1 className='title'>Latest COVID-19 Data</h1>
                <div className='row'>
                    <div className='col'>
                        <h2 className='recovered'>Total Recovered:{coronas['recovered']}</h2>
                    </div>
                    <div className='col'>
                        <h2 className='positive'>Positive Cases:{coronas['tested_positive']}</h2>
                    </div>

                </div>
                <div className='row'>
                    <div className='col'>
                        <h2 className='deaths'>Total Deaths:{coronas['deaths']}</h2>
                    </div>
                    <div className='col'>
                        <h2 className='quarantined'>Quarantined:{coronas['quarantined']}</h2>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Home;