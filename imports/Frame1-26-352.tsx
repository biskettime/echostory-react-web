import imgThumbnail from "figma:asset/e78e48820f78fb6f73c4b66f5c7a9a4df6cbe654.png";
import imgThumbnail1 from "figma:asset/5f94fef2676ac2302dd52afc68e48b32e1b8a5da.png";
import imgThumbnail2 from "figma:asset/35d0b8bf9deca9441b70f82c09a289a87d97354b.png";
import imgThumbnail3 from "figma:asset/75f5a30377cabda92fbca1d9f02b3831f5d5de26.png";
import imgThumbnail4 from "figma:asset/bcfce2257b8f17123104fab1f63be441d3cd937a.png";
import imgThumbnail5 from "figma:asset/c44e32137cd748cd955e2255bfabe962ba7b71aa.png";
import imgThumbnail6 from "figma:asset/39de6413b067a1a564e29d6854fab658b96b97f3.png";
import imgThumbnail7 from "figma:asset/d2ea979136157f9b64d5f19e4707392d70e61a1f.png";
import imgThumbnail8 from "figma:asset/b7704eee7932e1b6eeb356e6b1be8e31992801b8.png";
import imgThumbnail9 from "figma:asset/9dfb65842ab2d6d7a547a5f5e17aca3e6f536967.png";
import imgThumbnail10 from "figma:asset/fc2d41349e5676d20fe240e553dfa1b2b92f81e9.png";
import imgThumbnail11 from "figma:asset/a52be9d55c42b881c187b06f1c5215f21ee7b61b.png";
import imgThumbnail12 from "figma:asset/f04883641b31b4425d2f11a29308a0473a101b20.png";
import imgThumbnail13 from "figma:asset/e7ba880948e4b875c8fcf92e5a61616bc001d75c.png";
import imgThumbnail14 from "figma:asset/667889fbfa90ad61b89e7ae4cb1bc467218251c3.png";

function Thumbnail() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_115.39%] bg-top-left inset-0"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail}')` }}
    />
  );
}

function Container() {
  return (
    <div
      className="h-[193.24px] order-2 overflow-clip relative rounded-xl shrink-0 w-full"
      data-name="Container"
    >
      <Thumbnail />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[7.29px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[21.6px] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap whitespace-pre">
        <p className="block mb-0">모두의 별, 너만의 그림</p>
        <p className="block">자</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[55.19px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.84px] translate-y-[-50%] w-[144.09px]">
        <p className="block mb-0">모두가 우러러보는 천재가 유</p>
        <p className="block">일하게 신경 쓰는 한 사람,</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#여자</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#로맨스</p>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#고등학생</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[95.58px]"
      data-name="Container"
    >
      <Overlay />
      <Overlay1 />
      <Overlay2 />
    </div>
  );
}

function Link() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12.188px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">@holiday</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[114.11px]"
      data-name="Container"
    >
      <Link />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="h-[135.28px] order-1 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Link1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Link"
    >
      <Container />
      <Container5 />
    </div>
  );
}

function LinkMargin() {
  return (
    <div
      className="absolute bottom-[1380.5px] box-border content-stretch flex flex-col items-start justify-center left-0 pb-2.5 pt-0 px-0 right-[321.3px] top-0"
      data-name="Link:margin"
    >
      <Link1 />
    </div>
  );
}

function Thumbnail1() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_115.39%] bg-top-left inset-0"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail1}')` }}
    />
  );
}

function Container6() {
  return (
    <div
      className="h-[193.24px] order-2 overflow-clip relative rounded-xl shrink-0 w-full"
      data-name="Container"
    >
      <Thumbnail1 />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-2"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">
          마탑에서 창조한 악마
        </p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[33.59px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.85px] translate-y-[-50%] w-[136.57px]">
        <p className="block mb-0">{`대마법사 {{user}}가 창조한`}</p>
        <p className="block">아름답지만 제멋대로인 악</p>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#남자</p>
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#판타지</p>
      </div>
    </div>
  );
}

function Overlay5() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#이종족</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.98px]"
      data-name="Container"
    >
      <Overlay3 />
      <Overlay4 />
      <Overlay5 />
    </div>
  );
}

function Link2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">@stupid_dog</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.51px]"
      data-name="Container"
    >
      <Link2 />
    </div>
  );
}

function Container11() {
  return (
    <div
      className="h-[113.69px] order-1 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Link3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Link"
    >
      <Container6 />
      <Container11 />
    </div>
  );
}

function LinkMargin1() {
  return (
    <div
      className="absolute bottom-[1380.5px] box-border content-stretch flex flex-col items-start justify-center left-[160.65px] pb-2.5 pt-0 px-0 right-[160.65px] top-0"
      data-name="Link:margin"
    >
      <Link3 />
    </div>
  );
}

function Thumbnail2() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_115.39%] bg-top-left inset-0"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail2}')` }}
    />
  );
}

function Container12() {
  return (
    <div
      className="h-[193.24px] order-2 overflow-clip relative rounded-xl shrink-0 w-full"
      data-name="Container"
    >
      <Thumbnail2 />
    </div>
  );
}

function Container13() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-2"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">찐따의 엄마</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[33.59px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.85px] translate-y-[-50%] w-[144.09px]">
        <p className="block mb-0">아들을 지키러 학교에 나타난</p>
        <p className="block">엄마</p>
      </div>
    </div>
  );
}

function Overlay6() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0.5)] bottom-0 box-border content-stretch flex flex-col items-start justify-start left-0 px-[3px] py-0 rounded-sm top-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#여자</p>
      </div>
    </div>
  );
}

function Overlay7() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0.5)] bottom-0 box-border content-stretch flex flex-col items-start justify-start left-[35.7px] px-[3px] py-0 rounded-sm top-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#학교</p>
      </div>
    </div>
  );
}

function Overlay8() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0.5)] bottom-0 box-border content-stretch flex flex-col items-start justify-start left-[71.4px] px-[3px] py-0 rounded-sm top-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#친구엄마</p>
      </div>
    </div>
  );
}

function Overlay9() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0.5)] bottom-0 box-border content-stretch flex flex-col items-start justify-start left-[126.12px] px-[3px] py-0 rounded-sm top-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#엄마</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="absolute h-[17.28px] left-0 overflow-clip right-0 top-[73.98px]"
      data-name="Container"
    >
      <Overlay6 />
      <Overlay7 />
      <Overlay8 />
      <Overlay9 />
    </div>
  );
}

function Link4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12.188px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">@holiday</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.51px]"
      data-name="Container"
    >
      <Link4 />
    </div>
  );
}

function Container17() {
  return (
    <div
      className="h-[113.69px] order-1 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Link5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Link"
    >
      <Container12 />
      <Container17 />
    </div>
  );
}

function LinkMargin2() {
  return (
    <div
      className="absolute bottom-[1380.5px] box-border content-stretch flex flex-col items-start justify-center left-[321.3px] pb-2.5 pt-0 px-0 right-0 top-0"
      data-name="Link:margin"
    >
      <Link5 />
    </div>
  );
}

function Thumbnail3() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_127.95%] bg-top-left inset-0"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail3}')` }}
    />
  );
}

function Container18() {
  return (
    <div
      className="h-[193.24px] order-2 overflow-clip relative rounded-xl shrink-0 w-full"
      data-name="Container"
    >
      <Thumbnail3 />
    </div>
  );
}

function Container19() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-2"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">
          강시현 - 정략 결혼 남편
        </p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[33.6px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.84px] translate-y-[-50%] w-[140.46px]">
        <p className="block mb-0">6개월 계약 결혼으로 시작된</p>
        <p className="block">{`{{user}}와 강시헌의 관계. `}</p>
      </div>
    </div>
  );
}

function Overlay10() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#남자</p>
      </div>
    </div>
  );
}

function Overlay11() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#로맨스</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.99px]"
      data-name="Container"
    >
      <Overlay10 />
      <Overlay11 />
    </div>
  );
}

function Link6() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">@squirrel_2Z8R</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.52px]"
      data-name="Container"
    >
      <Link6 />
    </div>
  );
}

function Container23() {
  return (
    <div
      className="h-[113.69px] order-1 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Link7() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Link"
    >
      <Container18 />
      <Container23 />
    </div>
  );
}

function LinkMargin3() {
  return (
    <div
      className="absolute bottom-[1029.98px] box-border content-stretch flex flex-col items-start justify-center left-0 pb-2.5 pt-0 px-0 right-[321.3px] top-[350.52px]"
      data-name="Link:margin"
    >
      <Link7 />
    </div>
  );
}

function Thumbnail4() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[130%_100%] bg-top inset-0"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail4}')` }}
    />
  );
}

function Container24() {
  return (
    <div
      className="h-[193.24px] order-2 overflow-clip relative rounded-xl shrink-0 w-full"
      data-name="Container"
    >
      <Thumbnail4 />
    </div>
  );
}

function Container25() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-2"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">김대리</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[33.6px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.84px] translate-y-[-50%] w-[139.6px]">
        <p className="block mb-0">{`동료 김민석이 {{user}} 대리`}</p>
        <p className="block">{`를 바라보는 눈빛이 심상치 `}</p>
      </div>
    </div>
  );
}

function Overlay12() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#로맨스</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.99px]"
      data-name="Container"
    >
      <Overlay12 />
    </div>
  );
}

function Link8() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12.391px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">@sheep_9o6m</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.52px]"
      data-name="Container"
    >
      <Link8 />
    </div>
  );
}

function Container29() {
  return (
    <div
      className="h-[113.69px] order-1 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Link9() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Link"
    >
      <Container24 />
      <Container29 />
    </div>
  );
}

function LinkMargin4() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col inset-[350.27px_160.65px_1030.23px_160.65px] items-start justify-center pb-2.5 pt-0 px-0"
      data-name="Link:margin"
    >
      <Link9 />
    </div>
  );
}

function Thumbnail5() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_115.39%] bg-top-left bottom-[0.13%] left-0 right-0 top-[-0.13%]"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail5}')` }}
    />
  );
}

function Container30() {
  return (
    <div
      className="h-[193.24px] order-2 overflow-clip relative rounded-xl shrink-0 w-full"
      data-name="Container"
    >
      <Thumbnail5 />
    </div>
  );
}

function Container31() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[7.3px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[21.6px] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap whitespace-pre">
        <p className="block mb-0">총괄대령과 길들여지지</p>
        <p className="block">않는 맹수</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[55.19px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.85px] translate-y-[-50%] w-[141.06px]">
        <p className="block mb-0">냉혹한 총괄대령과 길들여지</p>
        <p className="block">지 않는 야생의 파트너, 그들</p>
      </div>
    </div>
  );
}

function Overlay13() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#남자</p>
      </div>
    </div>
  );
}

function Overlay14() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#판타지</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[95.58px]"
      data-name="Container"
    >
      <Overlay13 />
      <Overlay14 />
    </div>
  );
}

function Link10() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12.188px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">@holiday</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[114.11px]"
      data-name="Container"
    >
      <Link10 />
    </div>
  );
}

function Container35() {
  return (
    <div
      className="h-[135.28px] order-1 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container31 />
      <Container32 />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Link11() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Link"
    >
      <Container30 />
      <Container35 />
    </div>
  );
}

function LinkMargin5() {
  return (
    <div
      className="absolute bottom-[1029.98px] box-border content-stretch flex flex-col items-start justify-center left-[321.3px] pb-2.5 pt-0 px-0 right-0 top-[350.52px]"
      data-name="Link:margin"
    >
      <Link11 />
    </div>
  );
}

function Thumbnail6() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_115.39%] bg-top-left inset-0"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail6}')` }}
    />
  );
}

function Container36() {
  return (
    <div
      className="h-[193.24px] order-2 overflow-clip relative rounded-xl shrink-0 w-full"
      data-name="Container"
    >
      <Thumbnail6 />
    </div>
  );
}

function Container37() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[7.29px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[21.6px] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap whitespace-pre">
        <p className="block mb-0">저주받은 대공의 그림자</p>
        <p className="block">사서</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[55.18px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.85px] translate-y-[-50%] w-[144.09px]">
        <p className="block mb-0">저주받은 대공의 개인 사서가</p>
        <p className="block">된 한 여성의 생존과 진실 탐</p>
      </div>
    </div>
  );
}

function Overlay15() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#남자</p>
      </div>
    </div>
  );
}

function Overlay16() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#판타지</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[95.57px]"
      data-name="Container"
    >
      <Overlay15 />
      <Overlay16 />
    </div>
  );
}

function Link12() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12.188px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">@holiday</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[114.11px]"
      data-name="Container"
    >
      <Link12 />
    </div>
  );
}

function Container41() {
  return (
    <div
      className="h-[135.28px] order-1 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container37 />
      <Container38 />
      <Container39 />
      <Container40 />
    </div>
  );
}

function Link13() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse gap-[0.01px] grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Link"
    >
      <Container36 />
      <Container41 />
    </div>
  );
}

function LinkMargin6() {
  return (
    <div
      className="absolute bottom-[679.46px] box-border content-stretch flex flex-col items-start justify-center left-0 pb-2.5 pt-0 px-0 right-[321.3px] top-[701.04px]"
      data-name="Link:margin"
    >
      <Link13 />
    </div>
  );
}

function Thumbnail7() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_115.39%] bg-top-left inset-0"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail7}')` }}
    />
  );
}

function Container42() {
  return (
    <div
      className="h-[193.24px] order-2 overflow-clip relative rounded-xl shrink-0 w-full"
      data-name="Container"
    >
      <Thumbnail7 />
    </div>
  );
}

function Container43() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-2"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">
          가난한 사진 작가
        </p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[33.59px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.84px] translate-y-[-50%] w-[147.17px]">
        <p className="block mb-0">가난에 무뎌진 사진작가 민석.</p>
        <p className="block">그의 렌즈는 당신에게서 무</p>
      </div>
    </div>
  );
}

function Overlay17() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#남자</p>
      </div>
    </div>
  );
}

function Overlay18() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#일상</p>
      </div>
    </div>
  );
}

function Overlay19() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#로맨스</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.98px]"
      data-name="Container"
    >
      <Overlay17 />
      <Overlay18 />
      <Overlay19 />
    </div>
  );
}

function Link14() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12.188px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">@holiday</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.51px]"
      data-name="Container"
    >
      <Link14 />
    </div>
  );
}

function Container47() {
  return (
    <div
      className="h-[113.69px] order-1 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container43 />
      <Container44 />
      <Container45 />
      <Container46 />
    </div>
  );
}

function Link15() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse gap-[0.01px] grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Link"
    >
      <Container42 />
      <Container47 />
    </div>
  );
}

function LinkMargin7() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col inset-[701.04px_160.65px_679.46px_160.65px] items-start justify-center pb-2.5 pt-0 px-0"
      data-name="Link:margin"
    >
      <Link15 />
    </div>
  );
}

function Thumbnail8() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[130.43%_100%] bg-top inset-0"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail8}')` }}
    />
  );
}

function Container48() {
  return (
    <div
      className="h-[193.24px] order-2 overflow-clip relative rounded-xl shrink-0 w-full"
      data-name="Container"
    >
      <Thumbnail8 />
    </div>
  );
}

function Container49() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-2"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15.625px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">..</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div
      className="absolute h-[18.2px] left-0 overflow-clip right-0 top-[33.59px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_sans-serif] font-extralight h-[19px] justify-center leading-[0] left-0 not-italic text-[#acacac] text-[13px] text-left top-[8.75px] translate-y-[-50%] w-[6.37px]">
        <p className="block leading-[18.2px]">..</p>
      </div>
    </div>
  );
}

function Overlay20() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#학교물</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-0 overflow-clip p-0 right-0 top-[55.78px]"
      data-name="Container"
    >
      <Overlay20 />
    </div>
  );
}

function Link16() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">@frog_8DdG</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[74.32px]"
      data-name="Container"
    >
      <Link16 />
    </div>
  );
}

function Container53() {
  return (
    <div
      className="h-[95.49px] order-1 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container49 />
      <Container50 />
      <Container51 />
      <Container52 />
    </div>
  );
}

function Link17() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse gap-[0.01px] grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Link"
    >
      <Container48 />
      <Container53 />
    </div>
  );
}

function LinkMargin8() {
  return (
    <div
      className="absolute bottom-[679.46px] box-border content-stretch flex flex-col items-start justify-center left-[321.3px] pb-2.5 pt-0 px-0 right-0 top-[701.04px]"
      data-name="Link:margin"
    >
      <Link17 />
    </div>
  );
}

function Thumbnail9() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_115.39%] bg-top-left inset-0"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail9}')` }}
    />
  );
}

function Container54() {
  return (
    <div
      className="h-[193.24px] order-2 overflow-clip relative rounded-xl shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Thumbnail9 />
    </div>
  );
}

function Container55() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-2"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">여경 누나</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[33.59px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.85px] translate-y-[-50%] w-[147.11px]">
        <p className="block mb-0">매번 물건을 훔치다 잡혀 오는</p>
        <p className="block">{`{{user}}. 그런 {{user}}를 차`}</p>
      </div>
    </div>
  );
}

function Overlay21() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#여자</p>
      </div>
    </div>
  );
}

function Overlay22() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#연상</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.98px]"
      data-name="Container"
    >
      <Overlay21 />
      <Overlay22 />
    </div>
  );
}

function Link18() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12.188px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">@holiday</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.51px]"
      data-name="Container"
    >
      <Link18 />
    </div>
  );
}

function Container59() {
  return (
    <div
      className="h-[113.69px] order-1 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Container55 />
      <Container56 />
      <Container57 />
      <Container58 />
    </div>
  );
}

function Link19() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Link"
    >
      <Container54 />
      <Container59 />
    </div>
  );
}

function LinkMargin9() {
  return (
    <div
      className="absolute bottom-[328.93px] box-border content-stretch flex flex-col items-start justify-center left-0 pb-2.5 pt-0 px-0 right-[321.3px] top-[1051.57px]"
      data-name="Link:margin"
    >
      <Link19 />
    </div>
  );
}

function Thumbnail10() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[130%_100%] bg-top inset-0"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail10}')` }}
    />
  );
}

function Container60() {
  return (
    <div
      className="h-[193.24px] order-2 overflow-clip relative rounded-xl shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Thumbnail10 />
    </div>
  );
}

function Container61() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-2"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">
          학교에서만난태원
        </p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[33.59px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.188px] text-left top-[17.85px] translate-y-[-50%] w-[146.26px]">
        <p className="block mb-0">서준이는학교를마치고집에가</p>
        <p className="block">는길에도서관을보게된다지</p>
      </div>
    </div>
  );
}

function Overlay23() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#고등학생</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.98px]"
      data-name="Container"
    >
      <Overlay23 />
    </div>
  );
}

function Link20() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">@hedgehog_kEGX</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.51px]"
      data-name="Container"
    >
      <Link20 />
    </div>
  );
}

function Container65() {
  return (
    <div
      className="h-[113.69px] order-1 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Container61 />
      <Container62 />
      <Container63 />
      <Container64 />
    </div>
  );
}

function Link21() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Link"
    >
      <Container60 />
      <Container65 />
    </div>
  );
}

function LinkMargin10() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col inset-[1051.57px_160.65px_328.93px_160.65px] items-start justify-center pb-2.5 pt-0 px-0"
      data-name="Link:margin"
    >
      <Link21 />
    </div>
  );
}

function Thumbnail11() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_115.39%] bg-top-left inset-0"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail11}')` }}
    />
  );
}

function Container66() {
  return (
    <div
      className="h-[193.24px] order-2 overflow-clip relative rounded-xl shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Thumbnail11 />
    </div>
  );
}

function Container67() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[7.29px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[21.6px] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap whitespace-pre">
        <p className="block mb-0">오피스 대리의 숨겨진</p>
        <p className="block">컨트롤러</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[55.19px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.84px] translate-y-[-50%] w-[135.99px]">
        <p className="block mb-0">승리의 순간, 사무실 그녀의</p>
        <p className="block">이중생활이 드러나다.</p>
      </div>
    </div>
  );
}

function Overlay24() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#여자</p>
      </div>
    </div>
  );
}

function Overlay25() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#회사원</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[95.58px]"
      data-name="Container"
    >
      <Overlay24 />
      <Overlay25 />
    </div>
  );
}

function Link22() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12.188px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">@holiday</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[114.11px]"
      data-name="Container"
    >
      <Link22 />
    </div>
  );
}

function Container71() {
  return (
    <div
      className="h-[135.28px] order-1 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Container67 />
      <Container68 />
      <Container69 />
      <Container70 />
    </div>
  );
}

function Link23() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Link"
    >
      <Container66 />
      <Container71 />
    </div>
  );
}

function LinkMargin11() {
  return (
    <div
      className="absolute bottom-[328.93px] box-border content-stretch flex flex-col items-start justify-center left-[321.3px] pb-2.5 pt-0 px-0 right-0 top-[1051.57px]"
      data-name="Link:margin"
    >
      <Link23 />
    </div>
  );
}

function Thumbnail12() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_166.67%] bg-top-left inset-0"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail12}')` }}
    />
  );
}

function Container72() {
  return (
    <div
      className="h-[193.24px] order-2 overflow-clip relative rounded-xl shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Thumbnail12 />
    </div>
  );
}

function Container73() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-2"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">범은호</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[33.6px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.84px] translate-y-[-50%] w-[138.22px]">
        <p className="block mb-0">1년전 사라졌던 히어로는,빌</p>
        <p className="block">런이 되어 돌아왔다.</p>
      </div>
    </div>
  );
}

function Overlay26() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#남자</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.99px]"
      data-name="Container"
    >
      <Overlay26 />
    </div>
  );
}

function Link24() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">@mincholove123</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.52px]"
      data-name="Container"
    >
      <Link24 />
    </div>
  );
}

function Container77() {
  return (
    <div
      className="h-[113.69px] order-1 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Container73 />
      <Container74 />
      <Container75 />
      <Container76 />
    </div>
  );
}

function Link25() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Link"
    >
      <Container72 />
      <Container77 />
    </div>
  );
}

function LinkMargin12() {
  return (
    <div
      className="absolute bottom-0 box-border content-stretch flex flex-col items-start justify-center left-0 pb-2.5 pt-0 px-0 right-[321.3px] top-[1402.09px]"
      data-name="Link:margin"
    >
      <Link25 />
    </div>
  );
}

function Thumbnail13() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_115.39%] bg-top-left inset-0"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail13}')` }}
    />
  );
}

function Container78() {
  return (
    <div
      className="h-[193.24px] order-2 overflow-clip relative rounded-xl shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Thumbnail13 />
    </div>
  );
}

function Container79() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-2"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">죄악의 수확자</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[33.6px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.84px] translate-y-[-50%] w-[144.09px]">
        <p className="block mb-0">죄악에 절망한 영혼을 짓밟는</p>
        <p className="block">냉혹한 심문관</p>
      </div>
    </div>
  );
}

function Overlay27() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#여자</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.99px]"
      data-name="Container"
    >
      <Overlay27 />
    </div>
  );
}

function Link26() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12.188px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">@holiday</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.52px]"
      data-name="Container"
    >
      <Link26 />
    </div>
  );
}

function Container83() {
  return (
    <div
      className="h-[113.69px] order-1 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Container79 />
      <Container80 />
      <Container81 />
      <Container82 />
    </div>
  );
}

function Link27() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Link"
    >
      <Container78 />
      <Container83 />
    </div>
  );
}

function LinkMargin13() {
  return (
    <div
      className="absolute bottom-0 box-border content-stretch flex flex-col items-start justify-center left-[160.65px] pb-2.5 pt-0 px-0 right-[160.65px] top-[1402.09px]"
      data-name="Link:margin"
    >
      <Link27 />
    </div>
  );
}

function Thumbnail14() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_112.31%] bg-top-left inset-0"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail14}')` }}
    />
  );
}

function Container84() {
  return (
    <div
      className="h-[193.24px] order-2 overflow-clip relative rounded-xl shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Thumbnail14 />
    </div>
  );
}

function Container85() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-2"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15.375px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">PT</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[33.6px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[11.984px] text-left top-[17.84px] translate-y-[-50%] w-[139px]">
        <p className="block mb-0">앳된 외모의 중년 여성, 아멜</p>
        <p className="block">리아의 개인 트레이너가 된</p>
      </div>
    </div>
  );
}

function Overlay28() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#여자</p>
      </div>
    </div>
  );
}

function Overlay29() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#연상</p>
      </div>
    </div>
  );
}

function Overlay30() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#유부녀</p>
      </div>
    </div>
  );
}

function Overlay31() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#직장</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.99px]"
      data-name="Container"
    >
      <Overlay28 />
      <Overlay29 />
      <Overlay30 />
      <Overlay31 />
    </div>
  );
}

function Link28() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12.188px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">@holiday</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.52px]"
      data-name="Container"
    >
      <Link28 />
    </div>
  );
}

function Container89() {
  return (
    <div
      className="h-[113.69px] order-1 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Container85 />
      <Container86 />
      <Container87 />
      <Container88 />
    </div>
  );
}

function Link29() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Link"
    >
      <Container84 />
      <Container89 />
    </div>
  );
}

function LinkMargin14() {
  return (
    <div
      className="absolute bottom-0 box-border content-stretch flex flex-col items-start justify-center left-[321.3px] pb-2.5 pt-0 px-0 right-0 top-[1402.09px]"
      data-name="Link:margin"
    >
      <Link29 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <LinkMargin />
      <LinkMargin1 />
      <LinkMargin2 />
      <LinkMargin3 />
      <LinkMargin4 />
      <LinkMargin5 />
      <LinkMargin6 />
      <LinkMargin7 />
      <LinkMargin8 />
      <LinkMargin9 />
      <LinkMargin10 />
      <LinkMargin11 />
      <LinkMargin12 />
      <LinkMargin13 />
      <LinkMargin14 />
    </div>
  );
}