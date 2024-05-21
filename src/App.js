import CarForm from "./components/CarForm";
import { CarSearch } from "./components/CarSearch";
import { Carlist } from "./components/Carlist";
import { CarValue } from "./components/CarValue";
function App() {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <Carlist />
      <CarValue />
    </div>
  );
}

export default App;
