import imgThumbnail from "figma:asset/85ca8947a93d4a538afa039782ffb22261751172.png";

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
      style={{ marginBottom: "-2.27374e-13px" }}
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
        <p className="block leading-[21.6px] whitespace-pre">새벽 얼차려</p>
      </div>
    </div>
  );
}

function Container2() {
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
        <p className="block leading-[17.29px] whitespace-pre">#비일상</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-start justify-start left-0 overflow-clip p-0 right-0 top-[73.99px]"
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
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[92.52px]"
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
      style={{ marginBottom: "-2.27374e-13px" }}
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