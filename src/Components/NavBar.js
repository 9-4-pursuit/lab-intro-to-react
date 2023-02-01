function NavBar (props) {

    return (
        <nav class="NavBar">
          <button>{props.info}</button>  
          <button>{props.createAccount}</button> 
          <button>{props.signIn}</button> 
        </nav>
        
    )
}

export default NavBar;