import s from './Dialog.module.css'
import GetName from './GetName'
import Message from './Message'


const Dialog = (props) => {
    
    let dilogsElements = props.users.map(u => <GetName name={u.name} id={u.id} />);
    let messagesData = props.msg.map(m => <Message message={m.message} />);

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



export default Dialog;