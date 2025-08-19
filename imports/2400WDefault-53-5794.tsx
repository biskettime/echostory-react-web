import svgPaths from "./svg-vuiau4i4ke";

function Component1() {
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
            clipRule="evenodd"
            d={svgPaths.p1cd36a80}
            fill="var(--fill-0, #FF9500)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgExport() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - export"
    >
      <Component1 />
    </div>
  );
}

function Overlay() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-row gap-[1.99px] items-center justify-start pb-[3.115px] pt-[3.125px] px-2.5 relative rounded shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ff9500] text-[13.453px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">{`스토리 제작 가이드 `}</p>
      </div>
      <ImgExport />
    </div>
  );
}

function Container() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Overlay />
    </div>
  );
}

function Link() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0 w-full"
      data-name="Link"
    >
      <Container />
    </div>
  );
}

function Tab() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Tab"
    >
      <div className="[text-shadow:#dc5903_0px_0px_0.25px] flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dc5903] text-[13.234px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">내용</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-full items-center justify-start px-0 py-3 relative shrink-0"
      data-name="Component 2"
    >
      <Tab />
    </div>
  );
}

function Tab1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Tab"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">시작상황</p>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px px-0 py-3 relative shrink-0"
      data-name="Component 2"
    >
      <Tab1 />
    </div>
  );
}

function Margin() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-start justify-center pl-8 pr-0 py-0 relative shrink-0"
      data-name="Margin"
    >
      <Component5 />
    </div>
  );
}

function Tab2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Tab"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">소개</p>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px px-0 py-3 relative shrink-0"
      data-name="Component 2"
    >
      <Tab2 />
    </div>
  );
}

function Margin1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-start justify-center pl-8 pr-0 py-0 relative shrink-0"
      data-name="Margin"
    >
      <Component6 />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-full items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Component2 />
      <Margin />
      <Margin1 />
      <div
        className="absolute bg-[#dc5903] bottom-[0.01px] h-[1.99px] left-0 w-[24.2px]"
        data-name="Horizontal Divider"
      />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Container1 />
    </div>
  );
}

function Tablist() {
  return (
    <div
      className="bg-[#1a1b1b] box-border content-stretch flex flex-row items-start justify-center p-0 shrink-0 sticky top-0 w-full"
      data-name="Tablist"
    >
      <div
        className="absolute bottom-0 h-[0.63px] left-0 right-0"
        data-name="Horizontal Divider"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#303030] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none"
        />
      </div>
      <Container2 />
    </div>
  );
}

function TablistMargin() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mb-[-0.01px] order-2 pb-4 pt-0 px-0 shrink-0 sticky top-0 w-full"
      data-name="Tablist:margin"
    >
      <Tablist />
    </div>
  );
}

function Paragraph() {
  return (
    <div
      className="h-[22.63px] leading-[0] not-italic relative shrink-0 text-left w-full"
      data-name="Paragraph"
    >
      <div className="absolute flex flex-col font-['Apple_SD_Gothic_Neo:Regular',_sans-serif] h-[22px] justify-center left-0 text-[#ff4d4f] text-[14px] top-[11.57px] translate-y-[-50%] w-[5.505px]">
        <p className="block leading-[22px]">*</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[22px] justify-center left-[9.19px] text-[13.234px] text-[rgba(255,255,255,0.85)] top-[10.63px] translate-y-[-50%] w-[24.4px]">
        <p className="block leading-[22px]">제목</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
        <p className="block leading-[14.4px] whitespace-pre">
          스토리 제목을 입력하세요.
        </p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.99px] items-start justify-start pb-1 pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <Paragraph />
      <Container3 />
    </div>
  );
}

function Label() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start max-w-[470px] pl-0 pr-[13.68px] py-0 relative shrink-0"
      data-name="Label"
    >
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[470px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Label />
    </div>
  );
}

function Container6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.25)] text-left w-full">
        <p className="block leading-[normal]">ex. 소꿉친구 유나</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px order-2 overflow-clip pb-[3.24px] pt-[2.51px] px-0 relative self-stretch shrink-0"
      data-name="Input"
    >
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.453px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">0 / 32</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container7 />
    </div>
  );
}

function Margin2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center order-1 pl-1 pr-0 py-0 relative self-stretch shrink-0"
      data-name="Margin"
    >
      <Container8 />
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
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row-reverse items-start justify-start px-[11.625px] py-[4.625px] relative w-full">
          <Input />
          <Margin2 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[470px] min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <BackgroundBorder />
    </div>
  );
}

function Container10() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center min-h-8 pb-[0.38px] pt-[0.37px] px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-0"
      data-name="Container"
      style={{ gap: "2.13163e-14px" }}
    >
      <Container5 />
      <Container10 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div
      className="h-[22.63px] leading-[0] not-italic relative shrink-0 text-left w-full"
      data-name="Paragraph"
    >
      <div className="absolute flex flex-col font-['Apple_SD_Gothic_Neo:Regular',_sans-serif] h-[22px] justify-center left-0 text-[#ff4d4f] text-[14px] top-[11.57px] translate-y-[-50%] w-[5.505px]">
        <p className="block leading-[22px]">*</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[22px] justify-center left-[9.19px] text-[13.125px] text-[rgba(255,255,255,0.85)] top-[10.63px] translate-y-[-50%] w-[64.12px]">
        <p className="block leading-[22px]">스토리 설정</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[14.4px] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.5)] text-left text-nowrap whitespace-pre">
        <p className="block mb-0">스토리의 세계관, 관계 등을 설명해주세요.</p>
        <p className="block">{`{{user}}를 쓰면 대화중인 유저의 이름으로 대체됩니다.`}</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.98px] pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <Paragraph1 />
      <Container12 />
    </div>
  );
}

function Label1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start max-w-[470px] pl-0 pr-[13.68px] py-0 relative shrink-0"
      data-name="Label"
    >
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[470px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Label1 />
    </div>
  );
}

function Container15() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[0.515px] pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[21px] not-italic relative shrink-0 text-[13.016px] text-[rgba(255,255,255,0.25)] text-left w-full">
        <p className="block mb-0">ex. 유나 / 18살</p>
        <p className="block mb-0">- 키: 165cm, 몸무게: 45kg</p>
        <p className="block mb-0">
          - 고등학생이 된 뒤로 유나는 일진 친구들과 어울리며 불량해졌다.
        </p>
        <p className="block">{`- 어릴 때 이사간 소꿉친구인 {{user}}와 멀어지게됐다.`}</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div
      className="basis-0 grow h-[113px] max-h-[323px] max-w-[470px] min-h-[113px] min-w-px relative shrink-0"
      data-name="Textarea"
    >
      <div className="max-h-inherit max-w-inherit min-h-inherit overflow-x-auto overflow-y-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[113px] items-start justify-start max-h-inherit max-w-inherit min-h-inherit px-[11px] py-1 relative w-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div
      className="absolute bottom-[-21.36px] box-border content-stretch flex flex-col items-start justify-start p-0 right-[0.21px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.563px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">0 / 2000</p>
      </div>
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
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center p-[0.625px] relative w-full">
          <Textarea />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[470px] min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <BackgroundBorder1 />
    </div>
  );
}

function Container18() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center min-h-8 p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[0.01px] items-start justify-start left-0 p-0 right-0 top-[108.99px]"
      data-name="Container"
    >
      <Container14 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">비밀 설정</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.063px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
        <p className="block leading-[14.4px] whitespace-pre">
          유저에게 노출되지 않는 설정으로 생성 AI에게 전달됩니다.
        </p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.99px] pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <Container20 />
      <Container21 />
    </div>
  );
}

function Label2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start max-w-[470px] pl-0 pr-[13.68px] py-0 relative shrink-0"
      data-name="Label"
    >
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[470px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-7.10543e-15px" }}
    >
      <Label2 />
    </div>
  );
}

function Container24() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.25)] text-left w-full">
        <p className="block leading-[21px]">{`ex. 유나는 어릴 때 소꿉친구인 {{user}}를 좋아했었다.`}</p>
      </div>
    </div>
  );
}

function Textarea1() {
  return (
    <div
      className="basis-0 grow h-[71px] max-h-[134px] max-w-[470px] min-h-[71px] min-w-px relative shrink-0"
      data-name="Textarea"
    >
      <div className="max-h-inherit max-w-inherit min-h-inherit overflow-x-auto overflow-y-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[71px] items-start justify-start max-h-inherit max-w-inherit min-h-inherit px-[11px] py-1 relative w-full">
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div
      className="absolute bottom-[-21.36px] box-border content-stretch flex flex-col items-start justify-start p-0 right-[-0.27px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.563px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">0 / 500</p>
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
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[470px] min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <BackgroundBorder2 />
    </div>
  );
}

function Container27() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center min-h-8 p-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-7.10543e-15px" }}
    >
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[314.64px]"
      data-name="Container"
    >
      <Container23 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-center justify-start left-[19.82px] px-4 py-0 translate-y-[-50%]"
      data-name="Container"
      style={{ top: "calc(50% + 0.43px)" }}
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.85)] text-center text-nowrap">
        <p className="block leading-[25.14px] whitespace-pre">캐릭터</p>
      </div>
    </div>
  );
}

function Separator() {
  return (
    <div
      className="absolute h-[25.14px] left-0 right-0 top-[463.26px]"
      data-name="Separator"
    >
      <Container29 />
      <div
        className="absolute h-[0.63px] left-0 right-[95.78%] translate-y-[-50%]"
        data-name="Horizontal Divider"
        style={{ top: "calc(50% + 0.315px)" }}
      >
        <div
          aria-hidden="true"
          className="absolute border-[0.625px_0px_0px] border-[rgba(253,253,253,0.01)] border-solid inset-0 pointer-events-none"
        />
      </div>
      <div
        className="absolute h-[0.63px] left-[19.85%] right-0 translate-y-[-50%]"
        data-name="Horizontal Divider"
        style={{ top: "calc(50% + 0.315px)" }}
      >
        <div
          aria-hidden="true"
          className="absolute border-[0.625px_0px_0px] border-[rgba(253,253,253,0.01)] border-solid inset-0 pointer-events-none"
        />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div
      className="h-[22.63px] leading-[0] not-italic relative shrink-0 text-left w-full"
      data-name="Paragraph"
    >
      <div className="absolute flex flex-col font-['Apple_SD_Gothic_Neo:Regular',_sans-serif] h-[22px] justify-center left-0 text-[#ff4d4f] text-[14px] top-[11.56px] translate-y-[-50%] w-[5.505px]">
        <p className="block leading-[22px]">*</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[22px] justify-center left-[9.19px] text-[13.125px] text-[rgba(255,255,255,0.85)] top-[10.63px] translate-y-[-50%] w-[64.12px]">
        <p className="block leading-[22px]">캐릭터 이름</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.063px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
        <p className="block leading-[14.4px] whitespace-pre">
          짧은 이름을 사용해야 대화시 입력하기 쉽습니다.
        </p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.99px] items-start justify-start pb-1 pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <Paragraph2 />
      <Container30 />
    </div>
  );
}

function Label3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start max-w-[470px] pl-0 pr-[13.69px] py-0 relative shrink-0"
      data-name="Label"
    >
      <Container31 />
    </div>
  );
}

function Container32() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[470px] mb-[-0.01px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Label3 />
    </div>
  );
}

function Container33() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.234px] text-[rgba(255,255,255,0.25)] text-left w-full">
        <p className="block leading-[normal]">ex. 유나</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px order-2 overflow-clip pb-[3.25px] pt-[2.5px] px-0 relative self-stretch shrink-0"
      data-name="Input"
    >
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.453px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">0 / 10</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container34 />
    </div>
  );
}

function Margin3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center order-1 pl-1 pr-0 py-0 relative self-stretch shrink-0"
      data-name="Margin"
    >
      <Container35 />
    </div>
  );
}

function BackgroundBorder3() {
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
        <div
          className="box-border content-stretch flex flex-row-reverse items-start justify-start px-[11.625px] py-[4.625px] relative w-full"
          style={{ gap: "1.13687e-13px" }}
        >
          <Input1 />
          <Margin3 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[470px] min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <BackgroundBorder3 />
    </div>
  );
}

function Container37() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center mb-[-0.01px] min-h-8 pb-[0.37px] pt-[0.38px] px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[0.01px] pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container32 />
      <Container37 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div
      className="h-[22.63px] leading-[0] not-italic relative shrink-0 text-left w-full"
      data-name="Paragraph"
    >
      <div className="absolute flex flex-col font-['Apple_SD_Gothic_Neo:Regular',_sans-serif] h-[22px] justify-center left-0 text-[#ff4d4f] text-[14px] top-[11.57px] translate-y-[-50%] w-[5.505px]">
        <p className="block leading-[22px]">*</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[22px] justify-center left-[9.19px] text-[13.125px] text-[rgba(255,255,255,0.85)] top-[10.63px] translate-y-[-50%] w-[64.12px]">
        <p className="block leading-[22px]">캐릭터 설명</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.063px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
        <p className="block leading-[14.4px] whitespace-pre">
          캐릭터의 특징, 말투, 성격 등을 입력해주세요.
        </p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.99px] items-start justify-start pb-1 pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <Paragraph3 />
      <Container39 />
    </div>
  );
}

function Label4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start max-w-[470px] pl-0 pr-[13.69px] py-0 relative shrink-0"
      data-name="Label"
    >
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[470px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-7.10543e-15px" }}
    >
      <Label4 />
    </div>
  );
}

function Container42() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[21px] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.25)] text-left w-full">
        <p className="block mb-0">{`ex. 유나는 남자들을 무시하고 자기 아래로 본다. 항상 기분 나쁘게 말해서 친구가 `}</p>
        <p className="block">없고 자주 외로워 한다.</p>
      </div>
    </div>
  );
}

function Textarea2() {
  return (
    <div
      className="basis-0 grow h-[71px] max-h-[218px] max-w-[470px] min-h-[71px] min-w-px relative shrink-0"
      data-name="Textarea"
    >
      <div className="max-h-inherit max-w-inherit min-h-inherit overflow-x-auto overflow-y-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[71px] items-start justify-start max-h-inherit max-w-inherit min-h-inherit px-[11px] py-1 relative w-full">
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div
      className="absolute bottom-[-21.36px] box-border content-stretch flex flex-col items-start justify-start p-0 right-[-0.27px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.563px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">0 / 500</p>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
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
          <Textarea2 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[470px] min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <BackgroundBorder4 />
    </div>
  );
}

function Container45() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center min-h-8 p-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-7.10543e-15px" }}
    >
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container41 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[23.99px] items-start justify-start left-0 p-0 right-0 top-[496.4px]"
      data-name="Container"
    >
      <Container38 />
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-center justify-start left-[17.56px] px-4 py-0 translate-y-[-50%]"
      data-name="Container"
      style={{ top: "calc(50% + 0.43px)" }}
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.85)] text-center text-nowrap">
        <p className="block leading-[25.14px] whitespace-pre">스토리 이미지</p>
      </div>
    </div>
  );
}

function Separator1() {
  return (
    <div
      className="absolute h-[25.14px] left-0 right-0 top-[754.64px]"
      data-name="Separator"
    >
      <Container48 />
      <div
        className="absolute h-[0.63px] left-0 right-[96.26%] translate-y-[-50%]"
        data-name="Horizontal Divider"
        style={{ top: "calc(50% + 0.315px)" }}
      >
        <div
          aria-hidden="true"
          className="absolute border-[0.625px_0px_0px] border-[rgba(253,253,253,0.01)] border-solid inset-0 pointer-events-none"
        />
      </div>
      <div
        className="absolute h-[0.63px] left-[29.03%] right-0 translate-y-[-50%]"
        data-name="Horizontal Divider"
        style={{ top: "calc(50% + 0.315px)" }}
      >
        <div
          aria-hidden="true"
          className="absolute border-[0.625px_0px_0px] border-[rgba(253,253,253,0.01)] border-solid inset-0 pointer-events-none"
        />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[18.86px] not-italic relative shrink-0 text-[11.063px] text-[rgba(255,255,255,0.5)] text-left w-full">
        <p className="block mb-0">
          이미지를 추가하면 AI가 상황에 맞는 이미지를 유저에게 표시합니다.
        </p>
        <p className="block">권장 이미지 사이즈: 512x768 (2:3)</p>
      </div>
    </div>
  );
}

function Component7() {
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
            d={svgPaths.p3e1c8e00}
            fill="var(--fill-0, white)"
            fillOpacity="0.85"
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
      className="bg-[rgba(255,255,255,0.3)] box-border content-stretch flex flex-row items-center justify-center p-0 relative rounded-2xl shrink-0 size-[31.99px]"
      data-name="Img - picture"
    >
      <Component7 />
    </div>
  );
}

function Container50() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center px-0 py-[102.88px] relative shrink-0"
      data-name="Container"
      style={{ marginBottom: "-1.13687e-13px" }}
    >
      <ImgPicture />
    </div>
  );
}

function Background() {
  return (
    <div
      className="basis-0 bg-[#ff9500] box-border content-stretch flex flex-row grow items-center justify-center min-h-px min-w-px pb-[8.375px] pt-[7.625px] px-0 relative rounded-lg self-stretch shrink-0"
      data-name="Background"
    >
      <div className="basis-0 flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13.234px] text-[rgba(255,255,255,0.85)] text-center">
        <p className="block leading-[22px]">AI로 생성</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center px-[13px] py-0 relative w-full">
          <Background />
        </div>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div
      className="basis-0 bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-row grow items-center justify-center min-h-px min-w-px pb-[8.375px] pt-[7.625px] px-0 relative rounded-lg self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="basis-0 flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-center">
        <p className="block leading-[22px]">이미지 업로드</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center px-[13px] py-0 relative w-full">
          <Overlay1 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[11.99px] items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Container51 />
      <Container52 />
    </div>
  );
}

function Margin4() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[102.99px] items-start justify-end min-h-[87.99px] pb-[15px] pt-0 px-0 relative shrink-0"
      data-name="Margin"
      style={{ marginBottom: "-1.13687e-13px" }}
    >
      <Container53 />
    </div>
  );
}

function Component3() {
  return (
    <div
      className="bg-[#2a2a2a] relative rounded-lg shrink-0 w-full"
      data-name="Component 3"
    >
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start p-[0.625px] relative w-full">
          <Container50 />
          <Margin4 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#666666] border-dashed inset-0 pointer-events-none rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.2)]"
      />
    </div>
  );
}

function Container54() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Component3 />
    </div>
  );
}

function Container55() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center overflow-clip p-0 relative rounded-lg shrink-0 w-[228px]"
      data-name="Container"
    >
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-3 items-start justify-start left-0 p-0 right-0 top-[787.77px]"
      data-name="Container"
    >
      <Container49 />
      <Container55 />
    </div>
  );
}

function Tabpanel() {
  return (
    <div
      className="h-[1179.47px] relative shrink-0 w-full"
      data-name="Tabpanel"
    >
      <Container11 />
      <Container19 />
      <Container28 />
      <Separator />
      <Container47 />
      <Separator1 />
      <Container56 />
    </div>
  );
}

function Container57() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mb-[-0.01px] order-1 pb-5 pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Tabpanel />
    </div>
  );
}

function Form() {
  return (
    <div
      className="box-border content-stretch flex flex-col-reverse items-start justify-start pb-[0.01px] pt-0 px-0 relative shrink-0 w-full"
      data-name="Form"
    >
      <TablistMargin />
      <Container57 />
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[13.26px] items-start justify-start pb-[39.99px] pt-[46.5px] px-[15px] relative w-full">
          <Link />
          <Form />
        </div>
      </div>
    </div>
  );
}

function Component8() {
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
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - left"
    >
      <Component8 />
    </div>
  );
}

function Container59() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[5.84px] pt-[3.88px] px-[15px] relative shrink-0"
      data-name="Container"
    >
      <ImgLeft />
    </div>
  );
}

function Container60() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">임시저장</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div
      className="bg-[#141414] box-border content-stretch flex flex-row h-[26px] items-center justify-center px-[10.625px] py-[0.625px] relative rounded-md shrink-0"
      data-name="Component 4"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container60 />
    </div>
  );
}

function Container61() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.234px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">게시</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div
      className="bg-[#dc5903] box-border content-stretch flex flex-row h-[26px] items-center justify-center px-[10.625px] py-[0.625px] relative rounded-md shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0"
      data-name="Component 4"
    >
      <Container61 />
    </div>
  );
}

function Container62() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1.5 items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Component4 />
      <Component9 />
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div
      className="absolute bg-[#1a1b1b] box-border content-stretch flex flex-row h-10 items-center justify-between left-0 max-w-[500px] pb-[0.625px] pl-0 pr-[15px] pt-0 top-0 w-[500px]"
      data-name="Background+HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#424242] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none"
      />
      <Container59 />
      <Container62 />
    </div>
  );
}

function Background1() {
  return (
    <div
      className="bg-[#1a1b1b] box-border content-stretch flex flex-col items-start justify-start max-w-[500px] p-0 relative shrink-0 w-[500px]"
      data-name="Background"
    >
      <BackgroundHorizontalBorder />
      <Container58 />
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
      <Background1 />
    </div>
  );
}