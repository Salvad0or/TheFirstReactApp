import s from './Dialog.module.css'


const Dialog = (props) => {
    return (
        <div className={s.main}>
            Hi i am the {props.name}
        </div>
    )
}

export default Dialog;