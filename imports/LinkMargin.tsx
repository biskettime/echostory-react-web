import imgThumbnail from "figma:asset/5da23e9a15bc1b0c6a65d62bfefadb6193eb94b7.png";

function Thumbnail() {
  return (
    <div
      className="absolute bg-no-repeat bg-size-[100%_114.36%] bg-top-left inset-0"
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
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-2"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[21.6px] whitespace-pre">발레리나 수연</p>
      </div>
    </div>
  );
}

function Container2() {
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

function Container3() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.98px]"
      data-name="Container"
    >
      <Overlay />
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
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.51px]"
      data-name="Container"
    >
      <Link />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="h-[113.69px] order-1 relative shrink-0 w-full"
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

export default function LinkMargin() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center pb-2.5 pt-0 px-0 relative size-full"
      data-name="Link:margin"
    >
      <Link1 />
    </div>
  );
}