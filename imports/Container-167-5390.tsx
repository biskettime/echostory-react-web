import svgPaths from "./svg-fuyxpz1u4e";

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.85)] text-left w-full">
        <p className="block leading-[24px]">목소리 설정</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div
      className="bg-[#1f1f1f] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
      data-name="Background"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-2.5 pt-[15px] px-5 relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[60px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.18px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[23.57px] whitespace-pre">아린</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">#수줍음</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-7" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p4d9eb80}
            fill="var(--fill-0, #E3A3D1)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgPlayCircle() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - play-circle"
    >
      <Component1 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[3.38px] pt-[2.37px] px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgPlayCircle />
    </div>
  );
}

function Component5() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center p-[0.625px] right-[18.63px] rounded-md size-[31.99px] top-[7.62px]"
      data-name="Component 5"
    >
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-0 px-[20.625px] py-[10.625px] right-0 rounded-[3px] top-0"
      data-name="Container"
    >
      <Container1 />
      <Container2 />
      <Component5 />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[60px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.18px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[23.57px] whitespace-pre">리나</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[12.188px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">#당당 #차분</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-7" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p4d9eb80}
            fill="var(--fill-0, #E3A3D1)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgPlayCircle1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - play-circle"
    >
      <Component2 />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[3.38px] pt-[2.37px] px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgPlayCircle1 />
    </div>
  );
}

function Component6() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center p-[0.625px] right-[18.63px] rounded-md size-[31.99px] top-[7.62px]"
      data-name="Component 5"
    >
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-0 px-[20.625px] py-[10.625px] right-0 rounded-[3px] top-[48.81px]"
      data-name="Container"
    >
      <Container5 />
      <Container6 />
      <Component6 />
    </div>
  );
}

function Container9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[60px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.18px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[23.57px] whitespace-pre">미아</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">#시크</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-7" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p4d9eb80}
            fill="var(--fill-0, #E3A3D1)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgPlayCircle2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - play-circle"
    >
      <Component3 />
    </div>
  );
}

function Container11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[3.38px] pt-[2.37px] px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgPlayCircle2 />
    </div>
  );
}

function Component7() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center p-[0.625px] right-[18.63px] rounded-md size-[31.99px] top-[7.62px]"
      data-name="Component 5"
    >
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-0 px-[20.625px] py-[10.625px] right-0 rounded-[3px] top-[97.62px]"
      data-name="Container"
    >
      <Container9 />
      <Container10 />
      <Component7 />
    </div>
  );
}

function Container13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[60px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.18px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[23.57px] whitespace-pre">혜원</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">#밝음</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-7" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p4d9eb80}
            fill="var(--fill-0, #E3A3D1)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgPlayCircle3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - play-circle"
    >
      <Component4 />
    </div>
  );
}

function Container15() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[3.38px] pt-[2.37px] px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgPlayCircle3 />
    </div>
  );
}

function Component9() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center p-[0.625px] right-[18.63px] rounded-md size-[31.99px] top-[7.62px]"
      data-name="Component 5"
    >
      <Container15 />
    </div>
  );
}

function Border() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-0 px-[20.625px] py-[10.625px] right-0 rounded-[3px] top-[146.43px]"
      data-name="Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.64)] border-solid inset-0 pointer-events-none rounded-[3px]"
      />
      <Container13 />
      <Container14 />
      <Component9 />
    </div>
  );
}

function Container16() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[60px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.18px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[23.57px] whitespace-pre">엘린</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[12.188px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">
          #판타지 #여기사
        </p>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="relative shrink-0 size-7" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p4d9eb80}
            fill="var(--fill-0, #E3A3D1)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgPlayCircle4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - play-circle"
    >
      <Component10 />
    </div>
  );
}

function Container18() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[3.37px] pt-[2.38px] px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgPlayCircle4 />
    </div>
  );
}

function Component11() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center p-[0.625px] right-[18.63px] rounded-md size-[31.99px] top-[7.61px]"
      data-name="Component 5"
    >
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-0 px-[20.625px] py-[10.625px] right-0 rounded-[3px] top-[195.24px]"
      data-name="Container"
    >
      <Container16 />
      <Container17 />
      <Component11 />
    </div>
  );
}

function Container20() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[60px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.063px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[23.57px] whitespace-pre">피어스</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">#열정</p>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="relative shrink-0 size-7" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p4d9eb80}
            fill="var(--fill-0, #B0CAFF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgPlayCircle5() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - play-circle"
    >
      <Component12 />
    </div>
  );
}

function Container22() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[3.37px] pt-[2.38px] px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgPlayCircle5 />
    </div>
  );
}

function Component13() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center p-[0.625px] right-[18.63px] rounded-md size-[31.99px] top-[7.61px]"
      data-name="Component 5"
    >
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-0 px-[20.625px] py-[10.625px] right-0 rounded-[3px] top-[244.05px]"
      data-name="Container"
    >
      <Container20 />
      <Container21 />
      <Component13 />
    </div>
  );
}

function Container24() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[60px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.18px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[23.57px] whitespace-pre">켈드</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">#자신감</p>
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="relative shrink-0 size-7" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p4d9eb80}
            fill="var(--fill-0, #B0CAFF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgPlayCircle6() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - play-circle"
    >
      <Component14 />
    </div>
  );
}

function Container26() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[3.37px] pt-[2.38px] px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgPlayCircle6 />
    </div>
  );
}

function Component15() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center p-[0.625px] right-[18.63px] rounded-md size-[31.99px] top-[7.62px]"
      data-name="Component 5"
    >
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-0 px-[20.625px] py-[10.625px] right-0 rounded-[3px] top-[292.85px]"
      data-name="Container"
    >
      <Container24 />
      <Container25 />
      <Component15 />
    </div>
  );
}

function Container28() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[60px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.18px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[23.57px] whitespace-pre">윤호</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[12.188px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">#저음 #차분</p>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="relative shrink-0 size-7" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p4d9eb80}
            fill="var(--fill-0, #B0CAFF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgPlayCircle7() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - play-circle"
    >
      <Component16 />
    </div>
  );
}

function Container30() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[3.38px] pt-[2.37px] px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgPlayCircle7 />
    </div>
  );
}

function Component17() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center p-[0.625px] right-[18.63px] rounded-md size-[31.99px] top-[7.62px]"
      data-name="Component 5"
    >
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-0 px-[20.625px] py-[10.625px] right-0 rounded-[3px] top-[341.66px]"
      data-name="Container"
    >
      <Container28 />
      <Container29 />
      <Component17 />
    </div>
  );
}

function Container32() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[60px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.063px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[23.57px] whitespace-pre">지로스</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">#판타지</p>
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="relative shrink-0 size-7" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p4d9eb80}
            fill="var(--fill-0, #B0CAFF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgPlayCircle8() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - play-circle"
    >
      <Component18 />
    </div>
  );
}

function Container34() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[3.38px] pt-[2.37px] px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgPlayCircle8 />
    </div>
  );
}

function Component19() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center p-[0.625px] right-[18.63px] rounded-md size-[31.99px] top-[7.62px]"
      data-name="Component 5"
    >
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-0 px-[20.625px] py-[10.625px] right-0 rounded-[3px] top-[390.47px]"
      data-name="Container"
    >
      <Container32 />
      <Container33 />
      <Component19 />
    </div>
  );
}

function Container36() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[60px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[23.57px] whitespace-pre">준</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">#에겐남</p>
      </div>
    </div>
  );
}

function Component20() {
  return (
    <div className="relative shrink-0 size-7" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p4d9eb80}
            fill="var(--fill-0, #B0CAFF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgPlayCircle9() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - play-circle"
    >
      <Component20 />
    </div>
  );
}

function Container38() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[3.38px] pt-[2.37px] px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgPlayCircle9 />
    </div>
  );
}

function Component21() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center p-[0.625px] right-[18.63px] rounded-md size-[31.99px] top-[7.62px]"
      data-name="Component 5"
    >
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-0 px-[20.625px] py-[10.625px] right-0 rounded-[3px] top-[439.28px]"
      data-name="Container"
    >
      <Container36 />
      <Container37 />
      <Component21 />
    </div>
  );
}

function Container40() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[60px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.18px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[23.57px] whitespace-pre">힌타</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">#소년</p>
      </div>
    </div>
  );
}

function Component22() {
  return (
    <div className="relative shrink-0 size-7" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p4d9eb80}
            fill="var(--fill-0, #B0CAFF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgPlayCircle10() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - play-circle"
    >
      <Component22 />
    </div>
  );
}

function Container42() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[3.38px] pt-[2.37px] px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgPlayCircle10 />
    </div>
  );
}

function Component23() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center p-[0.625px] right-[18.63px] rounded-md size-[31.99px] top-[7.62px]"
      data-name="Component 5"
    >
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-0 px-[20.625px] py-[10.625px] right-0 rounded-[3px] top-[488.09px]"
      data-name="Container"
    >
      <Container40 />
      <Container41 />
      <Component23 />
    </div>
  );
}

function Container44() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[60px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.18px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[23.57px] whitespace-pre">사자</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[12.188px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">
          #저음 #저승사자
        </p>
      </div>
    </div>
  );
}

function Component24() {
  return (
    <div className="relative shrink-0 size-7" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p4d9eb80}
            fill="var(--fill-0, #B0CAFF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgPlayCircle11() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - play-circle"
    >
      <Component24 />
    </div>
  );
}

function Container46() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[3.38px] pt-[2.37px] px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgPlayCircle11 />
    </div>
  );
}

function Component25() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center p-[0.625px] right-[18.63px] rounded-md size-[31.99px] top-[7.61px]"
      data-name="Component 5"
    >
      <Container46 />
    </div>
  );
}

function Container47() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-0 px-[20.625px] py-[10.625px] right-0 rounded-[3px] top-[536.9px]"
      data-name="Container"
    >
      <Container44 />
      <Container45 />
      <Component25 />
    </div>
  );
}

function Container48() {
  return (
    <div
      className="h-[350px] max-h-[350px] overflow-auto relative shrink-0 w-full"
      data-name="Container"
    >
      <Container4 />
      <Container8 />
      <Container12 />
      <Border />
      <Container19 />
      <Container23 />
      <Container27 />
      <Container31 />
      <Container35 />
      <Container39 />
      <Container43 />
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.234px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">선택</p>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div
      className="bg-[#dc5903] h-[31.99px] relative rounded-bl-[6px] rounded-br-[6px] shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0 w-full"
      data-name="Component 8"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative w-full">
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container48 />
      <Component8 />
    </div>
  );
}

function Component26() {
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
      <Component26 />
    </div>
  );
}

function Container51() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <ImgClose />
    </div>
  );
}

function Component27() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start pb-[7.99px] pt-2 px-0 right-[11.99px] rounded size-[31.99px] top-[11.99px]"
      data-name="Component 5"
    >
      <Container51 />
    </div>
  );
}

function Dialog() {
  return (
    <div
      className="bg-[#1f1f1f] box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip p-0 relative rounded-lg shadow-[0px_6px_16px_0px_rgba(0,0,0,0.08),0px_3px_6px_-4px_rgba(0,0,0,0.12),0px_9px_28px_8px_rgba(0,0,0,0.05)] shrink-0 w-full"
      data-name="Dialog"
    >
      <Background />
      <Container50 />
      <Component27 />
    </div>
  );
}

export default function Container52() {
  return (
    <div className="relative size-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[489.77px] pt-[100px] px-[591.25px] relative size-full">
          <Dialog />
        </div>
      </div>
    </div>
  );
}