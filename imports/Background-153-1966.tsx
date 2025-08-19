import svgPaths from "./svg-p3farl1j9x";
import imgStoryImage01Jqfq6Rs8Eg8R52Pe73K7Zsfj from "figma:asset/8b2060eb7b5ccfd4835fad1dbce8d9600cf3667a.png";
import imgThumbnail from "figma:asset/53a411f934707414ea50455bcf0dc74050614a54.png";
import imgGalleryImage01Jqg49997Pe5Ck8A2C9Ffrjst from "figma:asset/7a200c8377f3df56f9c4cbc36cde1df6d4efd864.png";

function StoryImage01Jqfq6Rs8Eg8R52Pe73K7Zsfj() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_100%] bg-top-left h-[705px] left-0 right-0 top-0"
      data-name="story-image-01JQFQ6RS8EG8R52PE73K7ZSFJ"
      style={{
        backgroundImage: `url('${imgStoryImage01Jqfq6Rs8Eg8R52Pe73K7Zsfj}')`,
      }}
    />
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p3032d100}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImgLock() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - lock"
    >
      <Component1 />
    </div>
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="[text-shadow:rgba(0,0,0,0.6)_0px_0px_10px] flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[22px] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-center text-nowrap whitespace-pre">
        <p className="block mb-0">제작자가 설정한 조건을 만족하면 잠금이 해</p>
        <p className="block">제됩니다.</p>
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
        <p className="block leading-[normal] whitespace-pre">잠금 해제</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div
      className="bg-[#dc5903] box-border content-stretch flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative rounded-md shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0"
      data-name="Component 2"
    >
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="absolute bottom-[40.02%] box-border content-stretch flex flex-col gap-2 items-center justify-center left-1/4 p-0 right-1/4 top-[40.02%]"
      data-name="Container"
    >
      <ImgLock />
      <Container />
      <Component2 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="basis-0 grow h-[611px] min-h-px min-w-px overflow-clip relative rounded-md shrink-0"
      data-name="Container"
    >
      <StoryImage01Jqfq6Rs8Eg8R52Pe73K7Zsfj />
      <div className="absolute inset-0" data-name="Gradient" />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center overflow-clip p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-[470px]"
      data-name="Container"
    >
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-center left-[-940px] pl-[940px] pr-[1880px] py-0 top-0 w-[3290px]"
      data-name="Container"
    >
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="h-[611px] overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <Container6 />
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p22c93800}
            fill="var(--fill-0, white)"
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

function Component3() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-row items-center justify-center px-1.5 py-px relative rounded-[18px] shrink-0 size-9"
      data-name="Component 3"
    >
      <ImgLeft />
    </div>
  );
}

function Component5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Component 1">
          <path d={svgPaths.p2c41580} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImgRight() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - right"
    >
      <Component5 />
    </div>
  );
}

function Component6() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-row items-center justify-center px-1.5 py-px relative rounded-[18px] shrink-0 size-9"
      data-name="Component 3"
    >
      <ImgRight />
    </div>
  );
}

function Container8() {
  return (
    <div
      className="absolute bottom-[47.05%] box-border content-stretch flex flex-row items-center justify-between left-0 px-2.5 py-0 right-0 top-[47.05%]"
      data-name="Container"
    >
      <Component3 />
      <Component6 />
    </div>
  );
}

function Overlay() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-3 py-1 relative rounded-xl shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Light',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[11.25px] text-left text-nowrap">
        <p className="block leading-[18.86px] whitespace-pre">2 / 3</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="absolute bottom-[14.85px] box-border content-stretch flex flex-row items-center justify-center left-0 p-0 right-0"
      data-name="Container"
    >
      <Overlay />
    </div>
  );
}

function Container10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Thumbnail() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_150%] bg-top-left inset-0 rounded-sm"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail}')` }}
    />
  );
}

function Container11() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0"
      data-name="Container"
    >
      <Thumbnail />
    </div>
  );
}

function GalleryImage01Jqfq6Rs8Eg8R52Pe73K7Zsfj() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_150%] bg-top-left inset-0 rounded-sm"
      data-name="gallery-image-01JQFQ6RS8EG8R52PE73K7ZSFJ"
      style={{
        backgroundImage: `url('${imgStoryImage01Jqfq6Rs8Eg8R52Pe73K7Zsfj}')`,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#1890ff] border-solid inset-0 pointer-events-none rounded-sm"
      />
    </div>
  );
}

function Container12() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0"
      data-name="Container"
    >
      <GalleryImage01Jqfq6Rs8Eg8R52Pe73K7Zsfj />
    </div>
  );
}

function GalleryImage01Jqg49997Pe5Ck8A2C9Ffrjst() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_150%] bg-top-left inset-0 rounded-sm"
      data-name="gallery-image-01JQG49997PE5CK8A2C9FFRJST"
      style={{
        backgroundImage: `url('${imgGalleryImage01Jqg49997Pe5Ck8A2C9Ffrjst}')`,
      }}
    />
  );
}

function Container13() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0"
      data-name="Container"
    >
      <GalleryImage01Jqg49997Pe5Ck8A2C9Ffrjst />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[3px] items-start justify-center pl-0 pr-[270.29px] py-0 relative w-full">
          <Container11 />
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[22.313px] text-left text-nowrap">
        <p className="block leading-[37.71px] whitespace-pre">
          타투이스트 은재
        </p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[42.72px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[25.14px] not-italic relative shrink-0 text-[14.875px] text-[rgba(255,255,255,0.8)] text-left text-nowrap whitespace-pre">
        <p className="block mb-0">
          홍대 반지하 작업실의 과묵한 타투이스트 은재. 그에게 타투를 받으러
          찾아왔
        </p>
        <p className="block">다.</p>
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
        <p className="block leading-[20.43px] whitespace-pre">#남자</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div
      className="[flex-flow:wrap] absolute box-border content-stretch flex gap-0 items-start justify-start left-0 overflow-clip pb-0 pt-[5px] px-0 right-0 top-[97.99px]"
      data-name="Container"
    >
      <Overlay1 />
    </div>
  );
}

function Link() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Link"
    >
      <a
        className="[white-space-collapse:collapse] flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14.063px] text-left text-nowrap"
        href="https://onlyssul.ai/profile/01JMYETB9NP42704YRW5J40E8Y"
      >
        <p className="block cursor-pointer leading-[23.57px] whitespace-pre">
          @holiday
        </p>
      </a>
    </div>
  );
}

function Container18() {
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

function Container19() {
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

function Container20() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container19 />
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
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Component7() {
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

function Container21() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-[11.99px] items-center justify-start p-0 right-[10.4px] top-1/2 translate-y-[-50%]"
      data-name="Container"
    >
      <Component7 />
    </div>
  );
}

function Container22() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow h-[31.99px] items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <BackgroundBorder />
      <Container21 />
    </div>
  );
}

function Container23() {
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

function Component8() {
  return (
    <div
      className="bg-[#3a3a3a] box-border content-stretch flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative rounded-md shrink-0"
      data-name="Component 2"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container23 />
    </div>
  );
}

function Container24() {
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

function Component9() {
  return (
    <div
      className="bg-[#3a3a3a] box-border content-stretch flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative rounded-md shrink-0"
      data-name="Component 2"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[11.99px] items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Component8 />
      <Component9 />
    </div>
  );
}

function Container26() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[11.99px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container22 />
      <Container25 />
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
      <Container26 />
    </div>
  );
}

function Container27() {
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

function Container28() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[365.8px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[22px] not-italic relative shrink-0 text-[13.016px] text-[rgba(255,255,255,0.7)] text-left text-nowrap whitespace-pre">
        <p className="block mb-0">
          홍대는 젊음과 예술이 공존하는 거리다. 그곳 한적한 골목, 반지하에
          타투이스트 은재의
        </p>
        <p className="block mb-0">{`작업실이 있다. {{user}}는 은재에게 타투 시술을 받기 위해 작업실을 방문한 손님이다.`}</p>
        <p className="block mb-0">
          작업실 내부는 어둡지만, 은재의 성격을 반영하듯 깔끔하게 정돈되어
          있으며, 특유의 잉
        </p>
        <p className="block">크 냄새와 함께 묘한 분위기가 감돈다.</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[468.12px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15.805px] text-left text-nowrap">
        <p className="block leading-[26.71px] whitespace-pre">캐릭터 설명</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[12.797px] text-[rgba(255,255,255,0.8)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">• 은재</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div
      className="absolute h-[310.02px] left-0 right-0 top-[500.51px]"
      data-name="Container"
    >
      <Container30 />
      <div className="absolute flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light h-[88px] justify-center leading-[22px] left-0 not-italic text-[13.016px] text-[rgba(255,255,255,0.7)] text-left top-[67.63px] translate-y-[-50%] w-[162.34px]">
        <p className="block mb-0">성별: 남성</p>
        <p className="block mb-0">나이: 30세</p>
        <p className="block mb-0">직업: 타투이스트</p>
        <p className="block">작업실 위치: 홍대 근처 반지하</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light h-[110px] justify-center leading-[22px] left-0 not-italic text-[13.016px] text-[rgba(255,255,255,0.7)] text-left top-[188.63px] translate-y-[-50%] w-[354.67px]">
        <p className="block mb-0">특징 및 성격:</p>
        <p className="block mb-0">
          - 조용하고 과묵한 성격으로, 자신의 이야기를 잘 드러내지 않는다.
        </p>
        <p className="block mb-0">
          - 작업에 임할 때는 매우 높은 집중력을 발휘한다.
        </p>
        <p className="block mb-0">
          - 손님에게는 필요한 대화 외에는 말을 아끼는 편이다.
        </p>
        <p className="block">
          - 자신의 작업실을 어둡지만 깔끔하게 정돈하여 관리한다.
        </p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light h-11 justify-center leading-[22px] left-0 not-italic text-[13.016px] text-[rgba(255,255,255,0.7)] text-left top-[287.64px] translate-y-[-50%] w-[168.29px]">
        <p className="block mb-0">말투:</p>
        <p className="block">- 낮고 차분한 목소리로 말한다.</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div
      className="h-[818.52px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
      <div
        className="absolute bg-[rgba(255,255,255,0.15)] h-px left-0 right-0 top-[179.97px]"
        data-name="Horizontal Divider"
      />
      <Background />
      <Container27 />
      <Container28 />
      <Container29 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[225px] pt-10 px-[15px] relative w-full">
          <Container10 />
          <Container14 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div
      className="bg-[#1a1b1b] box-border content-stretch flex flex-col items-start justify-start max-w-[500px] p-0 relative shrink-0 w-[500px]"
      data-name="Background"
    >
      <Container33 />
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