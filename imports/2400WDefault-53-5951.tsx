import svgPaths from "./svg-5y9ewl814g";

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
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.234px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
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
      <div className="[text-shadow:#dc5903_0px_0px_0.25px] flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dc5903] text-[13.125px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">시작상황</p>
      </div>
    </div>
  );
}

function Component4() {
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
      <Component4 />
    </div>
  );
}

function Tab2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Tab"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.234px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">소개</p>
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
      <Component5 />
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
        className="absolute bg-[#dc5903] bottom-[0.01px] h-[1.99px] left-[56.19px] w-[48.4px]"
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
      <div className="absolute flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[22px] justify-center left-[9.19px] text-[13.125px] text-[rgba(255,255,255,0.85)] top-[10.63px] translate-y-[-50%] w-[48.6px]">
        <p className="block leading-[22px]">시작상황</p>
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
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.063px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
        <p className="block leading-[14.4px] whitespace-pre">
          캐릭터와 유저의 첫 상황을 입력해주세요.
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
      className="box-border content-stretch flex flex-col items-start justify-start pb-[0.51px] pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[21px] not-italic relative shrink-0 text-[13.016px] text-[rgba(255,255,255,0.25)] text-left w-full">
        <p className="block mb-0">
          ex. 조용히 공부할 곳을 찾던 지훈은 평소 잘 가지 않던 도서관 건물
          옥상으로 향했
        </p>
        <p className="block">다. 잠긴 줄 알았던 옥상 문이 살짝 열려 있었다.</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div
      className="basis-0 grow h-[92px] max-h-[260px] max-w-[470px] min-h-[92px] min-w-px relative shrink-0"
      data-name="Textarea"
    >
      <div className="max-h-inherit max-w-inherit min-h-inherit overflow-x-auto overflow-y-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[92px] items-start justify-start max-h-inherit max-w-inherit min-h-inherit px-[11px] py-1 relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="absolute bottom-[-21.37px] box-border content-stretch flex flex-col items-start justify-start p-0 right-[-0.27px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.563px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">0 / 500</p>
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
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[470px] min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <BackgroundBorder />
    </div>
  );
}

function Container9() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center min-h-8 p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ gap: "2.13163e-14px" }}
    >
      <Container5 />
      <Container9 />
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
      <div className="absolute flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[22px] justify-center left-[9.19px] text-[13.016px] text-[rgba(255,255,255,0.85)] top-[10.63px] translate-y-[-50%] w-[79.63px]">
        <p className="block leading-[22px]">캐릭터 첫 대사</p>
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
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.063px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
        <p className="block leading-[14.4px] whitespace-pre">
          캐릭터의 첫 번째 대사를 입력해주세요.
        </p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.99px] pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <Paragraph1 />
      <Container11 />
    </div>
  );
}

function Label1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start max-w-[470px] pl-0 pr-[13.68px] py-0 relative shrink-0"
      data-name="Label"
    >
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[470px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-7.10543e-15px" }}
    >
      <Label1 />
    </div>
  );
}

function Container14() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a8a8a8] text-[13.125px] text-left w-full">
        <p className="block leading-[22px]">캐릭터</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[0.515px] pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.25)] text-left w-full">
        <p className="block leading-[21px]">ex. 뭘 꼴아봐?</p>
      </div>
    </div>
  );
}

function Textarea1() {
  return (
    <div
      className="basis-0 bg-[#3b3b3c] grow h-14 max-h-[140px] max-w-[446.49px] min-h-14 min-w-px relative rounded-xl shrink-0"
      data-name="Textarea"
    >
      <div className="max-h-inherit max-w-inherit min-h-inherit overflow-x-auto overflow-y-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-14 items-start justify-start max-h-inherit max-w-inherit min-h-inherit px-2.5 py-[7px] relative w-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div
      className="absolute bottom-[-21.36px] box-border content-stretch flex flex-col items-start justify-start p-0 right-[-0.44px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.563px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">0 / 200</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div
      className="bg-[#141414] relative rounded-xl shrink-0 w-full"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-xl"
      />
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center p-[0.625px] relative w-full">
          <Textarea1 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[5px] grow items-start justify-start max-w-[446.5px] min-h-px min-w-px p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Container14 />
      <BackgroundBorder1 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center pl-0 pr-[23.51px] py-0 relative w-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[470px] min-h-px min-w-px pb-[19.99px] pt-1.5 px-0 relative shrink-0"
      data-name="Container"
    >
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center min-h-8 p-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-7.10543e-15px" }}
    >
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container13 />
      <Container20 />
    </div>
  );
}

function Tabpanel() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[23.99px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Tabpanel"
    >
      <Container10 />
      <Container21 />
    </div>
  );
}

function Container22() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mb-[-0.01px] order-1 pb-[23.99px] pt-0 px-0 relative shrink-0 w-full"
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
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[13.26px] items-start justify-start pb-10 pt-[46.5px] px-[15px] relative w-full">
          <Link />
          <Form />
        </div>
      </div>
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
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - left"
    >
      <Component6 />
    </div>
  );
}

function Container24() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[5.84px] pt-[3.88px] px-[15px] relative shrink-0"
      data-name="Container"
    >
      <ImgLeft />
    </div>
  );
}

function Container25() {
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

function Component3() {
  return (
    <div
      className="bg-[#141414] box-border content-stretch flex flex-row h-[26px] items-center justify-center px-[10.625px] py-[0.625px] relative rounded-md shrink-0"
      data-name="Component 3"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container25 />
    </div>
  );
}

function Container26() {
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

function Component7() {
  return (
    <div
      className="bg-[#dc5903] box-border content-stretch flex flex-row h-[26px] items-center justify-center px-[10.625px] py-[0.625px] relative rounded-md shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0"
      data-name="Component 3"
    >
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1.5 items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Component3 />
      <Component7 />
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
      <Container24 />
      <Container27 />
    </div>
  );
}

function Background() {
  return (
    <div
      className="bg-[#1a1b1b] box-border content-stretch flex flex-col items-start justify-start max-w-[500px] pb-[491.28px] pt-0 px-0 relative shrink-0 w-[500px]"
      data-name="Background"
    >
      <BackgroundHorizontalBorder />
      <Container23 />
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
      <Background />
    </div>
  );
}