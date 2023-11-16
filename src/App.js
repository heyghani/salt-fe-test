import {
  Navbar,
  Home,
  Profile,
  Values,
  Services,
  Contactus,
} from "./components";

function App() {
  return (
    <div className="bg-white w-full overflow-hidden">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div className="bg-[#39A7FF] flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Home />
        </div>
      </div>

      <div className="bg-white flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Profile />
        </div>
      </div>

      <div className="bg-gray-100 flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Values />
        </div>
      </div>

      <div className="bg-[#39A7FF] flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Services />
        </div>
      </div>

      <div className="bg-[#192655] flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Contactus />
        </div>
      </div>
    </div>
  );
}

export default App;
