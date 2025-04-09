import React from "react";
import "./style.css";

// Image imports
import rocket from "../../assets/hero/rocket.svg";
import cup from "../../assets/hero/cup.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="outer-layer">
      <div className="container mx-auto max-h-[797px] h-[650px] w-full px-4 sm:px-6 lg:px-[110px] text-white">
        <div className="w-full max-w-[650px] h-full flex flex-col items-start justify-center px-4 sm:px-6 lg:px-0">
          <h1 className="font-semibold text-[28px] sm:text-[36px] lg:text-[48px] xl:text-[55px] leading-tight">
            Разработка мобильных приложений и сервисов
          </h1>

          <ul className="flex flex-col gap-6 sm:gap-8 mt-6">
            <li className="flex items-start gap-4 sm:gap-6">
              <Image src={rocket} alt="Rocket item" className="w-8 sm:w-10" />
              <p className="text-base sm:text-lg max-w-[90%]">
                Знаем, как решить вашу задачу оптимальным способом
              </p>
            </li>
            <li className="flex items-start gap-4 sm:gap-6">
              <Image src={cup} alt="Cup item" className="w-8 sm:w-10" />
              <p className="text-base sm:text-lg max-w-[90%]">
                Подберем подходящее решение с учетом целей и возможностей
              </p>
            </li>
          </ul>

          <div className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6">
            <button className="py-4 px-6 sm:py-5 sm:px-10 text-sm sm:text-base rounded-[10px] bg-[#EB5757] text-white whitespace-nowrap">
              Заказать приложение
            </button>
            <button className="py-4 px-6 sm:py-5 sm:px-10 text-sm sm:text-base rounded-[10px] bg-[#0C4AB3] text-white whitespace-nowrap">
              Онлайн-консультация
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
