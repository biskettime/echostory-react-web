import svgPaths from "./svg-gnr00459mn";
import imgBackground from "figma:asset/acfdb3e486aeba43703c6d7bbdcbff7c157c3c10.png";

function Background() {
  return (
    <div
      className="bg-no-repeat bg-size-[141.17%_100%] bg-top h-[1058.75px] shrink-0 w-full"
      data-name="background"
      style={{ backgroundImage: `url('${imgBackground}')` }}
    />
  );
}

function Container() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 max-w-[500px] p-0 right-0 top-0"
      data-name="Container"
    >
      <Background />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[16.99px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 17"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p1b154bc0}
            fill="var(--fill-0, white)"
            fillOpacity="0.85"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgLeft() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-[15px] p-0 top-[12.71px]"
      data-name="Img - left"
    >
      <Component1 />
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 26 26"
      >
        <g id="Component 1">
          <path
            clipRule="evenodd"
            d={svgPaths.pf929200}
            fill="var(--fill-0, #F5F6F6)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function HomeIconSvgFill() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-[26px]"
      data-name="home-icon.svg fill"
    >
      <Component3 />
    </div>
  );
}

function Component() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 size-[26px]"
      data-name="홈"
    >
      <HomeIconSvgFill />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-[36.99px] px-2.5 py-0 top-[9.19px]"
      data-name="Container"
    >
      <Component />
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-5" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p18fe7480}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            d={svgPaths.p33866f00}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start px-3 py-0 right-[39.98px] top-[12.19px]"
      data-name="Container"
    >
      <Component4 />
    </div>
  );
}

function Component5() {
  return (
    <div className="relative shrink-0 size-[16.99px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 17"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p3fb3d600}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgMenu() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - menu"
    >
      <Component5 />
    </div>
  );
}

function Component2() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start pb-[5.84px] pt-[3.88px] px-[15px] right-0 top-[8.83px]"
      data-name="Component 2"
    >
      <ImgMenu />
    </div>
  );
}

function OverlayHorizontalBorder() {
  return (
    <div
      className="absolute bg-[rgba(66,66,66,0.5)] h-10 left-0 right-0 top-0"
      data-name="Overlay+HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#424242] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none"
      />
      <ImgLeft />
      <Container1 />
      <Container2 />
      <Component2 />
    </div>
  );
}

function Component6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Component 1">
          <path
            clipRule="evenodd"
            d={svgPaths.pabf1180}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgClose() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - close"
    >
      <Component6 />
    </div>
  );
}

function Component7() {
  return (
    <div
      className="backdrop-blur-[5px] backdrop-filter bg-[rgba(0,0,0,0.7)] box-border content-stretch flex flex-row h-[43.99px] items-center justify-center p-[1.875px] relative rounded-[22px] shrink-0 w-11"
      data-name="Component 2"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[22px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.3)]"
      />
      <ImgClose />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="absolute bottom-[30px] box-border content-stretch flex flex-row items-center justify-start left-[45.6%] p-0 right-[45.6%]"
      data-name="Container"
    >
      <Component7 />
    </div>
  );
}

function Background1() {
  return (
    <div
      className="bg-[#000000] h-[1058.75px] max-w-[500px] relative shrink-0 w-full"
      data-name="Background"
    >
      <Container />
      <OverlayHorizontalBorder />
      <Container3 />
    </div>
  );
}

export default function Background2() {
  return (
    <div className="bg-[#000000] relative size-full" data-name="Background">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-[516.25px] py-0 relative size-full">
          <Background1 />
        </div>
      </div>
    </div>
  );
}