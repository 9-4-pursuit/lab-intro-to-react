
function NavBar(props){

    return(
        <nav>         
            <p id="whatis">{props.whatis}</p>
            <p id="create">{props.create}</p>
            <p id="signin">{props.signin}</p>
        </nav>
    )
}

export default NavBar