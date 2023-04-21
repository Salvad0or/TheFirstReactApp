import Post from './Posts/Post'
import React from 'react';

const MyPosts = (props) => {


    let vl = React.createRef;
    
    return (
        <div>
            
            <Post name={props.name} />
            <form>
                <div>
                <textarea ref={vl}></textarea>
                </div>
                <button onClick={props.functions("vl.apply.value")}>Жмать</button>
                {console.log(vl.apply.value)}
            </form>
        </div>


    )
};

export default MyPosts