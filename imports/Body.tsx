import svgPaths from "./svg-9ydiqhp3gy";
import imgDiscordIconPng from "figma:asset/b686731a73383e744f82f20d1a694b0cfbc6c2e4.png";
import imgSearchIconPng from "figma:asset/ef863f04724e3ed7ded20a0b62b98cd5a1b82d91.png";
import imgImageOverlayShadow from "figma:asset/6722618c912d4432469144e3dcbfb79f33a6cded.png";

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.234px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">내 포인트: 75P</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.125px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">충전하기</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div
      className="bg-[#dc5903] box-border content-stretch flex flex-row h-8 items-center justify-center px-4 py-px relative rounded-md shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0"
      data-name="Component 1"
    >
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
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">이용내역</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div
      className="bg-[#141414] box-border content-stretch flex flex-row h-8 items-center justify-center px-4 py-px relative rounded-md shrink-0"
      data-name="Component 1"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container2 />
    </div>
  );
}

function Link() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Link"
    >
      <Component7 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container />
      <Component1 />
      <Link />
    </div>
  );
}

function Margin() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-[7px] py-0 relative shrink-0"
      data-name="Margin"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.063px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
        <p className="block leading-[23.57px] whitespace-pre">출석체크</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.15)] box-border content-stretch flex flex-col items-start justify-start pb-[5.17px] pt-[4.25px] px-2 relative rounded-md shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12.492px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">200P</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start px-[5px] py-0 relative shrink-0"
      data-name="Component 4"
    >
      <Overlay />
    </div>
  );
}

function Overlay1() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.15)] box-border content-stretch flex flex-col items-start justify-start pb-[5.17px] pt-[4.25px] px-2 relative rounded-md shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12.492px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">
          오전 9시 초기화
        </p>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start px-[5px] py-0 relative shrink-0"
      data-name="Component 4"
    >
      <Overlay1 />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Margin />
      <Component4 />
      <Component8 />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">받기</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div
      className="bg-[#141414] box-border content-stretch flex flex-row h-8 items-center justify-center px-4 py-px relative rounded-md shrink-0"
      data-name="Component 1"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container5 />
    </div>
  );
}

function Background() {
  return (
    <div
      className="bg-[#292b2b] relative rounded-[5px] shrink-0 w-full"
      data-name="Background"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-5 py-4 relative w-full">
          <Container4 />
          <Component9 />
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-4" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Component 2">
          <path
            d={svgPaths.pa787480}
            fill="var(--fill-0, white)"
            fillOpacity="0.7"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgUser() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="Img - user"
    >
      <Component2 />
    </div>
  );
}

function ImgUserMargin() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-3 py-0 relative shrink-0 w-7"
      data-name="Img - user:margin"
    >
      <ImgUser />
    </div>
  );
}

function Container6() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left w-full">
        <p className="block leading-[22px]">내 프로필</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
        <p className="block leading-[25.14px] whitespace-pre">›</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 3">
      <div
        aria-hidden="true"
        className="absolute border-[#3c3c3c] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start pb-[15px] pt-3.5 px-5 relative w-full">
          <ImgUserMargin />
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="relative shrink-0 size-4" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Component 2">
          <path
            d={svgPaths.p384fa000}
            fill="var(--fill-0, white)"
            fillOpacity="0.7"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgGift() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="Img - gift"
    >
      <Component10 />
    </div>
  );
}

function ImgGiftMargin() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-3 py-0 relative shrink-0 w-7"
      data-name="Img - gift:margin"
    >
      <ImgGift />
    </div>
  );
}

function Container8() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left w-full">
        <p className="block leading-[22px]">내 초대 코드</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
        <p className="block leading-[25.14px] whitespace-pre">›</p>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 3">
      <div
        aria-hidden="true"
        className="absolute border-[#3c3c3c] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start pb-[15px] pt-3.5 px-5 relative w-full">
          <ImgGiftMargin />
          <Container8 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="relative shrink-0 size-4" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Component 2">
          <path
            d={svgPaths.pcdd70f0}
            fill="var(--fill-0, white)"
            fillOpacity="0.7"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgCustomerService() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="Img - customer-service"
    >
      <Component12 />
    </div>
  );
}

function ImgCustomerServiceMargin() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-3 py-0 relative shrink-0 w-7"
      data-name="Img - customer-service:margin"
    >
      <ImgCustomerService />
    </div>
  );
}

function Container10() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left w-full">
        <p className="block leading-[22px]">{`오류 & 불편사항 문의`}</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
        <p className="block leading-[25.14px] whitespace-pre">›</p>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 3">
      <div
        aria-hidden="true"
        className="absolute border-[#3c3c3c] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start pb-[15px] pt-3.5 px-5 relative w-full">
          <ImgCustomerServiceMargin />
          <Container10 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function DiscordIconPng() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_100%] bg-top-left left-[-1px] size-5 top-0"
      data-name="discord-icon.png"
      style={{ backgroundImage: `url('${imgDiscordIconPng}')` }}
    />
  );
}

function ImgMargin() {
  return (
    <div className="h-5 relative shrink-0 w-[31px]" data-name="Img:margin">
      <DiscordIconPng />
    </div>
  );
}

function Container12() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left w-full">
        <p className="block leading-[22px]">디스코드</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
        <p className="block leading-[25.14px] whitespace-pre">›</p>
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 3">
      <div
        aria-hidden="true"
        className="absolute border-[#3c3c3c] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start pb-[15px] pt-3.5 px-5 relative w-full">
          <ImgMargin />
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="relative shrink-0 size-4" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Component 2">
          <path
            d={svgPaths.p10d32100}
            fill="var(--fill-0, white)"
            fillOpacity="0.7"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgLogout() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="Img - logout"
    >
      <Component15 />
    </div>
  );
}

function ImgLogoutMargin() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-3 py-0 relative shrink-0 w-7"
      data-name="Img - logout:margin"
    >
      <ImgLogout />
    </div>
  );
}

function Container14() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left w-full">
        <p className="block leading-[22px]">로그아웃</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
        <p className="block leading-[25.14px] whitespace-pre">›</p>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 3">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-5 py-3.5 relative w-full">
          <ImgLogoutMargin />
          <Container14 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div
      className="bg-[#292b2b] box-border content-stretch flex flex-col items-start justify-start overflow-clip pb-0 pt-[5px] px-0 relative rounded-[5px] shrink-0 w-full"
      data-name="Background"
    >
      <Component3 />
      <Component11 />
      <Component13 />
      <Component14 />
      <Component16 />
    </div>
  );
}

function Container16() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15.938px] text-[rgba(255,255,255,0.85)] text-left w-full">
        <p className="block leading-[26.71px]">내 스토리</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left w-full">
        <p className="block leading-[22px]">작성한 스토리가 없어요.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-0 pt-[15px] px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.3)] text-left text-nowrap">
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[22px] whitespace-pre">
          회원 탈퇴
        </p>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-end pb-0 pt-[35px] px-0 relative shrink-0 w-full"
      data-name="Component 4"
    >
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div
      className="min-h-[940px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="min-h-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start min-h-inherit pb-[323.59px] pt-[55px] px-[15px] relative w-full">
          <Container3 />
          <Background />
          <Background1 />
          <Container18 />
          <Component17 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[15px] p-0 right-[15px] top-[31px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight justify-center leading-[0] not-italic relative shrink-0 text-[12.188px] text-[rgba(255,255,255,0.4)] text-left text-nowrap">
        <p className="block leading-[16.9px] whitespace-pre">엑스봇</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[15px] p-0 right-[15px] top-[67.9px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight justify-center leading-[0] not-italic relative shrink-0 text-[11.063px] text-[rgba(255,255,255,0.4)] text-left text-nowrap">
        <p className="block leading-[15.6px] whitespace-pre">
          서울특별시 서초구 사임당로8길 13, 402동 4층 189A호(서초동, 제일빌딩)
        </p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[15px] p-0 right-[15px] top-[83.49px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight justify-center leading-[0] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.4)] text-left text-nowrap">
        <p className="block leading-[15.6px] whitespace-pre">
          대표: 윤승원 ㅣ 사업자등록번호: 898-10-03290 ㅣ 통신판매업신고번호:
          2025-서울서초-0673호
        </p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[15px] p-0 right-[15px] top-[99.09px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight justify-center leading-[0] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.4)] text-left text-nowrap">
        <p className="block leading-[15.6px] whitespace-pre">
          전화번호: 070-8058-9526 ㅣ 이메일: contact@onlyssul.ai
        </p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[15px] p-0 right-[15px] top-[144.68px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight justify-center leading-[0] not-italic relative shrink-0 text-[12.086px] text-[rgba(255,255,255,0.4)] text-left text-nowrap">
        <p className="block leading-[16.9px] whitespace-pre">
          개인정보처리방침 ㅣ 이용약관 ㅣ 청소년 보호 정책
        </p>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div
      className="h-[231.58px] relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#333333] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Container21 />
      <Container22 />
      <Container23 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start min-h-[940px] p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container20 />
      <HorizontalBorder />
    </div>
  );
}

function Component18() {
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
        <g clipPath="url(#clip0_1_12463)" id="Component 2">
          <path
            d={svgPaths.p3dd3d380}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <g id="Mask group">
            <mask
              height="22"
              id="mask0_1_12463"
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
            <g mask="url(#mask0_1_12463)">
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
              id="mask1_1_12463"
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
            <g mask="url(#mask1_1_12463)">
              <path
                d={svgPaths.p3d202a72}
                fill="var(--fill-0, #FF9500)"
                id="Vector_8"
              />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_12463">
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
      <Component18 />
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

function SearchIconPng() {
  return (
    <div
      className="bg-no-repeat bg-size-[66.67%_100%] bg-top h-5 shrink-0 w-[30px]"
      data-name="search-icon.png"
      style={{ backgroundImage: `url('${imgSearchIconPng}')` }}
    />
  );
}

function Component19() {
  return (
    <div className="relative shrink-0 size-5" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 20 20"
      >
        <g clipPath="url(#clip0_1_12487)" id="Component 2">
          <path
            d={svgPaths.p25566600}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p3d3c7700}
            fill="var(--fill-0, #62E082)"
            fillRule="evenodd"
            id="Vector_2"
          />
          <path
            d={svgPaths.p2f639d00}
            fill="var(--fill-0, #34C759)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p2e4b80}
            fill="var(--fill-0, white)"
            id="Vector_4"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p1d410f00}
            fill="url(#paint0_linear_1_12487)"
            fillRule="evenodd"
            id="Vector_5"
          />
          <g id="Mask group">
            <mask
              height="4"
              id="mask0_1_12487"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "luminance" }}
              width="4"
              x="8"
              y="6"
            >
              <g id="Group">
                <path
                  d={svgPaths.p1d6d8600}
                  fill="var(--fill-0, white)"
                  id="Vector_6"
                />
              </g>
            </mask>
            <g mask="url(#mask0_1_12487)">
              <path
                d={svgPaths.p302c8800}
                fill="var(--fill-0, white)"
                id="Vector_7"
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_12487"
            x1="10.0121"
            x2="10.0121"
            y1="9.54712"
            y2="11.4609"
          >
            <stop offset="0.255208" stopColor="#34C759" />
            <stop offset="1" stopColor="#99F2AF" />
          </linearGradient>
          <clipPath id="clip0_1_12487">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SafeIconSvgFill() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-5"
      data-name="safe-icon.svg fill"
    >
      <Component19 />
    </div>
  );
}

function ImageBackground() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start left-[18px] p-0 rounded-[10px] size-5 top-[-2.5px]"
      data-name="Image+Background"
    >
      <SafeIconSvgFill />
    </div>
  );
}

function Background2() {
  return (
    <div
      className="bg-[#34c759] h-3.5 relative rounded-[34px] shrink-0 w-[35px]"
      data-name="Background"
    >
      <ImageBackground />
    </div>
  );
}

function Container27() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[9px] items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.125px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">세이프티</p>
      </div>
      <Background2 />
    </div>
  );
}

function Container28() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[15px] items-center justify-start pl-0 pr-[15px] py-0 relative shrink-0"
      data-name="Container"
    >
      <SearchIconPng />
      <Container27 />
    </div>
  );
}

function Background3() {
  return (
    <div
      className="absolute bg-[#1a1b1b] box-border content-stretch flex flex-row h-[42px] items-center justify-between left-0 max-w-[500px] pl-[15px] pr-0 py-0 top-0 w-[500px]"
      data-name="Background"
    >
      <Component />
      <Container28 />
    </div>
  );
}

function Component20() {
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
      <Component20 />
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

function Margin1() {
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

function Link1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-center justify-start min-h-px min-w-px pb-[4.145px] pt-[5px] px-0 relative shrink-0"
      data-name="Link"
    >
      <HomeIconSvg />
      <Margin1 />
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
            d={svgPaths.p16595d80}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p395aeb80}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_2"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p9b90f40}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function CreateIconSvgFill() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-6"
      data-name="create-icon.svg fill"
    >
      <Component21 />
    </div>
  );
}

function CreateIconSvg() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-6 items-start justify-start mb-[-2.145px] overflow-clip p-0 relative shrink-0"
      data-name="create-icon.svg"
    >
      <CreateIconSvgFill />
    </div>
  );
}

function Margin2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mb-[-2.145px] p-0 relative shrink-0"
      data-name="Margin"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[9.375px] text-[rgba(255,255,255,0.55)] text-left text-nowrap">
        <p className="block leading-[15.71px] whitespace-pre">제작</p>
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
      <CreateIconSvg />
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
          <path d={svgPaths.p7292300} fill="var(--fill-0, white)" id="Vector" />
          <path
            d={svgPaths.p31d5a400}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function MypageFilledIconSvgFill() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-6"
      data-name="mypage-filled-icon.svg fill"
    >
      <Component22 />
    </div>
  );
}

function MypageFilledIconSvg() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-6 items-start justify-start mb-[-2.145px] overflow-clip p-0 relative shrink-0"
      data-name="mypage-filled-icon.svg"
    >
      <MypageFilledIconSvgFill />
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
          마이페이지
        </p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-center justify-start min-h-px min-w-px pb-[4.145px] pt-[5px] px-0 relative shrink-0"
      data-name="Link"
    >
      <MypageFilledIconSvg />
      <Margin3 />
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
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Background4() {
  return (
    <div
      className="bg-[#1a1b1b] box-border content-stretch flex flex-col items-start justify-start max-w-[500px] p-0 relative shrink-0 w-[500px]"
      data-name="Background"
    >
      <Background3 />
      <BackgroundHorizontalBorder />
      <Container26 />
    </div>
  );
}

function Background5() {
  return (
    <div
      className="bg-[#000000] box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-full"
      data-name="Background"
    >
      <Background4 />
    </div>
  );
}

function Container29() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15.125px] text-left w-full">
        <p className="block leading-[24px]">친구 추천</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div
      className="bg-[#1f1f1f] box-border content-stretch flex flex-col items-start justify-start p-0 relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
      data-name="Background"
    >
      <Container29 />
    </div>
  );
}

function Tab() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Tab"
    >
      <div className="[text-shadow:#ffffff_0px_0px_0.25px] flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.125px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">내 초대 코드</p>
      </div>
    </div>
  );
}

function Component23() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-full items-center justify-start px-2 py-3 relative shrink-0"
      data-name="Component 4"
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
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.6)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">추천인 입력</p>
      </div>
    </div>
  );
}

function Component24() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px px-2 py-3 relative shrink-0"
      data-name="Component 4"
    >
      <Tab1 />
    </div>
  );
}

function Margin4() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-start justify-center pl-8 pr-0 py-0 relative shrink-0"
      data-name="Margin"
    >
      <Component24 />
    </div>
  );
}

function Container30() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-full items-start justify-start p-0 relative shrink-0"
      data-name="Container"
      style={{ gap: "2.84217e-14px" }}
    >
      <Component23 />
      <Margin4 />
      <div
        className="absolute bg-[#ff9500] bottom-0 h-0.5 left-0 w-[83.34px]"
        data-name="Horizontal Divider"
      />
    </div>
  );
}

function Container31() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Container30 />
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
      <Container31 />
    </div>
  );
}

function TablistMargin() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-4 pt-0 px-0 relative shrink-0 w-full"
      data-name="Tablist:margin"
    >
      <Tablist />
    </div>
  );
}

function Container32() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[19.6px] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.8)] text-left text-nowrap whitespace-pre">
        <p className="block mb-0">초대 받은 친구가 가입할 때 마다</p>
        <p className="block">나와 친구 모두 1,000P 즉시 지급</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 min-w-[432px] p-0 top-[47.3px]"
      data-name="Container"
    >
      <Container32 />
    </div>
  );
}

function OverlayBorder() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.1)] relative rounded-lg shrink-0 w-full"
      data-name="Overlay+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.04)] border-solid inset-0 pointer-events-none rounded-lg"
      />
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start pb-[16.92px] pt-[16.5px] px-[25px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[20px] text-center text-nowrap tracking-[2px]">
            <p className="adjustLetterSpacing block leading-[31.43px] whitespace-pre">
              z9dy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[0.75px] pt-[2.25px] px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.6)] text-left w-full">
        <p className="block leading-[18.86px]">초대한 친구 수: 0명 (0P 지급)</p>
      </div>
    </div>
  );
}

function Component25() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-2 px-0 relative shrink-0 w-full"
      data-name="Component 4"
    >
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[8.1px] items-start justify-start left-0 min-w-[432px] p-0 top-[107.19px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.6)] text-left text-nowrap">
        <p className="block leading-[18.86px] whitespace-pre">내 초대 코드</p>
      </div>
      <OverlayBorder />
      <Component25 />
    </div>
  );
}

function Component26() {
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
            d={svgPaths.p1a875b00}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgLink() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - link"
    >
      <Component26 />
    </div>
  );
}

function Container36() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[1.75px] pt-[1.25px] px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgLink />
    </div>
  );
}

function Container37() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.234px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">URL 링크 복사</p>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div
      className="basis-0 bg-[rgba(249,115,22,0.2)] grow h-[42px] min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="Component 5"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(249,115,22,0.4)] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-[42px] items-center justify-center px-4 py-px relative w-full">
          <Container36 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Component27() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Component 2">
          <path d={svgPaths.pcd5e780} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImgCopy() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - copy"
    >
      <Component27 />
    </div>
  );
}

function Container38() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[1.75px] pt-[1.25px] px-0 relative shrink-0"
      data-name="Container"
    >
      <ImgCopy />
    </div>
  );
}

function Container39() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.125px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">초대코드 복사</p>
      </div>
    </div>
  );
}

function Component28() {
  return (
    <div
      className="basis-0 bg-[#dc5903] grow h-[42px] min-h-px min-w-px relative rounded-lg shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0"
      data-name="Component 5"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-[42px] items-center justify-center px-4 py-px relative w-full">
          <Container38 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-3 items-start justify-start left-0 p-0 top-[257.46px]"
      data-name="Container"
    >
      <Component5 />
      <Component28 />
    </div>
  );
}

function Tabpanel() {
  return (
    <div className="h-[299.46px] relative shrink-0 w-full" data-name="Tabpanel">
      <div className="absolute flex flex-col font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold h-7 justify-center leading-[0] left-0 not-italic text-[#ffffff] text-[18.906px] text-left top-3.5 translate-y-[-50%] w-[218.17px]">
        <p className="block leading-[28px]">친구 초대하고 1,000P 받기</p>
      </div>
      <Container33 />
      <Container35 />
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-2.5 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Tabpanel />
    </div>
  );
}

function Container42() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <TablistMargin />
      <Container41 />
    </div>
  );
}

function Component29() {
  return (
    <div className="relative shrink-0 size-4" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Component 2">
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
      <Component29 />
    </div>
  );
}

function Container43() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <ImgClose />
    </div>
  );
}

function Component6() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start px-0 py-2 right-3 rounded size-8 top-3"
      data-name="Component 6"
    >
      <Container43 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div
      className="bg-[#1f1f1f] relative rounded-lg shadow-[0px_6px_16px_0px_rgba(0,0,0,0.08),0px_3px_6px_-4px_rgba(0,0,0,0.12),0px_9px_28px_8px_rgba(0,0,0,0.05)] shrink-0 w-full"
      data-name="Background+Shadow"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[13px] items-start justify-start pb-8 pt-5 px-6 relative w-full">
          <Background6 />
          <Container42 />
          <Component6 />
        </div>
      </div>
    </div>
  );
}

function Dialog() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[1646px] pb-6 pt-0 px-0 relative shrink-0 w-[480px]"
      data-name="Dialog"
    >
      <BackgroundShadow />
    </div>
  );
}

function Container44() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-center justify-start left-0 overflow-auto pb-[355.54px] pt-[100px] px-0 top-[-1186.58px] w-[1678px]"
      data-name="Container"
    >
      <Dialog />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[0.01px] relative shrink-0 w-full" data-name="Container">
      <div
        className="absolute bg-[rgba(0,0,0,0.45)] h-[940px] left-0 top-[-1186.58px] w-[1678px]"
        data-name="Overlay"
      />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Apple_SD_Gothic_Neo:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">개발자</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-2 py-0 relative shrink-0"
      data-name="Margin"
      style={{ marginRight: "-8.52651e-14px" }}
    >
      <Container46 />
    </div>
  );
}

function Container47() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Apple_SD_Gothic_Neo:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">1일 전</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-[50px] py-0 relative shrink-0"
      data-name="Margin"
      style={{ marginRight: "-8.52651e-14px" }}
    >
      <Container47 />
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start pl-px pr-0 py-0 relative w-full">
          <Margin5 />
          <Margin6 />
        </div>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-1.5 pt-0 px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container48 />
    </div>
  );
}

function Container49() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Apple_SD_Gothic_Neo:Regular',_sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left tracking-[-0.1px] w-full">
        <p className="block mb-0">
          안녕하세요 앱은 아직 없고 ㅠ 현재 개발 중인 상
        </p>
        <p className="block">태입니다!</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[18px] px-[18px] relative w-full">
          <Margin7 />
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-[20px] shrink-0 w-full"
      data-name="Container"
    >
      <Container50 />
    </div>
  );
}

function Component30() {
  return (
    <div className="relative shrink-0 size-5" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Component 2">
          <path
            d={svgPaths.p56fec00}
            fill="var(--fill-0, white)"
            fillOpacity="0.4"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-row items-start justify-start p-[4px] relative rounded-[18px] shrink-0"
      data-name="Button"
    >
      <Component30 />
    </div>
  );
}

function Container52() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start pb-0 pl-0 pr-2.5 pt-2.5 right-0 top-0 w-[38px]"
      data-name="Container"
    >
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#464748] box-border content-stretch flex flex-col items-start justify-start overflow-clip pb-4 pt-0 px-0 relative rounded-[20px] shadow-[0px_0px_2px_1px_rgba(0,0,0,0.08),0px_4px_12px_0px_rgba(0,0,0,0.2)] shrink-0"
      data-name="Button"
    >
      <Container51 />
      <Container52 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_2px_0px_inset_rgba(255,255,255,0.08)]" />
    </div>
  );
}

function Container53() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Button1 />
    </div>
  );
}

function Dialog1() {
  return (
    <div
      className="absolute bottom-20 box-border content-stretch flex flex-col items-start justify-start left-[1343px] max-w-80 min-w-[230px] p-0 w-80"
      data-name="Dialog"
    >
      <Container53 />
    </div>
  );
}

function ImageOverlayShadow() {
  return (
    <div
      className="basis-0 bg-[rgba(255,255,255,0.9)] bg-size-[100%_100%,auto] bg-top-left grow min-h-px min-w-px relative rounded-3xl shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_8px_30px_0px_rgba(0,0,0,0.15)] shrink-0 w-full"
      data-name="Image+Overlay+Shadow"
      style={{ backgroundImage: `url('${imgImageOverlayShadow}')` }}
    >
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(255,255,255,0.2)]" />
    </div>
  );
}

function Container54() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col inset-0 items-start justify-center p-0"
      data-name="Container"
    >
      <ImageOverlayShadow />
    </div>
  );
}

function Status1() {
  return (
    <div
      className="absolute bg-[#ff5c5c] box-border content-stretch flex flex-row h-[18px] items-center justify-center min-w-[18px] overflow-clip px-1.5 py-px right-[-3px] rounded-xl shadow-[0px_0px_2px_1px_rgba(0,0,0,0.08),0px_1px_2px_0px_rgba(0,0,0,0.15)] top-[-2px]"
      data-name="Status - , 1개의 안읽은 메시지"
    >
      <div className="flex flex-col font-['Noto_Sans_KR:DemiLight',_sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap">
        <p className="block leading-[16px] whitespace-pre">1</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_2px_0px_inset_rgba(255,255,255,0.08)]" />
    </div>
  );
}

function Button2() {
  return (
    <div
      className="backdrop-blur-[15px] backdrop-filter relative rounded-3xl shrink-0 size-14"
      data-name="Button"
    >
      <Container54 />
      <Status1 />
    </div>
  );
}

function Container55() {
  return (
    <div
      className="absolute bottom-3.5 box-border content-stretch flex flex-row items-start justify-start left-[1607px] p-0 w-14"
      data-name="Container"
    >
      <Button2 />
    </div>
  );
}

export default function Body() {
  return (
    <div
      className="bg-[#000000] box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="Body"
    >
      <div
        className="absolute bottom-0 left-[1278px] size-[400px]"
        data-name="Gradient"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 400 400\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(35.428 0 0 31.068 363.08 347.36)\\\'><stop stop-color=\\\'rgba(39,46,58,0.2)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(39,46,58,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')",
        }}
      />
      <Dialog1 />
      <Container55 />
      <Background5 />
      <Container45 />
    </div>
  );
}