import "./App.css";
import NaVBar from "./Components/NavBar/NaVBar";
// import Form from "./Components/Form/Form";
import QrCode from "./Components/QrCode/QrCode";

function App() {
  return (
    <>
      <div>
        <div className="Nv__Cl">
          <NaVBar />
        </div>
        <QrCode />
      </div>
    </>
  );
}

export default App;
