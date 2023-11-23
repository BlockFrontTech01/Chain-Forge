import { useEffect } from "react";
import Header from "../components/header";

const ChainForge = () => {
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
  return (
    <div className="relative bg-white w-full h-[4669px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[10px] text-center text-mini text-midnightblue font-inika md:h-[6400px]">
      <div className="my-0 mx-[!important] absolute top-[2543px] left-[0px] flex flex-row items-end justify-end gap-[562px] z-[0] text-21xl font-im-fell-english-sc lg:w-[650px] lg:gap-[0px] md:w-80 md:pt-[790px] md:box-border">
        <div className="relative w-[11px] h-[15px] overflow-hidden shrink-0" />
        <div className="relative">Getting started</div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[4497px] left-[0px] w-[337px] flex flex-row items-start justify-center gap-[41px] z-[1] md:w-[250px] md:gap-[20px] md:pt-[1800px] md:box-border">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[50px] h-[50px] overflow-hidden shrink-0 bg-[url('/frame28@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[50px] h-[50px] overflow-hidden shrink-0 bg-[url('/frame29@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[50px] h-[50px] overflow-hidden shrink-0 bg-[url('/frame30@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[50px] h-[50px] overflow-hidden shrink-0 bg-[url('/frame31@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
      </div>
      <div className="my-0 mx-[!important] absolute top-[4601px] left-[0px] w-[111px] flex flex-row items-start justify-center z-[2] md:pt-[1770px] md:box-border">
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-33@2x.png"
        />
        <div className="relative inline-block w-[86px] shrink-0">
          Copy Right
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[153px] left-[0px] h-[79px] flex flex-row items-center justify-end gap-[434px] z-[3] text-11xl font-im-fell-english lg:w-[900px] md:w-[410px]">
        <div className="relative w-[15px] h-[38px] overflow-hidden shrink-0" />
        <div
          className="relative inline-block w-[624px] shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-6xl md:w-[400px]"
          data-animate-on-scroll
        >
          <span>{`Welcome to `}</span>
          <span className="font-black font-hanuman">ChainForge:</span>
          <span> Revolitonizing Blockchain Innovation</span>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[301px] left-[0px] w-[870px] flex flex-row items-center justify-end gap-[512px] z-[4] lg:w-[700px] md:flex md:w-[340px]">
        <div className="relative bg-white w-[21px] h-9 overflow-hidden shrink-0" />
        <img
          className="relative w-[295px] h-[266px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[17s_linear_0s_infinite_alternate-reverse_forwards_bounce-top] opacity-[1]"
          alt=""
          src="/frame-11@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[631px] left-[0px] w-[980px] flex flex-row items-start justify-end gap-[494px] z-[5] text-xl lg:w-[800px] md:w-[400px]">
        <div className="relative w-px h-[31px] overflow-hidden shrink-0" />
        <div className="relative inline-block w-[454px] shrink-0 md:text-[18px] md:w-[380px]">
          Empowering Developers to Build the Future of Decentralized
          Applications
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[766px] left-[-1px] w-[934px] flex flex-row items-end justify-end gap-[554px] z-[6] text-white lg:w-[770px] md:w-[410px]">
        <div className="relative w-px h-[38px] overflow-hidden shrink-0" />
        <div
          className="relative rounded-xl [background:linear-gradient(180deg,_#054bff,_#010920)] shadow-[0px_5px_1px_#054bff] w-[395px] h-52 overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[17px] left-[12px] inline-block w-[370px] h-[159px]">
            ChainForge is your gateway to a new era of decentralized application
            development. At ChainForge, we are dedicated to simplifying the
            complexities of blockchain development. Our mission is to provide a
            comprehensive SDK and API, allowing developers to effortlessly
            connect their applications to the blockchain and shape the future of
            decentralized technologies.
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1043px] left-[0px] w-[870px] flex flex-row items-center justify-end gap-[594px] z-[7] lg:w-[700px] md:w-[340px]">
        <div className="relative w-5 h-[93px] overflow-hidden shrink-0" />
        <img
          className="relative w-[295px] h-[266px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt=""
          src="/frame-12@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[1344px] left-[0px] w-[972px] flex flex-row items-center justify-end gap-[504px] z-[8] text-21xl font-im-fell-english-sc lg:w-[780px] lg:gap-[0px] lg:items-center lg:justify-end md:w-[360px]">
        <div className="relative w-7 h-[11px] overflow-hidden shrink-0" />
        <div className="relative md:text-11xl">Why Choose ChainForge?</div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1459px] left-[0px] w-[1471px] flex flex-row items-start justify-center gap-[170px] z-[9] lg:w-[1150px] md:flex-col md:gap-[97px] md:pl-2.5 md:pt-[50px] md:box-border">
        <div className="relative w-[392px] h-[630px]">
          <div className="absolute top-[348px] left-[0px] w-[391px] h-[251px]">
            <div className="absolute top-[100px] left-[0px] inline-block w-[391px]">
              <p className="m-0 font-black font-inknut-antiqua">
                Scalability and Performance:
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                We prioritize scalability in our platform, ensuring
                high-performance solutions for your decentralized applications.
                With ChainForge, handle increasing user loads and transaction
                volumes without compromising efficiency.
              </p>
            </div>
            <img
              className="absolute top-[0px] left-[172px] w-[50px] h-[50px] object-cover [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              alt=""
              src="/scaler-academy@2x.png"
              data-animate-on-scroll
            />
          </div>
          <div className="absolute top-[0px] left-[1px] w-[391px] h-[251px]">
            <div className="absolute top-[100px] left-[0px] inline-block w-[391px]">
              <p className="m-0 font-black font-inknut-antiqua">
                Robust SDK and API:
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Harness the power of ChainForge's robust Software Development
                Kit (SDK) and Application Programming Interface (API). Designed
                for developers of all levels, our tools offer a seamless
                experience with extensive documentation to fuel your creativity.
              </p>
            </div>
            <img
              className="absolute top-[0px] left-[172px] w-[50px] h-[50px] object-cover [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              alt=""
              src="/scaler-academy1@2x.png"
              data-animate-on-scroll
            />
          </div>
        </div>
        <div className="relative w-[392px] h-[630px]">
          <div className="absolute top-[0px] left-[0px] w-[391px] h-[251px]">
            <div className="absolute top-[100px] left-[0px] inline-block w-[391px]">
              <p className="m-0 font-black font-inknut-antiqua">
                Blockchain Agnostic:
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                ChainForge is blockchain agnostic, supporting a range of popular
                blockchain networks. This flexibility allows developers to
                choose the blockchain that best aligns with their project goals,
                ensuring compatibility and scalability.
              </p>
            </div>
            <img
              className="absolute top-[0px] left-[172px] w-[50px] h-[50px] object-cover [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              alt=""
              src="/scaler-academy2@2x.png"
              data-animate-on-scroll
            />
          </div>
          <div className="absolute top-[379px] left-[1px] w-[391px] h-[251px]">
            <div className="absolute top-[100px] left-[0px] inline-block w-[391px]">
              <p className="m-0 font-black font-inknut-antiqua">
                Security and Reliability:
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Security is our top priority. ChainForge integrates cutting-edge
                security measures to safeguard your DApps and users. Rest
                assured, our commitment to reliability means you can focus on
                innovation without worrying about the underlying infrastructure.
              </p>
            </div>
            <img
              className="absolute top-[0px] left-[172px] w-[50px] h-[50px] object-cover [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              alt=""
              src="/scaler-academy3@2x.png"
              data-animate-on-scroll
            />
          </div>
          <div className="absolute top-[61px] left-[144px] w-16 h-16" />
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[4267px] left-[2px] w-[978px] flex flex-row items-center justify-end gap-[296px] z-[10] text-xl font-hanuman lg:w-[900px] md:w-[410px] md:pl-0 md:pt-[1800px] md:box-border">
        <div className="relative w-[17px] h-[19px] overflow-hidden shrink-0" />
        <div className="relative inline-block w-[677px] shrink-0 md:text-[16px] md:w-[400px]">
          Embark on your journey with ChainForge and be a part of the
          decentralized revolution. Empower your DApp development with our
          intuitive SDK and API. Build, innovate, and create a decentralized
          future that is accessible to all.
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2189px] left-[0px] w-[870px] flex flex-row items-center justify-end gap-[568px] z-[11] lg:w-[700px] md:w-[350px] md:pt-[800px] md:box-border">
        <div className="relative w-[26px] h-[51px] overflow-hidden shrink-0" />
        <img
          className="relative w-[295px] h-[266px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt=""
          src="/frame-17@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[2694px] left-[0px] w-[1471px] flex flex-row items-start justify-center gap-[160px] z-[12] text-white lg:w-[1150px] md:flex-col md:gap-[102px] md:pl-[15px] md:pt-[800px] md:box-border">
        <div className="relative w-[395px] h-[502px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#054bff,_#000)] shadow-[0px_5px_1px_#054bff] w-[395px] h-[200px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[66px] left-[10px] inline-block w-[371px] h-[90px]">
              <p className="m-0 font-black font-inknut-antiqua">
                Create Your ChainForge Account:
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Sign up for a ChainForge account to unlock the full suite of
                development tools and resources.
              </p>
            </div>
            <img
              className="absolute top-[0px] left-[170px] w-[50px] h-[50px] object-cover [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              alt=""
              src="/scaler-academy4@2x.png"
              data-animate-on-scroll
            />
          </div>
          <div
            className="absolute top-[302px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#054bff,_#000)] shadow-[0px_5px_1px_#054bff] w-[395px] h-[200px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[50px] left-[10.5px] inline-block w-[371px] h-[134px]">
              <p className="m-0 font-black font-inknut-antiqua">
                Build Your First DApp:
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Follow our step-by-step tutorials to create and deploy your
                first decentralized application. Our guides cover a range of use
                cases, ensuring that you can bring your unique ideas to life.
              </p>
            </div>
            <img
              className="absolute top-[0px] left-[170.5px] w-[50px] h-[50px] object-cover [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              alt=""
              src="/scaler-academy5@2x.png"
              data-animate-on-scroll
            />
          </div>
        </div>
        <div className="relative w-[395px] h-[510px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#054bff,_#000)] shadow-[0px_5px_1px_#054bff] w-[395px] h-[200px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[58px] left-[10px] inline-block w-[371px] h-[134px]">
              <p className="m-0 font-black font-inknut-antiqua">
                Explore the Documentation:
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Dive into our detailed documentation to understand the
                capabilities of our SDK and API. From basic concepts to advanced
                features, we've got you covered.
              </p>
            </div>
            <img
              className="absolute top-[8px] left-[171px] w-[50px] h-[50px] object-cover [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              alt=""
              src="/scaler-academy6@2x.png"
              data-animate-on-scroll
            />
          </div>
          <div
            className="absolute top-[310px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#054bff,_#000)] shadow-[0px_5px_1px_#054bff] w-[395px] h-[200px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[50px] left-[10.5px] inline-block w-[371px] h-[134px]">
              <p className="m-0 font-black font-inknut-antiqua">
                Connect to the Blockchain:
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Use ChainForge to seamlessly connect your DApp to the
                blockchain. Whether you're working with Ethereum, Binance Smart
                Chain, or other networks, our tools make integration a breeze.
              </p>
            </div>
            <img
              className="absolute top-[0px] left-[171.5px] w-[50px] h-[50px] object-cover [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              alt=""
              src="/scaler-academy7@2x.png"
              data-animate-on-scroll
            />
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3489px] left-[0px] w-[1471px] flex flex-row items-start justify-center gap-[173px] z-[13] text-left text-inherit lg:w-[1250px] md:flex-col md:gap-[51px] md:pl-[30px] md:pt-[1350px] md:box-border">
        <div className="relative w-[395px] h-[397px]">
          <div
            className="absolute top-[0px] left-[0px] w-[395px] h-[173px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] inline-block w-[391px]">
              <p className="m-0 font-black font-inknut-antiqua">
                Phase 1: Foundation
              </p>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 pl-5">
                <li className="mb-0">
                  <span>Launch of ChainForge platform</span>
                </li>
                <li className="mb-0">
                  <span>SDK and API release</span>
                </li>
                <li>
                  <span>Community building and partnerships</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="absolute top-[224px] left-[0px] w-[395px] h-[173px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] inline-block w-[391px]">
              <p className="m-0 font-black font-inknut-antiqua">
                Phase 2: Expansion
              </p>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 pl-5">
                <li className="mb-0">
                  <span>Integration with additional blockchains</span>
                </li>
                <li className="mb-0">
                  <span>Developer grants program initiation</span>
                </li>
                <li>
                  <span>FORGE token launch</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative w-[400px] h-[397px]">
          <div
            className="absolute top-[224px] left-[0px] w-[395px] h-[173px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] inline-block w-[391px]">
              <p className="m-0 font-black font-inknut-antiqua">
                Phase 4: Ecosystem Maturity
              </p>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 pl-5">
                <li className="mb-0">
                  <span>Full-scale developer ecosystem</span>
                </li>
                <li className="mb-0">
                  <span>Advanced developer support services</span>
                </li>
                <li>
                  <span>Integration with emerging technologies</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="absolute top-[0px] left-[5px] w-[395px] h-[173px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] inline-block w-[391px]">
              <p className="m-0 font-black font-inknut-antiqua">
                Phase 3: Optimization
              </p>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 pl-5">
                <li className="mb-0">
                  <span>Continuous SDK and API enhancements</span>
                </li>
                <li className="mb-0">
                  <span>Developer-focused events and hackathons</span>
                </li>
                <li>
                  <span>Governance features rollout</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3886px] left-[-6px] w-[831px] flex flex-row items-center justify-end gap-[563px] z-[14] lg:w-[700px] md:w-[370px] md:flex-row md:pt-[1800px] md:box-border">
        <div className="relative w-[54px] h-[49px] overflow-hidden shrink-0" />
        <img
          className="relative w-[326px] h-[281px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-27@2x.png"
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[4179px] left-[0px] w-[842px] flex flex-row items-start justify-end gap-[553px] z-[15] text-11xl font-hanuman lg:w-[750px] md:w-80 md:pt-[1800px] md:box-border">
        <div className="relative w-5 h-7 overflow-hidden shrink-0" />
        <div className="relative font-black inline-block w-[360px] shrink-0 md:text-6xl md:w-[250px]">
          Join Us in Shaping the Future
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3321px] left-[2px] w-[800px] flex flex-row items-end justify-end gap-[686px] z-[16] text-21xl font-im-fell-english-sc lg:w-[650px] md:w-[280px] md:pt-[1400px] md:box-border">
        <div className="relative w-[17px] h-[26px] overflow-hidden shrink-0" />
        <div className="relative">Roadmap</div>
      </div>
      <Header />
    </div>
  );
};

export default ChainForge;
