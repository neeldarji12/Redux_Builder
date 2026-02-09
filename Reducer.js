
const initialState = {
    users: [],
    editIndex: null,
    editData: { name: "", email: "" }
}

export const myReducer = (state = initialState, action) => {
    if (action.type === "ADD") {
        return {
            ...state,
            users: [...state.users, action.payload]
        }
    }

    if (action.type === "DEL") {
        return {
            ...state,
            users: state.users.filter((_, i) => i !== action.payload)
        }
    }

    if (action.type === "SET_EDIT") {
        return {
            ...state,
            editIndex: action.payload.index,
            editData: action.payload.data
        }
    }

    if (action.type === "EDIT") {
        return {
            users: state.users.map((el, i) =>
                i === state.editIndex ? action.payload : el
            ),
            editIndex: null,
            editData: { name: "", email: "" }
        }
    }

    return state
}
