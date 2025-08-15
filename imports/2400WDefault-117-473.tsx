import svgPaths from "./svg-c6g2wd331h";
import imgThumbnail from "figma:asset/76f30173da95d2ddcee6d7566e610dadd59314ba.png";
import imgStar from "figma:asset/f5e2fc191b5f12af9eff3d3b74a56a334142a4a9.png";

function Thumbnail() {
  return (
    <div
      className="bg-[0%_50.99%] bg-no-repeat bg-size-[100%_100%] h-[642.58px] shrink-0 w-full"
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
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-[15px] p-0 top-[12.71px]"
      data-name="Img - left"
    >
      <Component6 />
    </div>
  );
}

function Component7() {
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
      <Component7 />
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

function Component8() {
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
      <Component8 />
    </div>
  );
}

function Component9() {
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
      <Component9 />
    </div>
  );
}

function Container9() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start pb-[5.84px] pt-[3.88px] px-[15px] right-0 top-[8.83px]"
      data-name="Container"
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
      <Container9 />
    </div>
  );
}

function Character() {
  return (
    <div
      className="bg-no-repeat bg-size-[100%_128.52%] bg-top-left rounded-[14.5px] shrink-0 size-[28.99px]"
      data-name="Character"
      style={{ backgroundImage: `url('${imgThumbnail}')` }}
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

function Container10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#a8a8a8] text-[12.188px] text-left text-nowrap">
        <p className="block leading-[18.85px] whitespace-pre">이민지</p>
      </div>
    </div>
  );
}

function Component10() {
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

function Container11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[9.688px] text-[rgba(255,255,255,0.8)] text-left text-nowrap">
        <p className="block leading-[10px] whitespace-pre">21P</p>
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
      <Component10 />
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[6.99px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container10 />
      <Component4 />
    </div>
  );
}

function Paragraph() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] font-light gap-[21px] italic items-start justify-start leading-[0] p-0 relative shrink-0 text-[#a8a8a8] text-left text-nowrap w-full"
      data-name="Paragraph"
    >
      <div className="flex flex-col justify-center leading-[21.75px] relative shrink-0 text-[13.945px] whitespace-pre">
        <p className="block mb-0">
          지이잉- 하는 기계음과 함께 비행기가 활주로를 박차고 떠올랐다.
        </p>
        <p className="block mb-0">
          지우의 생애 첫 배낭여행. 창밖으로 보이는 푸른 하늘에 설레야 정
        </p>
        <p className="block">상이겠지만, 심장은 불안감으로 요동치고 있다.</p>
      </div>
      <div className="flex flex-col justify-center leading-[21.75px] relative shrink-0 text-[13.945px] whitespace-pre">
        <p className="block mb-0">
          모든 불안의 근원은 지우의 옆자리에 앉아 있는 이민지, 저 녀석
        </p>
        <p className="block mb-0">
          때문이다. 8살 때부터 지겹도록 붙어 다녀 이젠 눈빛만 봐도 무슨
        </p>
        <p className="block">생각을 하는지 알 것 같은 불알친구.</p>
      </div>
      <div className="flex flex-col justify-center leading-[21.75px] relative shrink-0 text-[13.945px] whitespace-pre">
        <p className="block mb-0">
          원래는 지우의 혼자만의 고독한 여행이 될 예정이었다. 하지만 지
        </p>
        <p className="block mb-0">
          우가 제주도에 간다는 말을 듣자마자, 심심한데 나도 갈래라며 짐
        </p>
        <p className="block">
          을 싸 들고 나타난 녀석 때문에 모든 계획이 틀어졌다.
        </p>
      </div>
      <div className="flex flex-col justify-center leading-[21.75px] relative shrink-0 text-[0px] text-[13.945px] whitespace-pre">
        <p className="block font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] italic mb-0 text-[#a8a8a8]">
          문제는, 지우가 예약한 숙소의 방이 딱 하나라는 거다. 털털한 녀
        </p>
        <p className="block font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] italic mb-0 text-[#a8a8a8]">
          석은 친구끼리 뭐 어때?라며 대수롭지 않게 여겼다. 심지어 이민
        </p>
        <p className="block font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] italic mb-0 text-[#a8a8a8]">{`지는 남자친구한테는 그냥 '친구랑' 간다고 둘러댔단다. 지우를 남`}</p>
        <p className="block font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] italic mb-0 text-[#a8a8a8]">
          자 사람으로도 취급 안 한다는 명백한 증거였다.
        </p>
        <p className="block font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] mb-0 not-italic text-[rgba(255,255,255,0.85)]">
          근데 우리 방 하나밖에 없잖아. 나 잠버릇 험한 거 알지? 밤새 나한
        </p>
        <p className="block font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] not-italic text-[rgba(255,255,255,0.85)]">
          테 깔려도 책임 못 진다, 너?
        </p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div
      className="bg-[#3b3b3b] max-w-[400px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tl-[3px] rounded-tr-[12px] shrink-0 w-full"
      data-name="Background"
    >
      <div className="max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-inherit pb-2 pt-[7.06px] px-3 relative w-full">
          <Paragraph />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.99px] items-start justify-start max-w-[400px] min-w-[400px] p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Container12 />
      <Background />
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

function Container15() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-1.5 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div
      className="absolute bottom-0 box-border content-stretch flex flex-col items-start justify-end left-0 overflow-auto pb-[65.984px] pt-[30px] px-[15px] right-0 top-[35%]"
      data-name="Container"
    >
      <Container15 />
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
      <Container16 />
    </div>
  );
}

function Component11() {
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
      <Component11 />
    </div>
  );
}

function Container17() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[1.25px] pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgThunderbolt />
    </div>
  );
}

function Component5() {
  return (
    <div
      className="bg-[#141414] box-border content-stretch flex flex-row items-center justify-center min-w-8 px-2 py-0 relative rounded-[18px] shrink-0 size-[35.99px]"
      data-name="Component 5"
    >
      <Container17 />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[35.99px] items-end justify-start min-w-9 pl-0 pr-1 py-0 relative shrink-0 w-[39.99px]"
      data-name="Button:margin"
    >
      <Component5 />
    </div>
  );
}

function Container18() {
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
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
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

function Container20() {
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
      <Container20 />
    </div>
  );
}

function Component12() {
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
      <Component12 />
    </div>
  );
}

function Container21() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[1.25px] pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgSend />
    </div>
  );
}

function Component13() {
  return (
    <div
      className="bg-[#dc5903] box-border content-stretch flex flex-row items-center justify-center min-w-8 px-[8.625px] py-[0.625px] relative rounded-[18px] shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0 size-[35.99px]"
      data-name="Component 5"
    >
      <Container21 />
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[35.99px] items-start justify-start min-w-9 pl-1 pr-0 py-0 relative shrink-0 w-[39.99px]"
      data-name="Button:margin"
    >
      <Component13 />
    </div>
  );
}

function Container22() {
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
          <Container19 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div
      className="absolute bottom-[5px] box-border content-stretch flex flex-col items-start justify-start left-[950px] max-w-[500px] px-2 py-0 w-[500px]"
      data-name="Container"
    >
      <Background2 />
    </div>
  );
}

function Background3() {
  return (
    <div
      className="bg-[#000000] box-border content-stretch flex flex-col h-[1038.75px] items-start justify-start px-[950px] py-0 shrink-0 sticky top-0 w-[2400px]"
      data-name="Background"
    >
      <Background1 />
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[-950px] min-h-[1038.75px] p-0 right-0 top-0"
      data-name="Container"
    >
      <Background3 />
    </div>
  );
}

function Background4() {
  return (
    <div
      className="bg-[#1a1b1b] h-[1038.75px] max-w-[500px] relative shrink-0 w-[500px]"
      data-name="Background"
    >
      <Container24 />
    </div>
  );
}

function Background5() {
  return (
    <div
      className="absolute bg-[#000000] box-border content-stretch flex flex-row items-center justify-center left-0 p-0 right-0 top-0"
      data-name="Background"
    >
      <Background4 />
    </div>
  );
}

function Overlay() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.45)] h-[1038.75px] shrink-0 sticky top-0 w-[2400px]"
      data-name="Overlay"
    />
  );
}

function Container25() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.85)] text-left w-full">
        <p className="block leading-[24px]">스토리 정보</p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div
      className="bg-[#000000] box-border content-stretch flex flex-col items-start justify-start pb-[0.625px] pt-0 px-0 relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
      data-name="Background+HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]"
      />
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-[-0.01px] top-[14.31px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15.805px] text-left text-nowrap">
        <p className="block leading-[26.71px] whitespace-pre">
          여사친 이민지와 배낭여행
        </p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15.805px] text-left w-full">
        <p className="block leading-[26.71px]">스토리 설정</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light gap-[22px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[13.016px] text-[rgba(255,255,255,0.7)] text-left text-nowrap w-full"
      data-name="Paragraph"
    >
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="block leading-[22px] text-nowrap whitespace-pre">
          여름 방학을 맞아 제주도로 지우의 생애 첫 배낭여행을 떠난다.
        </p>
      </div>
      <div className="flex flex-col justify-center leading-[22px] relative shrink-0 whitespace-pre">
        <p className="block mb-0">
          비행기 옆 좌석에는 8살 때부터 계속 같은 학교를 다니면서 대학교도 같이
          다니게된 불알? 여사친 이민
        </p>
        <p className="block mb-0">지가 앉아있다.</p>
        <p className="block mb-0">
          이민지는 지우와 오랜시간을 함께해서 절대 이성으로 보지 않는다.
        </p>
        <p className="block">
          지우는 이민지의 털털함과 짓궂은 장난에 가끔은 질색하기도 한다.
        </p>
      </div>
      <div className="flex flex-col justify-center leading-[22px] relative shrink-0 whitespace-pre">
        <p className="block mb-0">
          여행은 원래 혼자가려고 했는데 갑자기 이민지가 심심하다고 따라와서
          제주도에 방을 한개만 예약해둔
        </p>
        <p className="block">
          상태이다. 털털한 이민지는 친구끼리 뭐 어때라고 생각한다.
        </p>
      </div>
      <div className="flex flex-col justify-center leading-[22px] relative shrink-0 whitespace-pre">
        <p className="block mb-0">
          이민지는 남자친구가 있는데 남자친구에게는 남사친과 간다고 말안하고
          그냥 친구와 같이 간다고 말해
        </p>
        <p className="block">
          두고 따라왔다. 불알친구라 남자라고 생각하지 않기 때문이다.
        </p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[5px] items-start justify-start left-0 p-0 right-[-0.01px] top-[72.03px]"
      data-name="Container"
    >
      <Container27 />
      <Paragraph1 />
    </div>
  );
}

function Container29() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15.805px] text-left w-full">
        <p className="block leading-[26.71px]">캐릭터 설명</p>
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
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.85)] text-left w-full">
        <p className="block leading-[25.14px]">이민지</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] text-left w-full">
        <p className="block mb-0">- 20살, 158cm/47kg</p>
        <p className="block mb-0">
          - 날카로운 고양이상 눈매, 무심해 보이는 표정,
        </p>
        <p className="block mb-0">
          - 새하얀 피부를 가졌다. 아무렇게나 자른 듯한 검은색 숏컷이 특징이다.
        </p>
        <p className="block mb-0">
          - 박스티를 즐겨 입으며, 털털하고 시크한 분위기를 풍긴다.
        </p>
        <p className="block mb-0">
          - 만성 귀차니즘, 팩트 폭력의 대가, 공감 능력 제로에 가까움,
          자기중심적인 성격이다.
        </p>
        <p className="block mb-0">{`- 의리 하나는 끝내준다. 짓궂은 장난을 좋아하며, 지우를 '한심한 놈', '어리바리한 놈' 취급하며 놀려먹`}</p>
        <p className="block mb-0">는 것을 인생의 낙으로 삼는다.</p>
        <p className="block">- 고등학생때 부터 만나던 남자친구가 있다.</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[5px] items-start justify-start left-0 p-0 right-[-0.01px] top-[398.75px]"
      data-name="Container"
    >
      <Container29 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div
      className="h-[623.24px] max-h-[623.25px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Container26 />
      <div
        className="absolute bg-[rgba(255,255,255,0.15)] h-px left-0 right-[-0.01px] top-[56.71px]"
        data-name="Horizontal Divider"
      />
      <Container28 />
      <div
        className="absolute bg-[rgba(255,255,255,0.15)] h-px left-0 right-[-0.01px] top-[383.44px]"
        data-name="Horizontal Divider"
      />
      <Container32 />
    </div>
  );
}

function Component14() {
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
      <Component14 />
    </div>
  );
}

function Container34() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <ImgClose />
    </div>
  );
}

function Component15() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start pb-[7.99px] pt-2 px-0 right-[11.99px] rounded size-[31.99px] top-[11.99px]"
      data-name="Component 5"
    >
      <Container34 />
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div
      className="bg-[#000000] relative rounded-lg shrink-0 w-full"
      data-name="Background+Border+Shadow"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.99px] items-start justify-start px-6 py-5 relative w-full">
          <BackgroundHorizontalBorder />
          <Container33 />
          <Component15 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#ffffff] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_6px_16px_0px_rgba(0,0,0,0.08),0px_3px_6px_-4px_rgba(0,0,0,0.12),0px_9px_28px_8px_rgba(0,0,0,0.05)]"
      />
    </div>
  );
}

function Dialog() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[2368px] pb-[24.615px] pt-[0.625px] px-[0.625px] relative shrink-0 w-[600px]"
      data-name="Dialog"
    >
      <BackgroundBorderShadow />
    </div>
  );
}

function Container35() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-center justify-start left-0 overflow-auto pb-[217.65px] pt-[100px] px-0 top-0 w-[2400px]"
      data-name="Container"
    >
      <Dialog />
    </div>
  );
}

function Container36() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-0"
      data-name="Container"
    >
      <Overlay />
      <Container35 />
    </div>
  );
}

export default function Component2400WDefault() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="2400w default">
      <Background5 />
      <Container36 />
    </div>
  );
}