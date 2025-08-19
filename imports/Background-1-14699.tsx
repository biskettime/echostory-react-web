import svgPaths from "./svg-cn1opys1e8";
import imgAnime from "figma:asset/8e5f28536d82f30e46dba3548c0536302371d758.png";
import img25D from "figma:asset/39698c089ef53b02002bd04b39f485fa0b50a10d.png";
import imgColorful from "figma:asset/08bc200aaa2fcb2e2b05417ad2a0848abae0373b.png";
import imgDetailedAnime from "figma:asset/bb54cd47f8870945da4008cc378b2f3f0c2a9dc9.png";
import imgAnimeMovie from "figma:asset/c7c9ee5979497bf471cf0141c0d2df62c39adeee.png";
import imgRealistic1 from "figma:asset/bcfbf5849e33a539508e469cfca3dd0ea7ebc7e9.png";
import imgKorean from "figma:asset/76672fe3e86f6181ab73d06c9339743bfdf47af9.png";
import imgJapanese from "figma:asset/1d618907aa595966e3d80013515e48751480db3a.png";
import imgRealistic2 from "figma:asset/71df69e23a1e71406ad9cbc5a3f1dfb6fc4e996f.png";

function Tab() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Tab"
    >
      <div className="[text-shadow:#dc5903_0px_0px_0.25px] flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dc5903] text-[13.125px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">이미지 생성</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-full items-center justify-start px-0 py-3 relative shrink-0"
      data-name="Component 1"
      style={{ marginRight: "-4.26326e-14px" }}
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
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">스토리 제작</p>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px px-0 py-3 relative shrink-0"
      data-name="Component 1"
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
      style={{ marginRight: "-4.26326e-14px" }}
    >
      <Component6 />
    </div>
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-full items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Component1 />
      <Margin />
      <div
        className="absolute bg-[#dc5903] bottom-0 h-0.5 left-[-0.01px] w-[63.92px]"
        data-name="Horizontal Divider"
      />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-start justify-center min-h-px min-w-px overflow-clip p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Container />
    </div>
  );
}

function Tablist() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0 w-full"
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
      <Container1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 13 13"
      >
        <g id="Component 2">
          <path
            clipRule="evenodd"
            d={svgPaths.p4ab5000}
            fill="var(--fill-0, #FF9500)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Component 3"
    >
      <Component2 />
    </div>
  );
}

function Overlay() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-row gap-0.5 items-center justify-start px-2.5 py-[3px] relative rounded shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ff9500] text-[12.594px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">{`이미지 생성 가이드 `}</p>
      </div>
      <Component3 />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Overlay />
    </div>
  );
}

function Link() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start p-0 right-0 top-[-1px] w-[134.41px]"
      data-name="Link"
    >
      <Container2 />
    </div>
  );
}

function Margin1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-3"
      data-name="Margin"
    >
      <div
        className="bg-[#1890ff] h-4 rounded-sm shrink-0 w-1"
        data-name="Background"
      />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Margin1 />
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.125px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">생성 키워드</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="relative shrink-0 size-2.5" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10 10"
      >
        <g id="Component 2">
          <path
            clipRule="evenodd"
            d={svgPaths.p9ef88c0}
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

function Component8() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-[33.48px] p-0 top-[9.25px]"
      data-name="Component 3"
    >
      <Component7 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div
      className="bg-[#1d1d1d] relative rounded self-stretch shrink-0 w-[49.48px]"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="absolute flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium h-5 justify-center leading-[0] left-2 not-italic text-[12.289px] text-[rgba(255,255,255,0.85)] text-left top-[13.5px] translate-y-[-50%] w-[22.68px]">
        <p className="block leading-[20px]">여자</p>
      </div>
      <Component8 />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-stretch flex gap-0 items-start justify-start pb-[7px] pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <BackgroundBorder />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.25)] text-left w-full">
        <p className="block leading-[normal]">키워드 입력 후 엔터</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-clip px-0 py-2 relative self-stretch shrink-0"
      data-name="Input"
    >
      <Container5 />
    </div>
  );
}

function Component9() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Component 2">
          <path
            d={svgPaths.p267c4351}
            fill="var(--fill-0, white)"
            fillOpacity="0.25"
            id="Vector"
          />
          <path
            d={svgPaths.p16b79100}
            fill="var(--fill-0, white)"
            fillOpacity="0.25"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Component10() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Component 3"
    >
      <Component9 />
    </div>
  );
}

function Container6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[1.25px] pt-[0.75px] px-0 relative shrink-0"
      data-name="Container"
    >
      <Component10 />
    </div>
  );
}

function Button() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-px relative rounded-md shrink-0 size-8"
      data-name="Button"
    >
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Button />
    </div>
  );
}

function Margin2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center pl-1 pr-0 py-0 relative self-stretch shrink-0"
      data-name="Margin"
    >
      <Container7 />
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
        <div className="box-border content-stretch flex flex-row items-start justify-start pb-[3px] pl-[13px] pr-1.5 pt-0 relative w-full">
          <Input />
          <Margin2 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div
      className="bg-[#292b2b] h-[19px] relative rounded-[5px] shrink-0 w-[45.72px]"
      data-name="Background"
    >
      <div className="absolute flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium h-[21px] justify-center leading-[0] left-[7px] not-italic text-[12.289px] text-[rgba(255,255,255,0.5)] text-left top-[9.5px] translate-y-[-50%] w-[33.92px]">
        <p className="block leading-[20.43px]">원피스</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div
      className="bg-[#292b2b] h-[19px] relative rounded-[5px] shrink-0 w-[45.72px]"
      data-name="Background"
    >
      <div className="absolute flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium h-[21px] justify-center leading-[0] left-[7px] not-italic text-[12.289px] text-[rgba(255,255,255,0.5)] text-left top-[9.5px] translate-y-[-50%] w-[33.92px]">
        <p className="block leading-[20.43px]">긴머리</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div
      className="bg-[#292b2b] h-[19px] relative rounded-[5px] shrink-0 w-[45.72px]"
      data-name="Background"
    >
      <div className="absolute flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium h-[21px] justify-center leading-[0] left-[7px] not-italic text-[12.289px] text-[rgba(255,255,255,0.5)] text-left top-[9.5px] translate-y-[-50%] w-[33.92px]">
        <p className="block leading-[20.43px]">파란눈</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div
      className="bg-[#292b2b] h-[19px] relative rounded-[5px] shrink-0 w-[56.95px]"
      data-name="Background"
    >
      <div className="absolute flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium h-[21px] justify-center leading-[0] left-[7px] not-italic text-[12.188px] text-[rgba(255,255,255,0.5)] text-left top-[9.5px] translate-y-[-50%] w-[45.15px]">
        <p className="block leading-[20.43px]">단발머리</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div
      className="bg-[#292b2b] h-[19px] relative rounded-[5px] shrink-0 w-[45.72px]"
      data-name="Background"
    >
      <div className="absolute flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium h-[21px] justify-center leading-[0] left-[7px] not-italic text-[12.289px] text-[rgba(255,255,255,0.5)] text-left top-[9.5px] translate-y-[-50%] w-[33.92px]">
        <p className="block leading-[20.43px]">귀여운</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[5px] h-[21.42px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12.289px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">제안:</p>
      </div>
      <Background />
      <Background1 />
      <Background2 />
      <Background3 />
      <Background4 />
    </div>
  );
}

function Container9() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-2 items-start justify-start left-0 p-0 right-0 top-0"
      data-name="Container"
    >
      <Container3 />
      <Container4 />
      <BackgroundBorder1 />
      <Container8 />
    </div>
  );
}

function Margin3() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-3"
      data-name="Margin"
    >
      <div
        className="bg-[#1890ff] h-4 rounded-sm shrink-0 w-1"
        data-name="Background"
      />
    </div>
  );
}

function Container10() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Margin3 />
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.125px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">생성 모델 선택</p>
      </div>
    </div>
  );
}

function Anime() {
  return (
    <div
      className="absolute bg-left bg-no-repeat bg-size-[100%_126%] inset-0"
      data-name="Anime"
      style={{ backgroundImage: `url('${imgAnime}')` }}
    />
  );
}

function Container11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="[text-shadow:rgba(0,0,0,0.8)_0px_1px_2px] flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12.391px] text-center text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">Anime</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div
      className="absolute bg-gradient-to-t bottom-0 box-border content-stretch flex flex-row from-[#000000b3] h-5 items-end justify-center left-0 p-[4px] right-0 to-[#00000000]"
      data-name="Background"
    >
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div
      className="h-[150.66px] overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <Anime />
      <Background5 />
    </div>
  );
}

function Component4() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0)] left-0 right-[315.34px] rounded-lg top-0"
      data-name="Component 4"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-[2px] relative w-full">
        <Container12 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#ff6500] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_0px_0px_2px_rgba(24,144,255,0.2)]"
      />
    </div>
  );
}

function Component25D() {
  return (
    <div
      className="absolute bg-left bg-no-repeat bg-size-[100%_130.44%] inset-0"
      data-name="2.5D"
      style={{ backgroundImage: `url('${img25D}')` }}
    />
  );
}

function Container13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="[text-shadow:rgba(0,0,0,0.8)_0px_1px_2px] flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12.594px] text-center text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">2.5D</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div
      className="absolute bg-gradient-to-t bottom-0 box-border content-stretch flex flex-row from-[#000000b3] h-5 items-end justify-center left-0 p-[4px] right-0 to-[#00000000]"
      data-name="Background"
    >
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div
      className="h-[150.67px] overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <Component25D />
      <Background6 />
    </div>
  );
}

function Component11() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[157.66px] overflow-clip p-[2px] right-[157.67px] rounded-lg top-0"
      data-name="Component 4"
    >
      <Container14 />
    </div>
  );
}

function Colorful() {
  return (
    <div
      className="absolute bg-left bg-no-repeat bg-size-[100%_127.73%] inset-0"
      data-name="Colorful"
      style={{ backgroundImage: `url('${imgColorful}')` }}
    />
  );
}

function Container15() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="[text-shadow:rgba(0,0,0,0.8)_0px_1px_2px] flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12.289px] text-center text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">Colorful</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div
      className="absolute bg-gradient-to-t bottom-0 box-border content-stretch flex flex-row from-[#000000b3] h-5 items-end justify-center left-0 p-[4px] right-0 to-[#00000000]"
      data-name="Background"
    >
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div
      className="h-[150.67px] overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <Colorful />
      <Background7 />
    </div>
  );
}

function Component12() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[315.33px] overflow-clip p-[2px] right-0 rounded-lg top-0"
      data-name="Component 4"
    >
      <Container16 />
    </div>
  );
}

function DetailedAnime() {
  return (
    <div
      className="absolute bg-left bg-no-repeat bg-size-[100%_123.18%] inset-0"
      data-name="Detailed Anime"
      style={{ backgroundImage: `url('${imgDetailedAnime}')` }}
    />
  );
}

function Container17() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="[text-shadow:rgba(0,0,0,0.8)_0px_1px_2px] flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12.391px] text-center text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">Detailed Anime</p>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div
      className="absolute bg-gradient-to-t bottom-0 box-border content-stretch flex flex-row from-[#000000b3] h-5 items-end justify-center left-0 p-[4px] right-0 to-[#00000000]"
      data-name="Background"
    >
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div
      className="h-[150.66px] overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <DetailedAnime />
      <Background8 />
    </div>
  );
}

function Component13() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 overflow-clip p-[2px] right-[315.34px] rounded-lg top-[157.67px]"
      data-name="Component 4"
    >
      <Container18 />
    </div>
  );
}

function AnimeMovie() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_100%] bg-top-left inset-0"
      data-name="Anime Movie"
      style={{ backgroundImage: `url('${imgAnimeMovie}')` }}
    />
  );
}

function Container19() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="[text-shadow:rgba(0,0,0,0.8)_0px_1px_2px] flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12.391px] text-center text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">Anime Movie</p>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div
      className="absolute bg-gradient-to-t bottom-[-0.01px] box-border content-stretch flex flex-row from-[#000000b3] h-5 items-end justify-center left-0 p-[4px] right-0 to-[#00000000]"
      data-name="Background"
    >
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div
      className="h-[150.67px] overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <AnimeMovie />
      <Background9 />
    </div>
  );
}

function Component14() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[157.66px] overflow-clip p-[2px] right-[157.67px] rounded-lg top-[157.67px]"
      data-name="Component 4"
    >
      <Container20 />
    </div>
  );
}

function Realistic1() {
  return (
    <div
      className="absolute bg-left bg-no-repeat bg-size-[100%_132.89%] inset-0"
      data-name="Realistic1"
      style={{ backgroundImage: `url('${imgRealistic1}')` }}
    />
  );
}

function Container21() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="[text-shadow:rgba(0,0,0,0.8)_0px_1px_2px] flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12.289px] text-center text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">Realistic1</p>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div
      className="absolute bg-gradient-to-t bottom-[-0.01px] box-border content-stretch flex flex-row from-[#000000b3] h-5 items-end justify-center left-0 p-[4px] right-0 to-[#00000000]"
      data-name="Background"
    >
      <Container21 />
    </div>
  );
}

function Container22() {
  return (
    <div
      className="h-[150.67px] overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <Realistic1 />
      <Background10 />
    </div>
  );
}

function Component15() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[315.33px] overflow-clip p-[2px] right-0 rounded-lg top-[157.67px]"
      data-name="Component 4"
    >
      <Container22 />
    </div>
  );
}

function Korean() {
  return (
    <div
      className="absolute bg-left bg-no-repeat bg-size-[100%_124.21%] inset-0"
      data-name="Korean"
      style={{ backgroundImage: `url('${imgKorean}')` }}
    />
  );
}

function Container23() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="[text-shadow:rgba(0,0,0,0.8)_0px_1px_2px] flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12.391px] text-center text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">Korean</p>
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div
      className="absolute bg-gradient-to-t bottom-[0.01px] box-border content-stretch flex flex-row from-[#000000b3] h-5 items-end justify-center left-0 p-[4px] right-0 to-[#00000000]"
      data-name="Background"
    >
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div
      className="h-[150.66px] overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <Korean />
      <Background11 />
    </div>
  );
}

function Component16() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 overflow-clip p-[2px] right-[315.34px] rounded-lg top-[315.35px]"
      data-name="Component 4"
    >
      <Container24 />
    </div>
  );
}

function Japanese() {
  return (
    <div
      className="absolute bg-left bg-no-repeat bg-size-[100%_119.06%] inset-0"
      data-name="Japanese"
      style={{ backgroundImage: `url('${imgJapanese}')` }}
    />
  );
}

function Container25() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="[text-shadow:rgba(0,0,0,0.8)_0px_1px_2px] flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12.391px] text-center text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">Japanese</p>
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div
      className="absolute bg-gradient-to-t bottom-0 box-border content-stretch flex flex-row from-[#000000b3] h-5 items-end justify-center left-0 p-[4px] right-0 to-[#00000000]"
      data-name="Background"
    >
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div
      className="h-[150.67px] overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <Japanese />
      <Background12 />
    </div>
  );
}

function Component17() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[157.66px] overflow-clip p-[2px] right-[157.67px] rounded-lg top-[315.35px]"
      data-name="Component 4"
    >
      <Container26 />
    </div>
  );
}

function Realistic2() {
  return (
    <div
      className="absolute bg-left bg-no-repeat bg-size-[100%_120.63%] inset-0"
      data-name="Realistic2"
      style={{ backgroundImage: `url('${imgRealistic2}')` }}
    />
  );
}

function Container27() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="[text-shadow:rgba(0,0,0,0.8)_0px_1px_2px] flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12.391px] text-center text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">Realistic2</p>
      </div>
    </div>
  );
}

function Background13() {
  return (
    <div
      className="absolute bg-gradient-to-t bottom-0 box-border content-stretch flex flex-row from-[#000000b3] h-5 items-end justify-center left-0 p-[4px] right-0 to-[#00000000]"
      data-name="Background"
    >
      <Container27 />
    </div>
  );
}

function Container28() {
  return (
    <div
      className="h-[150.67px] overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <Realistic2 />
      <Background13 />
    </div>
  );
}

function Component18() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[315.33px] overflow-clip p-[2px] right-0 rounded-lg top-[315.35px]"
      data-name="Component 4"
    >
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div
      className="h-[470.02px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Component4 />
      <Component11 />
      <Component12 />
      <Component13 />
      <Component14 />
      <Component15 />
      <Component16 />
      <Component17 />
      <Component18 />
    </div>
  );
}

function Container30() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-2 items-start justify-start left-0 p-0 right-0 top-[155.42px]"
      data-name="Container"
    >
      <Container10 />
      <Container29 />
    </div>
  );
}

function Margin4() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-3"
      data-name="Margin"
    >
      <div
        className="bg-[#1890ff] h-4 rounded-sm shrink-0 w-1"
        data-name="Background"
      />
    </div>
  );
}

function Container31() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Margin4 />
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.125px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">생성 이미지 수</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[13.234px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">1장</p>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.95)] box-border content-stretch flex flex-row h-8 items-center justify-center px-4 py-px relative rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)] shrink-0"
      data-name="Component 5"
    >
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.453px] text-[rgba(255,255,255,0.85)] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">2장</p>
      </div>
    </div>
  );
}

function Component19() {
  return (
    <div
      className="bg-[#141414] box-border content-stretch flex flex-row h-8 items-center justify-center px-4 py-px relative rounded-md shrink-0"
      data-name="Component 5"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.453px] text-[rgba(255,255,255,0.85)] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">3장</p>
      </div>
    </div>
  );
}

function Component20() {
  return (
    <div
      className="bg-[#141414] box-border content-stretch flex flex-row h-8 items-center justify-center px-4 py-px relative rounded-md shrink-0"
      data-name="Component 5"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.453px] text-[rgba(255,255,255,0.85)] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">4장</p>
      </div>
    </div>
  );
}

function Component21() {
  return (
    <div
      className="bg-[#141414] box-border content-stretch flex flex-row h-8 items-center justify-center px-4 py-px relative rounded-md shrink-0"
      data-name="Component 5"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-end p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Component5 />
      <Component19 />
      <Component20 />
      <Component21 />
    </div>
  );
}

function Container37() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-2 items-start justify-start left-0 p-0 right-0 top-[670.44px]"
      data-name="Container"
    >
      <Container31 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.125px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">
          이미지 생성 (10P)
        </p>
      </div>
    </div>
  );
}

function Component22() {
  return (
    <div
      className="bg-[#dc5903] box-border content-stretch flex flex-row h-8 items-center justify-center pl-[184.58px] pr-[184.59px] py-px relative rounded-md shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0"
      data-name="Component 5"
    >
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[752.44px]"
      data-name="Container"
    >
      <Component22 />
    </div>
  );
}

function Container40() {
  return (
    <div
      className="h-[784.44px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Link />
      <Container9 />
      <Container30 />
      <Container37 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px pb-0 pt-2.5 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div
      className="max-h-[1200px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="max-h-inherit overflow-auto relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start max-h-inherit pb-[100px] pt-[30px] px-[15px] relative w-full">
          <Tablist />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Background14() {
  return (
    <div
      className="bg-[#1a1b1b] box-border content-stretch flex flex-col items-start justify-start max-w-[500px] pb-[209.56px] pt-0 px-0 relative shrink-0 w-[500px]"
      data-name="Background"
    >
      <Container42 />
    </div>
  );
}

export default function Background15() {
  return (
    <div
      className="bg-[#000000] box-border content-stretch flex flex-row items-center justify-center p-0 relative size-full"
      data-name="Background"
    >
      <Background14 />
    </div>
  );
}