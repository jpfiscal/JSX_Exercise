const Tweet = (props) => {
    return (
        <div className="tweet">
            <h3>{props.username}</h3>
            <h4>{props.user}</h4>
            <h4>{props.date}</h4>
            <p>{props.message}</p>
        </div>)
}