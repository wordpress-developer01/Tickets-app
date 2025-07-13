import './App.css';
import Header from "./components/Header";
import Tickets from "./components/Tickets";
import {useState} from "react";
import Pass from "./components/Pass";


function App() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState(null);

  return (
    <div className="App">
      <Header />
        {result ? (
            <div className="kuki">
                <h2>You have successfully registered.</h2>
                <p>Name: {result.name}</p>
                <p>Email: {result.email}</p>
            </div>
        ) : (
            <Pass
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                setResult={setResult}
            />
        )}

        <Tickets />

    </div>
  );
}

export default App;
