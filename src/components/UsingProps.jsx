import React, { useEffect, useState } from "react";

function UsingProps() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  const wordLImit = (text, wordLimit = 13) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  function date() {
    const randomDaysAgo = Math.floor(Math.random() * 30);
    return `${randomDaysAgo} days ago`;
  }

  return (
    <div className="p-6">
      <div className="grid max-[500px]:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-15">
        {images.map((item) => (
          <div
            key={item.id}
            className="shadow-[0_4px_4px_0_#00000040] w-[250px] rounded overflow-hidden cursor-pointer relative"
          >
            <div className="w-full h-[280px] bg-gray-200">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h1 className="px-4 my-2 text-[#333333] font-bold text-[14px] leading-[120%] tracking-[0.5%]">
                {wordLImit(item.title)}
              </h1>
              <h1 className="px-4  text-gray-600 font-normal text-[14px] leading-[120%] tracking-[0.5%]">
                {wordLImit(item.description)}
              </h1>
              <p className="px-4 my-3 text-[#333333] font-bold text-[14px] leading-[120%] tracking-[0.5%]">
                Price: {item.price}$
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-[218px] cursor-cell  rounded mx-4 mb-8">
                  Buy  Now
              </button>
              <div className="flex items-center gap-4 px-4 absolute bottom-2 justify-end w-full">
                <p className="text-[#9A9AB0] text-[12px] leading-[110%] tracking-[0.8%]">
                  {date()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsingProps;
