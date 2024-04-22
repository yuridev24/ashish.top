import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
  return (
    <Link
      href={href}
      className="hidden py-2 pl-3 pr-4 lg:block text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      onClick={onClick}
    >
      {title}
    </Link>
  );
};

export default NavLink;
