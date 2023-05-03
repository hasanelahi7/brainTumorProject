import { useState } from 'react';

function Try() {
  const [imageUrl, setImageUrl] = useState('');
  const [result, setResult] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImageUrl(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleImageAnalysis = () => {
    // TODO: Use ML model to analyze image and set result
    setResult('Tumor detected');
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 bg-gray-200 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt="Uploaded Image" className="w-full" />
        ) : (
          <label className="flex flex-col items-center justify-center w-full h-full bg-gray-300 text-gray-500 cursor-pointer hover:text-gray-600">
            <svg
              className="w-8 h-8 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span className="text-sm">Upload an image</span>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>
        )}
      </div>
      <div className="w-full lg:w-1/2 bg-gray-100 flex items-center justify-center">
        {result ? (
          <div>{result}</div>
        ) : (
          <button
            className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded shadow"
            onClick={handleImageAnalysis}
          >
            Analyze
          </button>
        )}
      </div>
    </div>
  );
}

export default Try;
