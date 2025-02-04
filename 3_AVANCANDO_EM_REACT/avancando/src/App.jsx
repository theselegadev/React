import './App.css'
import img from './assets/img2.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'

function App() {
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
    </div>
  )
}

export default App
