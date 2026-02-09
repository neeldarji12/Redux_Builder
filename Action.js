export const myAction = (payload) => ({
    type: "ADD",
    payload
})

export const delAction = (payload) => ({
    type: "DEL",
    payload
})

export const setEditAction = (index, data) => ({
    type: "SET_EDIT",
    payload: { index, data }
})

export const editAction = (payload) => ({
    type: "EDIT",
    payload
})
