import { FaLink } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex mt-14 justify-center items-center w-full">
      <FaLink className="mr-2" />
      <a
        href="https://linktr.ee/berdimyradov"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        Visit My Linktree
      </a>
    </div>
  );
}
