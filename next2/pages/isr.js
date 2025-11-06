export async function getStaticProps() {
  const time = new Date().toString();

  return {
    props: { time },
    revalidate: 10, // Regenerate every 10 seconds
  };
}

export default function ISR({ time }) {
  return (
    <div>
      <h1>ISR Example</h1>
      <p>Page generated at: {time}</p>
      <p>Next regeneration in 10 seconds</p>
    </div>
  );
}
