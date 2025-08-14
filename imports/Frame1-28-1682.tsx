import imgThumbnail from "figma:asset/e82fb7f5da32696da124bbd527ca8f169c99c505.png";
import imgThumbnail1 from "figma:asset/c1ab720b03c79c74ec146ad1f2c5e0152ce0ef0f.png";
import imgThumbnail2 from "figma:asset/5da23e9a15bc1b0c6a65d62bfefadb6193eb94b7.png";
import imgThumbnail3 from "figma:asset/f30b7ec5d821b3191b0962565b2b8c406562c5da.png";
import imgThumbnail4 from "figma:asset/062fa9b2e295126f12c6c6c2ff9cf0b0812b935b.png";
import imgThumbnail5 from "figma:asset/b3a135ce9957ade85fbfc74984351f0d211ddbdf.png";
import imgThumbnail6 from "figma:asset/17bdd7fc069c81266cb00ff8340d4f66f458975b.png";
import imgThumbnail7 from "figma:asset/08181b5b45d89a240ef44bcc17d6c6673e7788fa.png";
import imgThumbnail8 from "figma:asset/23a8c37104717aebf075c6428767de2dac7bfe7e.png";
import imgThumbnail9 from "figma:asset/849b4ccd4097582fb6ee4d341e25decc308ad6b9.png";
import imgThumbnail10 from "figma:asset/8c96d38b52299018ae8b849f336bbd61485bfa3b.png";
import imgThumbnail11 from "figma:asset/841f0f64423770a82df5a6b1d87999335767e401.png";
import imgThumbnail12 from "figma:asset/85ca8947a93d4a538afa039782ffb22261751172.png";
import imgThumbnail13 from "figma:asset/d157c73997c1383272787d467606046c67a481b4.png";
import imgThumbnail14 from "figma:asset/bcabb5412e20c68aea6799d48509b62acb36eaff.png";
import imgThumbnail15 from "figma:asset/d95b287e26057e45ad342c0c21cfb5075ec812d1.png";
import imgThumbnail16 from "figma:asset/913b31b47b71335fe64412704e3c8dee4386e6db.png";
import imgThumbnail17 from "figma:asset/eb6e1cd27975eefa803da42d3bf6ded4f79b7e72.png";
import imgThumbnail18 from "figma:asset/91649902edfdffac086bcbb6af46239525914005.png";
import imgThumbnail19 from "figma:asset/8f02d430906513dc8d7140c31157d40662f451ee.png";
import imgThumbnail20 from "figma:asset/ab95c6d4d04a9c2d70671115e57fc75cce7cb721.png";

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
        <p className="block mb-0">술에 취한 영어 선생님</p>
        <p className="block">지연</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[55.18px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.85px] translate-y-[-50%] w-[144.09px]">
        <p className="block mb-0">스터디카페에서 만난 영어 선</p>
        <p className="block">생님 지연, 오늘따라 술 냄새</p>
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
        <p className="block leading-[17.29px] whitespace-pre">#과외</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[95.57px]"
      data-name="Container"
    >
      <Overlay />
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
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">@stupid_dog</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[114.1px]"
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
      className="basis-0 box-border content-stretch flex flex-col-reverse gap-[0.01px] grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
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
      className="absolute bottom-[2016.77px] box-border content-stretch flex flex-col items-start justify-center left-0 pb-2.5 pt-0 px-0 right-[321.3px] top-0"
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
        <p className="block leading-[21.6px] whitespace-pre">일본여자</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="absolute h-[18.2px] left-0 overflow-clip right-0 top-[33.59px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_sans-serif] font-extralight h-[19px] justify-center leading-[0] left-0 not-italic text-[#acacac] text-[13px] text-left top-[8.75px] translate-y-[-50%] w-[3.29px]">
        <p className="block leading-[18.2px]">.</p>
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
        <p className="block leading-[17.29px] whitespace-pre">#여자</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-0 overflow-clip p-0 right-0 top-[55.78px]"
      data-name="Container"
    >
      <Overlay2 />
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
        <p className="block leading-[20.43px] whitespace-pre">@camel_yK1q</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[74.32px]"
      data-name="Container"
    >
      <Link2 />
    </div>
  );
}

function Container11() {
  return (
    <div
      className="h-[95.49px] order-1 relative shrink-0 w-full"
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
      className="basis-0 box-border content-stretch flex flex-col-reverse gap-[0.01px] grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
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
      className="absolute bottom-[2016.77px] box-border content-stretch flex flex-col items-start justify-center left-[160.65px] pb-2.5 pt-0 px-0 right-[160.65px] top-0"
      data-name="Link:margin"
    >
      <Link3 />
    </div>
  );
}

function Thumbnail2() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_114.36%] bg-top-left inset-0"
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
        <p className="block leading-[21.6px] whitespace-pre">발레리나 수연</p>
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
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[11.984px] text-left top-[17.84px] translate-y-[-50%] w-[142.03px]">
        <p className="block mb-0">늦은 밤 연습실, 홀로 남은 발</p>
        <p className="block">레리나 수연. 그녀가 당신에</p>
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
        <p className="block leading-[17.29px] whitespace-pre">#여자</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.98px]"
      data-name="Container"
    >
      <Overlay3 />
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
      className="basis-0 box-border content-stretch flex flex-col-reverse gap-[0.01px] grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
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
      className="absolute bottom-[2016.77px] box-border content-stretch flex flex-col items-start justify-center left-[321.3px] pb-2.5 pt-0 px-0 right-0 top-0"
      data-name="Link:margin"
    >
      <Link5 />
    </div>
  );
}

function Thumbnail3() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_115.39%] bg-top-left inset-0"
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
      style={{ marginBottom: "-2.27374e-13px" }}
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
          선배, 가르쳐 줄래요?
        </p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[33.59px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.85px] translate-y-[-50%] w-[139.07px]">
        <p className="block mb-0">신입사원 이채영, 스물셋. 처</p>
        <p className="block">음부터 나를 향한 눈빛이 이</p>
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
        <p className="block leading-[17.29px] whitespace-pre">#여자</p>
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
        <p className="block leading-[17.29px] whitespace-pre">#연하</p>
      </div>
    </div>
  );
}

function Overlay6() {
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

function Overlay7() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#리드</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.98px]"
      data-name="Container"
    >
      <Overlay4 />
      <Overlay5 />
      <Overlay6 />
      <Overlay7 />
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
        <p className="block leading-[20.43px] whitespace-pre">@chicken_161g</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.51px]"
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
      style={{ marginBottom: "-2.27374e-13px" }}
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
      className="absolute bottom-[1687.83px] box-border content-stretch flex flex-col items-start justify-center left-0 pb-2.5 pt-0 px-0 right-[321.3px] top-[350.53px]"
      data-name="Link:margin"
    >
      <Link7 />
    </div>
  );
}

function Thumbnail4() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_115.39%] bg-top-left inset-0"
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
      style={{ marginBottom: "-2.27374e-13px" }}
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
        <p className="block leading-[21.6px] whitespace-pre">김현지</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div
      className="absolute h-[18.2px] left-0 overflow-clip right-0 top-[33.59px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[19px] justify-center leading-[0] left-0 not-italic text-[#acacac] text-[12.188px] text-left top-[8.75px] translate-y-[-50%] w-[56.38px]">
        <p className="block leading-[18.2px]">안녕하세요</p>
      </div>
    </div>
  );
}

function Overlay8() {
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

function Overlay9() {
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

function Overlay10() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#유혹</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[55.79px]"
      data-name="Container"
    >
      <Overlay8 />
      <Overlay9 />
      <Overlay10 />
    </div>
  );
}

function Link8() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">@falcon_8DOJ</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[74.32px]"
      data-name="Container"
    >
      <Link8 />
    </div>
  );
}

function Container29() {
  return (
    <div
      className="h-[95.49px] order-1 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
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
      className="absolute box-border content-stretch flex flex-col inset-[350.53px_160.65px_1687.83px_160.65px] items-start justify-center pb-2.5 pt-0 px-0"
      data-name="Link:margin"
    >
      <Link9 />
    </div>
  );
}

function Thumbnail5() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_115.39%] bg-top-left inset-0"
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
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Thumbnail5 />
    </div>
  );
}

function Container31() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-2"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">첫번째 하인</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[33.59px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.85px] translate-y-[-50%] w-[147.11px]">
        <p className="block mb-0">변덕스러운 왕자의 첫 개인 하</p>
        <p className="block">{`인이 된 {{user}}`}</p>
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
        <p className="block leading-[17.29px] whitespace-pre">#남자</p>
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
        <p className="block leading-[17.29px] whitespace-pre">#중세</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.98px]"
      data-name="Container"
    >
      <Overlay11 />
      <Overlay12 />
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
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.51px]"
      data-name="Container"
    >
      <Link10 />
    </div>
  );
}

function Container35() {
  return (
    <div
      className="h-[113.69px] order-1 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
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
      className="absolute bottom-[1687.83px] box-border content-stretch flex flex-col items-start justify-center left-[321.3px] pb-2.5 pt-0 px-0 right-0 top-[350.53px]"
      data-name="Link:margin"
    >
      <Link11 />
    </div>
  );
}

function Thumbnail6() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_127.95%] bg-top-left inset-0"
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
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Thumbnail6 />
    </div>
  );
}

function Container37() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-2"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">김무진</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[33.59px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.85px] translate-y-[-50%] w-[147.11px]">
        <p className="block mb-0">가면을 쓴 재벌 남편과의 계약</p>
        <p className="block">결혼</p>
      </div>
    </div>
  );
}

function Overlay13() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0.5)] bottom-0 box-border content-stretch flex flex-col items-start justify-start left-0 px-[3px] py-0 rounded-sm top-0"
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
      className="absolute bg-[rgba(0,0,0,0.5)] bottom-0 box-border content-stretch flex flex-col items-start justify-start left-[35.7px] px-[3px] py-0 rounded-sm top-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#정략결혼</p>
      </div>
    </div>
  );
}

function Overlay15() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0.5)] bottom-0 box-border content-stretch flex flex-col items-start justify-start left-[90.42px] px-[3px] py-0 rounded-sm top-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#쇼윈도부부</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div
      className="absolute h-[17.28px] left-0 overflow-clip right-0 top-[73.98px]"
      data-name="Container"
    >
      <Overlay13 />
      <Overlay14 />
      <Overlay15 />
      <div
        className="absolute bg-[rgba(0,0,0,0.5)] bottom-0 left-[154.65px] rounded-sm top-0 w-[31.7px]"
        data-name="Overlay"
      />
    </div>
  );
}

function Link12() {
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

function Container40() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.51px]"
      data-name="Container"
    >
      <Link12 />
    </div>
  );
}

function Container41() {
  return (
    <div
      className="h-[113.69px] order-1 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
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
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
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
      className="absolute bottom-[1337.31px] box-border content-stretch flex flex-col items-start justify-center left-0 pb-2.5 pt-0 px-0 right-[321.3px] top-[679.46px]"
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
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Thumbnail7 />
    </div>
  );
}

function Container43() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[7.29px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[21.6px] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap whitespace-pre">
        <p className="block mb-0">정부의 등장: 침범당한</p>
        <p className="block">안식처</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[55.19px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[11.984px] text-left top-[17.84px] translate-y-[-50%] w-[139px]">
        <p className="block mb-0">황금 우리에 갇힌 새, 질투와</p>
        <p className="block">균열에 휩싸이다.</p>
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
        <p className="block leading-[17.29px] whitespace-pre">#남자</p>
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
        <p className="block leading-[17.29px] whitespace-pre">#판타지</p>
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
        <p className="block leading-[17.29px] whitespace-pre">#중세</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[95.58px]"
      data-name="Container"
    >
      <Overlay16 />
      <Overlay17 />
      <Overlay18 />
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
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[114.11px]"
      data-name="Container"
    >
      <Link14 />
    </div>
  );
}

function Container47() {
  return (
    <div
      className="h-[135.28px] order-1 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
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
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
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
      className="absolute box-border content-stretch flex flex-col inset-[679.46px_160.65px_1337.31px_160.65px] items-start justify-center pb-2.5 pt-0 px-0"
      data-name="Link:margin"
    >
      <Link15 />
    </div>
  );
}

function Thumbnail8() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_115.39%] bg-top-left inset-0"
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
      style={{ marginBottom: "-2.27374e-13px" }}
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
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">
          잘생긴 과외선생님
        </p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[33.59px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.85px] translate-y-[-50%] w-[144.09px]">
        <p className="block mb-0">훈남 과외쌤 민재와의 설레는</p>
        <p className="block">{`여름날. 혹시 내 마음, 들킨 `}</p>
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
        <p className="block leading-[17.29px] whitespace-pre">#남자</p>
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
        <p className="block leading-[17.29px] whitespace-pre">#과외</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.98px]"
      data-name="Container"
    >
      <Overlay19 />
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
        <p className="block leading-[20.43px] whitespace-pre">@stupid_dog</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.51px]"
      data-name="Container"
    >
      <Link16 />
    </div>
  );
}

function Container53() {
  return (
    <div
      className="h-[113.69px] order-1 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
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
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
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
      className="absolute bottom-[1337.31px] box-border content-stretch flex flex-col items-start justify-center left-[321.3px] pb-2.5 pt-0 px-0 right-0 top-[679.46px]"
      data-name="Link:margin"
    >
      <Link17 />
    </div>
  );
}

function Thumbnail9() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_127.95%] bg-top-left inset-0"
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
        <p className="block leading-[21.6px] whitespace-pre">
          아가일 왕국의 공주
        </p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[33.6px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.84px] translate-y-[-50%] w-[138.67px]">
        <p className="block mb-0">민심 시찰 중 기묘한 마을에</p>
        <p className="block">{`당도한 공주 아벨라. {{user}`}</p>
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
        <p className="block leading-[17.29px] whitespace-pre">#판타지</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.99px]"
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
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.52px]"
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
      style={{ gap: "6.82121e-13px" }}
    >
      <Container54 />
      <Container59 />
    </div>
  );
}

function LinkMargin9() {
  return (
    <div
      className="absolute bottom-[1008.38px] box-border content-stretch flex flex-col items-start justify-center left-0 pb-2.5 pt-0 px-0 right-[321.3px] top-[1029.98px]"
      data-name="Link:margin"
    >
      <Link19 />
    </div>
  );
}

function Thumbnail10() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_115.39%] bg-top-left inset-0"
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
        <p className="block leading-[21.6px] whitespace-pre">교실에서</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[33.6px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.84px] translate-y-[-50%] w-[144.09px]">
        <p className="block mb-0">짝사랑하는 선미와 단둘이 교</p>
        <p className="block">실에 남게 되었다. 어색하지</p>
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
        <p className="block leading-[17.29px] whitespace-pre">#학교</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.99px]"
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
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12.188px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">@holiday</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.52px]"
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
      style={{ gap: "6.82121e-13px" }}
    >
      <Container60 />
      <Container65 />
    </div>
  );
}

function LinkMargin10() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col inset-[1029.98px_160.65px_1008.38px_160.65px] items-start justify-center pb-2.5 pt-0 px-0"
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
    >
      <Thumbnail11 />
    </div>
  );
}

function Container67() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-2"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">
          세 검은 탑과 작은 별
        </p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div
      className="absolute h-[18.2px] left-0 overflow-clip right-0 top-[33.6px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[19px] justify-center leading-[0] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[8.75px] translate-y-[-50%] w-[110.39px]">
        <p className="block leading-[18.2px]">내 작은 세상의 수호자</p>
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
        <p className="block leading-[17.29px] whitespace-pre">#남자</p>
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
        <p className="block leading-[17.29px] whitespace-pre">#로맨스</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[55.79px]"
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
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[74.32px]"
      data-name="Container"
    >
      <Link22 />
    </div>
  );
}

function Container71() {
  return (
    <div
      className="h-[95.49px] order-1 relative shrink-0 w-full"
      data-name="Container"
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
      style={{ gap: "6.82121e-13px" }}
    >
      <Container66 />
      <Container71 />
    </div>
  );
}

function LinkMargin11() {
  return (
    <div
      className="absolute bottom-[1008.38px] box-border content-stretch flex flex-col items-start justify-center left-[321.3px] pb-2.5 pt-0 px-0 right-0 top-[1029.98px]"
      data-name="Link:margin"
    >
      <Link23 />
    </div>
  );
}

function Thumbnail12() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_115.39%] bg-top-left inset-0"
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
        <p className="block leading-[21.6px] whitespace-pre">새벽 얼차려</p>
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
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[11.984px] text-left top-[17.84px] translate-y-[-50%] w-[134.51px]">
        <p className="block mb-0">야간 행군에서 낙오한</p>
        <p className="block">{`{{user}} 일병, 여군 장교 수`}</p>
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
        <p className="block leading-[17.29px] whitespace-pre">#여자</p>
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
        <p className="block leading-[17.29px] whitespace-pre">#비일상</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.99px]"
      data-name="Container"
    >
      <Overlay26 />
      <Overlay27 />
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
        <p className="block leading-[20.43px] whitespace-pre">@stupid_dog</p>
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
      className="absolute bottom-[657.86px] box-border content-stretch flex flex-col items-start justify-center left-0 pb-2.5 pt-0 px-0 right-[321.3px] top-[1358.91px]"
      data-name="Link:margin"
    >
      <Link25 />
    </div>
  );
}

function Thumbnail13() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_127.95%] bg-top-left inset-0"
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
        <p className="block leading-[21.6px] whitespace-pre">소심한 대리님</p>
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
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.84px] translate-y-[-50%] w-[139.6px]">
        <p className="block mb-0">{`첫 출근한 신입사원 {{user}}`}</p>
        <p className="block">{`와 그의 소심하지만 따뜻한 `}</p>
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
        <p className="block leading-[17.29px] whitespace-pre">#직장</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.99px]"
      data-name="Container"
    >
      <Overlay28 />
      <Overlay29 />
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
      className="absolute box-border content-stretch flex flex-col inset-[1358.91px_160.65px_657.86px_160.65px] items-start justify-center pb-2.5 pt-0 px-0"
      data-name="Link:margin"
    >
      <Link27 />
    </div>
  );
}

function Thumbnail14() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_115.39%] bg-top-left inset-0"
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
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[7.3px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[21.6px] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap whitespace-pre">
        <p className="block mb-0">기억의 책장, 은둔자 꼬</p>
        <p className="block">시기</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[55.19px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.84px] translate-y-[-50%] w-[144.09px]">
        <p className="block mb-0">오래된 서점의 신비로운 은둔</p>
        <p className="block">자, 그녀의 닫힌 마음을 열어</p>
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
        <p className="block leading-[17.29px] whitespace-pre">#여자</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-0 overflow-clip p-0 right-0 top-[95.58px]"
      data-name="Container"
    >
      <Overlay30 />
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
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[114.11px]"
      data-name="Container"
    >
      <Link28 />
    </div>
  );
}

function Container89() {
  return (
    <div
      className="h-[135.28px] order-1 relative shrink-0 w-full"
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
      className="absolute bottom-[657.86px] box-border content-stretch flex flex-col items-start justify-center left-[321.3px] pb-2.5 pt-0 px-0 right-0 top-[1358.91px]"
      data-name="Link:margin"
    >
      <Link29 />
    </div>
  );
}

function Thumbnail15() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_115.39%] bg-top-left inset-0"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail15}')` }}
    />
  );
}

function Container90() {
  return (
    <div
      className="h-[193.24px] order-2 overflow-clip relative rounded-xl shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Thumbnail15 />
    </div>
  );
}

function Container91() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-2"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">소개팅</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[33.6px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.84px] translate-y-[-50%] w-[135.99px]">
        <p className="block mb-0">까칠하지만 지적인 그녀, 유</p>
        <p className="block">림. 소개팅에서 그녀의 마음</p>
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
        <p className="block leading-[17.29px] whitespace-pre">#여자</p>
      </div>
    </div>
  );
}

function Overlay32() {
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

function Overlay33() {
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

function Container93() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.99px]"
      data-name="Container"
    >
      <Overlay31 />
      <Overlay32 />
      <Overlay33 />
    </div>
  );
}

function Link30() {
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

function Container94() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.52px]"
      data-name="Container"
    >
      <Link30 />
    </div>
  );
}

function Container95() {
  return (
    <div
      className="h-[113.69px] order-1 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Container91 />
      <Container92 />
      <Container93 />
      <Container94 />
    </div>
  );
}

function Link31() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Link"
    >
      <Container90 />
      <Container95 />
    </div>
  );
}

function LinkMargin15() {
  return (
    <div
      className="absolute bottom-[328.93px] box-border content-stretch flex flex-col items-start justify-center left-0 pb-2.5 pt-0 px-0 right-[321.3px] top-[1709.43px]"
      data-name="Link:margin"
    >
      <Link31 />
    </div>
  );
}

function Thumbnail16() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_115.39%] bg-top-left inset-0"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail16}')` }}
    />
  );
}

function Container96() {
  return (
    <div
      className="h-[193.24px] order-2 overflow-clip relative rounded-xl shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Thumbnail16 />
    </div>
  );
}

function Container97() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-2"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">은밀한 미용실</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[33.6px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.84px] translate-y-[-50%] w-[144.09px]">
        <p className="block mb-0">낡은 동네에 등장한 비밀스러</p>
        <p className="block">운 미용실, 그곳의 아름다운</p>
      </div>
    </div>
  );
}

function Overlay34() {
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

function Container99() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.99px]"
      data-name="Container"
    >
      <Overlay34 />
    </div>
  );
}

function Link32() {
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

function Container100() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.52px]"
      data-name="Container"
    >
      <Link32 />
    </div>
  );
}

function Container101() {
  return (
    <div
      className="h-[113.69px] order-1 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Container97 />
      <Container98 />
      <Container99 />
      <Container100 />
    </div>
  );
}

function Link33() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Link"
    >
      <Container96 />
      <Container101 />
    </div>
  );
}

function LinkMargin16() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col inset-[1709.43px_160.65px_328.93px_160.65px] items-start justify-center pb-2.5 pt-0 px-0"
      data-name="Link:margin"
    >
      <Link33 />
    </div>
  );
}

function Thumbnail17() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_115.39%] bg-top-left inset-0"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail17}')` }}
    />
  );
}

function Container102() {
  return (
    <div
      className="h-[193.24px] order-2 overflow-clip relative rounded-xl shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Thumbnail17 />
    </div>
  );
}

function Container103() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-2"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15.125px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">집착</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[33.6px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.84px] translate-y-[-50%] w-[141.06px]">
        <p className="block mb-0">납치된 천재 바이올리니스트</p>
        <p className="block">와 그를 감시하는 조직원. 위</p>
      </div>
    </div>
  );
}

function Overlay35() {
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

function Overlay36() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.484px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#BL</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.99px]"
      data-name="Container"
    >
      <Overlay35 />
      <Overlay36 />
    </div>
  );
}

function Link34() {
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

function Container106() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.52px]"
      data-name="Container"
    >
      <Link34 />
    </div>
  );
}

function Container107() {
  return (
    <div
      className="h-[113.69px] order-1 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Container103 />
      <Container104 />
      <Container105 />
      <Container106 />
    </div>
  );
}

function Link35() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Link"
    >
      <Container102 />
      <Container107 />
    </div>
  );
}

function LinkMargin17() {
  return (
    <div
      className="absolute bottom-[328.93px] box-border content-stretch flex flex-col items-start justify-center left-[321.3px] pb-2.5 pt-0 px-0 right-0 top-[1709.43px]"
      data-name="Link:margin"
    >
      <Link35 />
    </div>
  );
}

function Thumbnail18() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_127.95%] bg-top-left inset-0"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail18}')` }}
    />
  );
}

function Container108() {
  return (
    <div
      className="h-[193.24px] order-2 overflow-clip relative rounded-xl shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Thumbnail18 />
    </div>
  );
}

function Container109() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-2"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">강태하 팀장님</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[33.6px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[11.984px] text-left top-[17.84px] translate-y-[-50%] w-[138.96px]">
        <p className="block mb-0">낮에는 완벽한 팀장, 밤에는</p>
        <p className="block">선을 넘는 남자. 강태하 팀장</p>
      </div>
    </div>
  );
}

function Overlay37() {
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

function Overlay38() {
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

function Overlay39() {
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

function Overlay40() {
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

function Container111() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.99px]"
      data-name="Container"
    >
      <Overlay37 />
      <Overlay38 />
      <Overlay39 />
      <Overlay40 />
    </div>
  );
}

function Link36() {
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

function Container112() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.52px]"
      data-name="Container"
    >
      <Link36 />
    </div>
  );
}

function Container113() {
  return (
    <div
      className="h-[113.69px] order-1 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Container109 />
      <Container110 />
      <Container111 />
      <Container112 />
    </div>
  );
}

function Link37() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Link"
    >
      <Container108 />
      <Container113 />
    </div>
  );
}

function LinkMargin18() {
  return (
    <div
      className="absolute bottom-0 box-border content-stretch flex flex-col items-start justify-center left-0 pb-2.5 pt-0 px-0 right-[321.3px] top-[2038.36px]"
      data-name="Link:margin"
    >
      <Link37 />
    </div>
  );
}

function Thumbnail19() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_115.39%] bg-top-left inset-0"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail19}')` }}
    />
  );
}

function Container114() {
  return (
    <div
      className="h-[193.24px] order-2 overflow-clip relative rounded-xl shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Thumbnail19 />
    </div>
  );
}

function Container115() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-2"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">학원 조교 희연</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div
      className="absolute h-[18.2px] left-0 overflow-clip right-0 top-[33.6px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[19px] justify-center leading-[0] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[8.75px] translate-y-[-50%] w-[73.66px]">
        <p className="block leading-[18.2px]">학원 조교 희연</p>
      </div>
    </div>
  );
}

function Overlay41() {
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

function Overlay42() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#학원물</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[55.79px]"
      data-name="Container"
    >
      <Overlay41 />
      <Overlay42 />
    </div>
  );
}

function Link38() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12.289px] text-left text-nowrap">
        <p className="block leading-[20.43px] whitespace-pre">@horse_v3vp</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[74.32px]"
      data-name="Container"
    >
      <Link38 />
    </div>
  );
}

function Container119() {
  return (
    <div
      className="h-[95.49px] order-1 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Container115 />
      <Container116 />
      <Container117 />
      <Container118 />
    </div>
  );
}

function Link39() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Link"
    >
      <Container114 />
      <Container119 />
    </div>
  );
}

function LinkMargin19() {
  return (
    <div
      className="absolute bottom-0 box-border content-stretch flex flex-col items-start justify-center left-[160.65px] pb-2.5 pt-0 px-0 right-[160.65px] top-[2038.36px]"
      data-name="Link:margin"
    >
      <Link39 />
    </div>
  );
}

function Thumbnail20() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_115.39%] bg-top-left inset-0"
      data-name="thumbnail"
      style={{ backgroundImage: `url('${imgThumbnail20}')` }}
    />
  );
}

function Container120() {
  return (
    <div
      className="h-[193.24px] order-2 overflow-clip relative rounded-xl shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Thumbnail20 />
    </div>
  );
}

function Container121() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-2"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">
          새벽녘 소꿉친구의 비밀
        </p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div
      className="absolute h-[36.39px] left-0 overflow-clip right-0 top-[33.6px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Extra_Light',_'Noto_Sans_KR:Regular',_sans-serif] font-extralight h-[37px] justify-center leading-[18.2px] left-0 not-italic text-[#acacac] text-[12.086px] text-left top-[17.84px] translate-y-[-50%] w-[136.73px]">
        <p className="block mb-0">은밀한 취미 들킨 20년지기</p>
        <p className="block">츤데레 소꿉친구</p>
      </div>
    </div>
  );
}

function Overlay43() {
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

function Overlay44() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start justify-start px-[3px] py-0 relative rounded-sm self-stretch shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] max-h-[17.29px] not-italic relative shrink-0 text-[#ff9500] text-[10.313px] text-left text-nowrap">
        <p className="block leading-[17.29px] whitespace-pre">#소꿉친구</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.99px]"
      data-name="Container"
    >
      <Overlay43 />
      <Overlay44 />
    </div>
  );
}

function Link40() {
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

function Container124() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.52px]"
      data-name="Container"
    >
      <Link40 />
    </div>
  );
}

function Container125() {
  return (
    <div
      className="h-[113.69px] order-1 relative shrink-0 w-full"
      data-name="Container"
      style={{ marginBottom: "-2.27374e-13px" }}
    >
      <Container121 />
      <Container122 />
      <Container123 />
      <Container124 />
    </div>
  );
}

function Link41() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Link"
    >
      <Container120 />
      <Container125 />
    </div>
  );
}

function LinkMargin20() {
  return (
    <div
      className="absolute bottom-0 box-border content-stretch flex flex-col items-start justify-center left-[321.3px] pb-2.5 pt-0 px-0 right-0 top-[2038.36px]"
      data-name="Link:margin"
    >
      <Link41 />
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
      <LinkMargin15 />
      <LinkMargin16 />
      <LinkMargin17 />
      <LinkMargin18 />
      <LinkMargin19 />
      <LinkMargin20 />
    </div>
  );
}