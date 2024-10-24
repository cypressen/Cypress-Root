import Image from "next/image";

export default function Home() {
  const descriptions: Description[] = [
    {
      content: "< Hi there! Cypress desu",
      exctraStyle: "text-3xl font-semibold",
    },
    {
      content: "I don't know what to write about here yet XD",
      exctraStyle: "text-2xl text-gray-500 underline mt-4",
    },
  ];
  return (
    <div className="flex  gap-4 mt-16 mb-10 mx-[33vw]">
      <Image
        src="/skeleton_burnning.gif"
        alt="main"
        width={2000}
        quality={100}
        height={1500}
        className="object-cover w-[20vw] min-w-[20rem]"
      />
      <div className="flex flex-col h-full   w-[7vw] ml-4">
        {descriptions.map((description, index) => (
          <div key={index} className={`text-sm ${description.exctraStyle}`}>
            {description.content}
          </div>
        ))}
        <div className="mt-12">
          <a
            href="https://cypress-blog-orcin.vercel.app/"
            className="text-sm hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to my blog
          </a>
        </div>
      </div>
    </div>
  );
}
