import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href={"/"}
      className="text-5xl font-bold text-black transition ease-out hover:text-black-700"
    >
      SaeeNotes
      <span className="text-blue-400">.</span>
    </Link>
  );
}
