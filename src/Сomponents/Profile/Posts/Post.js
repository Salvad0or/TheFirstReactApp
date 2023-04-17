
import s from './Post.module.css'

const Post = (props) => {

    return (
        <div>
            <img className={s.image} src='https://gas-kvas.com/uploads/posts/2023-02/1675431409_gas-kvas-com-p-okean-fonovie-risunki-25.jpg' alt='ocean' />
            <div>
                {props.name}
            </div>
        </div>
    )

}

export default Post;

