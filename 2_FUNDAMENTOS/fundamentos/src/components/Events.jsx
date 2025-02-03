const Events = () => {
    const handleMyEvent = (e) => {
        console.log("Ativou o evento")
        console.log(e)
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
        </div>
    )
}

export default Events