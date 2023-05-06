// import React from 'react';


// function Docs() {
//   return (
//     <div className="relative text-center">
//       <img src="/brainTumorProject/Faqs.JPG" alt="Your Image" className="w-full" />
//       <div className="absolute inset-0 flex items-center justify-center">
//         <h1 className="text-6xl font-bold text-black">Hi! We are here to help</h1>
//       </div>
//     </div>
//   );
// }

// export default Docs;
import React, { useState } from 'react';

function Docs() {
  const faqs = [
    {
      question: 'What is brain tumour detection using MRI?',
      answer: 'Brain tumour detection using MRI is a computer-aided diagnostic tool that uses MRI scans to detect the presence of brain tumours in patients. The tool employs a deep learning algorithm to analyze the MRI images and classify them into different types of brain tumours.',
    },
    {
      question: 'Who can use this tool?',
      answer: 'This tool can be used by medical professionals such as radiologists, neurologists, and oncologists who specialize in diagnosing and treating brain tumours. Patients who suspect they may have a brain tumour can also use the tool to get an early diagnosis.',
    },
    {
      quesion: 'Is the tool accurate?',
      answer: 'The accuracy of the tool is subject to the quality of the MRI images used as input. While the deep learning algorithm would most likely to return correct results, it has not been validated for clinical use. Hence, the tool cannot be used for clinical purposes but can be employed for research purposes.',
    },
    {
      quesion: 'What types of brain tumours can the tool detect?',
      answer: 'The tool can detect several types of brain tumours, including gliomas, meningiomas, pituitary tumours, and no-tumour cases. These are the most common types of brain tumours.',

    },
    {
      quesion: 'How does the tool work?',
      answer: 'The tool uses a deep learning algorithm, to analyze the MRI images provided. The algorithm is trained on a large dataset of MRI scans and use this information to accurately classify the MRI images into different types of brain tumours.',

    },
    {
      quesion: 'Is the tool easy to use?',
      answer: 'Yes, the tool is designed to be user-friendly and easy to navigate. Users can upload MRI images directly to the web application and receive results within seconds.',

    },
    {
      quesion: 'How secure is my data?',
      answer: 'We take data security and privacy very seriously. All MRI images uploaded to the web application are encrypted and stored securely. We do not share or sell any user data to third parties.',

    },
    {
      quesion: 'How much does it cost to use the tool?',
      answer: 'The tool is available for free. ',

    },
    {
      quesion: 'What if I need help using the tool?',
      answer: 'We offer comprehensive support to all our users. If you need any help using the tool, please contact our support team and they will be happy to assist you.',
    },

  ];

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleFAQ = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1); // Collapse if already expanded
    } else {
      setExpandedIndex(index); // Expand if collapsed
    }
  };

  return (
    <div className="text-center">
      <img src="/brainTumorProject/Faqs.JPG" alt="Your Image" className="w-full" />
      <h1 className="mt-4 text-2xl font-bold">Hi! We are here to answer your questions.</h1>
      <div className="mt-4">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <span className="mr-2">+</span>
              <h3>{faq.question}</h3>
            </div>
            {expandedIndex === index && <div className="ml-6 mt-2">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Docs;





