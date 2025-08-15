import svgPaths from "./svg-1iullw53rw";
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
      className="absolute h-[11.99px] left-[1.99px] top-[1.99px] w-3"
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
      className="absolute bg-[rgba(255,255,255,0.25)] h-4 left-[68.41px] rounded-[100px] translate-y-[-50%] w-7"
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

function Paragraph() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] font-light gap-6 italic items-start justify-start leading-[0] p-0 relative shrink-0 text-[rgba(255,255,255,0.85)] text-left text-nowrap w-full"
      data-name="Paragraph"
    >
      <div className="[text-shadow:rgba(255,255,255,0.05)_0px_0px_1px] flex flex-col justify-center leading-[24px] opacity-70 relative shrink-0 text-[13.945px] whitespace-pre">
        <p className="block mb-0">
          지이잉- 하는 기계음과 함께 비행기가 활주로를 박차고 떠올랐다. 지우의
          생애 첫
        </p>
        <p className="block mb-0">
          배낭여행. 창밖으로 보이는 푸른 하늘에 설레야 정상이겠지만, 심장은
          불안감으로
        </p>
        <p className="block">요동치고 있다.</p>
      </div>
      <div className="[text-shadow:rgba(255,255,255,0.05)_0px_0px_1px] flex flex-col justify-center leading-[24px] opacity-70 relative shrink-0 text-[13.945px] whitespace-pre">
        <p className="block mb-0">
          모든 불안의 근원은 지우의 옆자리에 앉아 있는 이민지, 저 녀석 때문이다.
          8살 때
        </p>
        <p className="block mb-0">
          부터 지겹도록 붙어 다녀 이젠 눈빛만 봐도 무슨 생각을 하는지 알 것 같은
          불알친
        </p>
        <p className="block">구.</p>
      </div>
      <div className="[text-shadow:rgba(255,255,255,0.05)_0px_0px_1px] flex flex-col justify-center leading-[24px] opacity-70 relative shrink-0 text-[13.945px] whitespace-pre">
        <p className="block mb-0">
          원래는 지우의 혼자만의 고독한 여행이 될 예정이었다. 하지만 지우가
          제주도에 간
        </p>
        <p className="block mb-0">
          다는 말을 듣자마자, 심심한데 나도 갈래라며 짐을 싸 들고 나타난 녀석
          때문에 모
        </p>
        <p className="block">든 계획이 틀어졌다.</p>
      </div>
      <div className="[text-shadow:rgba(255,255,255,0.05)_0px_0px_1px] flex flex-col justify-center leading-[24px] opacity-70 relative shrink-0 text-[0px] text-[13.945px] whitespace-pre">
        <p className="block font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] italic mb-0">
          문제는, 지우가 예약한 숙소의 방이 딱 하나라는 거다. 털털한 녀석은
          친구끼리 뭐
        </p>
        <p className="block font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] italic mb-0">{`어때?라며 대수롭지 않게 여겼다. 심지어 이민지는 남자친구한테는 그냥 '친구랑'`}</p>
        <p className="block font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] italic mb-0">
          간다고 둘러댔단다. 지우를 남자 사람으로도 취급 안 한다는 명백한
          증거였다.
        </p>
        <p className="block font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] mb-0 not-italic">
          근데 우리 방 하나밖에 없잖아. 나 잠버릇 험한 거 알지? 밤새 나한테
          깔려도 책임
        </p>
        <p className="block font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] not-italic">
          못 진다, 너?
        </p>
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
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[11.063px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[17.4px] whitespace-pre">다음 내용 제안</p>
      </div>
    </div>
  );
}

function Component11() {
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
            d={svgPaths.p19e480}
            fill="var(--fill-0, white)"
            fillOpacity="0.85"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgRedo() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - redo"
    >
      <Component11 />
    </div>
  );
}

function Container11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[1.38px] pt-[0.88px] px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgRedo />
    </div>
  );
}

function Component4() {
  return (
    <div
      className="bg-[#141414] box-border content-stretch flex flex-row items-center justify-center p-[0.625px] relative rounded shrink-0 size-[23.99px]"
      data-name="Component 4"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container10 />
      <Component4 />
    </div>
  );
}

function Component5() {
  return (
    <div
      className="bg-[#292928] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-full"
      data-name="Component 5"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_0.625px] border-[rgba(253,253,253,0.12)] border-solid inset-0 pointer-events-none rounded-tl-[6px] rounded-tr-[6px]"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[4.625px] pt-1 px-2 relative w-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px mr-[-0.01px] p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="[text-shadow:rgba(255,255,255,0.05)_0px_0px_1px] flex flex-col font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] font-light italic justify-center leading-[21.75px] opacity-70 relative shrink-0 text-[13.945px] text-[rgba(255,255,255,0.85)] text-left w-full">
        <p className="block mb-0">
          이민지의 뻔뻔한 말투에 지우는 인상을 찌푸렸다.
        </p>
        <p className="block mb-0">
          그건 네 걱정이나 해야 하는 거 아니냐? 내 다리 사이에 껴서 질식사할 수
        </p>
        <p className="block">도 있거든.</p>
      </div>
    </div>
  );
}

function Component12() {
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
            fillOpacity="0.85"
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
      <Component12 />
    </div>
  );
}

function Container14() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[1.39px] pt-[0.87px] px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgEdit />
    </div>
  );
}

function Component13() {
  return (
    <div
      className="opacity-70 relative rounded shrink-0 w-[25.23px]"
      data-name="Component 4"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center pb-[8.625px] pt-[10.625px] px-[12.625px] relative w-[25.23px]">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mr-[-0.01px] pl-2 pr-0 py-0 relative shrink-0 w-[33.23px]"
      data-name="Button:margin"
    >
      <Component13 />
    </div>
  );
}

function Component6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 6">
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_0.625px] border-[rgba(253,253,253,0.12)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pb-[5.63px] pl-[5.99px] pr-[6.02px] pt-[4.06px] relative w-full">
          <Container13 />
          <ButtonMargin />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px mr-[-0.01px] p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="[text-shadow:rgba(255,255,255,0.05)_0px_0px_1px] flex flex-col font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] font-light italic justify-center leading-[21.75px] opacity-70 relative shrink-0 text-[13.945px] text-[rgba(255,255,255,0.85)] text-left w-full">
        <p className="block mb-0">
          이민지는 능글맞은 웃음을 지으며 턱을 괴었다. 아 씨발. 또 시작이다.
          지우
        </p>
        <p className="block mb-0">
          는 속으로 신음하며 이민지를 쏘아봤다. 제 버릇 개 못 준다고, 또 시작이
        </p>
        <p className="block">
          네. 어제 밤, 이민지가 지우에게 밤새도록 애교 섞인 협박을 해왔었다.
        </p>
      </div>
    </div>
  );
}

function Component14() {
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
            fillOpacity="0.85"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgEdit1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - edit"
    >
      <Component14 />
    </div>
  );
}

function Container16() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[1.38px] pt-[0.88px] px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgEdit1 />
    </div>
  );
}

function Component15() {
  return (
    <div
      className="opacity-70 relative rounded shrink-0 w-[25.23px]"
      data-name="Component 4"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center pb-[8.625px] pt-[10.625px] px-[12.625px] relative w-[25.23px]">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mr-[-0.01px] pl-2 pr-0 py-0 relative shrink-0 w-[33.23px]"
      data-name="Button:margin"
    >
      <Component15 />
    </div>
  );
}

function Component16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 6">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pb-[5px] pl-[5.99px] pr-[6.02px] pt-[4.06px] relative w-full">
          <Container15 />
          <ButtonMargin1 />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="List"
    >
      <Component6 />
      <Component16 />
    </div>
  );
}

function OverlayBorder() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.45)] relative rounded-lg shrink-0 w-full"
      data-name="Overlay+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-lg"
      />
      <div className="relative size-full">
        <div
          className="box-border content-stretch flex flex-col items-start justify-start p-[0.625px] relative w-full"
          style={{ gap: "1.42109e-14px" }}
        >
          <Component5 />
          <List />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[5px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Paragraph />
      <OverlayBorder />
    </div>
  );
}

function Container18() {
  return (
    <div
      className="absolute bottom-0 box-border content-stretch flex flex-col items-start justify-end left-0 pb-[47.32px] pt-[30px] px-[15px] right-0 top-[35%]"
      data-name="Container"
    >
      <Container17 />
    </div>
  );
}

function Background() {
  return (
    <div
      className="bg-[#000000] h-[1038.75px] max-w-[500px] relative shrink-0 w-full"
      data-name="Background"
    >
      <Container1 />
      <Component2 />
      <OverlayOverlayBlur />
      <OverlayHorizontalBorder />
      <Container18 />
    </div>
  );
}

function Component17() {
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
            d={svgPaths.p1f02ab80}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgRollback() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - rollback"
    >
      <Component17 />
    </div>
  );
}

function Container19() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[1.25px] pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgRollback />
    </div>
  );
}

function Component18() {
  return (
    <div
      className="bg-[#141414] box-border content-stretch flex flex-row items-center justify-center min-w-8 px-2 py-0 relative rounded-[18px] shrink-0 size-[35.99px]"
      data-name="Component 4"
    >
      <Container19 />
    </div>
  );
}

function ButtonMargin2() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[35.99px] items-end justify-start min-w-9 pl-0 pr-1 py-0 relative shrink-0 w-[39.99px]"
      data-name="Button:margin"
    >
      <Component18 />
    </div>
  );
}

function Container20() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13.945px] text-[rgba(255,255,255,0.25)] text-left w-full">
        <p className="block leading-[23.57px]">내용 입력</p>
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
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
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

function Container22() {
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
      <Container22 />
    </div>
  );
}

function Component19() {
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
      <Component19 />
    </div>
  );
}

function Container23() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[1.25px] pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgSend />
    </div>
  );
}

function Component20() {
  return (
    <div
      className="bg-[#dc5903] box-border content-stretch flex flex-row items-center justify-center min-w-8 px-[8.625px] py-[0.625px] relative rounded-[18px] shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0 size-[35.99px]"
      data-name="Component 4"
    >
      <Container23 />
    </div>
  );
}

function ButtonMargin3() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[35.99px] items-start justify-start min-w-9 pl-1 pr-0 py-0 relative shrink-0 w-[39.99px]"
      data-name="Button:margin"
    >
      <Component20 />
    </div>
  );
}

function Container24() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Button />
      <ButtonMargin3 />
    </div>
  );
}

function Background1() {
  return (
    <div
      className="bg-[#292928] relative rounded-[25px] shrink-0 w-full"
      data-name="Background"
    >
      <div className="flex flex-row items-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-end justify-start px-2 py-1.5 relative w-full">
          <ButtonMargin2 />
          <Container21 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div
      className="absolute bottom-[5px] box-border content-stretch flex flex-col items-start justify-start left-[950px] max-w-[500px] px-2 py-0 w-[500px]"
      data-name="Container"
    >
      <Background1 />
    </div>
  );
}

function Background2() {
  return (
    <div
      className="bg-[#000000] box-border content-stretch flex flex-col h-[1038.75px] items-start justify-start px-[950px] py-0 shrink-0 sticky top-0 w-[2400px]"
      data-name="Background"
    >
      <Background />
      <Container25 />
    </div>
  );
}

export default function Container26() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="Container"
    >
      <Background2 />
    </div>
  );
}