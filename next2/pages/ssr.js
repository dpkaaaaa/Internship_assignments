export async function getServerSideProps() {
  const time = new Date().toString(); // Always fresh on each reload

  return {
    props: { time },
  };
}

export default function SSR({ time }) {
  return (
    <div>
      <h1>SSR Example</h1>
      <p>Page rendered at: {time}</p>
    </div>
  );
}
