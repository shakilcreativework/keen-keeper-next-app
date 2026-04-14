import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const AddFriend = () => {
    return (
        <div className=" flex flex-col justify-center items-center text-center">
            <div className="space-y-3 mb-5 lg:mb-6">
                <h1 className=" text-4xl lg:text-5xl text-[#1f2937] font-bold">Friends to keep close in your life</h1>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br className="hidden md:flex" />
                    relationships that matter most.</p>
            </div>
            <Link
                className={`flex justify-center items-center gap-2 px-4 py-2 rounded-md hover:text-white/30 transition-all bg-[#244d3f] text-white w-fit`}
                href="/"
            >
                <FaPlus /> Add a Friend
            </Link>
        </div>
    );
};

export default AddFriend;