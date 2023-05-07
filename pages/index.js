import { useState } from "react";
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();

  const [showPopup, setShowPopup] = useState(false);

  const handleTryClick = () => {
    router.push("/try");
  };

  const handleAboutClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="w-full flex items-center mt-10">
{showPopup && (
  <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center" onClick={handleClosePopup}>
    <div className="bg-white rounded-lg shadow-md p-2" onBlur={handleClosePopup}>
      <h2 className="text-2xl text-center mb-4">See How It Works</h2>
      <img src="/brainTumorProject/seeHow.gif" alt="gif" className="max-h-96 max-w-96 object-contain mx-auto mb-4 rounded-lg" />
    </div>
  </div>
)}





      <div className="w-full md:w-2/3 mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 px-8 md:px-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Automated Brain Tumour Detection
          </h1>
          <p className="text-gray-600 text-center mb-12">
            Early detection of brain tumours can significantly improve treatment outcomes and promote better health for
            patients
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-7 justify-center md:justify-center">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-xl" onClick={handleTryClick}>
              Try for Free
            </button>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl" onClick={handleAboutClick}>
              See How It Works
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="/brainTumorProject/brain_img.png" alt="product" className="rounded-lg hidden md:block" />
        </div>
      </div>
    </div>
  );
}
