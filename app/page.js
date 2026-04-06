import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/products");
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
