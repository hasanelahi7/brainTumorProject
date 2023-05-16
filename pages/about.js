import React from 'react';

export default function About() {
  return (
    <div>
      <h1 className="text-5xl text-center font-thin">Our mission</h1>

      <div className="flex items-center mt-16">
        <img src="/brainTumorProject/brainCell.png" className="w-1/2 mr-8" />

        <div>
          <h2 className="text-2xl font-bold">
            Find out what is happening in your body now at an early stage of the disease in a simple and accessible way
          </h2>
          <div className='mt-4'>
            <p className="paragraph">
              We understand the critical importance of timely diagnosis in improving patient outcomes and enhancing survival rates.
              By utilizing artificial intelligence and machine learning techniques, we aim to empower healthcare professionals and individuals with a powerful tool for early detection of brain tumours.
            </p>

            <p className="paragraph mt-2">
              Through the seamless integration of technology and medical expertise, our mission is to contribute to saving lives and improving the overall well-being of patients affected by this devastating condition.
              Join us in our mission to make a positive impact in the field of healthcare by leveraging technology to detect brain tumors at an early stage.
              Together, we can make a difference and improve the lives of individuals battling this challenging condition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
