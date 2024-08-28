import Link from "next/link";

export default function Navbar() {
    return (
        <header className="pt-5">
            <nav className="flex items-center justify-center gap-10">
                <Link
                    className="text-black hover:text-gray-700"
                    href="/delete-user"
                >
                    Delete User
                    <hr className="w-full mt-1 h-1 bg-black " />
                </Link>
                
                <Link
                    className="text-black hover:text-gray-700"
                    href="/comment"
                >
                    Feedback
                    <hr className="w-full mt-1 h-1 bg-black " />
                </Link>
            </nav>
        </header>
    );
    // dark:bg-white
}