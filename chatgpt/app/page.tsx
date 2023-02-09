import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="text-white items-center flex flex-col justify-center px-2 h-screen">
      <h1 className="text-3xl font-bold mb-20">ChatGPT</h1>
      <div>
        <div className="flex space-x-2">
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              {/* sun icon */}
              <SunIcon className="h-8 w-8" />
              <h2 className="">Examples</h2>
            </div>

            <div className="space-y-2">
              <p className="infoText">"Explain something to me"</p>
              <p className="infoText">
                "what's the difference getween a dog and a cat"
              </p>
              <p className="infoText">"What is the color of the sun"</p>
            </div>
          </div>

          <div>
            {" "}
            <div className="flex flex-col items-center justify-center mb-5">
              {/* sun icon */}
              <BoltIcon className="h-8 w-8" />
              <h2 className="">Examples</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">"Explain something to me"</p>
              <p className="infoText">
                "what's the difference getween a dog and a cat"
              </p>
              <p className="infoText">"What is the color of the sun"</p>
            </div>
          </div>

          <div>
            {" "}
            <div className="flex flex-col items-center justify-center mb-5">
              {/* sun icon */}
              <ExclamationTriangleIcon className="h-8 w-8" />
              <h2 className="">Examples</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">"Explain something to me"</p>
              <p className="infoText">
                "what's the difference getween a dog and a cat"
              </p>
              <p className="infoText">"What is the color of the sun"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
