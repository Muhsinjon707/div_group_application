import React from "react";

// Css
import "./style.css";

// Next imports
import Image from "next/image";

// Image imports
import phone from "../../assets/card-items/phone.png";
import web from "../../assets/card-items/web.svg";
import design from "../../assets/card-items/design.svg";

const OurServices = () => {
  return (
    <div className="min-h-screen container 2xl:max-w-7xl mx-auto mt-[87px] mb-[120px]">
      <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-14">
        <h3 className="font-bold text-[55px] tracking-[103%]">Наши услуги</h3>
        <p className="text-[16px] w-[424px] opacity-[.69]">
          Разработка мобильных приложений и веб-проектов для бизнеса и стартапо
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-[30px] mt-[65px] items-start justify-items-center">
        <div
          style={{
            boxShadow: `
              0px 0px 0px 0px #00000017,
              0px 1px 1px 0px #00000017,
              0px 2px 2px 0px #00000014,
              0px 5px 3px 0px #0000000d,
              0px 9px 4px 0px #00000003,
              0px 14px 4px 0px #00000000
            `,
          }}
          className="bg-white rounded-[20px] w-[410px] h-[336px] flex flex-col items-center pt-[38px] pb-[66px] gap-[23px]"
        >
          <Image src={phone} alt="Phone image" />
          <h3 className="font-semibold text-xl text-center w-[80%]">
            Разработка мобильных приложений
          </h3>
          <div className="flex items-center gap-4">
            <div className="border py-[10px] px-[25px] rounded-[54px]">iOS</div>
            <div className="border py-[10px] px-[25px] rounded-[54px]">
              Android
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow: `
              0px 0px 0px 0px #00000017,
              0px 1px 1px 0px #00000017,
              0px 2px 2px 0px #00000014,
              0px 5px 3px 0px #0000000d,
              0px 9px 4px 0px #00000003,
              0px 14px 4px 0px #00000000
            `,
          }}
          className="bg-white w-[410px] h-[510px] rounded-[20px] flex flex-col items-start justify-between py-[25px] px-10"
        >
          <div className="flex items-center justify-center gap-6">
            <Image src={web} alt="Web Разработка" />
            <h3 className="text-xl font-semibold">Web Разработка</h3>
          </div>
          <div className="font-light text-[15px]">
            Разрабатываем сайты персонально под ваш бизнес. Анализируем рынок и
            целевую аудиторию в соответствии с задачами, которые вы хотите
            решить с помощью веб-сайта.
            <br />
            <br /> Создаём web-сервисы для любого направления бизнеса: продажи,
            коммуникации, управление, серверную часть и API, гибкие
            административные инструменты для управления приложениями и сбора
            статистики. <br />
            <br /> Вы получаете продукт, привлекательный для пользователей и
            функциональный для вас.
          </div>
          <div className="w-full flex items-center justify-center gap-4">
            <div className="border py-[10px] px-[25px] rounded-[54px]">
              Frontend
            </div>
            <div className="border py-[10px] px-[25px] rounded-[54px]">
              Backend
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow: `
              0px 0px 0px 0px #00000017,
              0px 1px 1px 0px #00000017,
              0px 2px 2px 0px #00000014,
              0px 5px 3px 0px #0000000D,
              0px 9px 4px 0px #00000003,
              0px 14px 4px 0px #00000000
          `,
          }}
          className="bg-white rounded-[20px] w-[410px] h-[336px] flex flex-col items-center pt-[38px] pb-[66px] gap-[23px]"
        >
          <Image src={design} alt="Design" />
          <h3 className="font-semibold text-xl text-center w-[80%]">
            Проектирование мобильного приложения
          </h3>
          <div className="flex items-center gap-4">
            <div className="border py-[10px] px-[25px] rounded-[54px]">
              Дизайн
            </div>
            <div className="border py-[10px] px-[25px] rounded-[54px]">ТЗ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
