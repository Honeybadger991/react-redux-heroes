export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

export const heroDeleted = (heroes) => {
    return {
        type: 'heroDeleted',
        payload: heroes
    }
}

export const heroAdded = (hero) => {
    return {
        type: 'heroAdded',
        payload: hero
    }
}

export const fichange = (value) => {
    return {
        type: 'fichange',
        payload: value
    }
}

export const sichange = (value) => {
    return {
        type: 'sichange',
        payload: value
    }
}

export const tichange = (value) => {
    return {
        type: 'tichange',
        payload: value
    }
}

export const setActiveFilter = (filter) => {
    return {
        type: 'activeFilter',
        payload: filter
    }
}