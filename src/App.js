import { Navbar } from "./components";

function App() {
  return (
    <div className="bg-white w-full overflow-hidden">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
