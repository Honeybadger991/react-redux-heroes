import { useDispatch, useSelector } from 'react-redux';
import { setActiveFilter } from '../../actions';

// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
    const {activeFilter, filters} = useSelector(state => state);
    const dispatch = useDispatch();

    const elems = filters.map(item => 
        {return <button key={item.id}
        className={activeFilter === item.name ? ('btn active ' + item.class) : ('btn ' + item.class)}
        onClick={() => dispatch(setActiveFilter(item.name))}
        >{item.name === 'all' ? 'Все' : item.text}</button>})

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {elems}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;