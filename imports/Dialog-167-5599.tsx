import svgPaths from "./svg-ti3q4wobx0";

function Component1() {
  return (
    <div className="relative shrink-0 size-4" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p2b8166b0}
            fill="var(--fill-0, #CCCCCC)"
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
      <ImgLeft />
    </div>
  );
}

function Heading3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16.734px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">프로필 수정</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Component6 />
      <Heading3 />
    </div>
  );
}

function Component2() {
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
      <Component2 />
    </div>
  );
}

function Component10() {
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
          <Container />
          <Component10 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[0.565px] pt-0 px-0 relative shrink-0 w-full"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cccccc] text-[12.391px] text-left tracking-[0.5px] uppercase w-full">
        <p className="block leading-[13px]">닉네임</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[8.79px] pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[11.063px] text-left w-full">
        <p className="block leading-[15.6px]">캐릭터가 나를 부르는 이름</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-auto p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.234px] text-left w-full">
        <p className="block leading-[22px]">지우</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px mr-[-0.01px] order-2 overflow-clip p-0 relative self-stretch shrink-0"
      data-name="Input"
    >
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#999999] text-[11.438px] text-left text-nowrap">
        <p className="block leading-[18.86px] whitespace-pre">2 / 20</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container3 />
    </div>
  );
}

function Margin() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center mr-[-0.01px] order-1 pl-1 pr-0 py-0 relative self-stretch shrink-0"
      data-name="Margin"
    >
      <Container4 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div
      className="bg-[#2a2a2a] relative rounded-md shrink-0 w-full"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-md"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row-reverse items-start justify-start pl-[11.625px] pr-[11.635px] py-[4.625px] relative w-full">
          <Input />
          <Margin />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.2px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Label />
      <Container1 />
      <BackgroundBorder />
    </div>
  );
}

function Label1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[0.565px] pt-0 px-0 relative shrink-0 w-full"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cccccc] text-[12.391px] text-left tracking-[0.5px] uppercase w-full">
        <p className="block leading-[13px]">내 정보</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[11.063px] text-left w-full">
        <p className="block leading-[15.6px]">캐릭터가 인식하는 내 정보</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[22px] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.25)] text-left w-full">
        <p className="block mb-0">
          성별, 나이 등 캐릭터가 인식하는 내 정보를 입력하
        </p>
        <p className="block">면 더 자연스러운 대화를 할 수 있어요.</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div
      className="basis-0 grow h-[118px] max-h-[448px] max-w-[302.01px] min-h-[118px] min-w-px relative shrink-0"
      data-name="Textarea"
    >
      <div className="max-h-inherit max-w-inherit min-h-inherit overflow-x-auto overflow-y-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[118px] items-start justify-start max-h-inherit max-w-inherit min-h-inherit px-[11px] py-1 relative w-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="absolute bottom-[-21.51px] box-border content-stretch flex flex-col items-start justify-start p-0 right-[-0.36px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#999999] text-[11.438px] text-left text-nowrap">
        <p className="block leading-[18.86px] whitespace-pre">0 / 1000</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div
      className="bg-[#2a2a2a] relative rounded-md shrink-0 w-full"
      data-name="Component 7"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-md"
      />
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center pb-[0.625px] pt-[9.415px] px-[0.625px] relative w-full">
          <Textarea />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.2px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Label1 />
      <Container6 />
      <Component7 />
    </div>
  );
}

function Container10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cccccc] text-[13.234px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">취소</p>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div
      className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative rounded-md shrink-0"
      data-name="Component 8"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.234px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">저장</p>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div
      className="bg-[#dc5903] box-border content-stretch flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative rounded-md shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0"
      data-name="Component 8"
    >
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[11.99px] items-start justify-end pb-0 pt-[12.59px] px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Component8 />
      <Component11 />
    </div>
  );
}

function Container13() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[19.4px] items-start justify-start pb-2 pt-[7.435px] px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container5 />
      <Container9 />
      <Container12 />
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
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[24px] relative w-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <BackgroundHorizontalBorder />
      <Background />
    </div>
  );
}

function Container15() {
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

function Component3() {
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
            d={svgPaths.p15e0a580}
            fill="var(--fill-0, #D1D5DB)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Component9() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Component 9"
      style={{ marginBottom: "-1.06581e-13px" }}
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pl-[23.99px] pr-6 py-4 relative w-full">
          <Container15 />
          <Component3 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[0.565px] pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cccccc] text-[12.188px] text-left text-nowrap">
        <p className="block leading-[13px] whitespace-pre">AI 답변 생성</p>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div
      className="bg-[rgba(76,175,80,0.1)] box-border content-stretch flex flex-col items-start justify-start px-[8.625px] py-[2.625px] relative rounded-xl shrink-0"
      data-name="Overlay+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(76,175,80,0.04)] border-solid inset-0 pointer-events-none rounded-xl"
      />
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4caf50] text-[12.695px] text-left text-nowrap">
        <p className="block leading-[13px] whitespace-pre">5P</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between px-0 py-1.5 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container16 />
      <OverlayBorder />
    </div>
  );
}

function Container18() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[0.555px] pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cccccc] text-[12.188px] text-left text-nowrap">
        <p className="block leading-[13px] whitespace-pre">다음 메시지 제안</p>
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div
      className="bg-[rgba(76,175,80,0.1)] box-border content-stretch flex flex-col items-start justify-start px-[8.625px] py-[2.625px] relative rounded-xl shrink-0"
      data-name="Overlay+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(76,175,80,0.04)] border-solid inset-0 pointer-events-none rounded-xl"
      />
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4caf50] text-[12.695px] text-left text-nowrap">
        <p className="block leading-[13px] whitespace-pre">3P</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-0 py-1.5 relative w-full">
          <Container18 />
          <OverlayBorder1 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-1.06581e-13px" }}
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[8.01px] items-start justify-start pb-2 pt-1.5 px-6 relative w-full">
          <Container17 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div
      className="bg-neutral-800 box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[0.625px] px-0 relative shrink-0 w-full"
      data-name="Background+HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0.625px_0px_0px] border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none"
      />
      <Component9 />
      <Container20 />
    </div>
  );
}

export default function Dialog() {
  return (
    <div
      className="bg-[#1f1f1f] box-border content-stretch flex flex-col items-start justify-between p-0 relative size-full"
      data-name="Dialog"
    >
      <Container14 />
      <BackgroundHorizontalBorder1 />
    </div>
  );
}