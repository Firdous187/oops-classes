import logo from './logo.svg';
import './App.css';
import SSCStudent from './classes/SSCStudent';

function App() {


  
  let Firdous = new SSCStudent("Firdous, 22, {Firdous.gender}");
  let Niha = new SSCStudent("Niharika,22");
  let Ravi = new SSCStudent("Ravi,23");
  let Prasad = new SSCStudent("Prasad,23");
  let Harsha = new SSCStudent("Harsha,23");
 

  Firdous.calculateResult();
  Firdous.gender= "Female";
  console.log(Firdous.gender);  
  
  


  return




}

export default App;
