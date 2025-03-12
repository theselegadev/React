import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  const n = 15
  const redTitle = true

  return (
    <div className='App'>
      <h1>React com css</h1>
      <MyComponent/>
      <p>Este parágrafo é do app.jsx</p>
      <p style={{color: "blue", padding: "50px", borderTop: "2px solid red"}}>Este paragráfo é para CSS inline</p>
      <h2 style={n<10 ? {color: "purple"} : {color: "pink"}}>Css dinâmico</h2>
      <h2 style={n>10 ? {color: "purple"} : {color: "pink"}}>Css dinâmico</h2>
      <h2 className={redTitle ? "red-title" : "title"}>Classes dinâmicas</h2>
      <Title/>
    </div>
  )
}

export default App
