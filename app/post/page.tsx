import Link from "next/link";
import styles from "./postPage.module.css";
import CardList from "../components/Post/CardList";
import ViewUserButton from "../components/Post/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface IFacePost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function Post() {
  const response = await fetch(base_url, {
    cache: "no-store",
  });
  const posts: IFacePost[] = await response.json();
  return (
    <>
      <h1 className="bg-[tomato]">Background Tomato</h1>
      <h1 className={styles.bgRed}>Halaman Post</h1>
      <br />
      <h1 className="text-fuchsia-500">Halaman Post</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <br />
      <Link href="/">Kembali</Link>
      <br />
      {posts.map((post) => {
        return (
          <CardList key={post.id}>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <i>{post.body}</i>
            <p>{post.userId}</p>
            <ViewUserButton userId={post.userId} />
          </CardList>
        );
      })}
    </>
  );
}
