const App = () => {
    return (
        <div>
            <Person name="Andre" age="38" hobbies={["Boxing", "Commentating", "Golf"]}/>
            <Person name="Patrick" age="17" hobbies={["Video Games", "Soccer"]}/>
            <Person name="Tharaneesan" age="35" hobbies={["Basketball", "Cycling", "Having a long name"]}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))