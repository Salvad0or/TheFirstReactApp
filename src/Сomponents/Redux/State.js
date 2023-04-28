const addMessageType = { type: 'ADD-MESSAGE' }
const UPDATE_NEW_MESSAGE_BODY = { type: 'NEW-MESSAGE' }
const SEND_MESSAGE_TYPE = { type: 'SEND-MESSAGE' }

let store = {
    _state: {
        users: [
            { id: 1, name: 'Alex' },
            { id: 2, name: 'Bolduin' },
            { id: 3, name: 'Gorbuin' },
        ],

        msg: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'Hi2' },
            { id: 3, message: 'Hi3' },
        ],

        friends: [

            { id: 1, name: 'Alex', url: 'https://i.ya-wd.com/images/male-avatar-icon-png.png' },
            { id: 2, name: 'Boild', url: 'https://i.ya-wd.com/images/male-avatar-icon-png.png' },
            { id: 3, name: 'Indio', url: 'https://i.ya-wd.com/images/male-avatar-icon-png.png' },

        ],

        newMessageBody: '',

    },

    getState() {
        return this._state;
    },

    _callSubscriber() {

    },

    dispatch(action) {
        switch (action.type) {
            case addMessageType:
                let Message = { id: this._state.msg.length, message: action.message }

                this._state.msg.push(Message)

                this._callSubscriber(this._state);
                break;

            case UPDATE_NEW_MESSAGE_BODY:
                this._state.newMessageBody = action.message;
                this._callSubscriber(this._state)
                break;

            case SEND_MESSAGE_TYPE:
               
                let body = this._state.newMessageBody;

                this._state.newMessageBody = 'I have changed';

                let id = this._state.msg.length;
               
                this._state.msg.push({ id: id, message: body });
                this._callSubscriber(this._state);
                
                break;
        }
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }

}

const ADD_MESSAGE = (message) => ({ type: addMessageType, message: message })
const sendMessageCreator = () => ({ type: SEND_MESSAGE_TYPE })
const updateNewMessageBodyCreator = (message) =>({ type: UPDATE_NEW_MESSAGE_BODY, message : message })

export { store, ADD_MESSAGE,sendMessageCreator, updateNewMessageBodyCreator};

