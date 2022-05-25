import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function Chart({ exchangeRate }) {

    const data = Object.keys(exchangeRate).map(key => {
        return { date: key, Rate: exchangeRate[key] }
    })

    const avarageRate = Object.values(exchangeRate).reduce((acc, currRate) => {
        return acc + currRate
    }, 0) / Object.values(exchangeRate).length

    return (
        <section className="chart">
            <div className='average'>Avarage Rate: {avarageRate.toFixed(3)}</div>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart
                    width={300}
                    height={100}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis type="number" domain={['auto,auto']} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Rate" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </section>
    )
}