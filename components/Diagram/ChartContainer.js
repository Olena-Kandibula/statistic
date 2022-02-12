import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import s from './Diagram.module.css'

ChartJS.register(ArcElement, Tooltip, Legend);
const stat = [30, 60, 90, 40, 20, 60]


export const data = {   
    datasets: [{
      
        //   data: [12, 19, 3, 5, 2, 3],
        data: stat,
                
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
        ],
        borderWidth: 1,
        },
    ],
};

const options = {
     cutout: `70%`,//center

        hoverOffset: 5,//for hover

    plugins: {
        tooltip: {
            enabled: false
        },    
    }

}

export default function ChartContainer() {

    return (        
        <div className={s.chartContainer} >          
                    
            <Doughnut className={s.doughnut}               
                data={data}                      
                options={options}               
            />           

            <p className={s.chartText}>24000</p>            
        </div>              
               
    ) 
    
}