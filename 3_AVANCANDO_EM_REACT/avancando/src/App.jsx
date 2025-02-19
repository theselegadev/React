import './App.css'
import img from './assets/img2.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import { useState } from 'react'
import CarDetails from './components/CarDetails'
import Fragments from './components/Fragments'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDetails from './components/UserDetails'

function App() {
  const [name,setName] = useState("Matheus") 
  const [age,setAge] = useState(17)
  const [message,setMessage] = useState("")

  function handleMessage (msg){
    setMessage(msg)
  } 

  const cars = [
    {id:1, brand: "Ferrari", color: "Vermelha", newCar: true, km: 0},
    {id:2, brand: "Mercedes", color: "Branca", newCar: false, km: 1000},
    {id:3, brand: "Chevrolet", color: "Verde", newCar: false, km: 100000}
  ]

  const persons = [
    {
      id: 1,
      name: "Matheus",
      age:17,
      job:"Programmer"
    },
    {
      id: 2,
      name: "Gabriel",
      age: 17,
      job: "Gestor"
    },
    {
      id: 3,
      name: "Lucas",
      age: 26,
      job: "Trader"
    }
  ]

  function ShowMessage(){
    console.log("Evento do componente pai")
  }

  return (
    <div className='App'>
      <h1>Avançando com React</h1>
      <div>
        <img src="/img1.jpg" alt="código react" />
      </div>
      <div>
        <img src={img} alt="código react" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      <ShowUserName name={name} age={age}/>
      <button onClick={()=>setName("Joaquim")}>Trocar nome de usuário</button>
      <button onClick={()=>setAge(18)}>Trocar idade</button>
      <CarDetails brand="Audi" km={100000} color="Branco" newCar={false}/>
      <CarDetails brand="Mercedes" km={1000} color="Azul" newCar={true}/>
      <CarDetails brand="Ferrari" km={1000} color="Vermelho" newCar={false}/>
      {cars.map((car)=>(
        <CarDetails key={car.id} brand={car.brand} color={car.color} newCar={car.newCar} km={car.km}/>
      ))}
      <Fragments propFragment="Teste"/>
      <Container myValue="teste">
        <p>Esse é o conteúdo</p>
      </Container>
      <ExecuteFunction myFunction={ShowMessage}/>
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {persons.map((person)=>(
        <UserDetails key={person.id} name={person.name} age={person.age} job={person.job}/>
      ))}
    </div>
  )
}

export default App