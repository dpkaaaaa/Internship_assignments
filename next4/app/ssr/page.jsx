export const dynamic = "force-dynamic";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function SSRPage() {
  const posts = await getPosts();
  const time = new Date().toString();

  return (
    <div>
      <h1>SSR Example</h1>
      <p>Rendered at: {time}</p>

      {posts.slice(0, 5).map((post) => (
        <div key={post.id} style={{ margin: "12px 0" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
