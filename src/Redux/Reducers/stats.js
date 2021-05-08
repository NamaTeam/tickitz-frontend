const initialState = {
  data: [],
  loading: false
}

const allStats = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ALL_STATS_REQ':
      return {
        ...state,
        loading: true
      }
    case 'ALL_STATS_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case 'ALL_STATS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: []
      }
    default:
      return state
  }
}

export { allStats }