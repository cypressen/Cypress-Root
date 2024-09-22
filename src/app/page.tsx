import Image from "next/image";
export default function Home() {
  return (
    <div className="flex  justify-between  mt-16 mb-10 mx-[33vw]">
      <Image
        src="/pic1.png"
        alt="main"
        width={2000}
        quality={100}
        height={2000}
        className="object-cover w-[30vw] min-w-[20rem]"
      />
      <div className="flex flex-col h-full items-center justify-between w-[7vw] ml-4">
        <div className="">some</div>
        <div className="">some</div>
        <div className="">some</div>
        <div className="">some</div>
        <div className="">some</div>
        <div className="">some</div>
        <div className="">some</div>
        <div className="">some</div>
        <div className="">some</div>
        <div className="">some</div>
        <div className="">some</div>
        <div className="">some</div>
        <div className="">some</div>
      </div>
    </div>
  );
}
