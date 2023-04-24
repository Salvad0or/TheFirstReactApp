let rerenderEntireTree = () =>{
    
}

let state = {
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
        
        {id: 1, name : 'Alex',  url : 'https://i.ya-wd.com/images/male-avatar-icon-png.png'},
        {id: 2, name : 'Boild', url : 'https://i.ya-wd.com/images/male-avatar-icon-png.png'},
        {id: 3, name : 'Indio', url : 'https://i.ya-wd.com/images/male-avatar-icon-png.png'},
        
    ]
}

export const addMessage = (newMessage) => {
    let Message = {
        id: state.msg.length, message: newMessage
    }

    state.msg.push(Message);

    rerenderEntireTree(state );
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;
