import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Helcome to our Homepage</h1>
      <Link href="/about">About</Link>
      <Link href="/posts/1">Post 1</Link>
      <Link href="/posts/2">Post 2</Link>
    </main>
  );
}
