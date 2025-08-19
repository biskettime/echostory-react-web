import svgPaths from "./svg-bsii91cs4v";
import imgStoryImage01Jzdpkp46V1Aswn9Dgjdn1Hv5 from "figma:asset/88a4f51258f2657ade2d68b7b4ce05a25f784f73.png";
import imgThumbnail from "figma:asset/76f30173da95d2ddcee6d7566e610dadd59314ba.png";
import imgGalleryImage01Jzdnyvba4N5Gsph0V1Cxdh7Q from "figma:asset/f5a7d2c3c88913b816f60f75b3af67f9d0c153f1.png";
import imgGalleryImage01Jzdnyvbg0Dazpre4Debrxs5A from "figma:asset/d10cd75e12207a7a2a59a7e77480521793c18577.png";
import imgGalleryImage01Jzdnyvbn2J32Rz4Qa85Yr25H from "figma:asset/9612bf6b4b828d3e1c2466b21b9fa527822f917c.png";
import imgGalleryImage01Jzdnyvbv4Rnx45E8Vza4Mcha from "figma:asset/1c5abf0d538ef9e65fe0043c2b64987636400f67.png";
import imgGalleryImage01Jzdnyvc1A7C9Kefhx2Tbvyzz from "figma:asset/2fd7c68cb66eab97254574cd94868af5325e2a98.png";
import imgGalleryImage01Jzdnyvc6Kypr6Eytah3733Sf from "figma:asset/2e3adb5bb8cb45d32611718c010e4d1d07ea7429.png";
import imgGalleryImage01Jzdnyvcctnsa3Kmvt89Xqsta from "figma:asset/3c265c943c3cb7415939d18770d26983bfb87b35.png";
import imgGalleryImage01Jzdnyvchmmxybzd0Z4Tpntqc from "figma:asset/e13b737c2661d162dac6230e6a17e293767ff77a.png";
import imgGalleryImage01Jzdpkp410N4Bkvvz7B0Kqq4X from "figma:asset/6e67edfd5e66dba90f9a1df5b6341125db09f62d.png";

function StoryImage01Jzdpkp46V1Aswn9Dgjdn1Hv5() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_100%] bg-top-left h-[705px] left-0 right-0 top-0"
      data-name="story-image-01JZDPKP46V1ASWN9DGJDN1HV5"
      style={{
        backgroundImage: `url('${imgStoryImage01Jzdpkp46V1Aswn9Dgjdn1Hv5}')`,
      }}
    />
  );
}

function Container() {
  return (
    <div
      className="basis-0 grow h-[611px] min-h-px min-w-px overflow-clip relative rounded-md shrink-0"
      data-name="Container"
    >
      <StoryImage01Jzdpkp46V1Aswn9Dgjdn1Hv5 />
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
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-[470px]"
      data-name="Container"
    >
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-center left-[-5170px] px-[5170px] py-0 top-0 w-[10810px]"
      data-name="Container"
    >
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="h-[611px] overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <Container3 />
    </div>
  );
}

function Component1() {
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
      <Component1 />
    </div>
  );
}

function Component2() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-row items-center justify-center px-1.5 py-px relative rounded-[18px] shrink-0 size-9"
      data-name="Component 2"
    >
      <ImgLeft />
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
      <Component4 />
    </div>
  );
}

function Component5() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-row items-center justify-center opacity-30 px-1.5 py-px relative rounded-[18px] shrink-0 size-9"
      data-name="Component 2"
    >
      <ImgRight />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="absolute bottom-[47.05%] box-border content-stretch flex flex-row items-center justify-between left-0 px-2.5 py-0 right-0 top-[47.05%]"
      data-name="Container"
    >
      <Component2 />
      <Component5 />
    </div>
  );
}

function Overlay() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-3 py-1 relative rounded-xl shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Light',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[11.063px] text-left text-nowrap">
        <p className="block leading-[18.86px] whitespace-pre">11 / 11</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="absolute bottom-[14.85px] box-border content-stretch flex flex-row items-center justify-center left-0 p-0 right-0"
      data-name="Container"
    >
      <Overlay />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Thumbnail() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_128.5%] bg-top-left inset-0 rounded-sm"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail}')` }}
    />
  );
}

function Container8() {
  return (
    <div
      className="absolute h-[64.58px] left-0 right-[405.43px] top-0"
      data-name="Container"
    >
      <Thumbnail />
    </div>
  );
}

function GalleryImage01Jzdnyvba4N5Gsph0V1Cxdh7Q() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_149.98%] bg-top-left inset-0 rounded-sm"
      data-name="gallery-image-01JZDNYVBA4N5GSPH0V1CXDH7Q"
      style={{
        backgroundImage: `url('${imgGalleryImage01Jzdnyvba4N5Gsph0V1Cxdh7Q}')`,
      }}
    />
  );
}

function Container9() {
  return (
    <div
      className="absolute h-[64.58px] left-[67.57px] right-[337.86px] top-0"
      data-name="Container"
    >
      <GalleryImage01Jzdnyvba4N5Gsph0V1Cxdh7Q />
    </div>
  );
}

function GalleryImage01Jzdnyvbg0Dazpre4Debrxs5A() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_128.5%] bg-top-left inset-0 rounded-sm"
      data-name="gallery-image-01JZDNYVBG0DAZPRE4DEBRXS5A"
      style={{
        backgroundImage: `url('${imgGalleryImage01Jzdnyvbg0Dazpre4Debrxs5A}')`,
      }}
    />
  );
}

function Container10() {
  return (
    <div
      className="absolute h-[64.58px] left-[135.14px] right-[270.29px] top-0"
      data-name="Container"
    >
      <GalleryImage01Jzdnyvbg0Dazpre4Debrxs5A />
    </div>
  );
}

function GalleryImage01Jzdnyvbn2J32Rz4Qa85Yr25H() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_150%] bg-top-left inset-0 rounded-sm"
      data-name="gallery-image-01JZDNYVBN2J32RZ4QA85YR25H"
      style={{
        backgroundImage: `url('${imgGalleryImage01Jzdnyvbn2J32Rz4Qa85Yr25H}')`,
      }}
    />
  );
}

function Container11() {
  return (
    <div
      className="absolute h-[64.58px] left-[202.71px] right-[202.71px] top-0"
      data-name="Container"
    >
      <GalleryImage01Jzdnyvbn2J32Rz4Qa85Yr25H />
    </div>
  );
}

function GalleryImage01Jzdnyvbv4Rnx45E8Vza4Mcha() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_149.98%] bg-top-left inset-0 rounded-sm"
      data-name="gallery-image-01JZDNYVBV4RNX45E8VZA4MCHA"
      style={{
        backgroundImage: `url('${imgGalleryImage01Jzdnyvbv4Rnx45E8Vza4Mcha}')`,
      }}
    />
  );
}

function Container12() {
  return (
    <div
      className="absolute h-[64.58px] left-[270.28px] right-[135.15px] top-0"
      data-name="Container"
    >
      <GalleryImage01Jzdnyvbv4Rnx45E8Vza4Mcha />
    </div>
  );
}

function GalleryImage01Jzdnyvc1A7C9Kefhx2Tbvyzz() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_149.98%] bg-top-left inset-0 rounded-sm"
      data-name="gallery-image-01JZDNYVC1A7C9KEFHX2TBVYZZ"
      style={{
        backgroundImage: `url('${imgGalleryImage01Jzdnyvc1A7C9Kefhx2Tbvyzz}')`,
      }}
    />
  );
}

function Container13() {
  return (
    <div
      className="absolute h-[64.58px] left-[337.85px] right-[67.58px] top-0"
      data-name="Container"
    >
      <GalleryImage01Jzdnyvc1A7C9Kefhx2Tbvyzz />
    </div>
  );
}

function GalleryImage01Jzdnyvc6Kypr6Eytah3733Sf() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_149.98%] bg-top-left inset-0 rounded-sm"
      data-name="gallery-image-01JZDNYVC6KYPR6EYTAH3733SF"
      style={{
        backgroundImage: `url('${imgGalleryImage01Jzdnyvc6Kypr6Eytah3733Sf}')`,
      }}
    />
  );
}

function Container14() {
  return (
    <div
      className="absolute h-[64.58px] left-[405.42px] right-[0.01px] top-0"
      data-name="Container"
    >
      <GalleryImage01Jzdnyvc6Kypr6Eytah3733Sf />
    </div>
  );
}

function GalleryImage01Jzdnyvcctnsa3Kmvt89Xqsta() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_149.98%] bg-top-left inset-0 rounded-sm"
      data-name="gallery-image-01JZDNYVCCTNSA3KMVT89XQSTA"
      style={{
        backgroundImage: `url('${imgGalleryImage01Jzdnyvcctnsa3Kmvt89Xqsta}')`,
      }}
    />
  );
}

function Container15() {
  return (
    <div
      className="absolute h-[64.58px] left-0 right-[405.43px] top-[67.57px]"
      data-name="Container"
    >
      <GalleryImage01Jzdnyvcctnsa3Kmvt89Xqsta />
    </div>
  );
}

function GalleryImage01Jzdnyvchmmxybzd0Z4Tpntqc() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_149.98%] bg-top-left inset-0 rounded-sm"
      data-name="gallery-image-01JZDNYVCHMMXYBZD0Z4TPNTQC"
      style={{
        backgroundImage: `url('${imgGalleryImage01Jzdnyvchmmxybzd0Z4Tpntqc}')`,
      }}
    />
  );
}

function Container16() {
  return (
    <div
      className="absolute h-[64.58px] left-[67.57px] right-[337.86px] top-[67.57px]"
      data-name="Container"
    >
      <GalleryImage01Jzdnyvchmmxybzd0Z4Tpntqc />
    </div>
  );
}

function GalleryImage01Jzdpkp410N4Bkvvz7B0Kqq4X() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_149.98%] bg-top-left inset-0 rounded-sm"
      data-name="gallery-image-01JZDPKP410N4BKVVZ7B0KQQ4X"
      style={{
        backgroundImage: `url('${imgGalleryImage01Jzdpkp410N4Bkvvz7B0Kqq4X}')`,
      }}
    />
  );
}

function Container17() {
  return (
    <div
      className="absolute h-[64.58px] left-[135.14px] right-[270.29px] top-[67.57px]"
      data-name="Container"
    >
      <GalleryImage01Jzdpkp410N4Bkvvz7B0Kqq4X />
    </div>
  );
}

function GalleryImage01Jzdpkp46V1Aswn9Dgjdn1Hv5() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_150%] bg-top-left inset-0 rounded-sm"
      data-name="gallery-image-01JZDPKP46V1ASWN9DGJDN1HV5"
      style={{
        backgroundImage: `url('${imgStoryImage01Jzdpkp46V1Aswn9Dgjdn1Hv5}')`,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#1890ff] border-solid inset-0 pointer-events-none rounded-sm"
      />
    </div>
  );
}

function Container18() {
  return (
    <div
      className="absolute h-[64.58px] left-[202.71px] right-[202.71px] top-[67.57px]"
      data-name="Container"
    >
      <GalleryImage01Jzdpkp46V1Aswn9Dgjdn1Hv5 />
    </div>
  );
}

function Container19() {
  return (
    <div
      className="h-[132.16px] overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[22.313px] text-left text-nowrap">
        <p className="block leading-[37.71px] whitespace-pre">
          여사친 이민지와 배낭여행
        </p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[42.72px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[25.14px] not-italic relative shrink-0 text-[14.875px] text-[rgba(255,255,255,0.8)] text-left text-nowrap whitespace-pre">
        <p className="block mb-0">{`남자친구 있는 '불알' 여사친과 단둘이 떠난 제주도 여행, 그런데 방이 하나뿐`}</p>
        <p className="block">이다.</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start pb-[4.23px] pt-[3.18px] px-1.5 relative rounded self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ff9500] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">#여자</p>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start pb-[4.23px] pt-[3.18px] px-1.5 relative rounded self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ff9500] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">#여사친</p>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start pb-[4.23px] pt-[3.18px] px-1.5 relative rounded self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ff9500] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">#여행</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div
      className="[flex-flow:wrap] absolute box-border content-stretch flex gap-1 items-start justify-start left-0 overflow-clip pb-0 pt-[5px] px-0 right-0 top-[97.99px]"
      data-name="Container"
    >
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
      <a
        className="[white-space-collapse:collapse] flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14.18px] text-left text-nowrap"
        href="https://onlyssul.ai/profile/01JMYETB7KD6J2DY5H0Y9YSH37"
      >
        <p className="block cursor-pointer leading-[23.57px] whitespace-pre">
          @stupid_dog
        </p>
      </a>
    </div>
  );
}

function Container23() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 pb-2.5 pt-[5px] px-0 right-0 top-[136.4px]"
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

function Container24() {
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

function Container25() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container24 />
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
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Component6() {
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

function Container26() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-[11.99px] items-center justify-start p-0 right-[10.4px] top-1/2 translate-y-[-50%]"
      data-name="Container"
    >
      <Component6 />
    </div>
  );
}

function Container27() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow h-[31.99px] items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <BackgroundBorder />
      <Container26 />
    </div>
  );
}

function Container28() {
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

function Component3() {
  return (
    <div
      className="bg-[#3a3a3a] box-border content-stretch flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative rounded-md shrink-0"
      data-name="Component 3"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container28 />
    </div>
  );
}

function Container29() {
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

function Component7() {
  return (
    <div
      className="bg-[#3a3a3a] box-border content-stretch flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative rounded-md shrink-0"
      data-name="Component 3"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#4a4a4a] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
      />
      <Container29 />
    </div>
  );
}

function Container30() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[11.99px] items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Component3 />
      <Component7 />
    </div>
  );
}

function Container31() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[11.99px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container27 />
      <Container30 />
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
      <Container31 />
    </div>
  );
}

function Container32() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[333.39px]"
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
      className="absolute box-border content-stretch flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light gap-[22px] items-start justify-start leading-[0] left-0 not-italic p-0 right-0 text-[13.016px] text-[rgba(255,255,255,0.7)] text-left text-nowrap top-[365.79px]"
      data-name="Paragraph"
    >
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="block leading-[22px] text-nowrap whitespace-pre">{`여름 방학을 맞아 제주도로 {{user}}의 생애 첫 배낭여행을 떠난다.`}</p>
      </div>
      <div className="flex flex-col justify-center leading-[22px] relative shrink-0 whitespace-pre">
        <p className="block mb-0">
          비행기 옆 좌석에는 8살 때부터 계속 같은 학교를 다니면서 대학교도 같이
          다니게된 불
        </p>
        <p className="block mb-0">알? 여사친 이민지가 앉아있다.</p>
        <p className="block mb-0">{`이민지는 {{user}}와 오랜시간을 함께해서 절대 이성으로 보지 않는다.`}</p>
        <p className="block">{`{{user}}는 이민지의 털털함과 짓궂은 장난에 가끔은 질색하기도 한다.`}</p>
      </div>
      <div className="flex flex-col justify-center leading-[22px] relative shrink-0 whitespace-pre">
        <p className="block mb-0">
          여행은 원래 혼자가려고 했는데 갑자기 이민지가 심심하다고 따라와서
          제주도에 방을 한
        </p>
        <p className="block">
          개만 예약해둔 상태이다. 털털한 이민지는 친구끼리 뭐 어때라고 생각한다.
        </p>
      </div>
      <div className="flex flex-col justify-center leading-[22px] relative shrink-0 whitespace-pre">
        <p className="block mb-0">
          이민지는 남자친구가 있는데 남자친구에게는 남사친과 간다고 말안하고
          그냥 친구와 같
        </p>
        <p className="block">
          이 간다고 말해두고 따라왔다. 불알친구라 남자라고 생각하지 않기
          때문이다.
        </p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[644.13px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15.805px] text-left text-nowrap">
        <p className="block leading-[26.71px] whitespace-pre">캐릭터 설명</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[12.906px] text-[rgba(255,255,255,0.8)] text-left w-full">
        <p className="block leading-[22px]">• 이민지</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[1.62px] items-start justify-start left-0 p-0 right-0 top-[676.53px]"
      data-name="Container"
    >
      <Container34 />
      <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[22px] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.7)] text-left text-nowrap whitespace-pre">
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
        <p className="block mb-0">{`- 의리 하나는 끝내준다. 짓궂은 장난을 좋아하며, {{user}}를 '한심한 놈', '어리바리한`}</p>
        <p className="block mb-0">{`놈' 취급하며 놀려먹는 것을 인생의 낙으로 삼는다.`}</p>
        <p className="block">- 고등학생때 부터 만나던 남자친구가 있다.</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div
      className="h-[884.52px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
      <div
        className="absolute bg-[rgba(255,255,255,0.15)] h-px left-0 right-0 top-[179.96px]"
        data-name="Horizontal Divider"
      />
      <Background />
      <Container32 />
      <Paragraph />
      <Container33 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[225.01px] pt-10 px-[15px] relative w-full">
          <Container7 />
          <Container19 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Component8() {
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

function ImgLeft1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Img - left"
    >
      <Component8 />
    </div>
  );
}

function Container38() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 pb-[5.84px] pt-[3.88px] px-[15px] translate-y-[-50%]"
      data-name="Container"
      style={{ top: "calc(50% - 0.315px)" }}
    >
      <ImgLeft1 />
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

function Component9() {
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
      <Component9 />
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

function Container39() {
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
      <Container38 />
      <Margin />
      <Container39 />
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
      <Container37 />
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