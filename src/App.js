import "./App.css";
import Dictionary from "./Dictionary";
import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">coded by Emmalee</footer>
      </div>
    </div>
  );
}
