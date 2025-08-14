import svgPaths from "./svg-y2nhw0peg3";

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.85)] text-left w-full">
        <p className="block leading-[24px]">스토리 수정</p>
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

function Margin() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mr-[-0.01px] pl-0 pr-1 py-0 relative shrink-0"
      data-name="Margin"
    >
      <div className="flex flex-col font-['Apple_SD_Gothic_Neo:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dc4446] text-[14px] text-left text-nowrap">
        <p className="block leading-[14px] whitespace-pre">*</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start max-w-[472.01px] pl-0 pr-[13.69px] py-0 relative shrink-0"
      data-name="Label"
    >
      <Margin />
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">스토리 설정</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[472.01px] min-h-px overflow-clip pb-2 pt-[0.635px] px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Label />
    </div>
  );
}

function Paragraph() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal gap-[22.01px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap w-full"
      data-name="Paragraph"
    >
      <div className="flex flex-col justify-center leading-[22px] relative shrink-0 whitespace-pre">
        <p className="block mb-0">{`할시.레이슨 키 170 영국인여성 말랐지만 탄탄한 근육질 몸매 선명한 복근 예쁜얼굴 `}</p>
        <p className="block mb-0">{`그러나 성격은 악하고 싸가지없고 거만하고 자존심이 강하다 그리고 심지어 부잣집 `}</p>
        <p className="block">
          딸내미 그리고 직업은 아버지회사에서 경영직을 맡고있다 카페에 자주간다
        </p>
      </div>
      <div className="flex flex-col justify-center leading-[22px] relative shrink-0 whitespace-pre">
        <p className="block mb-0">{`그리고 {{user}}는 오토바이 라이더이고 여행자다 그리고 할시는{{user}} 와 우연`}</p>
        <p className="block">히 만나는 날이 잦아진다</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div
      className="basis-0 grow h-[140px] max-h-[140px] max-w-[472.01px] min-h-[74px] min-w-px relative shrink-0"
      data-name="Textarea"
    >
      <div className="max-h-inherit max-w-inherit min-h-inherit overflow-x-auto overflow-y-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[140px] items-start justify-start max-h-inherit max-w-inherit min-h-inherit px-[11px] py-1 relative w-full">
          <Paragraph />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="absolute bottom-[-21.36px] box-border content-stretch flex flex-col items-start justify-start p-0 right-[0.43px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.563px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">194 / 2000</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div
      className="bg-[#141414] relative rounded-md shrink-0 w-full"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md"
      />
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center p-[0.625px] relative w-full">
          <Textarea />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[472.01px] min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <BackgroundBorder />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center min-h-8 p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ gap: "3.55271e-15px" }}
    >
      <Container1 />
      <Container4 />
    </div>
  );
}

function Margin1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mr-[-0.01px] pl-0 pr-1 py-0 relative shrink-0"
      data-name="Margin"
    >
      <div className="flex flex-col font-['Apple_SD_Gothic_Neo:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dc4446] text-[14px] text-left text-nowrap">
        <p className="block leading-[14px] whitespace-pre">*</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start max-w-[472.01px] pl-0 pr-[13.69px] py-0 relative shrink-0"
      data-name="Label"
    >
      <Margin1 />
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">캐릭터 이름</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[472.01px] min-h-px overflow-clip pb-2 pt-[0.635px] px-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-1.06581e-14px" }}
    >
      <Label1 />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-auto p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.234px] text-[rgba(255,255,255,0.85)] text-left w-full">
        <p className="block leading-[22px]">할시</p>
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
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.344px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">2 / 10</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container8 />
    </div>
  );
}

function Margin2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center mr-[-0.01px] order-1 pl-1 pr-0 py-0 relative self-stretch shrink-0"
      data-name="Margin"
    >
      <Container9 />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div
      className="bg-[#141414] relative rounded-md shrink-0 w-full"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row-reverse items-start justify-start pl-[11.625px] pr-[11.635px] py-[4.625px] relative w-full">
          <Input />
          <Margin2 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[472.01px] min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <BackgroundBorder1 />
    </div>
  );
}

function Container11() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center min-h-8 pb-[0.38px] pt-[0.37px] px-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-1.06581e-14px" }}
    >
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container6 />
      <Container11 />
    </div>
  );
}

function Margin3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mr-[-0.01px] pl-0 pr-1 py-0 relative shrink-0"
      data-name="Margin"
    >
      <div className="flex flex-col font-['Apple_SD_Gothic_Neo:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dc4446] text-[14px] text-left text-nowrap">
        <p className="block leading-[14px] whitespace-pre">*</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start max-w-[472.01px] pl-0 pr-[13.69px] py-0 relative shrink-0"
      data-name="Label"
    >
      <Margin3 />
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">캐릭터 설명</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[472.01px] min-h-px overflow-clip pb-2 pt-[0.635px] px-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-1.06581e-14px" }}
    >
      <Label2 />
    </div>
  );
}

function Container14() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[22px] not-italic relative shrink-0 text-[13.016px] text-[rgba(255,255,255,0.85)] text-left w-full">
        <p className="block mb-0">
          할시는 악하고 싸가지없고 자존심 강해도 마음은 여리다
        </p>
        <p className="block">그러나 속마음은 잘 표현을 못한다</p>
      </div>
    </div>
  );
}

function Textarea1() {
  return (
    <div
      className="basis-0 grow h-[74px] max-h-[118px] max-w-[472.01px] min-h-[74px] min-w-px relative shrink-0"
      data-name="Textarea"
    >
      <div className="max-h-inherit max-w-inherit min-h-inherit overflow-x-auto overflow-y-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[74px] items-start justify-start max-h-inherit max-w-inherit min-h-inherit px-[11px] py-1 relative w-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="absolute bottom-[-21.37px] box-border content-stretch flex flex-col items-start justify-start p-0 right-[-0.38px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.672px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">48 / 500</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div
      className="bg-[#141414] relative rounded-md shrink-0 w-full"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md"
      />
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center p-[0.625px] relative w-full">
          <Textarea1 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[472.01px] min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <BackgroundBorder2 />
    </div>
  );
}

function Container17() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center min-h-8 p-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-1.06581e-14px" }}
    >
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container13 />
      <Container17 />
    </div>
  );
}

function Form() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Form"
    >
      <Container5 />
      <Container12 />
      <Container18 />
    </div>
  );
}

function Container19() {
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
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.125px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">
          수정하고 대화하기
        </p>
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
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start pb-0 pl-[277.1px] pr-0 pt-[27.99px] relative w-full">
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

function Container22() {
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
      <Container22 />
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
        <div className="box-border content-stretch flex flex-col gap-[13px] items-start justify-start px-6 py-5 relative w-full">
          <Background />
          <Form />
          <Container21 />
          <Component3 />
        </div>
      </div>
    </div>
  );
}

function Dialog() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[2368px] pb-2.5 pt-0 px-0 relative shrink-0 w-[520px]"
      data-name="Dialog"
    >
      <BackgroundShadow />
    </div>
  );
}

export default function Container23() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[479.29px] pt-2.5 px-0 relative size-full"
      data-name="Container"
    >
      <Dialog />
    </div>
  );
}