const Person = (prop) => {
    let ageMsg = (prop.age > 18) ? "please go vote!" : "you must be 18";
    let name = (prop.name.length > 8) ? prop.name.slice(0,5) : prop.name;
    return(
        <div>
            <p>Learn some information about this person</p>
            <p>Name: {name}</p>
            <p>Age: {prop.age}</p>
            <h3>{ageMsg}</h3>
            <p>Hobbies:</p>
            <ul>
                {prop.hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    )
}