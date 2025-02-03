const Events = () => {
    const handleMyEvent = (e) => {
        console.log("Ativou o evento")
        console.log(e)
    }

    const renderSomething = (x) => {
        if(x){
            return <h1>Retorne isso!</h1>
        }else{
            return <h1>Retorne aquilo!</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique!</button>
            </div>
            <div>
                <button onClick={()=> console.log("Evento ativado")}>Clique!</button>
                <button onClick={()=>{
                    if(true){
                        console.log("Isso aqui não deveria existir")
                    }
                }}>Clique aqui por favor</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events