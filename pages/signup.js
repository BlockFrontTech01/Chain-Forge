import { useCallback } from "react";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();

  const onFrameButton1Click = useCallback(() => {
    router.push("/login");
  }, [router]);

  const onFrameButton3Click = useCallback(() => {
    router.push("/login");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[1215px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[10px] text-left text-xl text-white font-inknut-antiqua md:h-[900px]">
      <div className="absolute my-0 mx-[!important] top-[142px] left-[18px] w-[380px] h-[582px] hidden z-[0] md:flex">
        <div className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#054bff,_#01040d)] w-[380px] h-[455px] overflow-hidden md:flex">
          <div className="absolute top-[89px] left-[14px] rounded-3xs [background:linear-gradient(180deg,_rgba(5,_75,_255,_0.01),_rgba(1,_4,_13,_0.01))] shadow-[0px_0px_0px_4px_#fff] w-[350px] h-10 overflow-hidden">
            <input
              className="[border:none] inline-block font-inika text-mini bg-[transparent] absolute top-[10px] left-[9px] font-bold text-white text-left w-[332px]"
              placeholder="Full Name"
              type="text"
            />
          </div>
          <div className="absolute top-[163px] left-[14px] rounded-3xs [background:linear-gradient(180deg,_rgba(5,_75,_255,_0.01),_rgba(1,_4,_13,_0.01))] shadow-[0px_0px_0px_4px_#fff] w-[350px] h-10 overflow-hidden">
            <input
              className="[border:none] inline-block font-inika text-mini bg-[transparent] absolute top-[10px] left-[9px] font-bold text-white text-left w-[331px]"
              placeholder="User Name"
              type="text"
            />
          </div>
          <div className="absolute top-[237px] left-[14px] rounded-3xs [background:linear-gradient(180deg,_rgba(5,_75,_255,_0.01),_rgba(1,_4,_13,_0.01))] shadow-[0px_0px_0px_4px_#fff] w-[350px] h-10 overflow-hidden">
            <input
              className="[border:none] inline-block font-inika text-mini bg-[transparent] absolute top-[10px] left-[12px] font-bold text-white text-left w-[325px]"
              placeholder="Email"
              type="text"
            />
          </div>
          <div className="absolute top-[311px] left-[14px] rounded-3xs [background:linear-gradient(180deg,_rgba(5,_75,_255,_0.01),_rgba(1,_4,_13,_0.01))] shadow-[0px_0px_0px_4px_#fff] w-[350px] h-10 overflow-hidden">
            <input
              className="[border:none] inline-block font-inika text-mini bg-[transparent] absolute top-[10px] left-[7px] font-bold text-white text-left w-[335px]"
              placeholder="Password"
              type="text"
            />
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[391px] left-[89px] rounded-xl [background:linear-gradient(180deg,_#054bff,_rgba(5,_75,_255,_0))] shadow-[0px_0px_100px_#054bff] w-[182px] h-[34px] overflow-hidden">
            <b className="absolute top-[4px] left-[54px] text-xl font-inika text-white text-left">
              Sign Up
            </b>
          </button>
          <div className="absolute top-[9px] left-[137px] font-black inline-block w-[103px] h-10">
            Sign UP
          </div>
        </div>
        <b className="absolute top-[482px] left-[65px] inline-block font-inika text-gray text-center w-[229px]">
          Already have an account?
        </b>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[548px] left-[89px] rounded-xl [background:linear-gradient(180deg,_#054bff,_rgba(0,_0,_0,_0.99))] w-[182px] h-[34px] overflow-hidden"
          onClick={onFrameButton1Click}
        >
          <b className="absolute top-[4px] left-[64px] text-xl font-inika text-white text-left">
            Login
          </b>
        </button>
      </div>
      <div className="my-0 mx-[!important] absolute top-[196px] left-[352px] w-[1376px] flex flex-row items-center justify-start gap-[397px] z-[1] text-21xl lg:w-0 lg:gap-[0px] lg:items-center lg:justify-center lg:pl-[270px] lg:pt-0 lg:pr-0 lg:box-border md:hidden">
        <div className="relative rounded-xl [background:linear-gradient(180deg,_#054bff,_#01040d)] w-[627px] h-[752px] overflow-hidden shrink-0">
          <div className="absolute top-[103px] left-[0px] rounded-3xs [background:linear-gradient(180deg,_rgba(5,_75,_255,_0.01),_rgba(1,_4,_13,_0.01))] shadow-[0px_0px_0px_4px_#fff] w-[627px] h-[77px] overflow-hidden">
            <input
              className="[border:none] inline-block font-inika text-11xl bg-[transparent] absolute top-[12px] left-[18px] font-bold text-white text-left w-[596px]"
              placeholder="Full Name"
              type="text"
            />
          </div>
          <div className="absolute top-[237px] left-[0px] rounded-3xs [background:linear-gradient(180deg,_rgba(5,_75,_255,_0.01),_rgba(1,_4,_13,_0.01))] shadow-[0px_0px_0px_4px_#fff] w-[627px] h-[77px] overflow-hidden">
            <input
              className="[border:none] inline-block font-inika text-11xl bg-[transparent] absolute top-[13px] left-[14px] font-bold text-white text-left w-[602px]"
              placeholder="User Name"
              type="text"
            />
          </div>
          <div className="absolute top-[371px] left-[0px] rounded-3xs [background:linear-gradient(180deg,_rgba(5,_75,_255,_0.01),_rgba(1,_4,_13,_0.01))] shadow-[0px_0px_0px_4px_#fff] w-[627px] h-[77px] overflow-hidden">
            <input
              className="[border:none] inline-block font-inika text-11xl bg-[transparent] absolute top-[13px] left-[14px] font-bold text-white text-left w-[599px]"
              placeholder="Email"
              type="text"
            />
          </div>
          <div className="absolute top-[505px] left-[0px] rounded-3xs [background:linear-gradient(180deg,_rgba(5,_75,_255,_0.01),_rgba(1,_4,_13,_0.01))] shadow-[0px_0px_0px_4px_#fff] w-[627px] h-[77px] overflow-hidden">
            <input
              className="[border:none] inline-block font-inika text-11xl bg-[transparent] absolute top-[9px] left-[16px] font-bold text-white text-left w-[601px]"
              placeholder="Password"
              type="text"
            />
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[655px] left-[165px] rounded-xl [background:linear-gradient(180deg,_#054bff,_#01040d)] shadow-[0px_0px_100px_#054bff] w-[298px] h-[47px] overflow-hidden">
            <b className="absolute top-[4px] left-[82px] text-11xl font-inika text-white text-left">
              Sign Up
            </b>
          </button>
          <div className="absolute top-[0px] left-[224px] font-black inline-block w-[180px] h-[85px]">
            Sign UP
          </div>
        </div>
        <div className="relative w-[29px] h-[54px] overflow-hidden shrink-0" />
      </div>
      <div className="my-0 mx-[!important] absolute top-[977px] left-[501px] w-[1227px] flex flex-row items-center justify-start py-0 pr-0 pl-2.5 box-border gap-[657px] z-[2] text-center text-11xl text-gray font-inika lg:items-center lg:justify-center lg:pl-[120px] lg:pr-[750px] lg:box-border md:hidden">
        <div className="relative w-[307px] h-[143px]">
          <b className="absolute top-[0px] left-[13px] inline-block w-[294px]">
            Already have an account?
          </b>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[96px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#054bff,_#01040d)] w-[298px] h-[47px] overflow-hidden"
            onClick={onFrameButton3Click}
          >
            <b className="absolute top-[4px] left-[109px] text-11xl font-inika text-white text-left">
              Login
            </b>
          </button>
        </div>
        <div className="relative w-[34px] h-[42px] overflow-hidden shrink-0" />
      </div>
      <div className="my-0 mx-[!important] absolute top-[510px] left-[18px] w-[111px] flex flex-row items-start justify-center pt-[680px] px-0 pb-0 box-border z-[3] text-center text-mini text-midnightblue font-inika lg:pt-[680px] lg:box-border md:pt-[350px] md:pr-5 md:pb-0 md:box-border">
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-33@2x.png"
        />
        <div className="relative inline-block w-[86px] shrink-0">
          Copy Right
        </div>
      </div>
      <img
        className="absolute my-0 mx-[!important] top-[0px] left-[0px] w-[60px] h-[60px] overflow-hidden shrink-0 object-cover z-[4]"
        alt=""
        src="/frame-61@2x.png"
      />
    </div>
  );
};

export default Signup;
