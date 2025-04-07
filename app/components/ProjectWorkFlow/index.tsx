import React from "react";

// Css styles
import "./style.css";

// Next
import Image, { StaticImageData } from "next/image";

// Work Flow stage images imports
import first from "../../assets/work-flow/first.png";
import second from "../../assets/work-flow/second.png";
import third from "../../assets/work-flow/third.png";
import fourth from "../../assets/work-flow/fourth.png";
import fifth from "../../assets/work-flow/fifth.png";
import sixth from "../../assets/work-flow/sixth.png";
import seventh from "../../assets/work-flow/seventh.png";

// Extra images
import devcode from "../../assets/background/devcode.svg";
import rocket from "../../assets/background/rocket.svg";
import settings from "../../assets/background/settings.svg";
import sphere from "../../assets/background/sphere.svg";

interface CardInterface {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  extraImage?: StaticImageData;
}

const flowCards: CardInterface[] = [
  {
    id: 1,
    image: first,
    title: "Сбор требований",
    description:
      "Детальное изучение требований, ресурсов и исходной информации по проекту и формирование технического задания на разработку ПО.",
    extraImage: sphere,
  },
  {
    id: 2,
    image: second,
    title: "UI/UX Дизайн",
    description:
      "Разработка современного функционального и удобного дизайна с применением новейших инструментов.",
  },
  {
    id: 3,
    image: third,
    title: "Прототип (MVP)",
    description:
      "В результате проектирования формируется прототип и отправляется для разработки продукта",
  },
  {
    id: 4,
    image: fourth,
    title: "Разработка",
    description:
      "Процесс разработки системы интеллектуального учета, мобильного приложения или веб-сайта в режиме максимальной прозрачности.",
    extraImage: devcode,
  },
  {
    id: 5,
    image: fifth,
    title: "Тестирование",
    description:
      "В ходе тестовых запусков обеспечиваем полную отказоустойчивость продукта.",
  },
  {
    id: 6,
    image: sixth,
    title: "Развертывание",
    description: "Запуск готового продукта в работу (ИСУ, сайта, приложения).",
    extraImage: rocket,
  },
  {
    id: 7,
    image: seventh,
    title: "Поддержка и обслуживание",
    description:
      "Обеспечиваем полную техническую поддержку и сопровождение по всем вопросам, возникающим после развертывания.",
    extraImage: settings,
  },
];

const cardExtraImagePosition = (id: number) => {
  switch (id) {
    case 1:
      return "-top-14 right-0";
    case 4:
      return "-top-20 left-1";
    case 6:
      return "-top-14 -left-3";
    case 7:
      return "-top-22 -right-8";
  }
};

const ProjectWorkFlow = () => {
  return (
    <div className="bg-[#3980FF] min-w-[395px] min-h-[913px] rounded-[20px]">
      <div className="container max-w-7xl mx-auto flex flex-col items-center justify-center gap-20 py-16">
        <h2 className="font-semibold text-[55px] text-white">
          Этапы разработки
        </h2>
        <div className="main-cards w-full h-full">
          {flowCards.map((card) => {
            return (
              <div
                key={`Card-${card.id}`}
                className="relative w-[300px] flex flex-col items-start  gap-[30px]"
              >
                <Image
                  className="bg-[#4788ff] rounded-2xl border border-blue-400"
                  src={card.image}
                  alt={card.title}
                  width={300}
                  height={130}
                />
                {card.extraImage && (
                  <Image
                    className={`
                      absolute ${cardExtraImagePosition(card.id)} 
                    `}
                    src={card.extraImage}
                    alt={`${card.title}'s extra image`}
                  />
                )}
                <div className="text-white flex flex-col items-start justify-start gap-5">
                  <div className="w-full flex items-center gap-4">
                    <span className="shrink-0 font-semibold text-xl px-4 py-2 rounded-full bg-[#0C4AB3]">
                      {card.id}
                    </span>
                    <h3 className="w-full font-semibold text-[16px]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="font-base text-[15px] max-h-[92px]">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="bg-[#EB5757] w-[300px] h-[130px] rounded-[15px] text-white inline-flex justify-center items-center">
            <button className="font-semibold text-[17px]">
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectWorkFlow;
