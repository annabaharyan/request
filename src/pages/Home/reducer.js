export const reducer = (state = [], action) => {

    switch (action.type) {
        case 'showData':

            state = action.payload;
            return state
        case 'AddUser':
            console.log(state.data)

            state.data = [
                {
                    id: Math.round(Math.random() * 44444444),
                    ...action.payload,
                },
                ...state.data
            ]
            return state = {
                ...state
            }



        case 'deleteItem':
            const a = state.data.filter(res => res.id != action.payload)
            console.log(a)
            return state = {
                ...state,
                data: a
            }
        case 'updateCategory':
            state = action.payload;
            return state
        default: return state
    }

}
export const categoryReducer = (state, action) => {
    switch (action.type) {
        case 'CategoryAll':
            return state = action.payload;

        default: return state
    }
}
