const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    fI: '',
    sI: '',
    tI: '',
    activeFilter:'all'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload,
            }
        case 'heroDeleted':
            return {
                ...state,
                heroes: action.payload
            }
        case 'heroAdded':
            return {
                ...state,
                heroes: [...state.heroes, action.payload]
            }
        case 'fichange':
            return {
                ...state,
                fI: action.payload
            }
        case 'sichange':
            return {
                ...state,
                sI: action.payload
            }
        case 'tichange':
            return {
                ...state,
                tI: action.payload
            }
        case 'activeFilter':
            return {
                ...state,
                activeFilter: action.payload
            }
        default: return state
    }
}

export default reducer;