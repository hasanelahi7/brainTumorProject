import React, { useState } from 'react';

function faqs() {
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
      question: 'Is the tool accurate?',
      answer: 'The accuracy of the tool is subject to the quality of the MRI images used as input. While the deep learning algorithm would most likely return correct results, it has not been validated for clinical use. Hence, the tool cannot be used for clinical purposes but can be employed for research purposes.',
    },
    {
      question: 'What types of brain tumours can the tool detect?',
      answer: 'The tool can detect several types of brain tumours, including gliomas, meningiomas, pituitary tumours, and no-tumour cases. These are the most common types of brain tumours.',

    },
    {
      question: 'How does the tool work?',
      answer: 'The tool uses a deep learning algorithm, to analyze the MRI images provided. The algorithm is trained on a large dataset of MRI scans and use this information to accurately classify the MRI images into different types of brain tumours.',

    },
    {
      question: 'Is the tool easy to use?',
      answer: 'Yes, the tool is designed to be user-friendly and easy to navigate. Users can upload MRI images directly to the web application and receive results within seconds.',

    },
    {
      question: 'How secure is my data?',
      answer: 'We take data security and privacy very seriously. Your data is securely handled and protected. We do not share or sell any user data to third parties.',
    },
    {
      question: 'How much does it cost to use the tool?',
      answer: 'The tool is available for free. ',

    },
    {
      question: 'What if I need help using the tool?',
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

<div className="text-center p-4 rounded-lg">
<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
           <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
           We are here to answer your questions
          </p>
  {/* <h1 className="text-2xl text-black-500 mb-4">Hi! We are here to answer your questions.</h1> */}
  <div className="w-3/4 mt-[2.75rem]">
    {faqs.map((faq, index) => (
      <div key={index} className="mb-4">
        <div
          className="flex cursor-pointer transition-colors duration-300"
          onClick={() => toggleFAQ(index)}
        >
          <span className="mr-2 text-blue-500">{expandedIndex === index ? '-' : '+'}</span>
          <h3 className="text-lg font-">{faq.question}</h3>
        </div>
        {expandedIndex === index && <div className="mt-2 text-left ml-5">{faq.answer}</div>}
      </div>
    ))}
  </div>
</div>

  );
}

export default faqs;





