import React from "react";

import "./style.css";

import Image from "next/image";

// Image imports
import background from "../../assets/benefits/background.png";
import mock from "../../assets/benefits/mock.svg";

interface BenefitCard {
  id: number;
  title: string;
  description: string;
}

const benefitCards: BenefitCard[] = [
  {
    id: 1,
    title: "Повысить лояльность",
    description:
      "Мобильное приложение работает намного быстрее сайта и может выполнять многие функции даже без интернета. Также здесь не нужно каждый раз авторизовываться, чтобы оформить заказ или отследить его статус. Все это создает положительный пользовательский опыт.",
  },
  {
    id: 2,
    title: "Автоматизировать продажи",
    description:
      "С приложением легче провести пользователя по каждому этапу воронки продаж. С помощью автоматизации внутри интерфейса можно показывать ценность продукта, рассказывать о новых функциях, делать допродажи и напоминать о себе с помощью пуш-уведомлений.",
  },
  {
    id: 3,
    title: "Сократить издержки",
    description:
      "Мобильный сервис помогает сэкономить на рекламном бюджете и дополнительных сотрудниках. Например, многие маркетинговые акции можно проводить в самом приложении и адаптировать рекламу под целевых пользователей, а часть работы службы поддержки делегировать автоматическим чат-ботам.",
  },
  {
    id: 4,
    title: "Увеличить прибыль",
    description:
      "Повышение уровня клиентского сервиса, экономия на закупке рекламы на других площадках и автоматизации процессов положительно скажется и на итоговой выручке. Вложения в разработку приложения быстро окупятся, если интерфейс хорошо справляется со своими задачами.",
  },
];

const AppBenefits = () => {
  return (
    <section className="relative bg-white w-full rounded-[20px] pt-20 pb-32">
      <div className="background_image container mx-auto flex flex-col items-center">
        <h2 className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[963px] leading-[1] font-semibold text-lg sm:text-[30px] md:text-[40px] lg:text-[55px] text-center">
          Какие задачи поможет решить запуск мобильного приложения
        </h2>
        <div className="w-full mt-[30px] lg:mt-[193px] flex items-center justify-center gap-[66px] lg:gap-0 lg:justify-between flex-wrap">
          <div className="h-full flex flex-col items-start justify-between gap-[66px]">
            <div
              className="w-[410px] h-[174px] flex flex-col items-center md:items-start self-center gap-5"
              key={`Benefit ${benefitCards[0].id}`}
            >
              <div className="w-full flex items-center justify-center md:justify-start gap-5">
                <span className="shrink-0 font-semibold text-white text-xl text-center px-3 py-1 rounded-full bg-[#0C4AB3]">
                  {benefitCards[0].id}
                </span>
                <h3 className="font-semibold text-lg md:text-2xl">
                  {benefitCards[0].title}
                </h3>
              </div>
              <p className="font-light w-[300px] sm:w-[410px] text-[12px sm:text-[15px]">
                {benefitCards[0].description}
              </p>
            </div>
            <div
              className="w-[410px] h-[174px] flex flex-col items-center md:items-start self-center gap-5"
              key={`Benefit ${benefitCards[1].id}`}
            >
              <div className="w-full flex items-center justify-center md:justify-start gap-5">
                <span className="shrink-0 font-semibold text-white text-xl text-center px-3 py-1 rounded-full bg-[#0C4AB3]">
                  {benefitCards[1].id}
                </span>
                <h3 className="font-semibold text-lg md:text-2xl">
                  {benefitCards[1].title}
                </h3>
              </div>
              <p className="font-light w-[300px] sm:w-[410px] text-[12px sm:text-[15px]">
                {benefitCards[1].description}
              </p>
            </div>
          </div>
          <div className="h-full flex flex-col items-start justify-between gap-[66px]">
            <div
              className="w-[410px] h-[174px] flex flex-col items-center md:items-start self-center gap-5"
              key={`Benefit ${benefitCards[2].id}`}
            >
              <div className="w-full flex items-center justify-center md:justify-start gap-5">
                <span className="shrink-0 font-semibold text-white text-xl text-center px-3 py-1 rounded-full bg-[#0C4AB3]">
                  {benefitCards[2].id}
                </span>
                <h3 className="font-semibold text-lg md:text-2xl">
                  {benefitCards[2].title}
                </h3>
              </div>
              <p className="font-light w-[300px] sm:w-[410px] text-[12px sm:text-[15px]">
                {benefitCards[2].description}
              </p>
            </div>
            <div
              className="w-[410px] h-[174px] flex flex-col items-center md:items-start self-center gap-5"
              key={`Benefit ${benefitCards[3].id}`}
            >
              <div className="w-full flex items-center justify-center md:justify-start gap-5">
                <span className="shrink-0 font-semibold text-white text-xl text-center px-3 py-1 rounded-full bg-[#0C4AB3]">
                  {benefitCards[3].id}
                </span>
                <h3 className="font-semibold text-lg md:text-2xl">
                  {benefitCards[3].title}
                </h3>
              </div>
              <p className="font-light w-[300px] sm:w-[410px] text-[12px sm:text-[15px]">
                {benefitCards[3].description}
              </p>
            </div>
          </div>
        </div>
        <Image
          className="absolute hidden xl:block -bottom-50 left-1/2 transform -translate-x-1/2"
          src={mock}
          alt="Mock Phone Image"
        />
      </div>
    </section>
  );
};

export default AppBenefits;
