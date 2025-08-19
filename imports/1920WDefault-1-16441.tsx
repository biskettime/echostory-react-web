import svgPaths from "./svg-2lojo0joh9";

function Component1() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Component 1">
          <path
            clipRule="evenodd"
            d={svgPaths.p167f4e80}
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
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-row gap-0.5 items-center justify-start px-2.5 py-[3.5px] relative rounded shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ff9500] text-[13.563px] text-left text-nowrap">
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
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.234px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
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
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.234px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
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
      <div className="[text-shadow:#dc5903_0px_0px_0.25px] flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dc5903] text-[13.234px] text-left text-nowrap">
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
        className="absolute bg-[#dc5903] bottom-0 h-0.5 left-[136.6px] w-[24.2px]"
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
        className="absolute bottom-0 h-px left-0 right-0"
        data-name="Horizontal Divider"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#303030] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
        />
      </div>
      <Container2 />
    </div>
  );
}

function TablistMargin() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start order-2 pb-4 pt-0 px-0 shrink-0 sticky top-0 w-full"
      data-name="Tablist:margin"
    >
      <Tablist />
    </div>
  );
}

function Paragraph() {
  return (
    <div
      className="h-[23px] leading-[0] not-italic relative shrink-0 text-left w-full"
      data-name="Paragraph"
    >
      <div className="absolute flex flex-col font-['Apple_SD_Gothic_Neo:Regular',_sans-serif] h-[22px] justify-center left-0 text-[#ff4d4f] text-[14px] top-[11.75px] translate-y-[-50%] w-[5.505px]">
        <p className="block leading-[22px]">*</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium h-[22px] justify-center left-[9.2px] text-[13.125px] text-[rgba(255,255,255,0.85)] top-[11px] translate-y-[-50%] w-[36.5px]">
        <p className="block leading-[22px]">소개글</p>
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
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
        <p className="block leading-[14.4px] whitespace-pre">
          제목과 함께 소개하는 문구를 입력해주세요.
        </p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.25px] items-start justify-start pb-1 pt-0 px-0 relative shrink-0"
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
      className="box-border content-stretch flex flex-row items-center justify-start max-w-[470px] pl-0 pr-[13.7px] py-0 relative shrink-0"
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
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.25)] text-left w-full">
        <p className="block leading-[21px]">{`ex. 우연히 만난 일진이 소꿉친구 {{char}}이었습니다.`}</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div
      className="basis-0 grow h-[71px] max-h-[134px] max-w-[470px] min-h-[71px] min-w-px relative shrink-0"
      data-name="Textarea"
    >
      <div className="max-h-inherit max-w-inherit min-h-inherit overflow-x-auto overflow-y-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[71px] items-start justify-start max-h-inherit max-w-inherit min-h-inherit px-[11px] py-1 relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="absolute bottom-[-21px] box-border content-stretch flex flex-col items-start justify-start p-0 right-[0.94px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.344px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">0 / 200</p>
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
        <div className="box-border content-stretch flex flex-row items-start justify-center p-px relative w-full">
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
      style={{ gap: "7.10543e-15px" }}
    >
      <Container5 />
      <Container9 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div
      className="h-[23px] leading-[0] not-italic relative shrink-0 text-left w-full"
      data-name="Paragraph"
    >
      <div className="absolute flex flex-col font-['Apple_SD_Gothic_Neo:Regular',_sans-serif] h-[22px] justify-center left-0 text-[#ff4d4f] text-[14px] top-[11.75px] translate-y-[-50%] w-[5.505px]">
        <p className="block leading-[22px]">*</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium h-[22px] justify-center left-[9.2px] text-[13.234px] text-[rgba(255,255,255,0.85)] top-[11px] translate-y-[-50%] w-[24.4px]">
        <p className="block leading-[22px]">태그</p>
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
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
        <p className="block leading-[14.4px] whitespace-pre">
          태그 입력 (1개 이상 5개 이하)
        </p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.25px] items-start justify-start pb-1 pt-0 px-0 relative shrink-0"
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
      className="box-border content-stretch flex flex-row items-center justify-start max-w-[470px] pl-0 pr-[13.7px] py-0 relative shrink-0"
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
    >
      <Label1 />
    </div>
  );
}

function Container14() {
  return (
    <div
      className="basis-0 grow h-[15.5px] min-h-px min-w-px shrink-0"
      data-name="Container"
    />
  );
}

function Container15() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container14 />
    </div>
  );
}

function ComboboxListbox() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow h-full items-start justify-start min-h-px min-w-[4.1px] overflow-clip px-0 py-[4.25px] relative shrink-0"
      data-name="Combobox listbox"
    >
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center max-w-[11px] p-0 relative self-stretch shrink-0 w-[4.09px]"
      data-name="Container"
    >
      <ComboboxListbox />
    </div>
  );
}

function Container17() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start max-w-[441px] min-h-6 pl-2 pr-0 py-0 relative shrink-0"
      data-name="Container"
    >
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div
      className="[flex-flow:wrap] basis-0 box-border content-center flex gap-0 grow items-center justify-start max-w-[441px] min-h-px min-w-px p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div
      className="absolute bottom-[-4.17%] box-border content-stretch flex flex-col items-start justify-start left-2 overflow-clip p-0 right-[11px] top-[12.5%]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.25)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">
          ex. 로맨스, 학교물, 소꿉친구
        </p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container18 />
      <Container19 />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div
      className="basis-0 bg-[#141414] grow min-h-px min-w-px relative rounded-md self-stretch shrink-0"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center pl-1 pr-[25px] py-0.5 relative size-full">
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="relative shrink-0 size-3" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Component 1">
          <path
            d={svgPaths.pc04cd00}
            fill="var(--fill-0, white)"
            fillOpacity="0.25"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3 items-center justify-start p-0 right-[11px] top-1/2 translate-y-[-50%]"
      data-name="Container"
    >
      <Component6 />
    </div>
  );
}

function Container22() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <BackgroundBorder1 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[470px] min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center min-h-8 p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ gap: "3.55271e-14px" }}
    >
      <Container13 />
      <Container24 />
    </div>
  );
}

function Label2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start max-w-[470px] pl-0 pr-[13.7px] py-0 relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">공개 범위</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[470px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Label2 />
    </div>
  );
}

function Container27() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-[18px] py-0 relative w-full">
          <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left w-full">
            <p className="block leading-[30px]">전체 공개</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container27 />
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div
      className="basis-0 bg-[#141414] grow min-h-px min-w-px relative rounded-md self-stretch shrink-0"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-3 py-px relative size-full">
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="relative shrink-0 size-3" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Component 1">
          <path
            d={svgPaths.pc04cd00}
            fill="var(--fill-0, white)"
            fillOpacity="0.25"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3 items-center justify-start p-0 right-[11px] top-1/2 translate-y-[-50%]"
      data-name="Container"
    >
      <Component7 />
    </div>
  );
}

function Container30() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <BackgroundBorder2 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[470px] min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center min-h-8 p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container26 />
      <Container32 />
    </div>
  );
}

function Label3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start max-w-[470px] pl-0 pr-[13.7px] py-0 relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">
          세이프티 필터 설정
        </p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[470px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-5.68434e-14px" }}
    >
      <Label3 />
    </div>
  );
}

function Container35() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.5)] text-left w-full">
        <p className="block leading-[18.86px]">
          성인 스토리는 세이프티 스토리로 변경할 수 없습니다.
        </p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.5)] text-left w-full">
        <p className="block leading-[18.86px]">
          민감한 스토리는 운영자에 의해 상태가 변경될 수 있습니다.
        </p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ gap: "2.13163e-14px" }}
    >
      <Container35 />
      <Container36 />
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div
      className="bg-[#dc5903] relative rounded-lg shrink-0 size-4"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#dc5903] border-solid inset-0 pointer-events-none rounded-lg"
      />
      <div
        className="absolute bg-[#ffffff] left-1/2 rounded-2xl size-1.5 top-1/2 translate-x-[-50%] translate-y-[-50%]"
        data-name="Background"
      />
    </div>
  );
}

function Container38() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start order-2 p-0 relative rounded-lg shrink-0"
      data-name="Container"
    >
      <BackgroundBorder3 />
    </div>
  );
}

function Container39() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start order-1 px-2 py-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.063px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[23.57px] whitespace-pre">
          모든 사용자 이용가능
        </p>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div
      className="box-border content-stretch flex flex-row-reverse items-center justify-start p-0 relative shrink-0 w-[156px]"
      data-name="Label"
    >
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container40() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start order-2 p-0 relative rounded-lg shrink-0"
      data-name="Container"
    >
      <div
        className="bg-[#141414] relative rounded-lg shrink-0 size-4"
        data-name="Background+Border"
      >
        <div
          aria-hidden="true"
          className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-lg"
        />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start order-1 px-2 py-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.18px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[23.57px] whitespace-pre">19+ 이용가능</p>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div
      className="box-border content-stretch flex flex-row-reverse items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Label"
    >
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container42() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start pb-1.5 pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <Label4 />
      <Label5 />
    </div>
  );
}

function Container43() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-3 grow items-start justify-start max-w-[470px] min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container37 />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center min-h-8 p-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-5.68434e-14px" }}
    >
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container34 />
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
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">크리에이터 코멘트</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
        <p className="block leading-[14.4px] whitespace-pre">
          유저에게 하고 싶은 말을 입력해주세요.
        </p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.25px] items-start justify-start pb-1 pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <Container46 />
      <Container47 />
    </div>
  );
}

function Label6() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start max-w-[470px] pl-0 pr-[13.7px] py-0 relative shrink-0"
      data-name="Label"
    >
      <Container48 />
    </div>
  );
}

function Container49() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[470px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.13163e-14px" }}
    >
      <Label6 />
    </div>
  );
}

function Container50() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.25)] text-left w-full">
        <p className="block leading-[21px]">ex. 감사합니다.</p>
      </div>
    </div>
  );
}

function Textarea1() {
  return (
    <div
      className="basis-0 grow h-[71px] max-h-44 max-w-[470px] min-h-[71px] min-w-px relative shrink-0"
      data-name="Textarea"
    >
      <div className="max-h-inherit max-w-inherit min-h-inherit overflow-x-auto overflow-y-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[71px] items-start justify-start max-h-inherit max-w-inherit min-h-inherit px-[11px] py-1 relative w-full">
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div
      className="absolute bottom-[-21px] box-border content-stretch flex flex-col items-start justify-start p-0 right-[0.1px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.344px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
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
        <div className="box-border content-stretch flex flex-row items-start justify-center p-px relative w-full">
          <Textarea1 />
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[470px] min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <BackgroundBorder4 />
    </div>
  );
}

function Container53() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center min-h-8 p-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.13163e-14px" }}
    >
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container49 />
      <Container53 />
    </div>
  );
}

function Tabpanel() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Tabpanel"
    >
      <Container10 />
      <Container25 />
      <Container33 />
      <Container45 />
      <Container54 />
    </div>
  );
}

function Container55() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start order-1 pb-6 pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Tabpanel />
    </div>
  );
}

function Form() {
  return (
    <div
      className="box-border content-stretch flex flex-col-reverse items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Form"
    >
      <TablistMargin />
      <Container55 />
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[12.5px] items-start justify-start pb-10 pt-[46.5px] px-[15px] relative w-full">
          <Link />
          <Form />
        </div>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="Component 1">
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
      <Component8 />
    </div>
  );
}

function Container57() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[5.58px] pt-[4.13px] px-[15px] relative shrink-0"
      data-name="Container"
    >
      <ImgLeft />
    </div>
  );
}

function Container58() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">임시저장</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div
      className="bg-[#141414] box-border content-stretch flex flex-row h-[26px] items-center justify-center px-[11px] py-px relative rounded-md shrink-0"
      data-name="Component 3"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container58 />
    </div>
  );
}

function Container59() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.234px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">게시</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div
      className="bg-[#dc5903] box-border content-stretch flex flex-row h-[26px] items-center justify-center px-[11px] py-px relative rounded-md shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0"
      data-name="Component 3"
    >
      <Container59 />
    </div>
  );
}

function Container60() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1.5 items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Component3 />
      <Component9 />
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div
      className="absolute bg-[#1a1b1b] box-border content-stretch flex flex-row h-10 items-center justify-between left-0 max-w-[500px] pb-px pl-0 pr-[15px] pt-0 top-0 w-[500px]"
      data-name="Background+HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#424242] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Container57 />
      <Container60 />
    </div>
  );
}

function Background() {
  return (
    <div
      className="bg-[#1a1b1b] box-border content-stretch flex flex-col items-start justify-start max-w-[500px] p-0 relative shrink-0 w-[500px]"
      data-name="Background"
    >
      <BackgroundHorizontalBorder />
      <Container56 />
    </div>
  );
}

export default function Component1920WDefault() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-center p-0 relative size-full"
      data-name="1920w default"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
      }}
    >
      <Background />
    </div>
  );
}