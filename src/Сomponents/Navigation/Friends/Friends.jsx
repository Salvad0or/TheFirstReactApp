import style from './Friends.module.css'

const Friends = (props) => {

    return (
        <div className={style.container}>
            <div className={style.friend_element}>
                {props.friends[0].name}
            </div>
            <div className={style.friend_element}>
                {props.friends[1].name}
            </div>

            <div className={style.friend_element}>
                {props.friends[2].name}
            </div>
        </div>


    )
}

export default Friends;