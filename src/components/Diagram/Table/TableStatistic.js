//  import PropTypes from 'prop-types';
import s from './Table.module.css'
// import { BsFillSquareFill } from 'react-icons/bs';

export default function TableStatistic( {userDataInfo} ) {
    
    const costs = Object.entries(userDataInfo.costs)   
    
    const costsValues= Object.values(userDataInfo.costs)
    
    const costsSum = costsValues
        .map(item =>(Number(item)))
        .reduce(function (sum, elem) {
            return sum + elem;            
        }, 0);
    
    const income = userDataInfo.isIncome

    return (
        <>
        <div
            className={s.tableTitle}
        >
            <p>Категории</p><p>Сумма</p>
            </div>
            
            <ul>{
                costs.map(item => (
                    
                    <li
                    key={item[0]}>
                        {/* <BsFillSquareFill /> */}
                        <div className={`s.marker${item[0]}`}></div>
                        <span>{item[0]}</span>
                        <span>{item[1]}</span>
                    </li>
                ))
                
            }
            </ul>

            <div
            className={s.tableTitle}
        >
            <p>Расходы</p><p>{costsSum}</p>
            </div>
            <div
            className={s.tableTitle}
        >
                <p>Доходы</p><p>{income}</p>
        </div>
         </>
    )
}

TableStatistic.propTypes = {
    // tag:PropTypes.string,
    // title: PropTypes.string,
    // styleContainer: PropTypes.string,
    // styleTitle: PropTypes.string,
    // children: PropTypes.node,
};
