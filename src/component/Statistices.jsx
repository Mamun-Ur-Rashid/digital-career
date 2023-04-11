import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

const Statistices = () => {
    const data = [
    {name : "assignment-1", value: 57},
    {name : "assignment-2", value: 57},
    {name : "assignment-3", value: 60},
    {name : "assignment-4", value: 60},
    {name : "assignment-5", value: 60},
    {name : "assignment-6", value: 60},
    {name : "assignment-7", value: 60},
    {name : "assignment-8", value: 58},
    ]
    return (
        <div className='container text-center mx-auto justify-start flex-col items-center w-3/4'>
            <h1 className='text-2xl text-blue-500 font-semibold underline'>Assignment Marks</h1>
            <PieChart width={800} height={800}>
                <Pie 
                datakey ="vale"
                isAnimationActive = {false}
                data = {data}
                cx={300}
                cy={300}
                outerRadius={200}
                fill = "#847FCC"
                label>
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default Statistices;