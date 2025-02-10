import './App.css'
import img from './assets/img2.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import { useState } from 'react'

function App() {
  const [name,setName] = useState("Matheus") 

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
      <ShowUserName name={name}/>
      <button onClick={()=>setName("Joaquim")}>Trocar nome de usuário</button>
    </div>
  )
}

export default App
