const TemplateExpressions = () =>{
    const person = {
        name: "Matheus",
        lastname: "Seleghin",
        job: "Programmer",
        age: 17
    }
    
    return (
        <div>
            <h1>Olá { person.name } { person.lastname } tudo bem?</h1>
            <p>Você atua como {person.job}</p>
        </div>
    )
}

export default TemplateExpressions