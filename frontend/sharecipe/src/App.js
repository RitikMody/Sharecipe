import logo from './logo.svg';
import './App.css';
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Sharecipe!</h1>
      <RecipeList></RecipeList>
    </div>
  );
}

export default App;
