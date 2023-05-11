import { configureStore } from '@reduxjs/toolkit';
import heroes from '../components/heroesList/heroesSlice';//reducer from heroesSlice называем heroes
import filters from '../components/heroesFilters/filtersSlice';//reducer from filtersSlice называем filters



const stringMiddleware = () => (next) => (action) => {

    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}



const store = configureStore({
    reducer: {heroes, filters},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware), //набор дефолтных с тулкита + наш собственный
    devTools: process.env.NODE_ENV !== 'production', //что бы тулз был только в режиме разработки
    
})

    

export default store;