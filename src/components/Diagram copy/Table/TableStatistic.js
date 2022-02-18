 import PropTypes from 'prop-types';
import s from './Table.module.css'

export default function TableStatistic({ categoriesTable, costsSumStatistic, income }) {
     
    return (
        <>
        <div
            className={s.tableTitle}
        >
            <p>Категория</p><p>Сумма</p>
            </div>
            <ul>
                {
                    categoriesTable.map(item => (
                        <li key={item.name + Math.random()}>
                            <div
            className={s.marker}
                                
                                style={{ backgroundColor: `${item.color}` }}>5</div>
                            <span>{item.name}</span>
                            <span>{ item.cost}</span>
                        </li>
                    ))
                }
            </ul>           
                         

            <div
            className={s.tableTitle}
        >
            <p>Расходы</p><p>{costsSumStatistic}</p>
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
    costs:PropTypes.array,
    costsSumStatistic:PropTypes.string,
    income:PropTypes.string,  
};