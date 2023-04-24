import Post from './Posts/Post'
import React from 'react';
import Message from '../Dialogs/Message'

const MyPosts = (props) => {


    let link = React.createRef();
    let messagesData = props.messsage.map(m => <Message message={m.message} />);

    let addText = () => {
        let text = link.current.value;
        props.function(text)
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