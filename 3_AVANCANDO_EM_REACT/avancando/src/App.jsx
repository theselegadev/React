import './App.css'
import img from './assets/img2.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import { useState } from 'react'
import CarDetails from './components/CarDetails'

function App() {
  const [name,setName] = useState("Matheus") 
  const [age,setAge] = useState(17)

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
    </div>
  )
}

export default App
