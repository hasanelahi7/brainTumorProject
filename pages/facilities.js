import React from "react";

const ClinicPage = () => {
  const cities = [
    {
      name: "Karachi",
      color: "#CD5C5C",
      hospitals: [
        "Aga Khan University Hospital",
        "Liaquat National Hospital",
        "Civil Hospital",
        "Jinnah Hospital",
        "National Medical Centre",
        "Neuro-Medical Institute",
        "PNS Shifa",
        "Ziauddin Hospital Nazimabad",
      ],
    },
    {
      name: "Lahore",
      color: "#F08080",
      hospitals: [
        "Mayo Hospital",
        "Children Hospital",
        "National Hospital",
        "Doctors Hospital Lahore",
        "CMH Lahore",
        "Hameed Latif Hospital",
        "Shaukat Khanum Cancer Memorial Hospital",
        "Pakistan Institute of Neuroscience/LGH",
        "LGH unit 2",
        "LGH unit 3",
        "Jinnah Hospital Lahore",
        "Services Hospital Lahore",
        "Ganga Ram Hospital",
        "Sheikh Zayed Hospital Lahore",
      ],
    },
    {
      name: "Islamabad",
      color: "#FA8072",
      hospitals: ["Shifa International Hospital", "PIMS"],
      subcity: {
        name: "Rawalpindi",
        hospitals: ["Holy Family", "CMH Rawalpindi", "DHQ Rawalpindi"],
      },
    },
    {
      name: "Peshawar",
      color: "#E9967A",
      hospitals: [
        "Lady Reading Hospital",
        "North West Hospital",
        "Rehman Medical Centre",
        "Hayatabad Medical Complex",
        "Prime Hospital",
      ],
      subcity: {
        name: "Abbotabad",
        hospitals: ["Ayub Medical College"],
      },
    },
  ];

  const cities2 = [
    {
      name: "Multan",
      color: "#E9967A",
      hospitals: [
        "Nishtar Hospital",
        "CMH",
        "Liaquat University of Medical Health Sciences",
      ],
      subcity: {
        name: "Faisalabad",
        hospitals: ["Independent Medical Centre"],
      },
    },
    {
      name: "Bahawalpur",
      color: "#FA8072",
      hospitals: ["Bahawalpur Victoria Hospital"],
      subcity: {
        name: "Wah",
        hospitals: ["Wah Medical College"],
      },
    },
    {
      name: "Hyderabad",
      color: "#F08080",
      hospitals: ["Peoples Medical College"],
      subcity: {
        name: "Sukkur",
        hospitals: ["Allied Hospital"],
      },
    },
    {
      name: "Quetta",
      color: "#CD5C5C",
      hospitals: ["Bolan Medical Centre", "Doctors Hospital Quetta"],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start">
      <h1 className="mb-12 mt-2 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Clinics and Diagnostic Centers in Pakistan
      </h1>

      <div className="flex justify-center gap-5">
        {cities.map((city, index) => (
          <div
            key={index}
            className={`border-gray-400 border-2 p-4 rounded-lg shadow-md text-center h-[500px] w-[250px]`}
            style={{ backgroundColor: `${city.color}` }}
          >
            <h2 className="text-xl font-bold mb-4 text-white">{city.name}</h2>
            <ul className="list-disc text-left ml-4">
              {city.hospitals.map((hospital, hospitalIndex) => (
                <li key={hospitalIndex}>{hospital}</li>
              ))}
            </ul>
            {city.subcity && (
              <>
                <h2 className="text-xl font-bold mt-4 mb-4 text-white">
                  {city.subcity.name}
                </h2>
                <ul className="list-disc text-left ml-4">
                  {city.subcity.hospitals.map((hospital, hospitalIndex) => (
                    <li key={hospitalIndex}>{hospital}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-5 mt-3">
        {cities2.map((city, index) => (
          <div
            key={index}
            className="border-gray-400 border-2 p-4 rounded-lg shadow-md text-center h-[300px] w-[250px]"
            style={{ backgroundColor: `${city.color}` }}
          >
            <h2 className="text-xl font-bold mb-4 text-white">{city.name}</h2>
            <ul className="list-disc text-left ml-4">
              {city.hospitals.map((hospital, hospitalIndex) => (
                <li key={hospitalIndex}>{hospital}</li>
              ))}
            </ul>
            {city.subcity && (
              <>
                <h2 className="text-xl font-bold mt-4 mb-4 text-white">
                  {city.subcity.name}
                </h2>
                <ul className="list-disc text-left ml-4">
                  {city.subcity.hospitals.map((hospital, hospitalIndex) => (
                    <li key={hospitalIndex}>{hospital}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicPage;
