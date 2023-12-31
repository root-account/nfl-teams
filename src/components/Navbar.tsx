'use client';
import Link from "next/link";
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="mb-10 z-10 w-full px-10 items-center justify-between font-mono text-sm lg:flex">
        
        <div className="fixed items-center md:bottom-0 left-0 flex md:h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link
            className="mr-10 pointer-events-none flex place-items-center gap-2 p-2 lg:pointer-events-auto lg:p-0"
            href="/"
          >
            <Image
              src="https://mekgwele.co.za/wp-content/uploads/2020/01/60330dd0-5c39-4096-8bee-8946b884055c_200x200.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </Link>
          <Link href={'/'} className="p-4">
            <p>Teams</p>
          </Link>
          <Link href={'/test'} className="p-4">
            <p>Users</p>
          </Link>
        </div>

        <p className="fixed left-0 bottom-0 md:top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Know more about your favorite NFL Team.
        </p>
       
      </div>
  );
};
export default Navbar;