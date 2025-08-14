import svgPaths from "./svg-t233w3l28q";

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.234px] text-[rgba(255,255,255,0.85)] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">수정</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div
      className="bg-[#141414] box-border content-stretch flex flex-row h-8 items-center justify-center px-4 py-px relative rounded-md shrink-0"
      data-name="Component 1"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-8 items-start justify-start pl-3 pr-0 py-0 relative shrink-0"
      data-name="Button:margin"
    >
      <Component1 />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22.5px] text-[rgba(255,255,255,0.95)] text-left text-nowrap tracking-[-0.5px]">
        <p className="adjustLetterSpacing block leading-[37.71px] whitespace-pre">
          @rooster_M7bX
        </p>
      </div>
      <ButtonMargin />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container1 />
    </div>
  );
}

function Heading2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Heading 2"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[18.594px] text-[rgba(255,255,255,0.95)] text-left text-nowrap tracking-[-0.5px]">
        <p className="adjustLetterSpacing block leading-[31.43px] whitespace-pre">
          제작한 스토리
        </p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16.203px] text-[rgba(255,255,255,0.6)] text-left text-nowrap">
        <p className="block leading-[26.71px] whitespace-pre">0개</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading2 />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.063px] text-[rgba(255,255,255,0.5)] text-center w-full">
        <p className="block leading-[23.57px]">
          아직 제작한 스토리가 없습니다.
        </p>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div
      className="bg-[rgba(30,30,30,0.4)] relative rounded-xl shrink-0 w-full"
      data-name="Overlay+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(60,60,60,0.16)] border-solid inset-0 pointer-events-none rounded-xl"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-[21px] py-[81px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container4 />
      <OverlayBorder />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[33.855px] items-start justify-start pb-[50px] pt-[60px] px-[15px] relative w-full">
          <Container2 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-6" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 24 24"
      >
        <g id="Component 2">
          <path
            clipRule="evenodd"
            d={svgPaths.p14082df0}
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
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-6"
      data-name="home-icon.svg fill"
    >
      <Component2 />
    </div>
  );
}

function HomeIconSvg() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-6 items-start justify-start mb-[-2.145px] overflow-clip p-0 relative shrink-0"
      data-name="home-icon.svg"
    >
      <HomeIconSvgFill />
    </div>
  );
}

function Margin() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mb-[-2.145px] p-0 relative shrink-0"
      data-name="Margin"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.55)] text-left text-nowrap">
        <p className="block leading-[15.71px] whitespace-pre">홈</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-center justify-start min-h-px min-w-px pb-[4.145px] pt-[5px] px-0 relative shrink-0"
      data-name="Link"
    >
      <HomeIconSvg />
      <Margin />
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-6" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 24 24"
      >
        <g id="Component 2">
          <path
            clipRule="evenodd"
            d={svgPaths.p16595d80}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p395aeb80}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_2"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p9b90f40}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function CreateIconSvgFill() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-6"
      data-name="create-icon.svg fill"
    >
      <Component3 />
    </div>
  );
}

function CreateIconSvg() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-6 items-start justify-start mb-[-2.145px] overflow-clip p-0 relative shrink-0"
      data-name="create-icon.svg"
    >
      <CreateIconSvgFill />
    </div>
  );
}

function Margin1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mb-[-2.145px] p-0 relative shrink-0"
      data-name="Margin"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[9.375px] text-[rgba(255,255,255,0.55)] text-left text-nowrap">
        <p className="block leading-[15.71px] whitespace-pre">제작</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-center justify-start min-h-px min-w-px pb-[4.145px] pt-[5px] px-0 relative shrink-0"
      data-name="Link"
    >
      <CreateIconSvg />
      <Margin1 />
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-6" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 24 24"
      >
        <g id="Component 2">
          <path
            clipRule="evenodd"
            d={svgPaths.p30606300}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p270b3200}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function MypageIconSvgFill() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-6"
      data-name="mypage-icon.svg fill"
    >
      <Component4 />
    </div>
  );
}

function MypageIconSvg() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-6 items-start justify-start mb-[-2.145px] overflow-clip p-0 relative shrink-0"
      data-name="mypage-icon.svg"
    >
      <MypageIconSvgFill />
    </div>
  );
}

function Margin2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mb-[-2.145px] p-0 relative shrink-0"
      data-name="Margin"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[9.375px] text-[rgba(255,255,255,0.55)] text-left text-nowrap">
        <p className="block leading-[15.71px] whitespace-pre">마이페이지</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-center justify-start min-h-px min-w-px pb-[4.145px] pt-[5px] px-0 relative shrink-0"
      data-name="Link"
    >
      <MypageIconSvg />
      <Margin2 />
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div
      className="absolute bg-[#1a1b1b] bottom-0 box-border content-stretch flex flex-row items-center justify-center left-0 max-w-[500px] pb-px pt-0 px-0 w-[500px]"
      data-name="Background+HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#424242] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Component5() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 17"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p25df6b00}
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
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - left"
    >
      <Component5 />
    </div>
  );
}

function Container8() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 pb-[5.58px] pt-[4.13px] px-[15px] translate-y-[-50%]"
      data-name="Container"
      style={{ top: "calc(50% - 0.505px)" }}
    >
      <ImgLeft />
    </div>
  );
}

function Margin3() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[232.59px] pb-[1.25px] pt-0 px-0 top-[7.25px]"
      data-name="Margin"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">내 프로필</p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div
      className="absolute bg-[#1a1b1b] h-10 left-0 max-w-[500px] top-0 w-[500px]"
      data-name="Background+HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#424242] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Container8 />
      <Margin3 />
    </div>
  );
}

function Background() {
  return (
    <div
      className="bg-[#1a1b1b] box-border content-stretch flex flex-col items-start justify-start max-w-[500px] pb-[529.3px] pt-0 px-0 relative shrink-0 w-[500px]"
      data-name="Background"
    >
      <BackgroundHorizontalBorder />
      <BackgroundHorizontalBorder1 />
      <Container7 />
    </div>
  );
}

export default function Background1() {
  return (
    <div
      className="bg-[#000000] box-border content-stretch flex flex-row items-center justify-center p-0 relative size-full"
      data-name="Background"
    >
      <Background />
    </div>
  );
}