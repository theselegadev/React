import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  return (
    <div className='App'>
      <h1>React com css</h1>
      <MyComponent/>
      <p>Este parágrafo é do app.jsx</p>
      <p style={{color: "blue", padding: "50px", borderTop: "2px solid red"}}>Este paragráfo é para CSS inline</p>
    </div>
  )
}

export default App
