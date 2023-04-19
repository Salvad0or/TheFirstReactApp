import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css'

let users = [
    {id : 1, name : 'Alex'},
    {id : 2, name : 'Bolduin'},
    {id : 3, name : 'Gorbuin'},
]

let msg = [
    {id : 1, message : 'Hi'},
    {id : 2, message : 'Hi2'},
    {id : 3, message : 'Hi3'},
]

let dilogsElements = users.map( u => <GetName name={u.name} id={u.id}/>);
let messagesData = msg.map(m => <Message message = {m.message}/>);


const Dialog = (props) => {
    return (
        <div className={s.container}>
            <div className={s.leftSide}>
                {dilogsElements}
            </div>

            <div className={s.rightSide}>
               {messagesData}
            </div>
        </div>
    )
}

const GetName = (props) => {

    const path = "/messages/" + props.id;

    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {

    return (
        <div>
            {props.message}
        </div>
    )
}

export default Dialog;