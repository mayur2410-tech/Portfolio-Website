// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <footer className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © 2026 <Link target="_blank" href="https://www.linkedin.com/in/mayur-a-waykar/" className="text-[#16f2b3]">Mayur Arvind Waykar</Link>. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/mayur2410-tech"
              className="flex items-center gap-2 text-sm hover:text-[#16f2b3]"
              aria-label="View Mayur Arvind Waykar's GitHub Profile"
            >
              <span>GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;