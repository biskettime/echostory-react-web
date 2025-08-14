import svgPaths from "./svg-vov9aepcmw";
import imgStoryCover from "figma:asset/374d74b30fe73a06692e4b5c87efdada280aa447.png";

function StoryCover() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_100%] bg-top-left h-[705px] left-0 right-0 top-0"
      data-name="story cover"
      style={{ backgroundImage: `url('${imgStoryCover}')` }}
    />
  );
}

function Container() {
  return (
    <div
      className="basis-0 grow h-[611px] min-h-px min-w-px overflow-clip relative rounded-md shrink-0"
      data-name="Container"
    >
      <StoryCover />
      <div className="absolute inset-0" data-name="Gradient" />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start min-h-px p-0 relative shrink-0 w-[470px]"
      data-name="Container"
    >
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[22.5px] text-left text-nowrap">
        <p className="block leading-[37.71px] whitespace-pre">악녀</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[42.72px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[14.875px] text-[rgba(255,255,255,0.8)] text-left text-nowrap">
        <p className="block leading-[25.14px] whitespace-pre">{`우연히 {{user}}와 부딧힌 이후 자주 얽히는 할시입니다`}</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start pb-[4.235px] pt-[3.175px] px-1.5 relative rounded self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ff9500] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">#로맨스</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start pb-[4.235px] pt-[3.175px] px-1.5 relative rounded self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ff9500] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">#사랑</p>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start pb-[4.235px] pt-[3.175px] px-1.5 relative rounded self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ff9500] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">#청춘</p>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start pb-[4.235px] pt-[3.175px] px-1.5 relative rounded self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ff9500] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">#아픔</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="[flex-flow:wrap] absolute box-border content-stretch flex gap-1 items-start justify-start left-0 overflow-clip pb-0 pt-[5px] px-0 right-0 top-[72.86px]"
      data-name="Container"
    >
      <Overlay />
      <Overlay1 />
      <Overlay2 />
      <Overlay3 />
    </div>
  );
}

function Link() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14.18px] text-left text-nowrap">
        <p className="block leading-[23.57px] whitespace-pre">@jackal_20vq</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 pb-[10.01px] pt-[4.99px] px-0 right-0 top-[111.27px]"
      data-name="Container"
    >
      <Link />
    </div>
  );
}

function Heading3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left w-full">
        <p className="block leading-[25.14px]">내 대화 프로필</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-[18px] py-0 relative w-full">
          <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.234px] text-left w-full">
            <p className="block leading-[30px]">지우</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container8 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div
      className="basis-0 bg-[#3a3a3a] grow h-full min-h-px min-w-px relative rounded-md shrink-0"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-md"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-[11.625px] py-[0.625px] relative size-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Component1() {
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
            d={svgPaths.p1293b00}
            fill="var(--fill-0, white)"
            fillOpacity="0.25"
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
      className="absolute box-border content-stretch flex flex-row h-[11.99px] items-center justify-start p-0 right-[10.4px] top-1/2 translate-y-[-50%]"
      data-name="Container"
    >
      <Component1 />
    </div>
  );
}

function Container11() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow h-[31.99px] items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <BackgroundBorder />
      <Container10 />
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
        <p className="block leading-[normal] whitespace-pre">편집</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div
      className="bg-[#3a3a3a] box-border content-stretch flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative rounded-md shrink-0"
      data-name="Component 2"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.234px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">삭제</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div
      className="bg-[#3a3a3a] box-border content-stretch flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative rounded-md shrink-0"
      data-name="Component 2"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[11.99px] items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Component2 />
      <Component3 />
    </div>
  );
}

function Container15() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[11.99px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container11 />
      <Container14 />
    </div>
  );
}

function Background() {
  return (
    <div
      className="absolute bg-[#2a2a2a] box-border content-stretch flex flex-col gap-4 items-start justify-start left-0 p-[20px] right-0 rounded-xl top-[175.82px]"
      data-name="Background"
    >
      <Heading3 />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[308.26px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15.805px] text-left text-nowrap">
        <p className="block leading-[26.71px] whitespace-pre">스토리 설정</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light gap-[22.01px] items-start justify-start leading-[0] left-0 not-italic p-0 right-0 text-[13.016px] text-[rgba(255,255,255,0.7)] text-left text-nowrap top-[340.66px]"
      data-name="Paragraph"
    >
      <div className="flex flex-col justify-center leading-[22px] relative shrink-0 whitespace-pre">
        <p className="block mb-0">
          할시.레이슨 키 170 영국인여성 말랐지만 탄탄한 근육질 몸매 선명한 복근
          예쁜얼굴 그
        </p>
        <p className="block mb-0">
          러나 성격은 악하고 싸가지없고 거만하고 자존심이 강하다 그리고 심지어
          부잣집 딸내미
        </p>
        <p className="block">
          그리고 직업은 아버지회사에서 경영직을 맡고있다 카페에 자주간다
        </p>
      </div>
      <div className="flex flex-col justify-center leading-[22px] relative shrink-0 whitespace-pre">
        <p className="block mb-0">{`그리고 {{user}}는 오토바이 라이더이고 여행자다 그리고 할시는{{user}} 와 우연히 만`}</p>
        <p className="block">나는 날이 잦아진다</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[486.99px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15.805px] text-left text-nowrap">
        <p className="block leading-[26.71px] whitespace-pre">캐릭터 설명</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[12.797px] text-[rgba(255,255,255,0.8)] text-left w-full">
        <p className="block leading-[22px]">• 할시</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[1.62px] items-start justify-start left-0 p-0 right-0 top-[519.38px]"
      data-name="Container"
    >
      <Container18 />
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[22px] not-italic relative shrink-0 text-[13.016px] text-[rgba(255,255,255,0.7)] text-left text-nowrap whitespace-pre">
        <p className="block mb-0">
          할시는 악하고 싸가지없고 자존심 강해도 마음은 여리다
        </p>
        <p className="block">그러나 속마음은 잘 표현을 못한다</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div
      className="h-[587.37px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <div
        className="absolute bg-[rgba(255,255,255,0.15)] h-px left-0 right-0 top-[154.83px]"
        data-name="Horizontal Divider"
      />
      <Background />
      <Container16 />
      <Paragraph />
      <Container17 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.99px] items-start justify-start pb-[225.01px] pt-10 px-[15px] relative w-full">
          <Container3 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Component4() {
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
      <Component4 />
    </div>
  );
}

function Container22() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 pb-[5.84px] pt-[3.88px] px-[15px] translate-y-[-50%]"
      data-name="Container"
      style={{ top: "calc(50% - 0.315px)" }}
    >
      <ImgLeft />
    </div>
  );
}

function Margin() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[226.53px] pb-[1.625px] pt-0 px-0 top-[7.05px]"
      data-name="Margin"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">스토리 상세</p>
      </div>
    </div>
  );
}

function Component5() {
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
      <Component5 />
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

function Container23() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-[36.99px] px-2.5 py-0 top-[6.69px]"
      data-name="Container"
    >
      <Component />
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div
      className="absolute bg-[#1a1b1b] h-10 left-0 max-w-[500px] top-0 w-[500px]"
      data-name="Background+HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#424242] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none"
      />
      <Container22 />
      <Margin />
      <Container23 />
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
      <Container21 />
    </div>
  );
}

export default function Background2() {
  return (
    <div
      className="bg-[#000000] box-border content-stretch flex flex-row items-center justify-center p-0 relative size-full"
      data-name="Background"
    >
      <Background1 />
    </div>
  );
}