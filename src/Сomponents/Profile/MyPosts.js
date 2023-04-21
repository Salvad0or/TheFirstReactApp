import Post from './Posts/Post'
import React from 'react';

const MyPosts = (props) => {

    let ref = React.createRef();

    let aler = () => {
        alert(ref.current.value);
    }
    
    return (
        <div>
            
            <Post name={props.name} />
            <form>
                <div>
                <textarea ref={ref}></textarea>
                </div>
                <button onClick={aler}>Жмать</button>
            </form>
        </div>


    )
};

export default MyPosts