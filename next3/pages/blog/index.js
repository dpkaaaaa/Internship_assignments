import Link from "next/link";

export default function Blog() {
  const posts = [
    { name: "first-post", title: "  Blog Post" },
    { name: "nextjs", title: "Next.js Pages Router" },
  ];

  return (
    <div>
      <h1>Blog Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.name}>
            <Link href={`/blog/${post.name}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
