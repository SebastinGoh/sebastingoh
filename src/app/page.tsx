import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <nav className="bg-myblue">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6 font-figtree">
        <a href="https://www.sebastingoh.com" className="">
            <span className="self-center text-2xl whitespace-nowrap pl-3 text-turquoise">SEBASTIN <span className="text-offwhite">GOH</span></span>
        </a>
        {/* 
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center w-15 h-15 justify-center text-sm text-turquoise rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-turquoise dark:hover:text-turquoise dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open menu</span>
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 20 20" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 20 20" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
    <main className="flex min-h-screen flex-col items-center justify-between font-figtree">
      <div className="flex flex-wrap items-stretch w-screen ">
        <div className="w-screen lg:basis-3/5 py-14 sm:py-24 lg:py-28 bg-myblue px-14 lg:px-36">
          <h1 className="text-5xl font-bold sm:text-6xl text-turquoise">Software Engineer<span className="text-offwhite">.</span></h1>
          <p className="mt-6 text-lg lg:text-2xl text-offwhite">Creating responsive and engaging technology products that empowers.</p>
          <div className="mt-16 flex gap-4 justify-items-stretch">
            <p className="text-xs lg:text-base text-turquoise">Skilled at software development, product management and data analysis</p>
            <p className="text-xs lg:text-base text-turquoise">Proven experience unleashing technological potential across mediums</p>
          </div>
        </div>
        <div className="flex lg:basis-2/5 justify-center w-screen py-24 sm:py-32 lg:py-44 bg-turquoise">
          <Image
            src="/profile.jpeg"
            alt="profile photo"
            width={180}
            height={37}
            priority
          />
        </div>
      </div>
      <div className="lg:flex w-screen mx-auto py-24 sm:py-24 lg:py-24 px-14">
        <div className="lg:p-24">
          <h2 className="text-3xl font-bold sm:text-4xl text-myblue lg:text-5xl">Software Development</h2>
          <p className="text-xs mt-4 lg:text-base">
            Proficient in full-stack web development with a focus on front-end expertise. 
            Skilled in designing and implementing responsive, user-friendly interfaces using modern technologies such as HTML, CSS, JavaScript, and React. 
            Adept at collaborating with cross-functional teams to deliver high-quality software solutions that enhance user experiences and drive business goals.
          </p>
        </div>
        <div className="lg:p-24">
          <h2 className="text-3xl font-bold sm:text-4xl text-myblue mt-12 lg:text-5xl">Data Analysis</h2>
          <p className="text-xs mt-4 lg:text-base">
          Experienced in extracting actionable insights from complex datasets to drive informed decision-making. 
          Proficient in data preprocessing, analysis, and visualization using tools like Python, Pandas, and Matplotlib. 
          Strong ability to identify patterns and trends, transforming raw data into meaningful narratives that guide strategic business directions.
          </p>
        </div>
      </div>
      {/*<div className="w-screen mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 px-14 bg-myblue text-offwhite">
        <div>
          <div>Send me a message!</div>
          <div>Got a question or proposal, or just want to say hello? Go ahead.</div>
          <div>Your Name</div>
          <div>Email Address</div>
          <div>Your Message</div>
          <div>Shoot</div>
        </div>
      </div> */}
      <div className="w-screen mx-auto py-14 sm:py-14 lg:py-14 bg-purple text-turquoise px-14">
        <div className="text-offwhite">SAY HELLO</div>
        <p><Link href="mailto:gmcsebastin@gmail.com">gmcsebastin@gmail.com</Link></p>
        <p><Link href="https://t.me/sebastinn">t.me/sebastinn</Link></p>
        {/* <Link href="#">MY PROJECTS</Link> */}
        <div className="divider mt-14">_______________________________________</div>
        <p>Coded in Visual Studio Code, <br/> built with Next.js and Tailwind CSS, deployed in Vercel</p>
        <p className="mt-14">© Sebastin Goh 2023</p>
      </div>
    </main>
    </>
  )
}
