import svgPaths from "./svg-mdgfpb1toq";
import imgThumbnail from "figma:asset/374d74b30fe73a06692e4b5c87efdada280aa447.png";
import imgStar from "figma:asset/f5e2fc191b5f12af9eff3d3b74a56a334142a4a9.png";

function Thumbnail() {
  return (
    <div
      className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[750px] shrink-0 w-full"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail}')` }}
    />
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[6.38px] pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Thumbnail />
      <div className="absolute inset-0" data-name="Gradient" />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 max-w-[500px] p-0 right-0 top-0"
      data-name="Container"
    >
      <Container />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 11 11"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p135c6400}
            fill="var(--fill-0, white)"
            fillOpacity="0.9"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgBook() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - book"
    >
      <Component1 />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[1.13px] pt-px px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgBook />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10.313px] text-[rgba(255,255,255,0.9)] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">정보</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div
      className="absolute backdrop-blur-[2.5px] backdrop-filter bg-[rgba(0,0,0,0.3)] box-border content-stretch flex flex-row gap-[3.99px] h-[31px] items-center justify-center left-[15px] px-[12.625px] py-[6.625px] rounded-[20px] top-[46px]"
      data-name="Component 2"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-4 p-0 translate-y-[-50%]"
      data-name="Container"
      style={{ top: "calc(50% + 0.065px)" }}
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.8)] text-left text-nowrap">
        <p className="block leading-[18.86px] whitespace-pre">Novel Mode</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[104.41px] p-0 translate-y-[-50%]"
      data-name="Container"
      style={{ top: "calc(50% + 0.065px)" }}
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.8)] text-left text-nowrap">
        <p className="block leading-[18.86px] whitespace-pre">Chat Mode</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="absolute left-3.5 size-[11.99px] top-[1.99px]"
      data-name="Container"
    >
      <div
        className="absolute bg-[#ffffff] inset-0 rounded-[9px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)]"
        data-name="Background+Shadow"
      />
    </div>
  );
}

function Component3() {
  return (
    <div
      className="absolute bg-[#dc5903] h-4 left-[68.41px] rounded-[100px] translate-y-[-50%] w-7"
      data-name="Component 3"
      style={{ top: "calc(50% - 0.005px)" }}
    >
      <Container6 />
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div
      className="absolute backdrop-blur-[2.5px] backdrop-filter bg-[rgba(0,0,0,0.3)] h-[34.85px] left-[33.52%] right-[33.52%] rounded-[25px] top-[46px]"
      data-name="Overlay+OverlayBlur"
    >
      <Container4 />
      <Container5 />
      <Component3 />
    </div>
  );
}

function Component6() {
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
      <Component6 />
    </div>
  );
}

function Component7() {
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
      <Component7 />
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

function Container7() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-[36.99px] px-2.5 py-0 top-[9.19px]"
      data-name="Container"
    >
      <Component />
    </div>
  );
}

function Component8() {
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
            d={svgPaths.p2602b900}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start px-3 py-0 right-[39.98px] top-[12.19px]"
      data-name="Container"
    >
      <Component8 />
    </div>
  );
}

function Component9() {
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
      <Component9 />
    </div>
  );
}

function Container9() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start pb-[5.84px] pt-[3.88px] px-[15px] right-0 top-[8.83px]"
      data-name="Container"
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
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Character() {
  return (
    <div
      className="bg-no-repeat bg-size-[100%_150%] bg-top-left rounded-[14.5px] shrink-0 size-[28.99px]"
      data-name="Character"
      style={{ backgroundImage: `url('${imgThumbnail}')` }}
    />
  );
}

function Margin() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[6.13px] pl-0 pr-[7px] pt-0 relative shrink-0"
      data-name="Margin"
    >
      <Character />
    </div>
  );
}

function Container10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#a8a8a8] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[18.85px] whitespace-pre">할시</p>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="relative shrink-0 size-[11.99px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p3e98800}
            fill="var(--fill-0, white)"
            fillOpacity="0.8"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[9.688px] text-[rgba(255,255,255,0.8)] text-left text-nowrap">
        <p className="block leading-[10px] whitespace-pre">15P</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div
      className="bg-[rgba(59,59,60,0.8)] box-border content-stretch flex flex-row gap-[3px] items-center justify-start px-1.5 py-1 relative rounded-[10px] shrink-0"
      data-name="Component 4"
    >
      <Component10 />
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[6.99px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container10 />
      <Component4 />
    </div>
  );
}

function Paragraph() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-light gap-[43.11px] items-start justify-start leading-[0] p-0 relative shrink-0 text-[13.945px] text-left text-nowrap w-full"
      data-name="Paragraph"
    >
      <div className="flex flex-col font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] italic justify-center relative shrink-0 text-[#a8a8a8]">
        <p className="block leading-[21.75px] text-nowrap whitespace-pre">
          할시는 런던의 한 카페에서 지우와 부딪힌다
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] justify-center leading-[21.75px] not-italic relative shrink-0 text-[rgba(255,255,255,0.85)] whitespace-pre">
        <p className="block mb-0">
          아 좀 보고 다녀요. 눈은 장식인가? 아니면 키가 작아서 잘 못 보
        </p>
        <p className="block">나?</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div
      className="bg-[#3b3b3c] max-w-[400px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tl-[3px] rounded-tr-[12px] shrink-0 w-full"
      data-name="Background"
    >
      <div className="max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-inherit pb-2 pt-[7.315px] px-3 relative w-full">
          <Paragraph />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start max-w-[400px] min-w-[400px] p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Container12 />
      <Background />
    </div>
  );
}

function Container14() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ gap: "1.42109e-14px" }}
    >
      <Margin />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[0.01px] pt-[5.99px] px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div
      className="absolute bottom-0 box-border content-stretch flex flex-col items-start justify-end left-0 overflow-auto pb-[65.984px] pt-[30px] px-[15px] right-0 top-[35%]"
      data-name="Container"
    >
      <Container15 />
    </div>
  );
}

function Background1() {
  return (
    <div
      className="bg-[#000000] h-[1038.75px] max-w-[500px] relative shrink-0 w-full"
      data-name="Background"
    >
      <Container1 />
      <Component2 />
      <OverlayOverlayBlur />
      <OverlayHorizontalBorder />
      <Container16 />
    </div>
  );
}

function Component11() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p3e5ba480}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgThunderbolt() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - thunderbolt"
    >
      <Component11 />
    </div>
  );
}

function Container17() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[1.25px] pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgThunderbolt />
    </div>
  );
}

function Component5() {
  return (
    <div
      className="bg-[#141414] box-border content-stretch flex flex-row items-center justify-center min-w-8 px-2 py-0 relative rounded-[18px] shrink-0 size-[35.99px]"
      data-name="Component 5"
    >
      <Container17 />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[35.99px] items-end justify-start min-w-9 pl-0 pr-1 py-0 relative shrink-0 w-[39.99px]"
      data-name="Button:margin"
    >
      <Component5 />
    </div>
  );
}

function Container18() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[14.063px] text-[rgba(255,255,255,0.25)] text-left w-full">
        <p className="block leading-[23.57px]">메시지 보내기</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div
      className="h-7 max-h-7 max-w-[356.04px] min-h-7 relative rounded-md shrink-0 w-full"
      data-name="Textarea"
    >
      <div className="flex flex-row justify-center max-h-inherit max-w-inherit min-h-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-7 items-start justify-center max-h-inherit max-w-inherit min-h-inherit px-2 py-0.5 relative w-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px pb-1 pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <Textarea />
    </div>
  );
}

function Star() {
  return (
    <div
      className="bg-left bg-no-repeat bg-size-[100%_99.92%] h-3 shrink-0 w-[11.99px]"
      data-name="star"
      style={{ backgroundImage: `url('${imgStar}')` }}
    />
  );
}

function Container20() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[3.12px] pt-[1.13px] px-0 relative shrink-0"
      data-name="Container"
    >
      <Star />
    </div>
  );
}

function Button() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[35.99px] items-center justify-center min-w-8 px-2 py-0 relative rounded-[17px] shrink-0 w-8"
      data-name="Button"
    >
      <Container20 />
    </div>
  );
}

function Component12() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <g id="Component 1">
          <path d={svgPaths.p5ad8f00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImgSend() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - send"
    >
      <Component12 />
    </div>
  );
}

function Container21() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[1.25px] pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgSend />
    </div>
  );
}

function Component13() {
  return (
    <div
      className="bg-[#dc5903] box-border content-stretch flex flex-row items-center justify-center min-w-8 px-[8.625px] py-[0.625px] relative rounded-[18px] shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0 size-[35.99px]"
      data-name="Component 5"
    >
      <Container21 />
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[35.99px] items-start justify-start min-w-9 pl-1 pr-0 py-0 relative shrink-0 w-[39.99px]"
      data-name="Button:margin"
    >
      <Component13 />
    </div>
  );
}

function Container22() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Button />
      <ButtonMargin1 />
    </div>
  );
}

function Background2() {
  return (
    <div
      className="bg-[#2a2a2a] relative rounded-[25px] shrink-0 w-full"
      data-name="Background"
    >
      <div className="flex flex-row items-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-end justify-start px-2 py-1.5 relative w-full">
          <ButtonMargin />
          <Container19 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div
      className="absolute bottom-[5px] box-border content-stretch flex flex-col items-start justify-start left-[950px] max-w-[500px] px-2 py-0 w-[500px]"
      data-name="Container"
    >
      <Background2 />
    </div>
  );
}

export default function Background3() {
  return (
    <div className="bg-[#000000] relative size-full" data-name="Background">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-[950px] py-0 relative size-full">
          <Background1 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}