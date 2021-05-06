const initialState = {
  data: [],
  loading: false,
  err: null
}

export const ScheduleById = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SCH_ID_REQ':
      return {
        ...state,
        loading: true,
        err: null
      }
    case 'SCH_ID_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        err: null
      }
    case 'SCH_ID_ERROR':
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