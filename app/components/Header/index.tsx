import React from "react";

// Images & icons
import logo from "../../assets/logo.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import telegram from "../../assets/icons/telegram.svg";

// Next import
import Image from "next/image";
import Link from "next/link";

// React icons
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between">
      <Image src={logo} alt="Logo image" />
      <nav>
        <ul className="flex items-center justify-between gap-8">
          <li className="text-bold text-[16px] group">
            <Link className="group-hover:text-[#3980FF] group-hover:underline transition duration-200 ease-in" href="/">Главная</Link>
          </li>
          <li className="text-bold text-[16px] group">
            <Link className="group-hover:text-[#3980FF] group-hover:underline transition duration-200 ease-in" href="/">О нас</Link>
          </li>
          <li className="text-bold text-[16px] group">
            <Link className="group-hover:text-[#3980FF] group-hover:underline transition duration-200 ease-in" href="/">Наши услуги</Link>
          </li>
          <li className="text-bold text-[16px] group">
            <Link className="group-hover:text-[#3980FF] group-hover:underline transition duration-200 ease-in" href="/">Этапы работы</Link>
          </li>
          <li className="text-bold text-[16px] group">
            <Link className="group-hover:text-[#3980FF] group-hover:underline transition duration-200 ease-in" href="/">Стоимость</Link>
          </li>
          <li className="text-bold text-[16px] group">
            <Link href="/" className="flex items-center gap-2 group-hover:text-[#3980FF] group-hover:underline transition duration-200 ease-in">
              Ещё <IoIosArrowDown />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-between gap-8">
        <div className="flex flex-col items-start justify-center">
          <h4 className="text-[#4386FF] font-semibold text-[20px]">8 (499) 348-82-16</h4>
          <p className="text-black opacity-[0.41] text-[16px]">hello@softerio.ru</p>
        </div>
        <div className="flex items-center justify-between gap-5">
          <button className="shrink-0 box-border inline-block p-[11px] bg-[#3980FF] rounded-[5px] text-white hover:bg-blue-600 ">
            <Image src={whatsapp} width={26} height={26} alt="Whats app icon" />
          </button>
          <button className="shrink-0 box-border inline-block px-[14px] py-4 bg-[#3980FF] rounded-[5px] text-white hover:bg-blue-600">
            <Image src={telegram} width={20} height={17} alt="Telegram icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
