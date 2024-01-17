import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} alt="Flow Jobs logo" width={40} height={40} />
          <span className="text-xl font-bold tracking-tight">Flow Jobs</span>
        </Link>
        <div className="flex items-center gap-2 ">
          <div className="flex flex-col gap-2 text-xs text-muted-foreground">
            <span>username: mahdi109110@gmail.com</span>
            <span>password: flowjob1234</span>
          </div>
          <Button asChild>
            <Link href="/admin">Admin page</Link>
          </Button>
          <Button asChild>
            <Link href="/jobs/new">Post a job</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
