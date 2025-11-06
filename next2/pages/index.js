import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Next.js Rendering Strategies (Pages Router)</h1>
      
      <ul>
        <li>
          <Link href="/ssg">Static Site Generation (SSG)</Link>
        </li>
        <li>
          <Link href="/ssr">Server-Side Rendering (SSR)</Link>
        </li>
        <li>
          <Link href="/isr">Incremental Static Regeneration (ISR)</Link>
        </li>
      </ul>
    </div>
  );
}
