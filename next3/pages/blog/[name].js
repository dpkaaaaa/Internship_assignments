import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div>
      <h1>Blog Post: {name}</h1>
      <p>This is a dynamic route.</p>
    </div>
  );
}
