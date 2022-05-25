import axios from 'axios';

export const rateService = {
    getRate
}

const BASE_URL = process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:3030/api/';

async function getRate(currency = 'EUR', startDate = '2022-05-01', endDate = '2022-05-07'){
    let res = await getRateFromDB(currency, endDate)
    if(res.data) return res.data;
    try{
        res = await axios.get(`https://free.currconv.com/api/v7/convert?q=USD_${currency}&compact=ultra&date=${startDate}&endDate=${endDate}&apiKey=91dc4f4f8ba062d9f51b`)
        res.data.date = endDate
        console.log('from api');
        await axios.post(`${BASE_URL}${currency}`,res.data)
        return res.data
    } catch(err){
        console.log(err);
    }
}

async function getRateFromDB(currency, endDate){
    try{
        let res = await axios.get(`${BASE_URL}${currency}/${endDate}`)
        return res;
    }catch(err){
        console.log(err);
    }
}
