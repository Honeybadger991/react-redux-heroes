import {useHttp} from '../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { heroesFetching, heroesFetched, heroesFetchingError, filtersFetched, heroDeleted } from '../../actions';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {
    const {heroes, heroesLoadingStatus, activeFilter} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(heroesFetching());
        request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))
        request("http://localhost:3001/filters")
            .then(data => dispatch(filtersFetched(data)))
        // eslint-disable-next-line
    }, []);

    if (heroesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }
        if (activeFilter === 'all'){
            return arr.map(({id, ...props}) => {
                return <HeroesListItem key={id} {...props} id={id} deleteHero={onHeroDelete}/>
            })
        }
        const activeArr = arr.filter(item =>  activeFilter === item.element )
        return activeArr.map(({id, ...props}) => {
            return <HeroesListItem key={id} {...props} id={id} deleteHero={onHeroDelete}/>
        })

    }

    const onHeroDelete = (id) => {
        const x = heroes.filter(item => item.id !== id)
        dispatch(heroDeleted(x));
        request(`http://localhost:3001/heroes/${id}`, 'DELETE')
    }

    const elements = renderHeroesList(heroes);
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;