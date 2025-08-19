import svgPaths from "./svg-10fbnn30bm";
import imgTmp189819966 from "figma:asset/6722618c912d4432469144e3dcbfb79f33a6cded.png";

function Tmp189819966() {
  return (
    <div
      className="basis-0 bg-no-repeat bg-size-[100%_100%] bg-top-left grow h-14 min-h-px min-w-px shrink-0"
      data-name="tmp-189819966"
      style={{ backgroundImage: `url('${imgTmp189819966}')` }}
    />
  );
}

function OverlayShadow() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[23.52px] size-14 top-0"
      data-name="Overlay+Shadow"
    >
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_1px_1px_inset_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Background() {
  return (
    <div
      className="bg-[#242428] box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative rounded-[23.52px] shrink-0 size-14"
      data-name="Background"
    >
      <Tmp189819966 />
      <OverlayShadow />
    </div>
  );
}

function Margin() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-14 items-start justify-start order-2 pl-0 pr-1.5 py-0 relative shrink-0 w-[62px]"
      data-name="Margin"
    >
      <Background />
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pl-1.5 pr-0 py-0 relative w-full">
          <div className="flex flex-col font-['Apple_SD_Gothic_Neo:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.8)] text-left tracking-[-0.4px] w-full">
            <p className="block leading-[28px]">온리썰</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip pb-1 pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-4" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Component 2">
          <path
            clipRule="evenodd"
            d={svgPaths.p807e00}
            fill="var(--fill-0, white)"
            fillOpacity="0.4"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pl-1 pr-0 py-0 relative shrink-0"
      data-name="Margin"
    >
      <div className="flex flex-col font-['Apple_SD_Gothic_Neo:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">24시간 운영해요</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-[2px] relative rounded-lg shrink-0"
      data-name="Container"
    >
      <Component2 />
      <Margin1 />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center order-1 overflow-clip p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Container />
      <Container1 />
    </div>
  );
}

function Header() {
  return (
    <div
      className="box-border content-stretch flex flex-row-reverse items-start justify-start opacity-[0.01] overflow-clip p-[8px] relative shrink-0 w-[358px]"
      data-name="Header"
    >
      <Margin />
      <Container2 />
    </div>
  );
}

function Tmp372929317() {
  return (
    <div
      className="basis-0 bg-no-repeat bg-size-[100%_100%] bg-top-left grow h-[42px] min-h-px min-w-px shrink-0"
      data-name="tmp-372929317"
      style={{ backgroundImage: `url('${imgTmp189819966}')` }}
    />
  );
}

function OverlayShadow1() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[17.64px] size-[42px] top-0"
      data-name="Overlay+Shadow"
    >
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_1px_1px_inset_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Background1() {
  return (
    <div
      className="bg-[#242428] box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative rounded-[17.64px] shrink-0 size-[42px]"
      data-name="Background"
    >
      <Tmp372929317 />
      <OverlayShadow1 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Background1 />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Apple_SD_Gothic_Neo:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] text-left text-nowrap tracking-[-0.1px]">
        <p className="adjustLetterSpacing block leading-[18px] whitespace-pre">
          개발자
        </p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-1 py-0 relative shrink-0"
      data-name="Margin"
      style={{ marginRight: "-2.84217e-14px" }}
    >
      <Container4 />
    </div>
  );
}

function Margin3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pl-1.5 pr-0 py-0 relative shrink-0"
      data-name="Margin"
      style={{ marginRight: "-2.84217e-14px" }}
    >
      <div className="flex flex-col font-['Apple_SD_Gothic_Neo:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] text-left text-nowrap tracking-[-0.1px]">
        <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">
          1일 전
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Margin2 />
      <Margin3 />
    </div>
  );
}

function Container6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Apple_SD_Gothic_Neo:Regular',_sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] text-left tracking-[-0.1px] w-full">
        <p className="block mb-0">안녕하세요 앱은 아직 없고 ㅠ 현재 개발 중</p>
        <p className="block">인 상태입니다!</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-[180px] relative shrink-0"
      data-name="Container"
    >
      <div className="min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start min-w-inherit pl-0.5 pr-0 py-0 relative size-full">
          <Container5 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Noto_Sans_KR:DemiLight',_sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[13px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div
      className="bg-[#ff5c5c] box-border content-stretch flex flex-row h-5 items-center justify-center min-w-5 px-[7.02px] py-px relative rounded-[10px] shrink-0"
      data-name="Background"
    >
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center min-w-5 p-0 relative shrink-0"
      data-name="Container"
    >
      <Background2 />
    </div>
  );
}

function Container10() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-full items-center justify-center p-0 relative shrink-0"
      data-name="Container"
    >
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-start justify-start max-h-[78px] min-h-px min-w-px p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Container3 />
      <Container7 />
      <Container10 />
    </div>
  );
}

function Component4() {
  return (
    <div
      className="relative rounded-xl shrink-0 w-full"
      data-name="Component 4"
    >
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center px-1.5 py-2 relative w-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Apple_SD_Gothic_Neo:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.4)] text-left text-nowrap tracking-[-0.1px]">
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          메시지를 입력하세요.
        </p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-5" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Component 2">
          <path
            clipRule="evenodd"
            d={svgPaths.p307dcd00}
            fill="var(--fill-0, white)"
            fillOpacity="0.4"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Component8() {
  return (
    <div className="relative shrink-0 size-5" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Component 2">
          <path
            clipRule="evenodd"
            d={svgPaths.p29284d80}
            fill="var(--fill-0, white)"
            fillOpacity="0.4"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Component3 />
      <Component8 />
    </div>
  );
}

function Margin4() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-14 relative shrink-0"
      data-name="Margin"
    >
      <div className="flex flex-col items-center min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start min-w-inherit pl-[116.117px] pr-0 py-0 relative w-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.08)] relative rounded-2xl shrink-0 w-full"
      data-name="Component 5"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[8.003px] items-center justify-center pl-3.5 pr-4 py-3.5 relative w-full">
          <Container12 />
          <Margin4 />
        </div>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="relative shrink-0 size-4" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Component 2">
          <path
            clipRule="evenodd"
            d={svgPaths.p35986f00}
            fill="var(--fill-0, #3ACF5A)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Apple_SD_Gothic_Neo:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">
          몇 분 내 답변 받으실 수 있어요
        </p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Component9 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-2 pt-0 px-1 relative w-full">
          <Component5 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div
      className="bg-[#464748] box-border content-stretch flex flex-col gap-3 items-start justify-start overflow-clip p-[8px] relative rounded-[20px] shrink-0 w-[358px]"
      data-name="Section"
    >
      <Component4 />
      <Container16 />
    </div>
  );
}

function Component10() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-4"
      data-name="Component 2"
    >
      <div className="absolute inset-[8.333%]" data-name="Vector">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          role="presentation"
          viewBox="0 0 14 14"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p1fca5b00}
            fill="var(--fill-0, white)"
            fillOpacity="0.4"
            fillRule="evenodd"
            id="Vector"
          />
        </svg>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4"
      data-name="SVG"
    >
      <Component10 />
    </div>
  );
}

function SvgMargin() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-1 py-0 relative shrink-0 w-5"
      data-name="SVG:margin"
    >
      <Svg />
    </div>
  );
}

function Container17() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Apple_SD_Gothic_Neo:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">채널톡 이용중</p>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative self-stretch shrink-0"
      data-name="Component 6"
    >
      <SvgMargin />
      <Container17 />
    </div>
  );
}

function Footer() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center pb-2 pt-4 px-0 relative shrink-0 w-full"
      data-name="Footer"
    >
      <Component6 />
    </div>
  );
}

function Main() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-5 pt-0 px-0 relative shrink-0 w-full"
      data-name="Main"
    >
      <Section />
      <Footer />
    </div>
  );
}

function Container18() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-center justify-start overflow-auto pb-[348px] pt-4 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Header />
      <Main />
    </div>
  );
}

function Background3() {
  return (
    <div
      className="absolute bg-[#333333] box-border content-stretch flex flex-col items-start justify-start left-0 p-0 top-0 w-[390px]"
      data-name="Background"
    >
      <Container18 />
    </div>
  );
}

function Component11() {
  return (
    <div className="relative shrink-0 size-6" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Component 2">
          <path
            clipRule="evenodd"
            d={svgPaths.p3dcd4b00}
            fill="var(--fill-0, #FF9500)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Margin5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Margin"
    >
      <div className="flex flex-col font-['Apple_SD_Gothic_Neo:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff9500] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">홈</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px px-0 py-1 relative shrink-0"
      data-name="Component 7"
    >
      <Component11 />
      <Margin5 />
    </div>
  );
}

function Component12() {
  return (
    <div className="relative shrink-0 size-6" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Component 2">
          <path
            clipRule="evenodd"
            d={svgPaths.p29fb4e00}
            fill="var(--fill-0, white)"
            fillOpacity="0.4"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Noto_Sans_KR:DemiLight',_sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[11px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div
      className="absolute bg-[#e94e58] box-border content-stretch flex flex-row items-center justify-center left-[15px] min-w-4 px-[5px] py-0 rounded-lg size-4 top-[-4px]"
      data-name="Background"
    >
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start order-2 pb-0.5 pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <Component12 />
      <Background4 />
    </div>
  );
}

function Margin6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start order-1 pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Margin"
    >
      <div className="flex flex-col font-['Apple_SD_Gothic_Neo:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">대화</p>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-center justify-center min-h-px min-w-px px-0 py-[3px] relative shrink-0"
      data-name="Component 7"
    >
      <Container20 />
      <Margin6 />
    </div>
  );
}

function Component14() {
  return (
    <div className="relative shrink-0 size-6" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Component 2">
          <path
            clipRule="evenodd"
            d={svgPaths.p12237000}
            fill="var(--fill-0, white)"
            fillOpacity="0.4"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Margin7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Margin"
    >
      <div className="flex flex-col font-['Apple_SD_Gothic_Neo:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">설정</p>
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px px-0 py-1 relative shrink-0"
      data-name="Component 7"
    >
      <Component14 />
      <Margin7 />
    </div>
  );
}

function Nav() {
  return (
    <div
      className="absolute backdrop-blur-[15px] backdrop-filter bg-[rgba(49,50,52,0.8)] bottom-0 box-border content-stretch flex flex-row h-[60px] items-center justify-between left-0 pb-1.5 pt-1 px-1.5 w-[390px]"
      data-name="Nav"
    >
      <Component7 />
      <Component13 />
      <Component15 />
    </div>
  );
}

function HtmlBody() {
  return (
    <div
      className="basis-0 grow h-[0.01px] min-h-px min-w-px relative shrink-0"
      data-name="Html → Body"
    >
      <Background3 />
      <Nav />
    </div>
  );
}

function Iframe() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-start justify-center min-h-px min-w-px overflow-clip p-0 relative rounded-[30px] shrink-0 w-full"
      data-name="Iframe"
    >
      <HtmlBody />
    </div>
  );
}

export default function OverlayShadow2() {
  return (
    <div
      className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col items-start justify-center overflow-clip p-0 relative rounded-[30px] shadow-[0px_0px_2px_1px_rgba(0,0,0,0.08),0px_12px_60px_0px_rgba(0,0,0,0.6)] size-full"
      data-name="Overlay+Shadow"
    >
      <Iframe />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_2px_0px_inset_rgba(255,255,255,0.08)]" />
    </div>
  );
}