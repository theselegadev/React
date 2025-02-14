const Container = ({children,myValue}) => {
    return (
        <div>
            <h2>Esse é o título</h2>
            {children}
            {myValue}
        </div>
    )
}

export default Container