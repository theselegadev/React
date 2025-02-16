const UserDetails = ({name,age,job}) => {
    return (
        <>
            <h3>Desafio:</h3>
             <ul>
                <li>{name}</li>
                <li>{age}</li>
                <li>{job}</li>
             </ul>
             {age >= 18 ? <p>Pode tira habilitação</p> : <p>Não pode tirar habilitação</p>}
        </>
    )
}

export default UserDetails