import { useState } from 'react'
import { Chart } from '../cmps/Chart';
import { rateService } from '../services/rate.service';


export function GBPToUSD() {

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [exchangeRate, setExchangeRate] = useState('')


    const onChangeStartDate = ({ target }) => {
        setStartDate(target.value);
    };

    const onChangeEndDate = ({ target }) => {
        setEndDate(target.value);
    };

    const getRate = async () => {
        const res = await rateService.getRate('GBP',startDate, endDate)
        console.log(res.USD_GBP);
        setExchangeRate(res.USD_GBP)
    }

    return (
        <section className='gbp container'>
            <div className='head'>
                <div className='title'>
                    USD to GBP
                </div>
                <div className='dates'>
                    <div className='start-date'>
                        <label htmlFor="startDate">Start Date: </label>
                        <input type="date" onChange={onChangeStartDate} value={startDate}/>
                    </div>
                    <div className='end-date'>
                        <label htmlFor="endDate">End Date: </label>
                        <input type="date" onChange={onChangeEndDate} value={endDate}/>
                    </div>
                    <div className='btn' onClick={getRate}>Get Rate</div>
                </div>
            </div>
            {exchangeRate && <Chart exchangeRate={exchangeRate}/>}
            {!exchangeRate && <div>Choose Dates!</div>}
        </section>
    )
}