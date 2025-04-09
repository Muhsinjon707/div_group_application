import React from "react";

import Image from "next/image";

// Import image
import sphere from "../../assets/delivery/sphere.svg";

interface DeliveryPrice {
  id: number;
  price: string;
}

const delivaryPrices: DeliveryPrice[] = [
  {
    id: 1,
    price: "20000 - 50000 руб.",
  },
  {
    id: 2,
    price: "50000 - 100000 руб.",
  },
  {
    id: 3,
    price: "100000 - 500000 руб.",
  },
  {
    id: 4,
    price: "500000 - 1000000 руб.",
  },
  {
    id: 5,
    price: "1000000 - 2000000 руб.",
  },
  {
    id: 6,
    price: "2000000 - 3000000 руб.",
  },
];

const Delivery = () => {
  return (
    <section className="relative min-h-screen w-full pt-[240px] pb-[1000px] md:pb-[400px] lg:pb-[300px] xl:pb-[50px]">
      <Image
        className="absolute -top-0 transform -translate-y-1/2 left-20"
        src={sphere}
        alt="Sphere image"
      />
      <div className="container h-[800px] mx-auto flex flex-col items-center justify-start gap-[58px]">
        <h2 className="font-semibold text-[55px] text-center">
          Заказать приложение
        </h2>
        <div className="w-full flex flex-col xl:flex-row items-center xl:items-start justify-between gap-10 xl:gap-1">
          <div className="w-full xl:w-[55%] flex flex-col items-center xl:items-start justify-between gap-[26px]">
            <h3 className="font-semibold text-xl">Бюджет проекта:</h3>
            <div className="w-full flex items-center justify-center xl:justify-start flex-wrap gap-[15px]">
              {delivaryPrices.map((btn) => {
                return (
                  <button
                    key={`Price ${btn.id}`}
                    className={`
                      w-[315px] py-[43px] rounded-full border border-blue-400
                      ${
                        btn.id == 4
                          ? "bg-[#3980FF] text-white"
                          : "bg-purple-50 text-black"
                      } text-center font-medium text-lg  
                    `}
                  >
                    {btn.price}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="w-full xl:w-[45%] flex flex-col items-start justify-between gap-[25px]">
            <h3 className="font-semibold text-xl">Контакты:</h3>
            <form className="w-full flex flex-col items-start justify-center gap-[10px]">
              <input
                className="shrink-0 w-full outline-none border border-[#ACACACE0] focus:border-2 focus:border-blue-500 py-[22px] px-[34px] rounded-[10px] font-base text-[16px]"
                type="text"
                placeholder="Имя"
              />
              <input
                className="shrink-0 w-full outline-none border border-[#ACACACE0] focus:border-2 focus:border-blue-500 py-[22px] px-[34px] rounded-[10px] font-base text-[16px]"
                type="text"
                placeholder="Телефон"
              />
              <textarea
                className="shrink-0 w-full outline-none h-[200px] border border-[#ACACACE0] focus:border-2 focus:border-blue-500 py-[22px] px-[34px] rounded-[10px] font-base text-[16px]"
                placeholder="Комментарий"
              ></textarea>
              <input
                className="text-white font-semibold text-center py-6 px-11 rounded-[10px] bg-[#3980FF]"
                type="submit"
                value="Заказать обратный звонок"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
