import svgPaths from "./svg-r6t0vsz6ht";
import imgThumbnail from "figma:asset/b8b6027000bdcb2aac6fc833ea32c4b4a4ed72f8.png";
import imgCharacter from "figma:asset/53a411f934707414ea50455bcf0dc74050614a54.png";
import imgStar from "figma:asset/f5e2fc191b5f12af9eff3d3b74a56a334142a4a9.png";

function Thumbnail() {
  return (
    <div
      className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[750px] shrink-0 w-full"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail}')` }}
    />
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[6.38px] pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Thumbnail />
      <div className="absolute inset-0" data-name="Gradient" />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 max-w-[500px] p-0 right-0 top-0"
      data-name="Container"
    >
      <Container />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 11 11"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p135c6400}
            fill="var(--fill-0, white)"
            fillOpacity="0.9"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgBook() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - book"
    >
      <Component1 />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[1.13px] pt-px px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgBook />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10.313px] text-[rgba(255,255,255,0.9)] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">정보</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div
      className="absolute backdrop-blur-[2.5px] backdrop-filter bg-[rgba(0,0,0,0.3)] box-border content-stretch flex flex-row gap-[3.99px] h-[31px] items-center justify-center left-[15px] px-[12.625px] py-[6.625px] rounded-[20px] top-[46px]"
      data-name="Component 2"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-4 p-0 translate-y-[-50%]"
      data-name="Container"
      style={{ top: "calc(50% + 0.065px)" }}
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.8)] text-left text-nowrap">
        <p className="block leading-[18.86px] whitespace-pre">Novel Mode</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[104.41px] p-0 translate-y-[-50%]"
      data-name="Container"
      style={{ top: "calc(50% + 0.065px)" }}
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.8)] text-left text-nowrap">
        <p className="block leading-[18.86px] whitespace-pre">Chat Mode</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="absolute left-3.5 size-[11.99px] top-[1.99px]"
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
      className="absolute bg-[#dc5903] h-4 left-[68.41px] rounded-[100px] translate-y-[-50%] w-7"
      data-name="Component 3"
      style={{ top: "calc(50% - 0.005px)" }}
    >
      <Container6 />
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div
      className="absolute backdrop-blur-[2.5px] backdrop-filter bg-[rgba(0,0,0,0.3)] h-[34.85px] left-[33.52%] right-[33.52%] rounded-[25px] top-[46px]"
      data-name="Overlay+OverlayBlur"
    >
      <Container4 />
      <Container5 />
      <Component3 />
    </div>
  );
}

function Component7() {
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
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-[15px] p-0 top-[12.71px]"
      data-name="Img - left"
    >
      <Component7 />
    </div>
  );
}

function Component8() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 26 26"
      >
        <g id="Component 1">
          <path
            clipRule="evenodd"
            d={svgPaths.pf929200}
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
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-[26px]"
      data-name="home-icon.svg fill"
    >
      <Component8 />
    </div>
  );
}

function Component() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 size-[26px]"
      data-name="홈"
    >
      <HomeIconSvgFill />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-[36.99px] px-2.5 py-0 top-[9.19px]"
      data-name="Container"
    >
      <Component />
    </div>
  );
}

function Component9() {
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
            d={svgPaths.p2602b900}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start px-3 py-0 right-[39.98px] top-[12.19px]"
      data-name="Container"
    >
      <Component9 />
    </div>
  );
}

function Component10() {
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
            d={svgPaths.p3fb3d600}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgMenu() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - menu"
    >
      <Component10 />
    </div>
  );
}

function Component5() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start pb-[5.84px] pt-[3.88px] px-[15px] right-0 top-[8.83px]"
      data-name="Component 5"
    >
      <ImgMenu />
    </div>
  );
}

function OverlayHorizontalBorder() {
  return (
    <div
      className="absolute bg-[rgba(66,66,66,0.5)] h-10 left-0 right-0 top-0"
      data-name="Overlay+HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#424242] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none"
      />
      <ImgLeft />
      <Container7 />
      <Container8 />
      <Component5 />
    </div>
  );
}

function Character() {
  return (
    <div
      className="bg-no-repeat bg-size-[100%_150%] bg-top-left rounded-[14.5px] shrink-0 size-[28.99px]"
      data-name="Character"
      style={{ backgroundImage: `url('${imgCharacter}')` }}
    />
  );
}

function Margin() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[6.13px] pl-0 pr-[7px] pt-0 relative shrink-0"
      data-name="Margin"
    >
      <Character />
    </div>
  );
}

function Container9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#a8a8a8] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[18.85px] whitespace-pre">은재</p>
      </div>
    </div>
  );
}

function Component11() {
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
            d={svgPaths.p3e98800}
            fill="var(--fill-0, white)"
            fillOpacity="0.8"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[9.688px] text-[rgba(255,255,255,0.8)] text-left text-nowrap">
        <p className="block leading-[10px] whitespace-pre">12P</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div
      className="bg-[rgba(59,59,60,0.8)] box-border content-stretch flex flex-row gap-[3px] items-center justify-start px-1.5 py-1 relative rounded-[10px] shrink-0"
      data-name="Component 4"
    >
      <Component11 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[6.99px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container9 />
      <Component4 />
    </div>
  );
}

function Container12() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] font-light italic justify-center leading-[21.75px] relative shrink-0 text-[#a8a8a8] text-[0px] text-[13.945px] text-left w-full">
        <p className="block mb-0">
          예약한 시간에 맞춰, 지우는 홍대 근처에 위치한 은재의 타투 작업
        </p>
        <p className="block mb-0">
          실로 향한다. 건물 옆 반지하로 내려가는 계단을 따라 문을 열자,
        </p>
        <p className="block mb-0">
          은은한 조명 아래 정돈된 작업 공간이 눈에 들어온다. 작업대 앞에
        </p>
        <p className="block mb-0">
          서 무언가를 준비하던 은재가 인기척을 느끼고 지우를 향해 시선
        </p>
        <p className="block mb-0">을 돌린다.</p>
        <p className="block font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] not-italic text-[rgba(255,255,255,0.85)]">
          …지우님 맞으시죠? 들어오세요. 어떤 도안 생각하고 오셨어요?
        </p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div
      className="bg-[rgba(59,59,59,0.5)] max-w-[400px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tl-[3px] rounded-tr-[12px] shrink-0 w-full"
      data-name="Overlay"
    >
      <div className="max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-inherit pb-2 pt-[7.175px] px-3 relative w-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start max-w-[400px] min-w-[400px] p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Container11 />
      <Overlay />
    </div>
  );
}

function Container14() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ gap: "1.42109e-14px" }}
    >
      <Margin />
      <Container13 />
    </div>
  );
}

function Margin1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-1.5 px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container14 />
    </div>
  );
}

function Overlay1() {
  return (
    <div
      className="bg-[rgba(11,147,246,0.6)] box-border content-stretch flex flex-col items-start justify-start max-w-[49.91px] px-3 py-2 relative rounded-bl-[12px] rounded-br-[3px] rounded-tl-[12px] rounded-tr-[12px] shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[14.18px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[21.75px] whitespace-pre">안녕</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-start max-w-[400px] p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Overlay1 />
    </div>
  );
}

function Container16() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-end p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container15 />
    </div>
  );
}

function Margin2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-1.5 px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container16 />
    </div>
  );
}

function Character1() {
  return (
    <div
      className="bg-no-repeat bg-size-[100%_150%] bg-top-left rounded-[14.5px] shrink-0 size-[28.99px]"
      data-name="Character"
      style={{ backgroundImage: `url('${imgCharacter}')` }}
    />
  );
}

function Margin3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[6.13px] pl-0 pr-[7px] pt-0 relative shrink-0"
      data-name="Margin"
    >
      <Character1 />
    </div>
  );
}

function Container17() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#a8a8a8] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[18.85px] whitespace-pre">은재</p>
      </div>
    </div>
  );
}

function Component12() {
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
            d={svgPaths.p3e98800}
            fill="var(--fill-0, white)"
            fillOpacity="0.8"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[9.688px] text-[rgba(255,255,255,0.8)] text-left text-nowrap">
        <p className="block leading-[10px] whitespace-pre">25P</p>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div
      className="bg-[rgba(59,59,60,0.8)] box-border content-stretch flex flex-row gap-[3px] items-center justify-start px-1.5 py-1 relative rounded-[10px] shrink-0"
      data-name="Component 4"
    >
      <Component12 />
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[6.99px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container17 />
      <Component13 />
    </div>
  );
}

function Paragraph() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-light gap-[21.245px] items-start justify-start leading-[0] p-0 relative shrink-0 text-[13.945px] text-left text-nowrap w-full"
      data-name="Paragraph"
    >
      <div className="flex flex-col font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] italic justify-center leading-[21.75px] relative shrink-0 text-[#a8a8a8] whitespace-pre">
        <p className="block mb-0">
          고개를 살짝 숙여 인사하며, 은재는 차분한 목소리로 말을 이어간
        </p>
        <p className="block">다.</p>
      </div>
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] justify-center leading-[21.75px] not-italic relative shrink-0 text-[rgba(255,255,255,0.85)] whitespace-pre">
        <p className="block mb-0">
          준비는 다 됐어요. 자리에 앉아서 편하게 말씀하세요. 도안은 정해
        </p>
        <p className="block">
          오신 게 있으신가요? 아니면, 여기서 같이 찾아볼까요?
        </p>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div
      className="bg-[rgba(59,59,59,0.5)] max-w-[400px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tl-[3px] rounded-tr-[12px] shrink-0 w-full"
      data-name="Overlay"
    >
      <div className="max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-inherit pb-2 pt-[7.185px] px-3 relative w-full">
          <Paragraph />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.99px] items-start justify-start max-w-[400px] min-w-[400px] p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Container19 />
      <Overlay2 />
    </div>
  );
}

function Container21() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ gap: "1.42109e-14px" }}
    >
      <Margin3 />
      <Container20 />
    </div>
  );
}

function Margin4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-1.5 px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container21 />
    </div>
  );
}

function Overlay3() {
  return (
    <div
      className="bg-[rgba(11,147,246,0.6)] box-border content-stretch flex flex-col items-start justify-start max-w-[181.12px] px-3 py-2 relative rounded-bl-[12px] rounded-br-[3px] rounded-tl-[12px] rounded-tr-[12px] shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13.945px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[21.75px] whitespace-pre">
          일단 당신에 대해 설명해줘.
        </p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-start max-w-[400px] p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Overlay3 />
    </div>
  );
}

function Container23() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-end p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container22 />
    </div>
  );
}

function Margin5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-1.5 px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container23 />
    </div>
  );
}

function Character2() {
  return (
    <div
      className="bg-no-repeat bg-size-[100%_150%] bg-top-left rounded-[14.5px] shrink-0 size-[28.99px]"
      data-name="Character"
      style={{ backgroundImage: `url('${imgCharacter}')` }}
    />
  );
}

function Margin6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[6.13px] pl-0 pr-[7px] pt-0 relative shrink-0"
      data-name="Margin"
    >
      <Character2 />
    </div>
  );
}

function Container24() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#a8a8a8] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[18.85px] whitespace-pre">은재</p>
      </div>
    </div>
  );
}

function Component14() {
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
            d={svgPaths.p3e98800}
            fill="var(--fill-0, white)"
            fillOpacity="0.8"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[9.688px] text-[rgba(255,255,255,0.8)] text-left text-nowrap">
        <p className="block leading-[10px] whitespace-pre">22P</p>
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div
      className="bg-[rgba(59,59,60,0.8)] box-border content-stretch flex flex-row gap-[3px] items-center justify-start px-1.5 py-1 relative rounded-[10px] shrink-0"
      data-name="Component 4"
    >
      <Component14 />
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[6.99px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container24 />
      <Component15 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-light gap-[20.99px] items-start justify-start leading-[0] p-0 relative shrink-0 text-left text-nowrap w-full"
      data-name="Paragraph"
    >
      <div className="flex flex-col font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] italic justify-center leading-[21.75px] relative shrink-0 text-[#a8a8a8] text-[13.945px] whitespace-pre">
        <p className="block mb-0">
          예상치 못한 질문에 은재는 잠시 멈칫한다. 그는 손에 들고 있던
        </p>
        <p className="block mb-0">
          잉크 병을 테이블에 내려놓고, 미세하게 굳은 표정으로 지우를 응
        </p>
        <p className="block">시한다.</p>
      </div>
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] justify-center leading-[21.75px] not-italic relative shrink-0 text-[0px] text-[13.945px] text-[rgba(255,255,255,0.85)] whitespace-pre">
        <p className="block mb-0">
          제...설명이요? 타투에 대한 설명이 아니라? 음...타투이스트 은재,
        </p>
        <p className="mb-0">
          <span className="font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] not-italic text-[rgba(255,255,255,0.85)]">{`30살. 홍대에서 작업하고... 그걸로 충분한가요? `}</span>
          <span className="font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] italic text-[#a8a8a8]">
            나지막이 묻는
          </span>
        </p>
        <p className="block font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] italic text-[#a8a8a8]">
          다.
        </p>
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div
      className="bg-[rgba(59,59,59,0.5)] max-w-[400px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tl-[3px] rounded-tr-[12px] shrink-0 w-full"
      data-name="Overlay"
    >
      <div className="max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-inherit pb-[7.99px] pt-[7.06px] px-3 relative w-full">
          <Paragraph1 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start max-w-[400px] min-w-[400px] p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Container26 />
      <Overlay4 />
    </div>
  );
}

function Container28() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ gap: "1.42109e-14px" }}
    >
      <Margin6 />
      <Container27 />
    </div>
  );
}

function Margin7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-1.5 px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container28 />
    </div>
  );
}

function Overlay5() {
  return (
    <div
      className="bg-[rgba(11,147,246,0.6)] box-border content-stretch flex flex-col items-start justify-start max-w-[92.42px] px-3 py-2 relative rounded-bl-[12px] rounded-br-[3px] rounded-tl-[12px] rounded-tr-[12px] shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[14.063px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[21.75px] whitespace-pre">더 설명해봐</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-start max-w-[400px] p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Overlay5 />
    </div>
  );
}

function Container30() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-end p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container29 />
    </div>
  );
}

function Margin8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-1.5 px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container30 />
    </div>
  );
}

function Character3() {
  return (
    <div
      className="bg-no-repeat bg-size-[100%_150%] bg-top-left rounded-[14.5px] shrink-0 size-[28.99px]"
      data-name="Character"
      style={{ backgroundImage: `url('${imgCharacter}')` }}
    />
  );
}

function Margin9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[6.13px] pl-0 pr-[7px] pt-0 relative shrink-0"
      data-name="Margin"
    >
      <Character3 />
    </div>
  );
}

function Container31() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#a8a8a8] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[18.85px] whitespace-pre">은재</p>
      </div>
    </div>
  );
}

function Component16() {
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
            d={svgPaths.p3e98800}
            fill="var(--fill-0, white)"
            fillOpacity="0.8"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[9.688px] text-[rgba(255,255,255,0.8)] text-left text-nowrap">
        <p className="block leading-[10px] whitespace-pre">34P</p>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div
      className="bg-[rgba(59,59,60,0.8)] box-border content-stretch flex flex-row gap-[3px] items-center justify-start px-1.5 py-1 relative rounded-[10px] shrink-0"
      data-name="Component 4"
    >
      <Component16 />
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[6.99px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container31 />
      <Component17 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-light gap-[21.115px] items-start justify-start leading-[0] p-0 relative shrink-0 text-left text-nowrap w-full"
      data-name="Paragraph"
    >
      <div className="flex flex-col font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] italic justify-center leading-[21.75px] relative shrink-0 text-[#a8a8a8] text-[13.945px] whitespace-pre">
        <p className="block mb-0">
          은재는 잠시 생각에 잠긴 듯, 시선을 아래로 떨군다. 무언가 망설
        </p>
        <p className="block">이는 기색이 역력하다. 어렵게 입을 열었다.</p>
      </div>
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] justify-center not-italic relative shrink-0 text-[0px] text-[rgba(255,255,255,0.85)] whitespace-pre">
        <p className="block font-light leading-[21.75px] mb-0 text-[13.945px]">
          굳이 알아야 할 필요는 없을 텐데요... 뭐, 궁금하시다면야. 미대 졸
        </p>
        <p className="block font-light leading-[21.75px] mb-0 text-[13.945px]">
          업하고, 돈 때문에 이 일 시작했어요. 원래는 유학 가려고 했는데,
        </p>
        <p className="font-light leading-[21.75px] text-[13.945px]">
          <span className="font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] not-italic text-[rgba(255,255,255,0.85)]">{`쉽지 않네요. 그걸로 됐어요? `}</span>
          <span className="font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] italic text-[#a8a8a8]">
            어깨를 으쓱하며 묻는다.
          </span>
        </p>
      </div>
    </div>
  );
}

function Overlay6() {
  return (
    <div
      className="bg-[rgba(59,59,59,0.5)] max-w-[400px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tl-[3px] rounded-tr-[12px] shrink-0 w-full"
      data-name="Overlay"
    >
      <div className="max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-inherit pb-[7.99px] pt-[7.185px] px-3 relative w-full">
          <Paragraph2 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.99px] items-start justify-start max-w-[400px] min-w-[400px] p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Container33 />
      <Overlay6 />
    </div>
  );
}

function Container35() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ gap: "1.42109e-14px" }}
    >
      <Margin9 />
      <Container34 />
    </div>
  );
}

function Margin10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-1.5 px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container35 />
    </div>
  );
}

function Overlay7() {
  return (
    <div
      className="bg-[rgba(11,147,246,0.6)] box-border content-stretch flex flex-col items-start justify-start max-w-[70.23px] px-3 py-2 relative rounded-bl-[12px] rounded-br-[3px] rounded-tl-[12px] rounded-tr-[12px] shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13.945px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[21.75px] whitespace-pre">아니, 더</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-start max-w-[400px] p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Overlay7 />
    </div>
  );
}

function Container37() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-end p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container36 />
    </div>
  );
}

function Margin11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-1.5 px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container37 />
    </div>
  );
}

function Character4() {
  return (
    <div
      className="bg-no-repeat bg-size-[100%_150%] bg-top-left rounded-[14.5px] shrink-0 size-[28.99px]"
      data-name="Character"
      style={{ backgroundImage: `url('${imgCharacter}')` }}
    />
  );
}

function Margin12() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[6.13px] pl-0 pr-[7px] pt-0 relative shrink-0"
      data-name="Margin"
    >
      <Character4 />
    </div>
  );
}

function Container38() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#a8a8a8] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[18.85px] whitespace-pre">은재</p>
      </div>
    </div>
  );
}

function Component18() {
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
            d={svgPaths.p3e98800}
            fill="var(--fill-0, white)"
            fillOpacity="0.8"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[9.688px] text-[rgba(255,255,255,0.8)] text-left text-nowrap">
        <p className="block leading-[10px] whitespace-pre">35P</p>
      </div>
    </div>
  );
}

function Component19() {
  return (
    <div
      className="bg-[rgba(59,59,60,0.8)] box-border content-stretch flex flex-row gap-[3px] items-center justify-start px-1.5 py-1 relative rounded-[10px] shrink-0"
      data-name="Component 4"
    >
      <Component18 />
      <Container39 />
    </div>
  );
}

function Container40() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[6.99px] items-center justify-start left-0 p-0 right-0 top-0"
      data-name="Container"
    >
      <Container38 />
      <Component19 />
    </div>
  );
}

function Component20() {
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
            d={svgPaths.p368fe800}
            fill="var(--fill-0, white)"
            fillOpacity="0.7"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgReload() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - reload"
    >
      <Component20 />
    </div>
  );
}

function Component21() {
  return (
    <div
      className="bg-[#3a3a3a] box-border content-stretch flex flex-row items-center justify-center p-0 relative rounded-[14px] shrink-0 size-7"
      data-name="Component 5"
    >
      <ImgReload />
    </div>
  );
}

function Component22() {
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
            d={svgPaths.p29437700}
            fill="var(--fill-0, white)"
            fillOpacity="0.7"
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
      <Component22 />
    </div>
  );
}

function Component23() {
  return (
    <div
      className="bg-[#3a3a3a] box-border content-stretch flex flex-row items-center justify-center p-0 relative rounded-[14px] shrink-0 size-7"
      data-name="Component 5"
    >
      <ImgEdit />
    </div>
  );
}

function Component24() {
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
            d={svgPaths.p1e486f80}
            fill="var(--fill-0, white)"
            fillOpacity="0.7"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgDelete() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - delete"
    >
      <Component24 />
    </div>
  );
}

function Component25() {
  return (
    <div
      className="bg-[#3a3a3a] box-border content-stretch flex flex-row items-center justify-center p-0 relative rounded-[14px] shrink-0 size-7"
      data-name="Component 5"
    >
      <ImgDelete />
    </div>
  );
}

function Container41() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[9px] items-start justify-start left-0 px-2 py-0 right-0 top-[200.21px]"
      data-name="Container"
    >
      <Component21 />
      <Component23 />
      <Component25 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-light gap-[21.495px] items-start justify-start leading-[0] pb-[0.555px] pt-0 px-0 relative shrink-0 text-left text-nowrap w-full"
      data-name="Paragraph"
    >
      <div className="flex flex-col font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] italic justify-center leading-[21.75px] relative shrink-0 text-[#a8a8a8] text-[13.945px] whitespace-pre">
        <p className="block mb-0">
          지우의 계속되는 요구에 은재는 살짝 불편한 기색을 내비친다. 팔
        </p>
        <p className="block">짱을 끼고 살짝 몸을 뒤로 뺀다.</p>
      </div>
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] justify-center leading-[21.75px] not-italic relative shrink-0 text-[0px] text-[13.945px] text-[rgba(255,255,255,0.85)] whitespace-pre">
        <p className="block mb-0">
          흐음... 더 뭘 알고 싶으신 건데요? 좋아하는 거요? 장 줄리앙 좋아
        </p>
        <p className="block mb-0">
          해요. 그림체가 단순하면서도 위트 있잖아요. 작업할 때 영감도 많
        </p>
        <p className="mb-0">
          <span className="font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] not-italic text-[rgba(255,255,255,0.85)]">{`이 받고... 뭐, 그런 거죠. 이제 됐어요? `}</span>
          <span className="font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] italic text-[#a8a8a8]">
            살짝 짜증 섞인 말투로 묻
          </span>
        </p>
        <p className="block font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] italic text-[#a8a8a8]">
          는다.
        </p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div
      className="absolute bg-[#3b3b3b] box-border content-stretch flex flex-col items-start justify-start left-0 max-w-[400px] pb-2 pt-[7.18px] px-3 right-0 rounded-bl-[12px] rounded-br-[12px] rounded-tl-[3px] rounded-tr-[12px] top-[23.98px]"
      data-name="Background"
    >
      <Paragraph3 />
    </div>
  );
}

function Container42() {
  return (
    <div
      className="max-w-[400px] relative self-stretch shrink-0 w-[400px]"
      data-name="Container"
    >
      <Container40 />
      <Container41 />
      <Background />
    </div>
  );
}

function Container43() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start min-h-[228.2px] p-0 relative shrink-0 w-full"
      data-name="Container"
      style={{ gap: "1.42109e-14px" }}
    >
      <Margin12 />
      <Container42 />
    </div>
  );
}

function Margin13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-1.5 px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container43 />
    </div>
  );
}

function Container44() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Margin1 />
      <Margin2 />
      <Margin4 />
      <Margin5 />
      <Margin7 />
      <Margin8 />
      <Margin10 />
      <Margin11 />
      <Margin13 />
    </div>
  );
}

function Container45() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div
      className="absolute bottom-[-52.93%] box-border content-stretch flex flex-col items-start justify-end left-0 pb-0 pt-[30px] px-[15px] right-0 top-[35%]"
      data-name="Container"
    >
      <Container45 />
    </div>
  );
}

function Background1() {
  return (
    <div
      className="bg-[#000000] h-[1038.75px] max-w-[500px] relative shrink-0 w-full"
      data-name="Background"
    >
      <Container1 />
      <Component2 />
      <OverlayOverlayBlur />
      <OverlayHorizontalBorder />
      <Container46 />
    </div>
  );
}

function Component26() {
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
            d={svgPaths.p3e5ba480}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgThunderbolt() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - thunderbolt"
    >
      <Component26 />
    </div>
  );
}

function Container47() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[1.25px] pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgThunderbolt />
    </div>
  );
}

function Component6() {
  return (
    <div
      className="bg-[#141414] box-border content-stretch flex flex-row items-center justify-center min-w-8 px-2 py-0 relative rounded-[18px] shrink-0 size-[35.99px]"
      data-name="Component 6"
    >
      <Container47 />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[35.99px] items-end justify-start min-w-9 pl-0 pr-1 py-0 relative shrink-0 w-[39.99px]"
      data-name="Button:margin"
    >
      <Component6 />
    </div>
  );
}

function Container48() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[14.063px] text-[rgba(255,255,255,0.25)] text-left w-full">
        <p className="block leading-[23.57px]">메시지 보내기</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div
      className="h-7 max-h-7 max-w-[356.04px] min-h-7 relative rounded-md shrink-0 w-full"
      data-name="Textarea"
    >
      <div className="flex flex-row justify-center max-h-inherit max-w-inherit min-h-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-7 items-start justify-center max-h-inherit max-w-inherit min-h-inherit px-2 py-0.5 relative w-full">
          <Container48 />
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px pb-1 pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <Textarea />
    </div>
  );
}

function Star() {
  return (
    <div
      className="bg-left bg-no-repeat bg-size-[100%_99.92%] h-3 shrink-0 w-[11.99px]"
      data-name="star"
      style={{ backgroundImage: `url('${imgStar}')` }}
    />
  );
}

function Container50() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[3.12px] pt-[1.13px] px-0 relative shrink-0"
      data-name="Container"
    >
      <Star />
    </div>
  );
}

function Button() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[35.99px] items-center justify-center min-w-8 px-2 py-0 relative rounded-[17px] shrink-0 w-8"
      data-name="Button"
    >
      <Container50 />
    </div>
  );
}

function Component27() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <g id="Component 1">
          <path d={svgPaths.p5ad8f00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImgSend() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - send"
    >
      <Component27 />
    </div>
  );
}

function Container51() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[1.25px] pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgSend />
    </div>
  );
}

function Component28() {
  return (
    <div
      className="bg-[#dc5903] box-border content-stretch flex flex-row items-center justify-center min-w-8 px-[8.625px] py-[0.625px] relative rounded-[18px] shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0 size-[35.99px]"
      data-name="Component 6"
    >
      <Container51 />
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[35.99px] items-start justify-start min-w-9 pl-1 pr-0 py-0 relative shrink-0 w-[39.99px]"
      data-name="Button:margin"
    >
      <Component28 />
    </div>
  );
}

function Container52() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Button />
      <ButtonMargin1 />
    </div>
  );
}

function Background2() {
  return (
    <div
      className="bg-[#292928] relative rounded-[25px] shrink-0 w-full"
      data-name="Background"
    >
      <div className="flex flex-row items-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-end justify-start px-2 py-1.5 relative w-full">
          <ButtonMargin />
          <Container49 />
          <Container52 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div
      className="absolute bottom-[5px] box-border content-stretch flex flex-col items-start justify-start left-[516.25px] max-w-[500px] px-2 py-0 w-[500px]"
      data-name="Container"
    >
      <Background2 />
    </div>
  );
}

function Background3() {
  return (
    <div
      className="bg-[#000000] box-border content-stretch flex flex-col h-[1038.75px] items-start justify-start px-[516.25px] py-0 shrink-0 sticky top-0 w-[1532.5px]"
      data-name="Background"
    >
      <Background1 />
      <Container53 />
    </div>
  );
}

function Container54() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[-516.25px] min-h-[1038.75px] p-0 right-0 top-0"
      data-name="Container"
    >
      <Background3 />
    </div>
  );
}

export default function Background4() {
  return (
    <div className="bg-[#1a1b1b] relative size-full" data-name="Background">
      <Container54 />
    </div>
  );
}