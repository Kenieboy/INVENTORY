// components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NewEntry from "./components/custom/NewEntry";
import LoginUser from "./components/custom/LoginUser";

function App() {
  return (
    <div className="text-xs  font-roboto">
      {/* top */}
      <div className="h-[48px] bg-gradient-to-r from-green-500 from-30%  to-teal-500 to-90% flex items-center justify-center">
        <div className="bg-white inline-block px-4 py-2 rounded-full">
          <p>
            $1 per month for 3 months |{" "}
            <span className="font-bold">SUBSCRIBE NOW</span>
          </p>
        </div>
      </div>
      {/* top end */}

      {/* main */}
      <div className="flex h-[calc(100vh-48px)]">
        {/* left side nav */}
        {/* old css overflow-auto */}
        <div className="w-[220px]  bg-stone-900">
          <div className="h-full flex flex-col justify-between">
            {/* left menu upper */}
            <div>
              <h2 className="p-4 text-2xl font-semibold text-white">
                FRP Inc.
              </h2>
              <div className="w-full flex items-center justify-center">
                {/* menu area */}
                <NewEntry />
                {/* menu area end */}
              </div>
            </div>
            {/* left menu upper end */}

            {/* left menu lower */}
            <div className="px-4 py-4">
              <LoginUser />
            </div>
            {/* left menu lower end */}
          </div>
        </div>
        {/* left side nav end */}

        {/* right side main */}
        <div className="flex-1 overflow-auto px-4 mt-4">
          {/* old css mx-auto max-w-screen-md */}
          <div className=" bg-white">
            <h1 className="text-2xl font-semibold">Right Side</h1>
          </div>
        </div>
        {/* right side main end */}
      </div>

      {/* main end */}
    </div>
  );
}

export default App;
