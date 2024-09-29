import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        LoL Information Site
      </div>
      <div className="flex flex-col gap-3">
        <Link className="mx-auto" href={"/champions"}>Go to Champion List</Link>
        <Link className="mx-auto" href={"/items"}>Go to Item List</Link>
        <Link className="mx-auto" href={"/rotation"}>This Week Champion Rotation</Link>
      </div>
    </>
  );
}
