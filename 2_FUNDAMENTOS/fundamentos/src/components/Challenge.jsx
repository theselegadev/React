const Challenge = () => {
    let num1 = 10
    let num2 = 10

    return (
        <div>
            <h3>{num1}</h3>
            <h3>{num2}</h3>
            <button onClick={() =>console.log(num1+num2)}>Soma no console</button>
        </div>
    )
}


export default Challenge