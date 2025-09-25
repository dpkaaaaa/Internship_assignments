import './App.css'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
function App() {
  

  return (
    <div>
      <Input label="Username" placeholder="Enter your username" />
      
      <Button buttonText="Submit" variant="primary" />
      <Button buttonText="Cancel" variant="secondary" />
    </div>
  )
}

export default App
