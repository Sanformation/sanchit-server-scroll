import Image from "next/image";
import { title, description } from "@/component/ServerMetaData"
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-extrabold">{title}</h1>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <span className="items-start">Powered by</span>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            {title}
            .
          </li>
          <li>{description}</li>
        </ol>
        <Link href={"https://github.com/sanformation/sanchit-server-scroll"} target="_blank">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            <Image
              src="/github-icon.png"
              alt="GitHub logo"
              width={20}
              height={20}
              className="inline-block mr-2"
            />
            Github
          </button>
        </Link>
      </main>
    </div>
  );
}
