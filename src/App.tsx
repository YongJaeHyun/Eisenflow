import DragDropContainer from "./components/DragDropContainer";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-full px-7 lg:px-20 lg:text-base">
      <Header />
      <DragDropContainer />
    </div>
  );
}

export default App;
