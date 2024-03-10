import expData from "@/data/expData";
import techData from "@/data/techData";
import projectData from "@/data/projectData";
import Projects from "./Projects";
import PageWrapper from "@/components/PageWrapper";

export default function page() {
  return (
    <PageWrapper className="w-full h-full grid md:grid-cols-2 max-md:pb-40 gap-3 px-3">
      {/* Left side */}
      <div className="flex flex-col gap-3">
        <Tech />
        <Experience />
      </div>
      {/* Right side */}
      <div className=" pb-32md:pb-0">
        <Projects projectData={projectData} />
      </div>
    </PageWrapper>
  );
}

function Tech() {
  return (
    <div className="flex flex-col xs:flex-row gap-7">
      <div className="xs:w-1/2 w-full">
        <h1 className="p-1 px-4">Technologies</h1>
        <div className="min-h-fit p-3 bg-slate-700 rounded-lg">
          <ul className="flex flex-wrap gap-x-5 gap-y-3 justify-center items-center">
            {techData.map((data) => (
              <li key={data} className="w-max">
                {data}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex w-full xs:w-1/2">
        <div className="w-1/2 px-2 pt-1 grid place-items-center">
          <div className="text-3xl sm:text-4xl">{projectData.length}+</div>
          <span className="sm:text-lg text-center">
            Handled
            <br />
            Projects
          </span>
        </div>
        <div className="w-1/2 pl-1 pt-1 grid place-items-center">
          <div className="text-3xl sm:text-4xl">
            {new Date().getFullYear() - 2021}+
          </div>
          <span className="sm:text-lg text-center">
            Years
            <br />
            Experience
          </span>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="h-max">
      <h1 className="py-1 px-4">Experiences</h1>
      <div className=" h-[17.1rem] w-full p-3 bg-slate-700 rounded-lg">
        <ul className="flex flex-col gap-y-5 overflow-y-scroll h-full py-2 px-5">
          {expData.reverse().map((data, k) => (
            <>
              <li key={k} className="flex justify-between">
                <div>
                  <div>{data.job}</div>
                  <div className="text-xs">{data.tech}</div>
                </div>
                {/* <div className="h-0.5 w-1/5 bg-slate-400 flex self-center"></div> */}
                <div className="text-right">
                  <div>{data.company}</div>
                  <div className="text-xs">{data.time}</div>
                </div>
              </li>
              {data.summary && <div className="text-sm">{data.summary}</div>}
              <div className="px-8 opacity-50">{k != expData.length - 1 && <hr />}</div>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
