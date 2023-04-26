import Post from './Posts/Post'
import React from 'react';
import Message from '../Dialogs/Message'
import {ADD_MESSAGE} from '../Redux/State'

const MyPosts = (props) => {

    
    let link = React.createRef();
    let messagesData = props.message.map(m => <Message message={m.message} />);

    
    let addText = () => {

        let text = link.current.value;
        let action = ADD_MESSAGE(text)
        props.dispatch(action)
    }


    return (
        <div>
            
            <Post name={props.name} />
            <div>
             {messagesData}
            </div>

             <div>
                <textarea ref={link}></textarea>
            </div>

            <div>
                <button onClick={addText}>Жмать</button>
            </div>
            
            
        </div>


    )
};

export default MyPosts