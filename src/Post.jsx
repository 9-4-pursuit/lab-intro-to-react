function Post(props) {
    return (
        <div>
            <p><strong>{props.title}</strong></p>
            <p>{props.content}</p>
        </div>
    )
}
export default Post;