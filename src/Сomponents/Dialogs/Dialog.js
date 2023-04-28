import s from './Dialog.module.css'
import GetName from './GetName'
import Message from './Message';
import {updateNewMessageBodyCreator} from '../Redux/State'
import {sendMessageCreator} from '../Redux/State'


const Dialog = (props) => {

    
    let dilogsElements = props.state.users.map(u => <GetName name={u.name} id={u.id} />);
    let messages = props.state.msg.map(m => <Message message={m.message} />);

    let newMessageBody = props.state.newMessageBody;

    let updateMessage = (event) => {

        let finalMessage = event.target.value;
        
        props.dispatch(updateNewMessageBodyCreator(finalMessage))

    }

    let pushNewMessage = () => {

        props.dispatch(sendMessageCreator())
    }


    return (
        <div>
            <div className={s.container}>

                <div>
                    {dilogsElements}
                </div>

                <div className={s.rightSide}>
                    {messages}
                </div>

            </div>

            <div className={s.bottom}>
                <textarea 
                onChange={updateMessage}
                value={newMessageBody}
                >

                </textarea>
                
                

                <button onClick={pushNewMessage}>Отправить</button>
            </div>


        </div>
    )
}



export default Dialog;