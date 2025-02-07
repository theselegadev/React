import { useState } from "react"

function ConditionalRender() {
    const [x] = useState(false)
    const [name,setName] = useState("Matheus")

  return (
    <div>
        <h2>Isso será exibido?</h2>
        {x && <p>O x é verdadeiro</p>}
        {!x && <p>O x é falso</p>}
        <h2>If ternário</h2>
        {name === "Matheus" ? (<p>O Nome é matheus</p>) : (<p>O  Nome não é matheus</p>)}
        <button onClick={()=>setName("João")}>Mudar o nome para João</button>
    </div>
  )
}

export default ConditionalRender