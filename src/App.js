import { useEffect, useRef } from "react";
import "./index.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { TfiCup } from "react-icons/tfi";
import { BsEmojiSmile } from "react-icons/bs";
import Typed from "typed.js";
import ConfettiExplosion from "react-confetti-explosion";
import { Reveal } from "./Reveal";
import Dream from "./images/dream.png";

function App() {
  const el = useRef(null);
  const el1 = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<h1>З днем народження!</h1>"],
      typeSpeed: 100,
      showCursor: false,
    });
    const typed1 = new Typed(el1.current, {
      strings: ["<h1>&#x1F382;</h1>"],
      showCursor: false,
      startDelay: 2300,
      typeSpeed: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
      typed1.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="app max-[400px]:h-[100%]">
        <div className="flex justify-between">
          <ConfettiExplosion duration={3000} />
          <ConfettiExplosion duration={3000} />
        </div>
        <div className="flex-center h-full w-full flex flex-row ">
          <span className="text-7xl font-bold heading blue_gradient" ref={el} />
          <span className="text-7xl" ref={el1} />
        </div>
        <div className="flex flex-col flex-center">
          <h3 className="absolute bottom-24 text-sky-800">Листай далі</h3>
          <div className="w-10 h-10 rounded-full border-2 border-sky-500 absolute bottom-10 flex-center hover:bg-[#fff] transition delay-50 cursor-pointer">
            <AiOutlineArrowDown className="text-sky-800" />
          </div>
        </div>
      </div>
      <div className="app max-[400px]:h-[100%] pt-24">
        <div className="flex-center flex-col">
          <Reveal delay={0.2}>
            <h1 className="text-5xl font-bold heading orange_gradient m-24">
              Я тобі бажаю:
            </h1>
          </Reveal>
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-around flex-wrap gap-10">
              <Reveal delay={0.1}>
                <div className="card green-bg p-4">
                  <div className="w-full flex-center">
                    <BsEmojiSmile className="text-2xl text-[#386C28]" />
                  </div>
                  <h4 className="text-center text-[#386C28] text-xl font-bold pb-5">
                    Бути щасливою
                  </h4>
                  <p className="text-center text-lg text-[#386C28]">
                    Нехай щастя відкриває перед тобою нові можливості і наповнює
                    кожен день радістю та світлом.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="card purple-bg p-4">
                  <div className="w-full flex-center">
                    <img
                      src={Dream}
                      className=" w-[20px] h-[20px] text-[#386C28]"
                      alt="Icon"
                    />
                  </div>
                  <h4 className="text-center text-[#5222AC] text-xl font-bold pb-5">
                    Більше мріяти
                  </h4>
                  <p className="text-center text-lg text-[#5222AC]">
                    Хай твій внутрішній світ буде наповнений світлом
                    найкрасивіших мрій та амбіцій
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.5}>
                <div className="card orange-bg p-4 max-[400px]:mb-96">
                  <div className="w-full flex-center">
                    <TfiCup className="text-2xl text-[#9B690C]" />
                  </div>
                  <h4 className="text-center text-[#9B690C] text-xl font-bold pb-5">
                    Не боятися перешкод
                  </h4>
                  <p className="text-center text-lg text-[#7C5409]">
                    Нехай кожна перешкода на твоєму шляху до успіху, зробить
                    тебе тільки сильнішою
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      <div className="app max-[400px]:h-[100%]">
        <div className="flex flex-col flex-center ">
          <Reveal>
            <h1 className="mb-10 text-5xl font-bold heading green_gradient">
              І звичайно
            </h1>
          </Reveal>
          <div className="text-center">
            <Reveal>
              <h3 className="text-green-600 text-lg font-bold">
                Хоч я тебе не довго знаю, але скажу тобі так
              </h3>
            </Reveal>
          </div>
          <div className="big-card m-24 flex-center text-4xl text-white font-bold">
            <div className="flex flex-col items-center">
              <Reveal delay={0.1}>
                <div className="flex flex-row">
                  <AiFillStar className="text-5xl m-4" />
                  <AiFillStar className="text-5xl m-4" />
                  <AiFillStar className="text-5xl m-4" />
                  <AiFillStar className="text-5xl m-4" />
                  <AiFillStar className="text-5xl m-4" />
                </div>
              </Reveal>
              <Reveal delay={0.5}>
                <h1 className="p-10">Залишайся такою ж яскравою, якою ти є</h1>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex flex-row">
                  <AiFillStar className="text-5xl m-4" />
                  <AiFillStar className="text-5xl m-4" />
                  <AiFillStar className="text-5xl m-4" />
                  <AiFillStar className="text-5xl m-4" />
                  <AiFillStar className="text-5xl m-4" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
