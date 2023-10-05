import PageWrapper from "@/components/PageWrapper";
import socialData from "@/data/socialData";
import Link from "next/link";

export default function page() {
  return (
    <PageWrapper className="flex flex-col-reverse sm:gap-16 sm:flex-row justify-around p-7">
      <div className='grid py-10 md:py-0 text-lg md:text-3xl mt-4 gap-7'>
        {socialData.map((data) => (
          <Link href={data.url} key={data.name} title={data.name} target='_blank' className='flex hover:text-purple-600 transition ease-in hover:-translate-y-1 w-max tracking-wider'>{data.icon}<span className="w-5"></span>{data.name}</Link>
        ))}
      </div>
      <div className="text-center text-lg md:text-2xl md:w-2/6 p-4 bg-slate-700 rounded-lg flex flex-col justify-center items-center gap-7 tracking-wider">
        <div className="text-purple-600 font-medium underline">
          Let&apos;s get in touch!
        </div>
          Would love to hear about your ideas and projects. Feel free to reach out to me.
      </div>
    </PageWrapper>
  )
}
