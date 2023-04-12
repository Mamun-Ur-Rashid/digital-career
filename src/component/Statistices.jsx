import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

const Statistices = () => {
    const data = [
        { name: "assignment-1", value: 57 },
        { name: "assignment-2", value: 57 },
        { name: "assignment-3", value: 60 },
        { name: "assignment-4", value: 60 },
        { name: "assignment-5", value: 60 },
        { name: "assignment-6", value: 60 },
        { name: "assignment-7", value: 60 },
        { name: "assignment-8", value: 58 },
    ]
    return (
        <div>
            <div className='navbar'>
                <h1 className='text-center font-bold text-2xl'>Statistics</h1>
                <img className=' w h-28 top-0 right-0' src="https://i.ibb.co/4FkDTYT/Vector.png" alt="" />
            </div>
            <div className='container text-center mx-auto justify-start flex-col items-center w-3/4'>
                <h1 className='text-2xl text-blue-500 font-semibold underline'>Assignment Marks</h1>
                <PieChart className='sm:mr-6' width={600} height={600}>
                    <Pie
                        datakey="value"
                        isAnimationActive={false}
                        data={data}
                        cx={250}
                        cy={250}
                        outerRadius={200}
                        fill="#847FCC"
                        label>
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default Statistices;