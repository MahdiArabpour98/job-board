import prisma from "@/lib/prisma";
import JobListItem from "../components/job-list-item";
import { Job } from "@prisma/client";

const Home = async () => {
  const jobs = await prisma.job.findMany({
    where: {
      approved: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className=" m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Developer jobs
        </h1>
        <p className="text-muted-foreground">Find your dream job</p>
      </div>
      <section>
        <div className="space-y-4">
          {jobs.map((job: Job) => (
            <JobListItem job={job} key={job.id} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
