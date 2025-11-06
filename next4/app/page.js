import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Next.js Rendering Strategies (App Router)</h1>
      <ul>
        <li><Link href="/ssg">SSG Page</Link></li>
        <li><Link href="/ssr">SSR Page</Link></li>
        <li><Link href="/isr">ISR Page</Link></li>
      </ul>
    </div>
  );
}
