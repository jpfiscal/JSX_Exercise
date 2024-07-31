const App = () => (
    <div>
        <Tweet username="jpfiscal" name="Josh" date="2024-07-30" message="whats the big deal with Twitter?"/>
        <Tweet username="twitter_geek" name="Thadius" date="2024-07-28" message="Twitter is my life."/>
        <Tweet username="jumanji_man" name="Derryl" date="2024-07-27" message="look at me!"/>
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"));