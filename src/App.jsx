import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        setPosts(data);
      } catch (error) {
        console.log("Fetching Data Error:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="gap-4 grid grid-cols-4 p-4">
      {posts.map((post) => (
        <Card key={post.id} props={post} />
      ))}
    </section>
  );
}

export default App;
