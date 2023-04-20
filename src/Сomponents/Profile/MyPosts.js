import Post from './Posts/Post'

const MyPosts = (props) => {
    return (
        <div>
            
           <Post name= {props.name}/>
           <Post/>

            
        </div>

        
    )
};

export default MyPosts