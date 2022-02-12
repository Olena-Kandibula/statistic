
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

// export function App() {
//   return <Doughnut data={data} />;
// }
// import ChartContainer from '../../components/Diagram/ChartContainer'
// import s from './Diagram.module.css'

export default function DiagramView() {

    return (
        <div className={s.sectionContainer}>

            <h2 className={s.diagramTitle}>Статистика</h2>
            
            <div className={s.diagramContainer}>

                {/* <ChartContainer/> */}

                <div className={s.chartContainer} > 
                    
                    <Doughnut className={s.doughnut}                    
                        data={data}                    
                        options={options}                   
                    />

                    <p className={s.chartText}>24000</p>
                     </div>
                    
                    <div className={s.tableContainer}>
                        <h3>Table</h3>
                    </div>                   
                
               
            </div>
            
        </div>
    )
}

// =======================================
//  <form
//                  onSubmit={this.handleSubmit}
//             >
//         <label>
//           Выберите ваш любимый вкус:
//                     <select
//                      value={this.state.value} onChange={this.handleChange}
//                     >
//             <option value="grapefruit">Грейпфрут</option>
//             <option value="lime">Лайм</option>
//             <option value="coconut">Кокос</option>
//             <option value="mango">Манго</option>
//           </select>
//         </label>
//         <input type="submit" value="Отправить" />
//       </form> 

// =====================================
// import { Doughnut } from 'react-chartjs-2';
// import s from './Diagram.module.css'


// const DiagramView = () => {

//     const labels = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//   ];

    // const data =
        // {
    //   [20,60,90,200,90]
    // labels: labels,
    // datasets: [{
    // //   label: 'My First dataset',
    //   backgroundColor: 'rgb(255, 99, 132)',
    //   borderColor: 'rgb(255, 99, 132)',
    //   data: [0, 10, 5, 2, 20, 30, 45],
    // }]
//   };

//   const config = {
//     type: 'line',
//     data: data,
//     options: {}
//     };
    
//     const myChart = new Chart(
//     document.getElementById('myChart'),
//     config
//     );
    
    // return (
        
    //     <div>            
    //         <h1>Diagram</h1>

    //         <Doughnut
                // options={...}                
                // data={data}            
                // {...props}                
            // />
            


            // <div className={s.chartContainer} >
               
                // <canvas id="myChart"></canvas>
            // </div> 

        // </div>


//     )
// }

// export default DiagramView;