import logo from './logo.svg';
import './App.css';
import FavoriteColour from './components/FavoriteColour';
import Car from './components/Car';
import Counter from './components/Counter';
import Example from './ExampleCallBack/Example';
import ExampleTwo from './ExampleCallBack/ExampleTwo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './ExampleNavigate/Home';
import About from './ExampleNavigate/About';
import ExampleMemo from './ExampleMemo/ExampleMemo';
import ExampleMemoTwo from './ExampleMemo/ExampleMemoTwo';
//import Component1 from './Example/Component1'
//import Component1 from './ExampleContext/ExampleContextTwo'
import WithoutUsinghook from './customhooks/WithoutUsinghook';
import WithUsingHooks from './customhooks/WithUsingHooks';

function App() {
  return (
    <div className="App">
     {/* <FavoriteColour />
      <Car />
      <Counter/> 
       <Example></Example>
      <ExampleTwo></ExampleTwo>  */}

      <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<ExampleMemo />} /> */}
        {/* <Route exact path="/" element={<ExampleMemoTwo />} /> */}
        {/* <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/about" element={<About />} />  */}
       {/* <Route exact path="/" element={<Component1/>} />, */}
       <Route exact path="/hook" element={<WithoutUsinghook/>}/>
       <Route exact path="/whook" element={<WithUsingHooks/>}/>
        {/* <Route exact path="/" element={<Component1 />} />   */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
