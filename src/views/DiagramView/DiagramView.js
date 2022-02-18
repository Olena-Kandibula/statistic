import Container from '../../components/Diagram/Container'
import Statistic from '../../components/Diagram/Statistic'

import s from './Diagram.module.css'

export default function DiagramView() {

    return (
        
        <Container
            tag={'h2'}
            title={'Статистика'}
            styleContainer={s.section}
            styleTitle={s.sectionTitle}
        >     
              
            <Statistic />                    
                
         </Container>       
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