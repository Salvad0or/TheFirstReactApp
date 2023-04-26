
const addMessageType = {type :'ADD-MESSAGE' }
const ADD_MESSAGE = (message) => ({type: addMessageType, message : message})


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

        ]
    },

    getState() {
        return this._state;
    },

    _callSubscriber () {

    },

    dispatch(action) {
        switch (action.type) {
            case addMessageType:
                let Message = { id: this._state.msg.length, message: action.message }

                this._state.msg.push(Message)

                this._callSubscriber(this._state);
                break;
            
        
            default:
                break;
        }
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }

}

export {store,ADD_MESSAGE};

