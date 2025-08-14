import svgPaths from "./svg-p0qi0bj4sf";
import imgSearch from "figma:asset/ef863f04724e3ed7ded20a0b62b98cd5a1b82d91.png";

function Search() {
  return (
    <div
      className="bg-no-repeat bg-size-[100%_100%] bg-top-left shrink-0 size-[16.99px]"
      data-name="search"
      style={{ backgroundImage: `url('${imgSearch}')` }}
    />
  );
}

function Container() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Search />
    </div>
  );
}

function Margin() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center pl-0 pr-1 py-0 relative self-stretch shrink-0"
      data-name="Margin"
    >
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#888888] text-[13.125px] text-left w-full">
        <p className="block leading-[normal]">ex. 판타지</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-clip pb-[10.25px] pt-[9.51px] px-0 relative self-stretch shrink-0"
      data-name="Input"
    >
      <Container1 />
    </div>
  );
}

function Background() {
  return (
    <div
      className="bg-[#2a2b2b] relative rounded-md shrink-0 w-full"
      data-name="Background"
    >
      <div className="relative size-full">
        <div
          className="box-border content-stretch flex flex-row items-start justify-start px-[11px] py-1 relative w-full"
          style={{ gap: "1.06581e-14px" }}
        >
          <Margin />
          <Input />
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div
      className="bg-[#1a1b1b] relative shrink-0 w-full"
      data-name="Background+HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#2a2b2b] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[16.625px] pt-4 px-4 relative w-full">
          <Background />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#888888] text-[15px] text-left text-nowrap">
        <p className="block leading-[25.14px] whitespace-pre">
          검색어를 입력해주세요
        </p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[300px] items-center justify-center p-0 relative shrink-0 w-[468.01px]"
      data-name="Container"
    >
      <Container2 />
    </div>
  );
}

function Background1() {
  return (
    <div
      className="bg-[#1a1b1b] box-border content-stretch flex flex-col gap-4 items-center justify-start min-h-[1038.75px] pb-[606.14px] pt-10 px-0 relative shrink-0 w-full"
      data-name="Background"
    >
      <BackgroundHorizontalBorder />
      <Container3 />
    </div>
  );
}

function Component1() {
  return (
    <div
      className="h-[24.76px] relative shrink-0 w-[103px]"
      data-name="Component 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 103 25"
      >
        <g clipPath="url(#clip0_64_829)" id="Component 1">
          <path
            d={svgPaths.p3dd3d380}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <g id="Mask group">
            <mask
              height="22"
              id="mask0_64_829"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "luminance" }}
              width="48"
              x="0"
              y="3"
            >
              <g id="Group">
                <path
                  d={svgPaths.p144b7480}
                  fill="var(--fill-0, white)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p3dd3d380}
                  fill="var(--fill-0, black)"
                  id="Vector_3"
                />
              </g>
            </mask>
            <g mask="url(#mask0_64_829)">
              <path
                d={svgPaths.p1a083700}
                fill="var(--fill-0, white)"
                id="Vector_4"
              />
            </g>
          </g>
          <path
            d={svgPaths.p333e5d00}
            fill="var(--fill-0, #FF9500)"
            id="Vector_5"
          />
          <g id="Mask group_2">
            <mask
              height="18"
              id="mask1_64_829"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "luminance" }}
              width="54"
              x="49"
              y="3"
            >
              <g id="Group_2">
                <path
                  d={svgPaths.pf225c00}
                  fill="var(--fill-0, white)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p333e5d00}
                  fill="var(--fill-0, black)"
                  id="Vector_7"
                />
              </g>
            </mask>
            <g mask="url(#mask1_64_829)">
              <path
                d={svgPaths.p3d202a72}
                fill="var(--fill-0, #FF9500)"
                id="Vector_8"
              />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_64_829">
            <rect fill="white" height="24.7596" width="103" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoSvgFill() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[24.76px] items-center justify-center overflow-clip p-0 relative shrink-0 w-[103px]"
      data-name="logo.svg fill"
    >
      <Component1 />
    </div>
  );
}

function Component() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-[103px]"
      data-name="로고"
    >
      <LogoSvgFill />
    </div>
  );
}

function Component2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-1.5 px-2.5 relative shrink-0"
      data-name="Component 2"
    >
      <div
        className="flex flex-col font-['Zapf_Dingbats:Regular',_'Noto_Sans:Regular',_sans-serif] justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[20px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}
      >
        <p className="block leading-[31.43px] whitespace-pre">✕</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start pl-0 pr-[5px] py-0 relative shrink-0"
      data-name="Container"
    >
      <Component2 />
    </div>
  );
}

function Background2() {
  return (
    <div
      className="absolute bg-[#1a1b1b] box-border content-stretch flex flex-row h-[41.99px] items-center justify-between left-0 max-w-[500px] pl-[15px] pr-0 py-0 top-0 w-[500px]"
      data-name="Background"
    >
      <Component />
      <Container4 />
    </div>
  );
}

function Background3() {
  return (
    <div
      className="bg-[#1a1b1b] box-border content-stretch flex flex-col items-start justify-start max-w-[500px] p-0 relative shrink-0 w-[500px]"
      data-name="Background"
    >
      <Background2 />
      <Background1 />
    </div>
  );
}

export default function Component2400WDefault() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-center p-0 relative size-full"
      data-name="2400w default"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
      }}
    >
      <Background3 />
    </div>
  );
}