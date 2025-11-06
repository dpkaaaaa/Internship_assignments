export async function getStaticProps() {
  // This runs at build time only
  const data = { message: "This is Static Site Generated (SSG) Page" };

  return {
    props: { data },
  };
}

export default function SSG({ data }) {
  return (
    <div>
      <h1>SSG Example</h1>
      <p>{data.message}</p>
    </div>
  );
}
