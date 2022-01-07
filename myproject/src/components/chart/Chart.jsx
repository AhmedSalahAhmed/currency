import React from "react"
import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';

function Chart() {
    const data = [
        {
            name: 'Jan',
            الإجمالي: 4020,
            
          },
          {
            name: 'Feb',
            الإجمالي: 4430,
            
          },
          {
            name: 'Mar',
            الإجمالي: 4210,
            
          },
          {
            name: 'Apr',
            الإجمالي: 3002,
            
          },
          {
            name: 'May',
            الإجمالي: 4340,
            
          },
          {
            name: 'Jun',
            الإجمالي: 3000,
            
          },
          {
            name: 'Jul',
            الإجمالي: 1000,
            
          },
          {
            name: 'Aug',
            الإجمالي: 2000,
            
          },
          {
            name: 'Sep',
            الإجمالي: 4000,
            
          },
          {
            name: 'Oct',
            الإجمالي: 4230,
            
          },
          {
            name: 'Nov',
            الإجمالي: 3600,
            
          },
          {
            name: 'Dec',
            الإجمالي: 4220,
            
          },
                          
      ];
    return (
        <div className="chart">
            <h3 className="chartTitle">احصائيات بيع العملات</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <Line type="monotone" dataKey="الإجمالي" stroke="#5550bd"/>
                    <Tooltip/>
                   <CartesianGrid  strokeDasharray="5 5"/>
                </LineChart>
            </ResponsiveContainer>
        </div>

    )
}

export default Chart
