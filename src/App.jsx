import './App.css'
import UserInput from './components/UserInput'
import UserOutput from "./components/UserOutput"



function App() {
  return (
    <div className="app">
      <UserInput />
      <UserOutput paragraph1={"There is nothing you cannot do from here."} />

      <UserOutput paragraph2={"Listen attentively,  so you dont cook beans."} />

      <UserOutput paragraph3={"Dont jot, if you dont get to use those jotters. Just listen."}/>
    </div>
  );
}

export default App

