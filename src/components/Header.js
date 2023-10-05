import Link from 'next/link'

export default function Header() {
  const transition = "transition-all ease-in-out";
  return (
    <div className="fixed top-0 w-[97%] md:w-[99%] rounded-md flex justify-between p-3 text-lg font-medium bg-slate-800/70 my-2 backdrop-blur-md">
      <Link href={'/'}>
        <div className='h-11 flex items-center group '>
          <span className={`group-hover:text-purple-600 ${transition}`}>logically</span>-
          <span className={`text-purple-600 group-hover:text-white ${transition}`}>nerd</span>
        </div> 
      </Link>
      <Link className={`border-2 rounded-md px-4 h-11 flex items-center border-purple-600 hover:bg-purple-600 ${transition} duration-200`} href="https://docs.google.com/document/d/1kUiMz7q9dr9Yn2NGNp038x9MX7X5iIasFl5-Cs-9LB4/edit?usp=sharing" target='_blank'>
        Resume
      </Link>
    </div>
  )
}