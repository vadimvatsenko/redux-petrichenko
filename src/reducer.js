const initialState = {value: 0};// началье значение

//reducer передаем (state = initialState, action = { type: 'INC' } )
// если action.type === INC, то наш state увеличиваем на 1)
//Reducer, только чистая функция
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        value: state.value + 1
      };
    case 'DEC':
      return {
        ...state,
        value: state.value - 1
      };
    case 'RND':
      return {
        ...state,
        value: state.value * action.payload
      };

    default: return state 
  }
  
  
}

export default reducer;