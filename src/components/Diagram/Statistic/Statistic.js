import { useState, useEffect } from 'react';

import Container from '../Container/Container';
import ChartStatistic from '../Chart/ChartStatistic';
import TableStatistic from '../Table/TableStatistic';

import s from './Statistic.module.css'


// import PropTypes from 'prop-types';

export default function Statistic() {

    let today = new Date();
 
 const [month, setMonth] = useState(() => {
      const initialState =     
         today.toLocaleString('ru', { month: 'long' });   
  return initialState;
});
    const [year, setYear] = useState(() => {
        const initialState = String(today.getFullYear())        
  return initialState;
    });
    
const months = ['январь', 'февраль', 'март', 'апрель',
        'май', 'июнь', 'июль', 'август', 'сентябрь',
        'октябрь', 'ноябрь', 'декабрь'
    ]
 
    function chengeSelect(e) {
        const { name, value }= e.target;
 
            switch (name)  {
                case 'month':
                    setMonth(value);
                    // setMonth(months.indexOf(value)+1);
                    break;

                case 'year':
                    setYear(value);
                    break;

                default:
                    return;
        }        
    }



    console.log(months.indexOf(month) + 1);
    const monthStr= months.indexOf(month) + 1

    const newDate = {//send to back      
        
        month: String(monthStr),
      year: year,
    };
    console.log(newDate)

    const userDataInfo = {
        balance: 22000,
        isIncome:44000,//доходы
        costs: {//расходы
            kat1: '100',
            kat2: '200',
            kat3: '300',
            kat4: '400',
            kat5: '500',
            kat6: '600',
            kat7: '700',
            kat8: '800',
            kat9: '900',
            kat10: '1000',
            kat11: '1100',
                     
        }
    }

    const categories = {
  costs: {
    1: 'clothes',
    2: 'food',
    3: 'transport',
    4: 'sport',
    5: 'children',
    6: 'pets',
    7: 'house',
    8: 'education',
    9: 'entertainment',
    10: 'health',
    11: 'other',
  },
  income: { 1: 'regular', 2: 'irregular' },
};

const categoriesRU = {
  costs: {
    1: 'одежда',
    2: 'еда',
    3: 'транспорт',
    4: 'спорт',
    5: 'дети',
    6: 'домашние животные',
    7: 'дом',
    8: 'образование',
    9: 'развлечения',
    10: 'здоровье',
    11: 'другие',
  },
  income: {
    1: 'регулярные доходы',
    2: 'нерегулярные доходы',
  },
};

    // const expensesCategories = Object.keys(userDataInfo.expenses)
    // console.log('expensesCategories', expensesCategories)
   
    // const categories = expensesCategories
    //     .map.has('kat1')
       

    // console.log(categories)
    const colors = {

        // kat1: 100,
            kat2: '#fed057',
            kat3: '#ffd8d0',
            // kat4: 400,
            // kat5: 500,
            // kat6: 600,
            // kat7: 700,
            // kat8: 800,
            // kat9: 900
    }

    
      
   
    
 

    return (
        <Container                    
            styleContainer={s.statisticContainer}            
        >

            <ChartStatistic
             userDataInfo={userDataInfo}/>
            <div>
            <div>                    
                <select
                    className={s.select}
                    name='month'
                    value={month}
                    onChange={chengeSelect}
                >                        
                    {months.map((item,ind) => (                           
                        <option
                            key={ind}
                            className={s.itemSelect}
                        >{item} </option>                            
                    ))}                      
                </select>
                    
                        
                <select name='year' value={year} onChange={chengeSelect}>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>            
                </select>

            </div>
                
            <TableStatistic
                userDataInfo={userDataInfo}
            />
            </div>
           

        </Container>
    )
}
