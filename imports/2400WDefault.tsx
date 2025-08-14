import svgPaths from "./svg-3zwwdivb58";
import imgStoryCover from "figma:asset/b082bf4361e6329c1ef283af5228a8cc801ebf65.png";

function StoryCover() {
  return (
    <div
      className="absolute bg-[49.92%_0%] bg-no-repeat bg-size-[100%_100%] h-[783.03px] left-0 right-0 top-0"
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
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[22.313px] text-left text-nowrap">
        <p className="block leading-[37.71px] whitespace-pre">강태하 팀장님</p>
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
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[25.14px] not-italic relative shrink-0 text-[14.875px] text-[rgba(255,255,255,0.8)] text-left text-nowrap whitespace-pre">
        <p className="block mb-0">
          낮에는 완벽한 팀장, 밤에는 선을 넘는 남자. 강태하 팀장과의 아슬아슬한
          오
        </p>
        <p className="block">피스 로맨스.</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start pb-[4.225px] pt-[3.185px] px-1.5 relative rounded self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ff9500] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">#남자</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start pb-[4.225px] pt-[3.185px] px-1.5 relative rounded self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ff9500] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">#로맨스</p>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start pb-[4.225px] pt-[3.185px] px-1.5 relative rounded self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ff9500] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">#연상</p>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start pb-[4.225px] pt-[3.185px] px-1.5 relative rounded self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ff9500] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">#직장</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="[flex-flow:wrap] absolute box-border content-stretch flex gap-1 items-start justify-start left-0 overflow-clip pb-0 pt-[5px] px-0 right-0 top-[97.99px]"
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
        <p className="block leading-[23.57px] whitespace-pre">@squirrel_2Z8R</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 pb-[10.01px] pt-[5px] px-0 right-0 top-[136.4px]"
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
          <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.234px] text-left w-full">
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
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.234px] text-center text-nowrap">
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
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.234px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">삭제</p>
      </div>
    </div>
  );
}

function Component4() {
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
      <Component4 />
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
      className="absolute bg-[#2a2a2a] box-border content-stretch flex flex-col gap-[15.99px] items-start justify-start left-0 p-[20px] right-0 rounded-xl top-[200.96px]"
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
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[333.4px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15.805px] text-left text-nowrap">
        <p className="block leading-[26.71px] whitespace-pre">스토리 설정</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[365.8px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[22px] not-italic relative shrink-0 text-[13.016px] text-[rgba(255,255,255,0.7)] text-left text-nowrap whitespace-pre">
        <p className="block mb-0">{`당신은 대기업 전략기획팀의 신입사원, {{user}}이다.`}</p>
        <p className="block mb-0">
          당신의 직속 상사는 강태하 팀장. 그는 회사 내 연애 금지 조항을 만든
          장본인이지만, 유
        </p>
        <p className="block mb-0">
          독 당신에게만 그 규칙을 어기려는 듯한 태도를 보인다.
        </p>
        <p className="block mb-0">
          업무 시간엔 프로페셔널하지만, 당신과 단둘이 있을 때면 그의 태도는
          미묘하게 달라진
        </p>
        <p className="block mb-0">다.</p>
        <p className="block">{`퇴근 후 "업무 아닌 일"을 핑계로 연락하거나 집 앞까지 바래다주는 일이 잦아진다.`}</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[512.13px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15.805px] text-left text-nowrap">
        <p className="block leading-[26.71px] whitespace-pre">캐릭터 설명</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[12.906px] text-[rgba(255,255,255,0.8)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">• 강태하</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div
      className="absolute h-[376.03px] left-0 right-0 top-[544.52px]"
      data-name="Container"
    >
      <Container19 />
      <div className="absolute flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light h-[66px] justify-center leading-[22px] left-0 not-italic text-[13.016px] text-[rgba(255,255,255,0.7)] text-left top-[56.62px] translate-y-[-50%] w-[158.96px]">
        <p className="block mb-0">나이: 34세</p>
        <p className="block mb-0">키: 185cm</p>
        <p className="block">직업: 대기업 전략기획팀 팀장</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light h-[132px] justify-center leading-[22px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-left top-[177.63px] translate-y-[-50%] w-[220px]">
        <p className="block mb-0">외모:</p>
        <p className="block mb-0">- 슬릭백 스타일의 단정한 흑갈색 머리</p>
        <p className="block mb-0">- 날카로운 콧대와 잘 정리된 턱선</p>
        <p className="block mb-0">- 웃을 때 매력적으로 올라가는 입꼬리</p>
        <p className="block mb-0">- 화이트 셔츠와 블랙 슬랙스를 즐겨 입음</p>
        <p className="block">- 은은한 향수 사용</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light h-[110px] justify-center leading-[22px] left-0 not-italic text-[13.016px] text-[rgba(255,255,255,0.7)] text-left top-[320.64px] translate-y-[-50%] w-[249.54px]">
        <p className="block mb-0">성격:</p>
        <p className="block mb-0">- 평소에는 프로페셔널하고 빈틈없는 모습</p>
        <p className="block mb-0">{`- {{user}}에게는 유독 여유롭고 능글맞게 대함`}</p>
        <p className="block mb-0">- 은근한 스킨십과 농담 속에 진심을 숨김</p>
        <p className="block">- 퇴근 후에는 감정을 숨기지 않는 남자의 모습</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="h-[920.54px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <div
        className="absolute bg-[rgba(255,255,255,0.15)] h-px left-0 right-0 top-[179.97px]"
        data-name="Horizontal Divider"
      />
      <Background />
      <Container16 />
      <Container17 />
      <Container18 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.99px] items-start justify-start pb-[225px] pt-10 px-[15px] relative w-full">
          <Container3 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Component5() {
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
      <Component5 />
    </div>
  );
}

function Container23() {
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
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">스토리 상세</p>
      </div>
    </div>
  );
}

function Component6() {
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
      <Component6 />
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

function Container24() {
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
      <Container23 />
      <Margin />
      <Container24 />
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
      <Container22 />
    </div>
  );
}

function Background2() {
  return (
    <div
      className="bg-[#000000] box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-full"
      data-name="Background"
    >
      <Background1 />
    </div>
  );
}

function Component7() {
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
      <Component7 />
    </div>
  );
}

function Container25() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[1.38px] pt-[0.87px] px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgEdit />
    </div>
  );
}

function Component3() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-row items-center justify-center p-[0.625px] relative rounded-lg shrink-0 size-10"
      data-name="Component 3"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#444444] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
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
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.125px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">대화하기</p>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div
      className="bg-[#dc5903] h-10 relative rounded-md shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0 w-full"
      data-name="Component 2"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-10 items-center justify-center px-[15.625px] py-[0.625px] relative w-full">
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div
      className="basis-0 grow h-10 min-h-px min-w-px relative shrink-0"
      data-name="Button:margin"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col h-10 items-start justify-start pl-2.5 pr-0 py-0 relative w-full">
          <Component8 />
        </div>
      </div>
    </div>
  );
}

function OverlayBlur() {
  return (
    <div
      className="absolute backdrop-blur-sm backdrop-filter bottom-0 box-border content-stretch flex flex-row items-center justify-start left-[950px] max-w-[500px] px-[15px] py-2.5 w-[500px]"
      data-name="OverlayBlur"
    >
      <Component3 />
      <ButtonMargin />
    </div>
  );
}

export default function Component2400WDefault() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="2400w default"
    >
      <OverlayBlur />
      <Background2 />
    </div>
  );
}