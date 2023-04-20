import {NavLink} from 'react-router-dom'

const GetName = (props) => {

    const path = "/messages/" + props.id;
  
    return (
      <div>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    )
}

export default GetName;