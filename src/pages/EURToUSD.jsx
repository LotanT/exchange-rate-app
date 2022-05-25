import { useState } from 'react'
import { Chart } from '../cmps/Chart';
import { rateService } from '../services/rate.service';


export function EURToUSD(){

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [exchangeRate, setExchangeRate] = useState('')


    const onChangeStartDate = ({ target }) => {
        setEndDate(target.value);
        let startDate = new Date(new Date(target.value).getTime()- 6 * 24 * 60 * 60 * 1000)
        let dd = startDate.getDate()
        let mm = startDate.getMonth()+1
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        setStartDate(`${startDate.getFullYear()}-${mm}-${dd}`)
    };

    const getRate = async () => {
        const res = await rateService.getRate('EUR',startDate, endDate)
        setExchangeRate(res.USD_EUR)
    }

    return (
        <section className='gbp container'>
            <div className='head'>
                <div className='title'>
                    USD to EUR
                </div>
                <div className='dates'>
                    <div className='start-date'>
                        <label htmlFor="startDate">Date: </label>
                        <input type="date" onChange={onChangeStartDate} value={endDate}/>
                    </div>
                    <div className='btn' onClick={getRate}>Get Rate</div>
                </div>
            </div>
            {exchangeRate && <Chart exchangeRate={exchangeRate}/>}
            {!exchangeRate && <div>Choose Dates!</div>}
        </section>
    )
}