import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Matheus","Gabriel","Lucas"])
    const [users,setUsers] = useState([
        {id: 1, name: "Matheus", age: 17},
        {id: 2, name: "João", age: 20},
        {id: 3, name: "Julia", age: 17}
    ])

    const DeleteUserRandom = () => {
        let num = Math.floor(Math.random() * 4)

        setUsers((prevUsers)=>{
            return prevUsers.filter((user) => num != user.id)
        })
    }

    return (
        <div>
            <ul>
                {list.map((item,index) => (<li key={index}>{item}</li>))}
            </ul>
            <ul>
                {users.map((item) => (<li key={item.id}>{item.name}</li>))}
            </ul>
            <button onClick={DeleteUserRandom}>Deletar usuário aleatório</button>
        </div>
    )
}

export default ListRender