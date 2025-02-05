import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Matheus","Gabriel","Lucas"])
    const [users] = useState([
        {id: 1, name: "Matheus", age: 17},
        {id: 2, name: "João", age: 20},
        {id: 3, name: "Julia", age: 17}
    ])

    return (
        <div>
            <ul>
                {list.map((item,index) => (<li key={index}>{item}</li>))}
            </ul>
            <ul>
                {users.map((item) => (<li key={item.id}>{item.name}</li>))}
            </ul>
        </div>
    )
}

export default ListRender