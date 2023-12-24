"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NewPage({ params }) {
  console.log(params);
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    } else {
      const title = e.target.title.value;
      const description = e.target.description.value;
      console.log(title, description);
      const res = await fetch(`/api/tasks`, {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
    }
    router.refresh();
    router.push("/");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title" className="font-bold text-sm">
          Task Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Title Task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border bg-gray-400 p-2 mb-4 w-full text-black"
        />
        <label htmlFor="description" className="font-bold text-sm">
          Task Description
        </label>
        <textarea
          id="description"
          placeholder="Description Task"
          rows="3"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="border bg-gray-400 p-2 mb-4 w-full text-black"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default NewPage;
