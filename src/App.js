import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form 
        firstName = {""}
        lastName = {""}
        email = {""}
        password = {""}
        confirm = {""}
      />
    </div>
  );
}

export default App;
