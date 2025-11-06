export const revalidate = false; // no regeneration

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function SSGPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>SSG Example</h1>
      <p>Data fetched only at build time.</p>

      {posts.slice(0, 5).map((post) => (
        <div key={post.id} style={{ margin: "12px 0" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
