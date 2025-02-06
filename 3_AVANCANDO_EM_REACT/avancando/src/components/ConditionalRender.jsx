import { useState } from "react"

function ConditionalRender() {
    const [x] = useState(false)
  return (
    <div>
        <h2>Isso será exibido?</h2>
        {x && <p>X é true</p>}
        {!x && <p>X é false</p>}
    </div>
  )
}

export default ConditionalRender