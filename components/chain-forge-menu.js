import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

const ChainForgeMenu = ({ onClose }) => {
  const router = useRouter();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButtonClick = useCallback(() => {
    router.push("/signup");
  }, [router]);

  const onFrameButton3Click = useCallback(() => {
    window.open("https://parkingswing.vercel.app");
  }, []);

  return (
    <div
      className="rounded-xl bg-white w-[276px] h-[421px] overflow-hidden max-w-full max-h-full [&.animate]:md:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] md:opacity-[0]"
      data-animate-on-scroll
    >
      <div
        className="absolute top-[23px] left-[221px] w-[38.3px] h-[45.6px] cursor-pointer"
        onClick={onClose}
      >
        <div className="absolute top-[20px] left-[0px] rounded-3xs [background:linear-gradient(180deg,_#054bff,_rgba(0,_0,_0,_0.99))] w-10 h-[7px] overflow-hidden [transform:_rotate(-30deg)] [transform-origin:0_0]" />
        <div className="absolute top-[20px] left-[4.5px] rounded-3xs [background:linear-gradient(180deg,_#054bff,_rgba(0,_0,_0,_0.99))] w-[39px] h-[7px] overflow-hidden [transform:_rotate(30deg)] [transform-origin:0_0]" />
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[137px] left-[40px] rounded-xl [background:linear-gradient(180deg,_#054bff,_rgba(0,_0,_0,_0.99))] w-[181px] h-7 overflow-hidden"
        onClick={onFrameButtonClick}
      >
        <b className="absolute top-[0px] left-[22px] text-xl font-inika text-white text-left">
          Signup / Login
        </b>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[201px] left-[40px] rounded-xl [background:linear-gradient(180deg,_#054bff,_rgba(0,_0,_0,_0.99))] w-[181px] h-7 overflow-hidden">
        <b className="absolute top-[1px] left-[69px] text-xl font-inika text-white text-left">
          Docs
        </b>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[265px] left-[40px] rounded-xl [background:linear-gradient(180deg,_#054bff,_#000)] w-[181px] h-7 overflow-hidden">
        <b className="absolute top-[0px] left-[36px] text-xl font-inika text-white text-left">
          Community
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[329px] left-[40px] rounded-xl [background:linear-gradient(180deg,_#054bff,_#000)] w-[181px] h-7 overflow-hidden"
        onClick={onFrameButton3Click}
      >
        <b className="absolute top-[0px] left-[44px] text-xl font-inika text-white text-left">
          Developer
        </b>
      </button>
    </div>
  );
};

export default ChainForgeMenu;
