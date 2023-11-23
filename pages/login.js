const Login = () => {
  return (
    <div className="relative bg-white w-full h-[1228px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[10px] text-left text-xl text-white font-inknut-antiqua md:h-[900px]">
      <div className="absolute my-0 mx-[!important] top-[269px] left-[20px] rounded-xl [background:linear-gradient(180deg,_#054bff,_#01040d)] w-[380px] h-[330px] overflow-hidden shrink-0 hidden z-[0] md:flex">
        <div className="absolute top-[90px] left-[15px] rounded-3xs [background:linear-gradient(180deg,_rgba(5,_75,_255,_0.01),_rgba(1,_4,_13,_0.01))] shadow-[0px_0px_0px_4px_#fff] w-[350px] h-10 overflow-hidden">
          <input
            className="[border:none] inline-block font-inika text-mini bg-[transparent] absolute top-[10px] left-[12px] font-bold text-white text-left w-[325px]"
            placeholder="User Name 0r Email"
            type="text"
          />
        </div>
        <div className="absolute top-[165px] left-[15px] rounded-3xs [background:linear-gradient(180deg,_rgba(5,_75,_255,_0.01),_rgba(1,_4,_13,_0.01))] shadow-[0px_0px_0px_4px_#fff] w-[350px] h-10 overflow-hidden">
          <input
            className="[border:none] inline-block font-inika text-mini bg-[transparent] absolute top-[10px] left-[14px] font-bold text-white text-left w-[321px]"
            placeholder="Password"
            type="text"
          />
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[254px] left-[106px] rounded-xl [background:linear-gradient(180deg,_#054bff,_#01040d)] shadow-[0px_0px_100px_#054bff] w-[168px] h-[34px] overflow-hidden">
          <b className="absolute top-[4px] left-[57px] text-xl font-inika text-white text-left">
            Login
          </b>
        </button>
        <div className="absolute top-[17px] left-[149px] font-black inline-block w-24 h-[45px]">
          Login
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[562px] left-[8px] w-[111px] flex flex-row items-start justify-center pt-[600px] px-0 pb-0 box-border z-[1] text-center text-mini text-midnightblue font-inika lg:pt-[600px] lg:box-border md:pt-[300px] md:box-border">
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-33@2x.png"
        />
        <div className="relative inline-block w-[86px] shrink-0">
          Copy Right
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[395px] left-[426px] w-[1308px] flex flex-row items-center justify-center py-0 pr-[250px] pl-0 box-border gap-[397px] z-[2] text-21xl lg:pl-0 lg:pr-[550px] lg:box-border md:hidden">
        <div className="relative rounded-xl [background:linear-gradient(180deg,_#054bff,_#01040d)] w-[627px] h-[513px] overflow-hidden shrink-0">
          <div className="absolute top-[140px] left-[0px] rounded-3xs [background:linear-gradient(180deg,_rgba(5,_75,_255,_0.01),_rgba(1,_4,_13,_0.01))] shadow-[0px_0px_0px_4px_#fff] w-[627px] h-[77px] overflow-hidden">
            <input
              className="[border:none] inline-block font-inika text-11xl bg-[transparent] absolute top-[13px] left-[14px] font-bold text-white text-left w-[596px]"
              placeholder="User Name 0r Email"
              type="text"
            />
          </div>
          <div className="absolute top-[272px] left-[0px] rounded-3xs [background:linear-gradient(180deg,_rgba(5,_75,_255,_0.01),_rgba(1,_4,_13,_0.01))] shadow-[0px_0px_0px_4px_#fff] w-[627px] h-[77px] overflow-hidden">
            <input
              className="[border:none] inline-block font-inika text-11xl bg-[transparent] absolute top-[9px] left-[16px] font-bold text-white text-left w-[590px]"
              placeholder="Password"
              type="text"
            />
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[427px] left-[194px] rounded-xl [background:linear-gradient(180deg,_#054bff,_#01040d)] shadow-[0px_0px_100px_#054bff] w-[239px] h-[47px] overflow-hidden">
            <b className="absolute top-[4px] left-[80px] text-11xl font-inika text-white text-left">
              Login
            </b>
          </button>
          <div className="absolute top-[0px] left-[224px] font-black inline-block w-[180px] h-[85px]">
            Login
          </div>
        </div>
        <div className="relative w-[30px] h-[41px] overflow-hidden shrink-0" />
      </div>
      <img
        className="absolute my-0 mx-[!important] top-[0px] left-[0px] w-[60px] h-[60px] overflow-hidden shrink-0 object-cover z-[3]"
        alt=""
        src="/frame-61@2x.png"
      />
    </div>
  );
};

export default Login;
