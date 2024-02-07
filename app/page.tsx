import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <div>Post APP</div>

      <PostForm />

      <div>
        <PostList />
      </div>
    </main>
  );
}
