import svgPaths from "./svg-deawz81cfe";
import imgDiscordIconPng from "figma:asset/b686731a73383e744f82f20d1a694b0cfbc6c2e4.png";
import imgThumbnail from "figma:asset/374d74b30fe73a06692e4b5c87efdada280aa447.png";
import imgThumbnail1 from "figma:asset/5e4363550d7d2c0289dd5b1b20e8678edaef6fa0.png";
import imgThumbnail2 from "figma:asset/810773b3211283d0d105e5a4b74c9236fddaf975.png";
import imgSearchIconPng from "figma:asset/ef863f04724e3ed7ded20a0b62b98cd5a1b82d91.png";

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">내 포인트: 1P</p>
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
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.125px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">충전하기</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div
      className="bg-[#dc5903] box-border content-stretch flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative rounded-md shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0"
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
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">이용내역</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div
      className="bg-[#141414] box-border content-stretch flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative rounded-md shrink-0"
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
      <Component4 />
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
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.063px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
        <p className="block leading-[23.57px] whitespace-pre">출석체크</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.15)] box-border content-stretch flex flex-col items-start justify-start pb-[5.235px] pt-[4.185px] px-2 relative rounded-md shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.797px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">200P</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start px-[5px] py-0 relative shrink-0"
      data-name="Margin"
    >
      <Overlay />
    </div>
  );
}

function Overlay1() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.15)] box-border content-stretch flex flex-col items-start justify-start pb-[5.235px] pt-[4.185px] px-2 relative rounded-md shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.188px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">
          오전 9시 초기화
        </p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start px-[5px] py-0 relative shrink-0"
      data-name="Margin"
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
      <Margin1 />
      <Margin2 />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">받기</p>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div
      className="bg-[#141414] box-border content-stretch flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative rounded-md shrink-0"
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
      className="bg-[#282828] relative rounded-[5px] shrink-0 w-full"
      data-name="Background"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-5 py-4 relative w-full">
          <Container4 />
          <Component5 />
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
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left w-full">
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
        className="absolute border-[#3c3c3c] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start pb-[14.625px] pt-3.5 px-5 relative w-full">
          <ImgUserMargin />
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Component6() {
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
            d={svgPaths.p2482df00}
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
      <Component6 />
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
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.016px] text-[rgba(255,255,255,0.85)] text-left w-full">
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

function Component7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 3">
      <div
        aria-hidden="true"
        className="absolute border-[#3c3c3c] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start pb-[14.625px] pt-3.5 px-5 relative w-full">
          <ImgGiftMargin />
          <Container8 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Component8() {
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
      <Component8 />
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
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.016px] text-[rgba(255,255,255,0.85)] text-left w-full">
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

function Component9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 3">
      <div
        aria-hidden="true"
        className="absolute border-[#3c3c3c] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start pb-[14.625px] pt-3.5 px-5 relative w-full">
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
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left w-full">
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

function Component10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 3">
      <div
        aria-hidden="true"
        className="absolute border-[#3c3c3c] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start pb-[14.625px] pt-3.5 px-5 relative w-full">
          <ImgMargin />
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Component11() {
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
            d={svgPaths.p3ec34df0}
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
      <Component11 />
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
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left w-full">
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

function Component12() {
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
      className="bg-[#282828] box-border content-stretch flex flex-col items-start justify-start overflow-clip pb-0 pt-[5.01px] px-0 relative rounded-[5px] shrink-0 w-full"
      data-name="Background"
    >
      <Component3 />
      <Component7 />
      <Component9 />
      <Component10 />
      <Component12 />
    </div>
  );
}

function Container16() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15.805px] text-[rgba(255,255,255,0.85)] text-left w-full">
        <p className="block leading-[26.71px]">내 스토리</p>
      </div>
    </div>
  );
}

function Thumbnail() {
  return (
    <div
      className="bg-no-repeat bg-size-[100%_150%] bg-top-left rounded-bl-[8px] rounded-tl-[8px] shrink-0 size-[100px]"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail}')` }}
    />
  );
}

function Container17() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative self-stretch shrink-0 w-[318.75px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.234px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">악녀</p>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Component 2">
          <path
            d={svgPaths.p1cb4ed00}
            fill="var(--fill-0, white)"
            fillOpacity="0.5"
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
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative self-stretch shrink-0"
      data-name="Img - delete"
    >
      <Component13 />
    </div>
  );
}

function Container18() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container17 />
      <ImgDelete />
    </div>
  );
}

function Container19() {
  return (
    <div
      className="h-[32.4px] overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[33px] justify-center leading-[16.2px] left-0 not-italic text-[11.063px] text-[rgba(255,255,255,0.5)] text-left top-[15.91px] translate-y-[-50%] w-[340.63px]">
        <p className="block mb-0">
          *할시는 런던의 한 카페에서 지우와 부딪힌다 * 아 좀 보고 다녀요. 눈은
          장
        </p>
        <p className="block">식인가? 아니면 키가 작아서 잘 못 보나?</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div
      className="absolute bottom-[8.29px] box-border content-stretch flex flex-row items-start justify-end p-0 right-2.5 w-[103.8px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.625px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
        <p className="block leading-[18.86px] whitespace-pre">
          2025-08-07 23:09
        </p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0"
      data-name="Container"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-2.5 py-2 relative size-full">
          <Container18 />
          <Container19 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="Link">
      <div
        aria-hidden="true"
        className="absolute border border-gray-600 border-solid inset-0 pointer-events-none rounded-lg"
      />
      <div className="relative size-full">
        <div
          className="box-border content-stretch flex flex-row items-start justify-start p-[0.625px] relative w-full"
          style={{ gap: "1.13687e-13px" }}
        >
          <Thumbnail />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Thumbnail1() {
  return (
    <div
      className="bg-no-repeat bg-size-[100%_150%] bg-top-left rounded-bl-[8px] rounded-tl-[8px] shrink-0 size-[100px]"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail}')` }}
    />
  );
}

function Container22() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative self-stretch shrink-0 w-[318.75px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.234px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">악녀</p>
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Component 2">
          <path
            d={svgPaths.p1cb4ed00}
            fill="var(--fill-0, white)"
            fillOpacity="0.5"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgDelete1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative self-stretch shrink-0"
      data-name="Img - delete"
    >
      <Component14 />
    </div>
  );
}

function Container23() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container22 />
      <ImgDelete1 />
    </div>
  );
}

function Container24() {
  return (
    <div
      className="h-[32.4px] overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[33px] justify-center leading-[16.2px] left-0 not-italic text-[11.063px] text-[rgba(255,255,255,0.5)] text-left top-[15.91px] translate-y-[-50%] w-[343.66px]">
        <p className="block mb-0">
          *할시는 런던의 한 카페에서 지우와 부딪힌다. * 아 좀 보고 다녀요. 눈은
          장
        </p>
        <p className="block">식인가? 아니면 키가 작아서 잘 못 보나?</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div
      className="absolute bottom-[8.29px] box-border content-stretch flex flex-row items-start justify-end p-0 right-2.5 w-[102.98px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.625px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
        <p className="block leading-[18.86px] whitespace-pre">
          2025-08-07 22:52
        </p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0"
      data-name="Container"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-2.5 py-2 relative size-full">
          <Container23 />
          <Container24 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="Link">
      <div
        aria-hidden="true"
        className="absolute border border-gray-600 border-solid inset-0 pointer-events-none rounded-lg"
      />
      <div className="relative size-full">
        <div
          className="box-border content-stretch flex flex-row items-start justify-start p-[0.625px] relative w-full"
          style={{ gap: "1.13687e-13px" }}
        >
          <Thumbnail1 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Thumbnail2() {
  return (
    <div
      className="bg-no-repeat bg-size-[100%_166.6%] bg-top-left rounded-bl-[8px] rounded-tl-[8px] shrink-0 size-[100px]"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail1}')` }}
    />
  );
}

function Container27() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative self-stretch shrink-0 w-[318.75px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.016px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">훈남 과대 오빠</p>
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Component 2">
          <path
            d={svgPaths.p1cb4ed00}
            fill="var(--fill-0, white)"
            fillOpacity="0.5"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgDelete2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative self-stretch shrink-0"
      data-name="Img - delete"
    >
      <Component15 />
    </div>
  );
}

function Container28() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container27 />
      <ImgDelete2 />
    </div>
  );
}

function Container29() {
  return (
    <div
      className="h-[32.4px] overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[33px] justify-center leading-[16.2px] left-0 not-italic text-[11.063px] text-[rgba(255,255,255,0.5)] text-left top-[15.91px] translate-y-[-50%] w-[344.01px]">
        <p className="block mb-0">
          *낮게 읊조리며 지우의 굳은 얼굴을 쓰다듬는다.* 기다렸어, 이 대답.
          *셔츠
        </p>
        <p className="block">
          단추를 하나 더 풀고, 지우의 뺨에 손을 가져다 댄다. 묘하게 젖은
          눈빛으로
        </p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div
      className="absolute bottom-[8.29px] box-border content-stretch flex flex-row items-start justify-end p-0 right-2.5 w-[102.98px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.625px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
        <p className="block leading-[18.86px] whitespace-pre">
          2025-08-05 16:48
        </p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0"
      data-name="Container"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-2.5 py-2 relative size-full">
          <Container28 />
          <Container29 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="Link">
      <div
        aria-hidden="true"
        className="absolute border border-gray-600 border-solid inset-0 pointer-events-none rounded-lg"
      />
      <div className="relative size-full">
        <div
          className="box-border content-stretch flex flex-row items-start justify-start p-[0.625px] relative w-full"
          style={{ gap: "1.13687e-13px" }}
        >
          <Thumbnail2 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Thumbnail3() {
  return (
    <div
      className="bg-no-repeat bg-size-[100%_150%] bg-top-left rounded-bl-[8px] rounded-tl-[8px] shrink-0 size-[100px]"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail2}')` }}
    />
  );
}

function Container32() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative self-stretch shrink-0 w-[318.75px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.016px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">진성 브라콘 누나</p>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Component 2">
          <path
            d={svgPaths.p1cb4ed00}
            fill="var(--fill-0, white)"
            fillOpacity="0.5"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgDelete3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative self-stretch shrink-0"
      data-name="Img - delete"
    >
      <Component16 />
    </div>
  );
}

function Container33() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container32 />
      <ImgDelete3 />
    </div>
  );
}

function Container34() {
  return (
    <div
      className="h-[16.2px] overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[11.063px] text-[rgba(255,255,255,0.5)] text-left top-[7.82px] translate-y-[-50%] w-[317.38px]">
        <p className="block leading-[16.2px]">
          *유나는 퇴근하고 집으로 돌아와, 지우의 방으로 향한다.* 지우 뭐해?
        </p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div
      className="absolute bottom-[8.29px] box-border content-stretch flex flex-row items-start justify-end p-0 right-[10.01px] w-[103.2px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.625px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
        <p className="block leading-[18.86px] whitespace-pre">
          2025-08-04 13:38
        </p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0"
      data-name="Container"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-2.5 py-2 relative size-full">
          <Container33 />
          <Container34 />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="Link">
      <div
        aria-hidden="true"
        className="absolute border border-gray-600 border-solid inset-0 pointer-events-none rounded-lg"
      />
      <div className="relative size-full">
        <div
          className="box-border content-stretch flex flex-row items-start justify-start p-[0.625px] relative w-full"
          style={{ gap: "1.13687e-13px" }}
        >
          <Thumbnail3 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function Container38() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-0 pt-[14.305px] px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container16 />
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.3)] text-left text-nowrap">
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[22px] whitespace-pre">
          회원 탈퇴
        </p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-end pb-0 pt-[35px] px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div
      className="min-h-[1038.75px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="min-h-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start min-h-inherit pb-[70px] pt-[55px] px-[15px] relative w-full">
          <Container3 />
          <Background />
          <Background1 />
          <Container38 />
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[15px] p-0 right-[15px] top-[30.63px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight justify-center leading-[0] not-italic relative shrink-0 text-[12.188px] text-[rgba(255,255,255,0.4)] text-left text-nowrap">
        <p className="block leading-[16.9px] whitespace-pre">엑스봇</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[15px] p-0 right-[15px] top-[66.71px]"
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

function Container44() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[15px] p-0 right-[15px] top-[82.31px]"
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

function Container45() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[15px] p-0 right-[15px] top-[97.9px]"
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

function Container46() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[15px] p-0 right-[15px] top-[144.31px]"
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
      className="h-[231.2px] relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#333333] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Container42 />
      <Container43 />
      <Container44 />
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container47() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start min-h-[1038.75px] p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container41 />
      <HorizontalBorder />
    </div>
  );
}

function Component17() {
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
        <g clipPath="url(#clip0_39_3178)" id="Component 2">
          <path
            d={svgPaths.p3dd3d380}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <g id="Mask group">
            <mask
              height="22"
              id="mask0_39_3178"
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
            <g mask="url(#mask0_39_3178)">
              <path
                d={svgPaths.p1a083700}
                fill="var(--fill-0, white)"
                id="Vector_4"
              />
            </g>
          </g>
          <path
            d={svgPaths.p333e5d00}
            fill="var(--fill-0, #FF9000)"
            id="Vector_5"
          />
          <g id="Mask group_2">
            <mask
              height="18"
              id="mask1_39_3178"
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
            <g mask="url(#mask1_39_3178)">
              <path
                d={svgPaths.p3d202a72}
                fill="var(--fill-0, #FF9000)"
                id="Vector_8"
              />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_39_3178">
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
      <Component17 />
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

function Component18() {
  return (
    <div className="relative shrink-0 size-5" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 20 20"
      >
        <g clipPath="url(#clip0_39_3156)" id="Component 2">
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
            fill="url(#paint0_linear_39_3156)"
            fillRule="evenodd"
            id="Vector_5"
          />
          <g id="Mask group">
            <mask
              height="4"
              id="mask0_39_3156"
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
            <g mask="url(#mask0_39_3156)">
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
            id="paint0_linear_39_3156"
            x1="10.0121"
            x2="10.0121"
            y1="9.54712"
            y2="11.4609"
          >
            <stop offset="0.255208" stopColor="#34C759" />
            <stop offset="1" stopColor="#99F2AF" />
          </linearGradient>
          <clipPath id="clip0_39_3156">
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
      <Component18 />
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
      className="bg-[#34c759] h-[13.99px] relative rounded-[34px] shrink-0 w-[35px]"
      data-name="Background"
    >
      <ImageBackground />
    </div>
  );
}

function Container48() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[8.99px] items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.125px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">세이프티</p>
      </div>
      <Background2 />
    </div>
  );
}

function Container49() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[15px] items-center justify-start pl-0 pr-[15px] py-0 relative shrink-0"
      data-name="Container"
    >
      <SearchIconPng />
      <Container48 />
    </div>
  );
}

function Background3() {
  return (
    <div
      className="absolute bg-[#1a1b1b] box-border content-stretch flex flex-row h-[41.99px] items-center justify-between left-0 max-w-[500px] pl-[15px] pr-0 py-0 top-0 w-[500px]"
      data-name="Background"
    >
      <Component />
      <Container49 />
    </div>
  );
}

function Component19() {
  return (
    <div className="relative shrink-0 size-[23.99px]" data-name="Component 2">
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
            d={svgPaths.p1d23cec0}
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
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-[23.99px]"
      data-name="home-icon.svg fill"
    >
      <Component19 />
    </div>
  );
}

function HomeIconSvg() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[23.99px] items-start justify-start mb-[-2.135px] overflow-clip p-0 relative shrink-0"
      data-name="home-icon.svg"
    >
      <HomeIconSvgFill />
    </div>
  );
}

function Margin3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mb-[-2.135px] p-0 relative shrink-0"
      data-name="Margin"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.55)] text-left text-nowrap">
        <p className="block leading-[15.71px] whitespace-pre">홈</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-center justify-start min-h-px min-w-px pb-[4.135px] pt-[5px] px-0 relative shrink-0"
      data-name="Link"
    >
      <HomeIconSvg />
      <Margin3 />
    </div>
  );
}

function Component20() {
  return (
    <div className="relative shrink-0 size-[23.99px]" data-name="Component 2">
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
            d={svgPaths.p1fc25500}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p6a4d490}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_2"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.pc6f1000}
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
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-[23.99px]"
      data-name="create-icon.svg fill"
    >
      <Component20 />
    </div>
  );
}

function CreateIconSvg() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[23.99px] items-start justify-start mb-[-2.135px] overflow-clip p-0 relative shrink-0"
      data-name="create-icon.svg"
    >
      <CreateIconSvgFill />
    </div>
  );
}

function Margin4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mb-[-2.135px] p-0 relative shrink-0"
      data-name="Margin"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[9.375px] text-[rgba(255,255,255,0.55)] text-left text-nowrap">
        <p className="block leading-[15.71px] whitespace-pre">제작</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-center justify-start min-h-px min-w-px pb-[4.135px] pt-[5px] px-0 relative shrink-0"
      data-name="Link"
    >
      <CreateIconSvg />
      <Margin4 />
    </div>
  );
}

function Component21() {
  return (
    <div className="relative shrink-0 size-[23.99px]" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 24 24"
      >
        <g id="Component 2">
          <path d={svgPaths.pc71db00} fill="var(--fill-0, white)" id="Vector" />
          <path
            d={svgPaths.p159ebe80}
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
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-[23.99px]"
      data-name="mypage-filled-icon.svg fill"
    >
      <Component21 />
    </div>
  );
}

function MypageFilledIconSvg() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[23.99px] items-start justify-start mb-[-2.135px] overflow-clip p-0 relative shrink-0"
      data-name="mypage-filled-icon.svg"
    >
      <MypageFilledIconSvgFill />
    </div>
  );
}

function Margin5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mb-[-2.135px] p-0 relative shrink-0"
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

function Link7() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-center justify-start min-h-px min-w-px pb-[4.135px] pt-[5px] px-0 relative shrink-0"
      data-name="Link"
    >
      <MypageFilledIconSvg />
      <Margin5 />
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div
      className="absolute bg-[#1a1b1b] bottom-0 box-border content-stretch flex flex-row items-center justify-center left-0 max-w-[500px] pb-[0.625px] pt-0 px-0 w-[500px]"
      data-name="Background+HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#424242] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none"
      />
      <Link5 />
      <Link6 />
      <Link7 />
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
      <Container47 />
    </div>
  );
}

export default function Background5() {
  return (
    <div
      className="bg-[#000000] box-border content-stretch flex flex-row items-center justify-center p-0 relative size-full"
      data-name="Background"
    >
      <Background4 />
    </div>
  );
}