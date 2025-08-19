import svgPaths from "./svg-zujabktrkg";

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.85)] text-left w-full">
        <p className="block leading-[24px]">새 프로필 추가</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div
      className="bg-[#1f1f1f] box-border content-stretch flex flex-col items-start justify-start p-0 relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
      data-name="Background"
    >
      <Container />
    </div>
  );
}

function Label() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14.18px] text-left w-full">
        <p className="block leading-[23.57px]">이름</p>
      </div>
    </div>
  );
}

function LabelMargin() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 pb-[3px] pt-0 px-0 right-[-0.01px] top-0"
      data-name="Label:margin"
    >
      <Label />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#999999] text-[12.086px] text-left w-full">
        <p className="block leading-[20.43px]">캐릭터가 나를 부르는 이름</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 pb-1.5 pt-0 px-0 right-[-0.01px] top-[25.75px]"
      data-name="Margin"
    >
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.25)] text-left w-full">
        <p className="block leading-[normal]">이름을 입력하세요.</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px mr-[-0.01px] order-2 overflow-clip pb-[3.24px] pt-[2.51px] px-0 relative self-stretch shrink-0"
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
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.453px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">0 / 20</p>
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

function Margin1() {
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
      className="absolute bg-[#141414] box-border content-stretch flex flex-row-reverse items-start justify-start left-0 pl-[11.625px] pr-[11.635px] py-[4.625px] right-[-0.01px] rounded-md top-[52.98px]"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md"
      />
      <Input />
      <Margin1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[84.22px] relative shrink-0 w-full" data-name="Container">
      <LabelMargin />
      <Margin />
      <BackgroundBorder />
    </div>
  );
}

function Label1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14.063px] text-left w-full">
        <p className="block leading-[23.57px]">내 정보</p>
      </div>
    </div>
  );
}

function LabelMargin1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 pb-[3px] pt-0 px-0 right-[-0.01px] top-0"
      data-name="Label:margin"
    >
      <Label1 />
    </div>
  );
}

function Container6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#999999] text-[12.086px] text-left w-full">
        <p className="block leading-[20.43px]">캐릭터가 인식하는 내 정보</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 pb-1.5 pt-0 px-0 right-[-0.01px] top-[25.75px]"
      data-name="Margin"
    >
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.016px] text-[rgba(255,255,255,0.25)] text-left w-full">
        <p className="block leading-[22px]">
          성별, 나이 등 캐릭터가 인식하는 내 정보를 입력하면 더 자연스러운
          대화를 할 수 있어요.
        </p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div
      className="basis-0 grow h-[118px] max-h-[448px] max-w-[552.01px] min-h-[118px] min-w-px relative shrink-0"
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
      className="absolute bottom-[-21.36px] box-border content-stretch flex flex-col items-start justify-start p-0 right-[0.15px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.563px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">0 / 1000</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div
      className="absolute bg-[#141414] box-border content-stretch flex flex-row items-start justify-center left-0 p-[0.625px] right-[-0.01px] rounded-md top-[52.98px]"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md"
      />
      <Textarea />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div
      className="h-[172.23px] relative shrink-0 w-full"
      data-name="Container"
    >
      <LabelMargin1 />
      <Margin2 />
      <BackgroundBorder1 />
    </div>
  );
}

function Container10() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[18px] items-start justify-start pb-[27px] pt-3 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container5 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.234px] text-[rgba(255,255,255,0.85)] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">취소</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div
      className="bg-[#141414] box-border content-stretch flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative rounded-md shrink-0"
      data-name="Component 2"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.234px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">추가</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div
      className="bg-[#dc5903] box-border content-stretch flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative rounded-md shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0"
      data-name="Component 2"
    >
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start pb-0 pl-[433.12px] pr-0 pt-[3.99px] relative w-full">
          <Component2 />
          <Component4 />
        </div>
      </div>
    </div>
  );
}

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
            clipRule="evenodd"
            d={svgPaths.pbe04e00}
            fill="var(--fill-0, white)"
            fillOpacity="0.45"
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
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative self-stretch shrink-0"
      data-name="Img - close"
    >
      <Component1 />
    </div>
  );
}

function Container14() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <ImgClose />
    </div>
  );
}

function Component3() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start pb-[7.99px] pt-2 px-0 right-[11.99px] rounded size-[31.99px] top-[11.99px]"
      data-name="Component 3"
    >
      <Container14 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div
      className="bg-[#1f1f1f] relative rounded-lg shadow-[0px_6px_16px_0px_rgba(0,0,0,0.08),0px_3px_6px_-4px_rgba(0,0,0,0.12),0px_9px_28px_8px_rgba(0,0,0,0.05)] shrink-0 w-full"
      data-name="Background+Shadow"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-6 py-5 relative w-full">
          <Background />
          <Container10 />
          <Container13 />
          <Component3 />
        </div>
      </div>
    </div>
  );
}

function Dialog() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[2368px] pb-6 pt-0 px-0 relative shrink-0 w-[600px]"
      data-name="Dialog"
    >
      <BackgroundShadow />
    </div>
  );
}

export default function Container15() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[485.35px] pt-[100px] px-0 relative size-full"
      data-name="Container"
    >
      <Dialog />
    </div>
  );
}