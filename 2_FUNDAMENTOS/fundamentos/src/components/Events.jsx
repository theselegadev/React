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
        </div>
    )
}

export default Events