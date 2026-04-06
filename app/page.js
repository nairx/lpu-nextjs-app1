import Image from "next/image";
import Link from "next/link";
export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/products`);
  const products = await res.json();
  return (
    <div>
      Hello World
      <p>
        <Link href="/about">About Page</Link>
      </p>
      {products.map((product) => (
        <li>{product.name}</li>
      ))}
    </div>
  );
}
