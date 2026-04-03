import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <div>Hello World
    <p>
      <Link href="/about">About Page</Link>
    </p>
  </div>;
}
