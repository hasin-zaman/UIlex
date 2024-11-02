export default function AnimatedText({ borderRadius = "rounded-lg", borderColor = "border-blue-500", TextColor = "text-blue-500", lineColor = "bg-blue-400" }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Center the input box vertically and horizontally on the screen */}
      <div
        className={`relative mx-auto border ${borderColor} p-2 ${borderRadius} my-12 w-60 focus-within:border-transparent transition-all duration-300`}
      >
        {/* Input element with animations on focus and validation */}
        <input
          type="text"
          id="input"
          required
          className="text-lg text-black w-full border-none border-b-2 border-gray-300 bg-transparent outline-none focus:outline-none focus:border-gray-800 transition-all duration-300 ease-in-out peer"
        />
        {/* Label element that animates based on focus and input validation state */}
        <label
          htmlFor="input"
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${TextColor} transition-all duration-300 ease-in-out pointer-events-none peer-focus:top-[-20px] peer-focus:left-1/2 peer-focus:-translate-x-1/2 peer-focus:${TextColor} peer-focus:text-base peer-valid:top-[-20px] peer-valid:left-1/2 peer-valid:-translate-x-1/2 peer-valid:${TextColor} peer-valid:text-base`}
        >
          Write Text Here
        </label>
        {/* Top animated line above the input box */}
        <div
          className={`absolute top-0 left-0 h-[1.5px] w-full ${lineColor} scale-x-0 transition-transform duration-300 ease-in-out peer-focus:scale-x-100 peer-valid:scale-x-100`}
        ></div>
        {/* Bottom animated line under the input box */}
        <div
          className={`absolute bottom-0 left-0 h-[2px] w-full ${lineColor} scale-x-0 transition-transform duration-300 ease-in-out peer-focus:scale-x-100 peer-valid:scale-x-100`}
        ></div>
      </div>
    </div>
  );
}
