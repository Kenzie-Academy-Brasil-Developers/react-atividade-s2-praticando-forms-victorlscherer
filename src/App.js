import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Card from './Pages/Card';
import MyForm from './Pages/MyForm';


function App() {

  const [data, setData] = useState();


  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/"><MyForm setData={setData} /></Route>
          <Route exact path="/Card"><Card data={data} /></Route>
        </Switch>

      </header>
    </div>
  );
}

export default App;
