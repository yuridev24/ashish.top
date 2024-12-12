import { ProgressBarLink as Link } from "@/components/ProgressBar";

const currentYear = new Date().getFullYear();
const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Highlights",
    path: "/highlights",
  },
  {
    title: "Guestbook",
    path: "/guestbook",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-black border-violet-400">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {links.map((link, index) => (
            <div className="px-3 py-2" key={index}>
              <Link
                href={link.path}
                className="text-base leading-6 text-gray-200 hover:text-white duration-200"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          {`© ${currentYear} Ashish Agarwal. All rights reserved.`}
          <br />
          Thank you for having a interest to come down this far!
        </p>
      </div>
    </footer>
  );
};
