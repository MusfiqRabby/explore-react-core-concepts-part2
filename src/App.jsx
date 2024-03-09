import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './User';
import Friends from './Friends';


function App() {

  function handleClick() {
    alert('button Clicked')
  }

  const handleClick2 = () =>{
    alert('alert here')
  }

  const five = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>

    <Friends></Friends>

    <Users></Users>

    <Team></Team>
    
    <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Here</button>
      <button onClick={() =>{
        alert('third ')
      }}>Third</button>
      <button onClick={() => five(3)}>Four</button>
    </>
  )
}

export default App
