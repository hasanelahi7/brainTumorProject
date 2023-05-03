import { useState } from "react";

function Try() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
      setIsImageUploaded(true); // Set isImageUploaded state to true
      // Make API call to analyze image and set result state
      // For this example, we'll just set a dummy result
      setResult({
        tumorDetected: true,
        confidence: 0.9,
        message: "A tumor has been detected in the uploaded image",
      });
    };
  };
  const reset = () => {
    setImage(null);
    setResult(null);
    setIsImageUploaded(false);
  };
return (
  <div className="flex flex-col items-center justify-center mt-3">
    <div className="w-full max-w-3xl">
      <h1 className="text-3xl text-center font-bold mb-2">
        Brain Tumor Detection System
      </h1>
      <p className="text-gray-600 text-center mb-12">
        Upload an image to analyze for brain tumor detection
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className={`w-full md:w-1/2 flex items-center max-w-md ml-2  justify-center ${result ? 'md:mr-4' : ''}`}>
          {image ? (
            <img src={image} alt="Uploaded" className="max-w-md rounded-lg mr-10" />
          ) : (
            <div
              className="w-full h-96 border-4 border-dashed border-gray-400 flex text-center justify-center cursor-pointer rounded-lg"
              onClick={() => {
                document.getElementById("image-input").click();
              }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="text-gray-600 flex flex-col items-center justify-center">
                <div className=" text-sm mb-3">
                  <p className="font-semibold text-center">
                    Drag and drop an image here or click to select an image
                  </p>
                  <input
                    type="file"
                    id="image-input"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </div>
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
        {result ? (
          <div className={`w-full md:w-1/2 md:mx-4 mt-4 md:mt-0`}>
          <div className="bg-white ml-10 rounded-lg shadow p-4">
            <p className="text-lg font-semibold mb-2">
              Result:{" "}
              {result.tumorDetected
                ? "Tumor Detected"
                : "No Tumor Detected"}
            </p>
            <p className="mb-2">
              Confidence: {result.confidence.toFixed(2) * 100}%{" "}
            </p>
            <p className="text-gray-600">{result.message}</p>
          </div>
          <div className="text-center mt-4">
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={reset}
            >
              Reset
            </button>
          </div>
        </div>
        
          
        ) : (
          false
        )}
  
      </div>
    </div>
  </div>
);


}
export default Try;
