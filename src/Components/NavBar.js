
function NavBar(props){

    return(
        <div>
            <p>{props.name}</p>
            <p id="title">{props.title}</p>
            <p id="motto">{props.motto}</p>
            <p id="third">{props.third}</p>
        </div>

    )
}

export default NavBar