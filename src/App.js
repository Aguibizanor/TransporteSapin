import "./styles.css";
import Carrin from "./Carrin";
import Bicicletin from "./Bicicletin";
import Caminhãozin from "./Caminhãozin";

export default function App() {
  return (
    <div className="App">
      <h1>Olá Iza Sapin!</h1>
      <h2>
        Bem vinda, aqui a magia dos Sapin e dos meios de transporte se realizam
      </h2>
      <Carrin />
      <Bicicletin />
      <Caminhãozin />
    </div>
  );
}
