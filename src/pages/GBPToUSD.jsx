import { useState } from 'react'


export function GBPToUSD() {

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')


    const onChangeStartDate = ({ target }) => {
        setStartDate(target.value);
    };

    const onChangeEndDate = ({ target }) => {
        setEndDate(target.value);
    };

    return (
        <section className='gbp container'>
            <div>
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
                </div>
            </div>
        </section>
    )
}