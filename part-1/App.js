const App = () => (
    <div class="tweet">
        <FirstComponent />
        <NamedComponent name="John"/>
    </div>
)

ReactDOM.render(<App />, document.getElementById("root")); 