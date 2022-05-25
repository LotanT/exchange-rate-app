import axios from 'axios';

export const rateService = {
    getRate
}

async function getRate(currency = 'EUR', startDate = '2022-05-01', endDate = '2022-05-07'){
    try{
        let res = await axios.get(`https://free.currconv.com/api/v7/convert?q=USD_${currency}&compact=ultra&date=${startDate}&endDate=${endDate}&apiKey=91dc4f4f8ba062d9f51b`)
        console.log(res); 
        return res.data
    } catch(err){
        console.log(err);
    }
}
