import { prisma } from "@/libs/prisma";
import TaksCard from "@/components/TaskCard";

async function loadTasks() {
  // using nextjs api
  // const res = await fetch(`http://localhost:3000/api/tasks`);
  // const data = await res.json();
  // console.log(data);

  // using prisma
  const tasks = await prisma.task.findMany();
  console.log(tasks);
  return tasks;
}

async function HomePage() {
  const tasks = await loadTasks();
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => (
          <TaksCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
