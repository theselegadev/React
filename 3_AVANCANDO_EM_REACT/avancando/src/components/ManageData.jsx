import { useState } from "react"

const ManageData = ()=>{
    let someData  = 10
    const [number, setNumber] = useState(15)
    
    function LoadNumber(){
        setNumber(25)
    }

    return (
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={() => someData = 15}>alterar valor</button>
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={LoadNumber}>Mudar State</button>
            </div>
        </div>
    )
}

export default ManageData