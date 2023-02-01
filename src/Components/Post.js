

function Post(props) {
    const mystyle = {
        color: "red",
        backgroundColor: "cream",
        padding: "10px",
        fontFamily: "Arial",
        display: "grid",
        gridRowStart: 6,
    }
    return (
        <div>
            <p style={mystyle}>{props.name}</p>
        </div>
    )
}



export default Post