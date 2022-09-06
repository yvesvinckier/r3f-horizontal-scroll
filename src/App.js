import Scene from "./components/Scene";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Twitter from "./components/Twitter";

function Overlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    >
      <h1
        style={{
          position: "absolute",
          top: "13vw",
          left: "4vw",
        }}
      >
        Featured
      </h1>
      <h1
        style={{
          position: "absolute",
          bottom: "13vw",
          right: "4vw",
        }}
      >
        work
      </h1>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Scene />
      <Overlay />
      <a
        href="https://twitter.com/NowMoDesign/"
        style={{ position: "absolute", bottom: 40, left: "4vw", width: 50 }}
      >
        <Twitter />
      </a>
      <Footer />
    </>
  );
}

export default App;
