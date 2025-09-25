import React, { useState, useEffect } from "react";
import "./Post.css";

export default function Post() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((json) => {
        setData(json.slice(0, 10)); // take first 10 items to keep table small
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to fetch");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="msg">Loading...</p>;
  if (error) return <p className="msg error">Error: {error}</p>;

  return (
    <div className="table-wrap">
      <table className="posts-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


