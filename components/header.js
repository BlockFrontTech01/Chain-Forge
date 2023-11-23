import { useState, useCallback } from "react";
import ChainForgeMenu from "./chain-forge-menu";
import PortalPopup from "./portal-popup";
import { useRouter } from "next/router";

const Header = () => {
  const [isChainForgeMenuPopupOpen, setChainForgeMenuPopupOpen] =
    useState(false);
  const router = useRouter();

  const openChainForgeMenuPopup = useCallback(() => {
    setChainForgeMenuPopupOpen(true);
  }, []);

  const closeChainForgeMenuPopup = useCallback(() => {
    setChainForgeMenuPopupOpen(false);
  }, []);

  const onFrameButton1Click = useCallback(() => {
    router.push("/signup");
  }, [router]);

  const onFrameButton4Click = useCallback(() => {
    window.open("https://blockfronttech.vercel.app");
  }, []);

  return (
    <>
      <div className="fixed my-0 mx-[!important] top-[0px] left-[0px] bg-white shadow-[0px_0px_30px_#002687] w-[1728px] h-[65px] overflow-hidden shrink-0 z-[17]">
        <img
          className="absolute top-[11px] left-[0px] w-[50px] h-[50px] overflow-hidden object-cover"
          alt=""
          src="/frame-6@2x.png"
        />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[15px] left-[350px] w-[68px] h-[43px] hidden md:flex"
          onClick={openChainForgeMenuPopup}
        >
          <div className="absolute top-[0px] left-[0px] rounded-3xs [background:linear-gradient(180deg,_#054bff,_#000)] w-[50px] h-[7px] overflow-hidden" />
          <div className="absolute top-[18px] left-[18px] rounded-3xs [background:linear-gradient(180deg,_#054bff,_rgba(0,_0,_0,_0.99))] w-[50px] h-[7px] overflow-hidden" />
          <div className="absolute top-[36px] left-[0px] rounded-3xs [background:linear-gradient(180deg,_#054bff,_#000)] w-[50px] h-[7px] overflow-hidden" />
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[22px] left-[445px] rounded-xl [background:linear-gradient(180deg,_#054bff,_rgba(0,_0,_0,_0.99))] w-[181px] h-7 overflow-hidden md:hidden"
          onClick={onFrameButton1Click}
        >
          <b className="absolute top-[0px] left-[22px] text-xl font-inika text-white text-left">
            Signup / Login
          </b>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[22px] left-[633px] rounded-xl [background:linear-gradient(180deg,_#054bff,_#000)] w-[121px] h-7 overflow-hidden md:hidden">
          <b className="absolute top-[0px] left-[39px] text-xl font-inika text-white text-left">
            Docs
          </b>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[22px] left-[761px] rounded-xl [background:linear-gradient(180deg,_#054bff,_rgba(0,_0,_0,_0.99))] w-[159px] h-7 overflow-hidden md:hidden">
          <b className="absolute top-[0px] left-[25px] text-xl font-inika text-white text-left">
            Community
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[22px] left-[927px] rounded-xl [background:linear-gradient(180deg,_#054bff,_rgba(0,_0,_0,_0.99))] w-[159px] h-7 overflow-hidden md:hidden"
          onClick={onFrameButton4Click}
        >
          <b className="absolute top-[0px] left-[33px] text-xl font-inika text-white text-left">
            Developer
          </b>
        </button>
      </div>
      {isChainForgeMenuPopupOpen && (
        <PortalPopup
          placement="Top right"
          onOutsideClick={closeChainForgeMenuPopup}
        >
          <ChainForgeMenu onClose={closeChainForgeMenuPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
