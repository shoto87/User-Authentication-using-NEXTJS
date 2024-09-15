import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

// Navbar component, displays links based on user's session
const Nav = async () => {
  const session = await getServerSession(options);
  return (
    <header className="bg-gray-600 text-gray-100 ">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>mySite</div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/CreateUser">Create User</Link>
          <Link href="/ClientMember">Client Member</Link>
          <Link href="/Member">Member</Link>
          <Link href="/Public">Public </Link>
          {session ? (
            <Link href="/api/auth/signout?callBackUrl=/">logout</Link>
          ) : (
            <Link href="/api/auth/signin">login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
