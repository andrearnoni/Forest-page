import Home from "./pages/Home";
import "./input.css";
import Provider from "./context/Provider";

function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
