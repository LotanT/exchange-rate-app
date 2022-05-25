const express = require('express')
const dbService = require('./services/db.service')

const app = express();
app.use(express.json())

app.get('/api/:currency/:date', async (req,res)=>{
    try{
        const date = req.params.date;
        const currency = req.params.currency;
        const collection = await dbService.getCollection(currency)
        const ratesData = await collection.findOne({ date: date })
        res.send(ratesData)
    }catch(err){
        res.status(500).send({ err: 'Failed to get date sdf' });
    }
})

app.post('/api/:currency', async(req,res)=>{
    try{
        const currency = req.params.currency;
        let ratesData = req.body;
        const collection = await dbService.getCollection(currency)
        await collection.insertOne(ratesData)
        res.send(ratesData) 
    }catch(err){
        res.status(500).send({ err: 'Failed to add date' });
    }
    
})

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
  });