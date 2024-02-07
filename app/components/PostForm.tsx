"use client";

import { useForm } from "react-hook-form";

export default function PostForm() {
  const { handleSubmit, register, reset } = useForm<{ title: string }>();

  return (
    <form
      onSubmit={handleSubmit(async (value) => {
        const res = await fetch("/api/todo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(value),
        });
        console.log(res);
        reset();
      })}
    >
      <div>
        <input
          type="text"
          placeholder="Enter your todo"
          {...register("title")}
        />
        <button
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}