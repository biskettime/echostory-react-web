import svgPaths from "./svg-dk96dgb4cb";

function Heading3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16.734px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">대화 설정</p>
      </div>
    </div>
  );
}

function Component1() {
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
            clipRule="evenodd"
            d={svgPaths.p22860200}
            fill="var(--fill-0, #CCCCCC)"
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
      <Component1 />
    </div>
  );
}

function Component6() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-[4px] relative shrink-0"
      data-name="Component 6"
    >
      <ImgClose />
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div
      className="bg-[#1f1f1f] relative shrink-0 w-full"
      data-name="Background+HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_0.625px] border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pb-[16.625px] pt-4 px-[23.99px] relative w-full">
          <Heading3 />
          <Component6 />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[3.99px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap"
      data-name="Paragraph"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center relative shrink-0 text-[#cccccc] text-[13.891px]">
        <p className="block leading-[14px] text-nowrap whitespace-pre">{`내 포인트: `}</p>
      </div>
      <div className="flex flex-col font-['Inter:Light',_sans-serif] font-light justify-center relative shrink-0 text-[#ffffff] text-[13.563px]">
        <p className="block leading-[14px] text-nowrap whitespace-pre">186P</p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div
      className="bg-[#2a2a2a] relative shrink-0 w-full"
      data-name="Background+HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_0.625px] border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start pb-[12.625px] pt-3 px-6 relative w-full">
          <Paragraph />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="basis-0 flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#999999] text-[11.25px] text-left tracking-[0.5px] uppercase">
        <p className="block leading-[12px]">내 프로필</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.234px] text-left w-full">
        <p className="block leading-[18.2px]">지우</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="h-[16.8px] overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] left-0 not-italic text-[#999999] text-[11.25px] text-left top-[7.81px] translate-y-[-50%] w-[54.96px]">
        <p className="block leading-[16.8px]">정보 미입력</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[7.255px] grow items-start justify-start min-h-px min-w-px mr-[-0.01px] p-0 relative shrink-0"
      data-name="Container"
    >
      <Container />
      <Container3 />
    </div>
  );
}

function Component4() {
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
            d={svgPaths.p3214e000}
            fill="var(--fill-0, #CCCCCC)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgEdit() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - edit"
    >
      <Component4 />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[1.64px] pt-[0.75px] px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgEdit />
    </div>
  );
}

function Container6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cccccc] text-[11.25px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">수정</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div
      className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center px-[12.625px] py-[0.625px] relative rounded shrink-0"
      data-name="Component 2"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container5 />
      <Container6 />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-7 items-start justify-start mr-[-0.01px] pl-3 pr-0 py-0 relative shrink-0"
      data-name="Button:margin"
    >
      <Component2 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div
      className="bg-[#2a2a2a] relative rounded-lg shrink-0 w-full"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-lg"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-between pl-[16.63px] pr-[16.62px] py-[12.625px] relative w-full">
          <Container4 />
          <ButtonMargin />
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="relative shrink-0 size-[13.99px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p382edc00}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgPicture() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - picture"
    >
      <Component5 />
    </div>
  );
}

function ImgPictureMargin() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-2 py-0 relative shrink-0"
      data-name="Img - picture:margin"
    >
      <ImgPicture />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ gap: "7.10543e-15px" }}
    >
      <ImgPictureMargin />
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.125px] text-left text-nowrap">
        <p className="block leading-[14px] whitespace-pre">배경 이미지</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#999999] text-[11.25px] text-left w-full">
        <p className="block leading-[15.6px]">
          스토리에 맞는 배경 이미지를 표시합니다
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[3.18px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div
      className="absolute left-[13.99px] size-[11.99px] top-[1.99px]"
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
      className="bg-[#dc5903] h-4 min-w-7 relative rounded-[100px] shrink-0 w-7"
      data-name="Component 3"
    >
      <Container10 />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div
      className="bg-[#2a2a2a] relative rounded-lg shrink-0 w-full"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-lg"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pl-[16.63px] pr-[16.61px] py-[12.625px] relative w-full">
          <Container9 />
          <Component3 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#999999] text-[11.25px] text-left tracking-[0.5px] uppercase w-full">
        <p className="block leading-[12px]">현재 목소리</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[5.99px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[13.234px] text-left text-nowrap w-full"
      data-name="Paragraph"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center relative shrink-0 text-[#ffffff]">
        <p className="block leading-[18.2px] text-nowrap whitespace-pre">
          혜원
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center relative shrink-0 text-[#999999]">
        <p className="block leading-[18.2px] text-nowrap whitespace-pre">
          #밝음
        </p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[7.255px] grow items-start justify-start min-h-px min-w-px mr-[-0.01px] p-0 relative shrink-0"
      data-name="Container"
    >
      <Container11 />
      <Paragraph1 />
    </div>
  );
}

function Component8() {
  return (
    <div className="relative shrink-0 size-[11.99px]" data-name="Component 1">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.02%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 12 12"
        >
          <g id="Component 1">
            <path
              d={svgPaths.p1f6c3000}
              fill="var(--fill-0, #CCCCCC)"
              id="Vector"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ImgSetting() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - setting"
    >
      <Component8 />
    </div>
  );
}

function Container13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[1.64px] pt-[0.75px] px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgSetting />
    </div>
  );
}

function Container14() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cccccc] text-[11.25px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">변경</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div
      className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center px-[12.625px] py-[0.625px] relative rounded shrink-0"
      data-name="Component 2"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container13 />
      <Container14 />
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-7 items-start justify-start mr-[-0.01px] pl-3 pr-0 py-0 relative shrink-0"
      data-name="Button:margin"
    >
      <Component9 />
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div
      className="bg-[#2a2a2a] relative rounded-lg shrink-0 w-full"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-lg"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pl-[16.63px] pr-[16.62px] py-[12.625px] relative w-full">
          <Container12 />
          <ButtonMargin1 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div
      className="bg-[#1f1f1f] relative shrink-0 w-full"
      data-name="Background"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[24px] relative w-full">
          <BackgroundBorder />
          <BackgroundBorder1 />
          <BackgroundBorder2 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <BackgroundHorizontalBorder />
      <BackgroundHorizontalBorder1 />
      <Background />
    </div>
  );
}

function Container16() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[0.565px] pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12.289px] text-gray-300 text-left text-nowrap tracking-[0.5px] uppercase">
        <p className="adjustLetterSpacing block leading-[13px] whitespace-pre">
          포인트 사용 안내
        </p>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="relative shrink-0 size-[13.99px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p23d9b700}
            fill="var(--fill-0, #D1D5DB)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Component7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 7">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pl-[23.99px] pr-6 py-4 relative w-full">
          <Container16 />
          <Component10 />
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder2() {
  return (
    <div
      className="bg-neutral-800 box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[0.625px] px-0 relative shrink-0 w-full"
      data-name="Background+HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0.625px_0px_0px] border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none"
      />
      <Component7 />
    </div>
  );
}

export default function Dialog() {
  return (
    <div
      className="bg-[#1f1f1f] box-border content-stretch flex flex-col items-start justify-between p-0 relative size-full"
      data-name="Dialog"
    >
      <Container15 />
      <BackgroundHorizontalBorder2 />
    </div>
  );
}