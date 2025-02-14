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

function App() {
  const [name,setName] = useState("Matheus") 
  const [age,setAge] = useState(17)

  const cars = [
    {id:1, brand: "Ferrari", color: "Vermelha", newCar: true, km: 0},
    {id:2, brand: "Mercedes", color: "Branca", newCar: false, km: 1000},
    {id:3, brand: "Chevrolet", color: "Verde", newCar: false, km: 100000}
  ]

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
        <CarDetails brand={car.brand} color={car.color} newCar={car.newCar} km={car.km}/>
      ))}
      <Fragments propFragment="Teste"/>
      <Container myValue="teste">
        <p>Esse é o conteúdo</p>
      </Container>
    </div>
  )
}

export default App
