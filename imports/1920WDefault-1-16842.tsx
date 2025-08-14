import svgPaths from "./svg-48344nsici";

function Tab() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Tab"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
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
      <div className="[text-shadow:#dc5903_0px_0px_0.25px] flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dc5903] text-[13.125px] text-left text-nowrap">
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
        className="absolute bg-[#dc5903] bottom-0 h-0.5 left-[95.92px] w-[63.92px]"
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

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.125px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">
          새 스토리 제작하기
        </p>
      </div>
    </div>
  );
}

function Component2() {
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
            id="Vector"
          />
          <path
            d={svgPaths.p16b79100}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgPlus() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - plus"
    >
      <Component2 />
    </div>
  );
}

function Component3() {
  return (
    <div
      className="basis-0 bg-[#dc5903] grow h-[38px] min-h-px min-w-px relative rounded-md shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0"
      data-name="Component 3"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-[38px] items-center justify-center pl-[27px] pr-[19px] py-[19px] relative w-full">
          <Container2 />
          <ImgPlus />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-end p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Component3 />
    </div>
  );
}

function Component7() {
  return (
    <div className="relative shrink-0 size-8" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Component 2">
          <path
            d={svgPaths.p3fb62600}
            fill="var(--fill-0, white)"
            fillOpacity="0.5"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgFileImage() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - file-image"
    >
      <Component7 />
    </div>
  );
}

function Background() {
  return (
    <div
      className="bg-[#2a2a2a] box-border content-stretch flex flex-row h-full items-center justify-center p-0 relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[100px]"
      data-name="Background"
    >
      <ImgFileImage />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.063px] text-[rgba(255,255,255,0.85)] text-left w-full">
        <p className="block leading-[23.57px]">제목 없음</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div
      className="bg-[#3b4151] box-border content-stretch flex flex-col items-start justify-start px-1.5 py-[3px] relative rounded shrink-0"
      data-name="Background"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11.25px] text-gray-200 text-left text-nowrap">
        <p className="block leading-[18.86px] whitespace-pre">작성중</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-center flex gap-0 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Background1 />
    </div>
  );
}

function Container6() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pl-3 pr-[75px] py-3 relative size-full">
          <Container4 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-start justify-start min-h-px min-w-px p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Background />
      <Container6 />
    </div>
  );
}

function Component8() {
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
            d={svgPaths.p45ace00}
            fill="var(--fill-0, white)"
            fillOpacity="0.85"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgMore() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - more"
    >
      <Component8 />
    </div>
  );
}

function Container8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[1.75px] pt-[1.25px] px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgMore />
    </div>
  );
}

function Component4() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center pb-px pt-1.5 px-px right-[-1px] rounded-md size-8 top-px"
      data-name="Component 4"
    >
      <Container8 />
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
            d={svgPaths.p20871a40}
            fill="var(--fill-0, white)"
            fillOpacity="0.85"
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
      <Component9 />
    </div>
  );
}

function Container9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[1.75px] pt-[1.25px] px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgPlayCircle />
    </div>
  );
}

function Container10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">플레이</p>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div
      className="bg-[#141414] box-border content-stretch flex flex-row gap-2 h-8 items-center justify-center px-4 py-px relative rounded-md shrink-0"
      data-name="Component 5"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div
      className="absolute bottom-[8.82%] box-border content-stretch flex flex-row items-center justify-start p-0 right-[8.3px] top-[59.8%]"
      data-name="Container"
    >
      <Component5 />
    </div>
  );
}

function Border() {
  return (
    <div
      className="max-w-[470px] relative rounded-lg shrink-0 w-full"
      data-name="Border"
    >
      <div className="flex flex-row justify-center max-w-inherit overflow-x-clip overflow-y-auto relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center max-w-inherit p-px relative w-full">
          <Container7 />
          <Component4 />
          <Container11 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-gray-600 border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function Container28() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-2.5 pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      {[...Array(3).keys()].map((_, i) => (
        <Border key={i} />
      ))}
    </div>
  );
}

function Margin1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-2.5 px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[15px] pt-3 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container3 />
      <Margin1 />
    </div>
  );
}

function Container30() {
  return (
    <div
      className="max-h-[831px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="max-h-inherit overflow-auto relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start max-h-inherit pb-[60px] pt-[30px] px-[15px] relative w-full">
          <Tablist />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Component20() {
  return (
    <div
      className="h-[24.76px] relative shrink-0 w-[103px]"
      data-name="Component 2"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 103 25"
      >
        <g clipPath="url(#clip0_1_16846)" id="Component 2">
          <path
            d={svgPaths.p3dd3d380}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <g id="Mask group">
            <mask
              height="22"
              id="mask0_1_16846"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "luminance" }}
              width="48"
              x="0"
              y="3"
            >
              <g id="Group">
                <path
                  d={svgPaths.p144b7480}
                  fill="var(--fill-0, white)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p3dd3d380}
                  fill="var(--fill-0, black)"
                  id="Vector_3"
                />
              </g>
            </mask>
            <g mask="url(#mask0_1_16846)">
              <path
                d={svgPaths.p1a083700}
                fill="var(--fill-0, white)"
                id="Vector_4"
              />
            </g>
          </g>
          <path
            d={svgPaths.p333e5d00}
            fill="var(--fill-0, #FF9500)"
            id="Vector_5"
          />
          <g id="Mask group_2">
            <mask
              height="18"
              id="mask1_1_16846"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "luminance" }}
              width="54"
              x="49"
              y="3"
            >
              <g id="Group_2">
                <path
                  d={svgPaths.pf225c00}
                  fill="var(--fill-0, white)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p333e5d00}
                  fill="var(--fill-0, black)"
                  id="Vector_7"
                />
              </g>
            </mask>
            <g mask="url(#mask1_1_16846)">
              <path
                d={svgPaths.p3d202a72}
                fill="var(--fill-0, #FF9500)"
                id="Vector_8"
              />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_16846">
            <rect fill="white" height="24.7596" width="103" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoSvgFill() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[24.76px] items-center justify-center overflow-clip p-0 relative shrink-0 w-[103px]"
      data-name="logo.svg fill"
    >
      <Component20 />
    </div>
  );
}

function Component() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-[103px]"
      data-name="로고"
    >
      <LogoSvgFill />
    </div>
  );
}

function Background6() {
  return (
    <div
      className="absolute bg-[#1a1b1b] box-border content-stretch flex flex-row h-[42px] items-center justify-start left-0 max-w-[500px] pl-[15px] pr-0 py-0 top-0 w-[500px]"
      data-name="Background"
    >
      <Component />
    </div>
  );
}

function Component21() {
  return (
    <div className="relative shrink-0 size-6" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 24 24"
      >
        <g id="Component 2">
          <path
            clipRule="evenodd"
            d={svgPaths.p14082df0}
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
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-6"
      data-name="home-icon.svg fill"
    >
      <Component21 />
    </div>
  );
}

function HomeIconSvg() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-6 items-start justify-start mb-[-2.145px] overflow-clip p-0 relative shrink-0"
      data-name="home-icon.svg"
    >
      <HomeIconSvgFill />
    </div>
  );
}

function Margin2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mb-[-2.145px] p-0 relative shrink-0"
      data-name="Margin"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.55)] text-left text-nowrap">
        <p className="block leading-[15.71px] whitespace-pre">홈</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-center justify-start min-h-px min-w-px pb-[4.145px] pt-[5px] px-0 relative shrink-0"
      data-name="Link"
    >
      <HomeIconSvg />
      <Margin2 />
    </div>
  );
}

function Component22() {
  return (
    <div className="relative shrink-0 size-6" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 24 24"
      >
        <g id="Component 2">
          <path
            clipRule="evenodd"
            d={svgPaths.pd7f6d80}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function CreateFilledIconSvgFill() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-6"
      data-name="create-filled-icon.svg fill"
    >
      <Component22 />
    </div>
  );
}

function CreateFilledIconSvg() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-6 items-start justify-start mb-[-2.145px] overflow-clip p-0 relative shrink-0"
      data-name="create-filled-icon.svg"
    >
      <CreateFilledIconSvgFill />
    </div>
  );
}

function Margin3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mb-[-2.145px] p-0 relative shrink-0"
      data-name="Margin"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-left text-nowrap">
        <p className="block leading-[15.71px] text-[9.375px] whitespace-pre">
          제작
        </p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-center justify-start min-h-px min-w-px pb-[4.145px] pt-[5px] px-0 relative shrink-0"
      data-name="Link"
    >
      <CreateFilledIconSvg />
      <Margin3 />
    </div>
  );
}

function Component23() {
  return (
    <div className="relative shrink-0 size-6" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 24 24"
      >
        <g id="Component 2">
          <path
            clipRule="evenodd"
            d={svgPaths.p30606300}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p270b3200}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function MypageIconSvgFill() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-6"
      data-name="mypage-icon.svg fill"
    >
      <Component23 />
    </div>
  );
}

function MypageIconSvg() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-6 items-start justify-start mb-[-2.145px] overflow-clip p-0 relative shrink-0"
      data-name="mypage-icon.svg"
    >
      <MypageIconSvgFill />
    </div>
  );
}

function Margin4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mb-[-2.145px] p-0 relative shrink-0"
      data-name="Margin"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[9.375px] text-[rgba(255,255,255,0.55)] text-left text-nowrap">
        <p className="block leading-[15.71px] whitespace-pre">마이페이지</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-center justify-start min-h-px min-w-px pb-[4.145px] pt-[5px] px-0 relative shrink-0"
      data-name="Link"
    >
      <MypageIconSvg />
      <Margin4 />
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div
      className="absolute bg-[#1a1b1b] bottom-0 box-border content-stretch flex flex-row items-center justify-center left-0 max-w-[500px] pb-px pt-0 px-0 w-[500px]"
      data-name="Background+HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#424242] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Background7() {
  return (
    <div
      className="bg-[#1a1b1b] box-border content-stretch flex flex-col items-start justify-start max-w-[500px] pb-[284px] pt-0 px-0 relative shrink-0 w-[500px]"
      data-name="Background"
    >
      <Background6 />
      <BackgroundHorizontalBorder />
      <Container30 />
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
      <Background7 />
    </div>
  );
}