"use client";

// React imports
import React, { useState } from "react";

// Images & icons
import logo from "../../assets/logo.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import telegram from "../../assets/icons/telegram.svg";
import phone from "../../assets/icons/phone.svg";
import email from "../../assets/icons/email.svg";
import burger from "../../assets/icons/burger.svg";
import remove from "../../assets/icons/remove.svg";

// Next imports
import Image from "next/image";
import Link from "next/link";

// React icons
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="container mx-auto flex items-center justify-between">
      <Image src={logo} alt="Logo image" />
      <div className="h-auto flex items-center justify-between gap-8">
        <nav>
          <ul className="hidden xl:flex items-center justify-between gap-8">
            <li className="text-bold text-[16px] group">
              <Link
                className="group-hover:text-[#3980FF] group-hover:underline transition duration-200 ease-in"
                href="/"
              >
                Главная
              </Link>
            </li>
            <li className="text-bold text-[16px] group">
              <Link
                className="group-hover:text-[#3980FF] group-hover:underline transition duration-200 ease-in"
                href="/"
              >
                О нас
              </Link>
            </li>
            <li className="text-bold text-[16px] group">
              <Link
                className="group-hover:text-[#3980FF] group-hover:underline transition duration-200 ease-in"
                href="/"
              >
                Наши услуги
              </Link>
            </li>
            <li className="text-bold text-[16px] group">
              <Link
                className="group-hover:text-[#3980FF] group-hover:underline transition duration-200 ease-in"
                href="/"
              >
                Этапы работы
              </Link>
            </li>
            <li className="text-bold text-[16px] group">
              <Link
                className="group-hover:text-[#3980FF] group-hover:underline transition duration-200 ease-in"
                href="/"
              >
                Стоимость
              </Link>
            </li>
            <li className="text-bold text-[16px] group">
              <Link
                href="/"
                className="flex items-center gap-2 group-hover:text-[#3980FF] group-hover:underline transition duration-200 ease-in"
              >
                Ещё <IoIosArrowDown />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden xl:flex items-center justify-between gap-8">
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-[#4386FF] font-semibold text-[20px]">
              8 (499) 348-82-16
            </h4>
            <p className="text-black opacity-[0.41] text-[16px]">
              hello@softerio.ru
            </p>
          </div>
          <div className="flex items-center justify-between gap-5">
            <button className="shrink-0 box-border inline-block p-[11px] bg-[#3980FF] rounded-[5px] text-white hover:bg-blue-600 ">
              <Image
                src={whatsapp}
                width={26}
                height={26}
                alt="Whats app icon"
              />
            </button>
            <button className="shrink-0 box-border inline-block px-[14px] py-4 bg-[#3980FF] rounded-[5px] text-white hover:bg-blue-600">
              <Image
                src={telegram}
                width={20}
                height={17}
                alt="Telegram icon"
              />
            </button>
          </div>
        </div>
        <button
          onClick={() => setMenuOpen(true)}
          className={`
            ${isMenuOpen ? "opacity-0 invisible" : "opacity-100 visible"} 
            transition duration-500 ease-linear xl:hidden 
            shrink-0 box-border p-[11px] inline-block bg-[#3980FF] 
            rounded-[5px] text-white hover:bg-blue-600
          `}
        >
          <Image src={burger} width={28} height={28} alt="Burger menu" />
        </button>
      </div>

      <div
        className={`
          ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          transition duration-500 ease-linear transform
          py-[18px] px-0 sm:px-[15px] h-screen flex flex-col 
          items-center justify-start gap-6 absolute top-0 right-0
        `}
      >
        <ul className="flex flex-col w-[360px] items-start">
          <li className="w-full flex items-center justify-between">
            <Image width={220} height={56} src={logo} alt="Logo icon" />
            <button
              onClick={() => setMenuOpen(false)}
              className="p-[18px] bg-[#3980FF] rounded-[5px]"
            >
              <Image src={remove} alt="Remove menu" />
            </button>
          </li>
          <li className="w-full hover:border-blue-400 hover:bg-blue-300 hover:border-2 py-5 px-13 border-b border-gray-400 text-bold text-[16px] group">
            <Link
              className="group-hover:text-[#3980FF] transition duration-200 ease-in"
              href="/"
            >
              Главная
            </Link>
          </li>
          <li className="w-full hover:border-blue-400 hover:bg-blue-300 hover:border-2 py-5 px-13 border-b border-gray-400 text-bold text-[16px] group">
            <Link
              className="group-hover:text-[#3980FF] transition duration-200 ease-in"
              href="/"
            >
              О нас
            </Link>
          </li>
          <li className="w-full hover:border-blue-400 hover:bg-blue-300 hover:border-2 py-5 px-13 border-b border-gray-400 text-bold text-[16px] group">
            <Link
              className="group-hover:text-[#3980FF] transition duration-200 ease-in"
              href="/"
            >
              Наши услуги
            </Link>
          </li>
          <li className="w-full hover:border-blue-400 hover:bg-blue-300 hover:border-2 py-5 px-13 border-b border-gray-400 text-bold text-[16px] group">
            <Link
              className="group-hover:text-[#3980FF] transition duration-200 ease-in"
              href="/"
            >
              Этапы работы
            </Link>
          </li>
          <li className="w-full hover:border-blue-400 hover:bg-blue-300 hover:border-2 py-5 px-13 border-b border-gray-400 text-bold text-[16px] group">
            <Link
              className="group-hover:text-[#3980FF] transition duration-200 ease-in"
              href="/"
            >
              Стоимость
            </Link>
          </li>
          <li className="w-full hover:border-blue-400 hover:bg-blue-300 hover:border-2 py-5 px-13 border-b border-gray-400 text-bold text-[16px] group">
            <Link
              className="group-hover:text-[#3980FF] transition duration-200 ease-in"
              href="/"
            >
              Статьи
            </Link>
          </li>
          <li className="w-full hover:border-blue-400 hover:bg-blue-300 hover:border-2 py-5 px-13 border-b border-gray-400 text-bold text-[16px] group">
            <Link
              className="group-hover:text-[#3980FF] transition duration-200 ease-in"
              href="/"
            >
              Вакансии
            </Link>
          </li>
        </ul>
        <div className="flex flex-col items-center justify-between gap-6">
          <div className="flex flex-col items-start justify-center">
            <h4 className="flex items-center justify-between gap-4 text-[#4386FF] font-semibold text-[20px]">
              <Image src={phone} alt="Phone Icon" /> 8 (499) 348-82-16
            </h4>
            <p className="flex items-center justify-between gap-4 text-[#4386FF] font-semibold text-[20px]">
              <Image src={email} alt="Email Icon" /> hello@softerio.ru
            </p>
          </div>
          <div className="flex items-center justify-between gap-5">
            <button className="shrink-0 box-border inline-block p-[11px] bg-[#3980FF] rounded-[5px] text-white hover:bg-blue-600">
              <Image
                src={whatsapp}
                width={26}
                height={26}
                alt="Whats app icon"
              />
            </button>
            <button className="shrink-0 box-border inline-block px-[14px] py-4 bg-[#3980FF] rounded-[5px] text-white hover:bg-blue-600">
              <Image
                src={telegram}
                width={20}
                height={17}
                alt="Telegram icon"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
