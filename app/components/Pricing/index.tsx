import React from "react";

// Css styles
import "./style.css";

// Images
import phone from "../../assets/pricing/phone.svg";
import business from "../../assets/pricing/business.svg";
import custom from "../../assets/pricing/custom.svg";

// card details
import tickOne from "../../assets/pricing/check-one.svg";
import bookmarkOne from "../../assets/pricing/bookmark-one.svg";
import tickTwo from "../../assets/pricing/check-two.svg";
import bookmarkTwo from "../../assets/pricing/bookmark-two.svg";
import tickThree from "../../assets/pricing/check-three.svg";
import bookmarkThree from "../../assets/pricing/bookmark-three.svg";

import "./style.css";

// Next imports
import Image, { StaticImageData } from "next/image";

interface PricingCard {
  id: number;
  type: string;
  capabilities: string[];
  price: string | number;
  extraImage?: StaticImageData;
}

const pricingCards: PricingCard[] = [
  {
    id: 1,
    type: "Типовой",
    capabilities: [
      "Каталог товаров или услуг",
      "Сделать заказ",
      "Новости и акции",
      "Обратная связь",
      "Контакты",
    ],
    price: "1000000 руб",
  },
  {
    id: 2,
    type: "Бизнес",
    capabilities: [
      "Программа лояльности",
      "Push уведомления",
      "Серверная часть",
      "Панель управления",
      "Чаты",
    ],
    price: "2000000 руб",
    extraImage: business,
  },
  {
    id: 3,
    type: "Кастом",
    capabilities: [
      "Каталог товаров или услуг",
      "Сделать заказ",
      "Новости и акции",
      "Обратная связь",
      "Контакты",
    ],
    price: "3000000 руб",
    extraImage: custom,
  },
];

const returnTickIcon = (id: number) => {
  switch (id) {
    case 1:
      return tickOne;
    case 2:
      return tickTwo;
    case 3:
      return tickThree;
  }
};

const chooseBookmarkIcon = (id: number) => {
  switch (id) {
    case 1:
      return bookmarkOne;
    case 2:
      return bookmarkTwo;
    case 3:
      return bookmarkThree;
  }
};

const Pricing = () => {
  return (
    <section className="container mt-[65px] mb-[130px] mx-auto flex flex-col items-center justify-center">
      <h2 className="min-w-[440px] font-semibold text-center text-[40px] md:text-[55px] mb-[40px]">
        Стоимость разработки мобильных приложений
      </h2>
      <p className="min-w-[440px] font-base text-[16px] text-center text-black opacity-[.69] mb-[56px]">
        Мы собрали стандартные элементы приложений в пакеты, для примерного
        понимания стоимости разработки. Чтобы заказать мобильное приложение
        свяжитесь с нами, мы вас проконсультируем, проведем аудит ценовых
        предложений других студий. Ниже цены на типовые приложения.
      </p>
      <div className="w-full cash-cards">
        {pricingCards.map((card) => {
          return (
            <div
              key={`Pricing card-${card.id}`}
              style={{
                boxShadow: `
                  0px 0px 0px 0px #00000017,
                  0px 1px 1px 0px #00000017,               
                  0px 2px 2px 0px #00000014,                
                  0px 5px 3px 0px #0000000D,                
                  0px 9px 4px 0px #00000003,                
                  0px 14px 4px 0px #00000000,
                `,
              }}
              className="
                relative pricing-card pt-[30px] pb-[44px] px-[72px] bg-white w-[410px] h-[503px] rounded-[20px]
                flex flex-col items-center justify-between
              "
            >
              <Image
                className="absolute top-0 right-18"
                src={chooseBookmarkIcon(card.id)}
                alt={`Card ${card.id}'s bookmark icon`}
              />
              <div className="flex items-end justify-start gap-5">
                <div className="relative">
                  <Image
                    src={phone}
                    alt={`${card.type} type`}
                    width={28}
                    height={50}
                  />

                  {card.extraImage && (
                    <Image
                      className="absolute -right-2 top-2"
                      src={card.extraImage}
                      alt={`${card.type}'s extra image`}
                      width={20}
                      height={20}
                    />
                  )}
                </div>
                <h4 className="font-semibold text-2xl">{card.type}</h4>
              </div>
              <ul className="w-full flex flex-col items-start gap-5">
                {card.capabilities.map((ability) => {
                  return (
                    <li
                      key={`Card capability-${ability}`}
                      className="w-full flex items-center justify-between"
                    >
                      {ability}
                      <Image src={returnTickIcon(card.id)} alt="Tick icon" />
                    </li>
                  );
                })}
              </ul>
              <button
                className={`
                 rounded-lg px-11 py-6 font-semibold 
                ${
                  card.id == 2
                    ? "bg-[#3980FF] text-white"
                    : "bg-white text-blue-500 border-2 border-blue-400"
                } 
              `}
              >
                Заказать приложение
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
