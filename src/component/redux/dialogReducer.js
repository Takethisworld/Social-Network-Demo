const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const ADD_DIALOG ='ADD_DIALOG'

let initialState = {
    dialogs: [
        { id: 1, name: 'User1' },
        { id: 2, name: 'User2' },
        { id: 3, name: 'User3' },
        { id: 3.5, name: 'User3.5' }
    ], messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello MZFk' },
        { id: 3, message: 'Whatsup MZFK' },
        { id: 3.5, message: 'whatsup MZFK ' },
    ],
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {

            let newMessage = action.newMessageText
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: newMessage }]
            };

        }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };

        default:
            return state;
    }

}

export const addMessageActionCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText })

export const addDialog = (dialogId) => ({ type: ADD_DIALOG, dialogId })

export const updateNewMessageActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });


export default dialogReducer;