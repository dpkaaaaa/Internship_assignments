export const revalidate = 10; // regenerate every 10 seconds

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function ISRPage() {
  const posts = await getPosts();
  const time = new Date().toString();

  return (
    <div>
      <h1>ISR Example</h1>
      <p>Generated at: {time}</p>
      <p>Will regenerate after 10 seconds.</p>

      {posts.slice(0, 5).map((post) => (
        <div key={post.id} style={{ margin: "12px 0" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
