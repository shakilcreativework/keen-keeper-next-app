import friends from "@/data/friends.json";
import Image from "next/image";
import { FaEnvelopeOpenText, FaRegBell } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { ImBin } from "react-icons/im";
import { IoVideocam } from "react-icons/io5";
import { MdAddCall } from "react-icons/md";

const FriendInfo = async ({ params }) => {
    const { friendId } = await params; // ✅ FIX
    console.log(friendId);

    const friend = friends.find(f => f.id === Number(friendId));

    const { id, name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = friend;

    if (!friend) {
        <span className="loading loading-dots loading-xl"></span>
    }

    return (
        <div className="py-20 flex flex-col md:flex-row gap-4 justify-center">
            <div className="space-y-4">
                <div className="p-6 md:p-5 lg:p-6 bg-white rounded-lg flex flex-col justify-center items-center shadow-xs space-y-3">
                    <Image src={picture} width={80} height={80} priority className="w-20 rounded-full object-cover" alt={name} />
                    <h3 className="text-[#1f2937] text-lg md:text-xl font-semibold">{name}</h3>
                    {/* <span className="text-xs text-[#64748b]">{days_since_contact}d ago</span> */}
                    <span className={`text-xs text-white py-2 px-4 rounded-full font-medium capitalize ${status === 'almost due' ? 'bg-[#efad44]' : status === 'overdue' ? 'bg-[#ef4444]' : status === 'on-track' ? 'bg-[#244d3f]' : ''}`}>{status}</span>
                    <div className="flex gap-3">
                        {
                            tags.map((tag, idx) => <span key={idx} className="bg-[#cbfadb] text-xs  py-2 px-4 rounded-full font-medium uppercase text-white">{tag}</span>)
                        }
                    </div>
                    <p className="text-[#64748b] italic text-sm">{`"${bio}"`}</p>
                    <p className="text-[#64748b] text-sm">Email: {email}</p>
                </div>
                <div className="space-y-3">
                    <div>
                        <p className="px-4 py-2 gap-2 bg-white rounded-lg flex justify-center items-center text-[#1f2937]"><FaRegBell /> <span>Snooze 2 weeks</span></p>
                    </div>
                    <div>
                        <p className="px-4 py-2 gap-2 bg-white rounded-lg flex justify-center items-center text-[#1f2937]"><FaBoxArchive /> <span>Archive</span></p>
                    </div>
                    <div>
                        <p className="px-4 py-2 gap-2 bg-white rounded-lg flex justify-center items-center text-[#ef4444]"><ImBin /> <span>Delete</span></p>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg">
                        <h3 className=" text-lg lg:text-2xl font-semibold text-[#244d3f]">{days_since_contact}</h3>
                        <p className="text-[#64748b] text-sm ">Days Since Contact</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                        <h3 className=" text-lg lg:text-2xl font-semibold text-[#244d3f]">{goal}</h3>
                        <p className="text-[#64748b] text-sm ">Goal (Days)</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                        <h3 className=" text-lg lg:text-2xl font-semibold text-[#244d3f]">{next_due_date}</h3>
                        <p className="text-[#64748b] text-sm ">Next Due</p>
                    </div>
                </div>
                <div className="flex justify-between p-4 bg-white rounded-lg">
                    <div>
                        <h3 className=" text-base lg:text-lg font-medium text-[#244d3f]">Relationship Goal</h3>
                        <p className="text-[#64748b] text-sm ">Connect every <span className="text-xl font-semibold text-black">{goal} days</span></p>
                    </div>
                    <div><span className="text-base text-[#1f2937] rounded-lg bg-[#f8fafc] py-2 px-5 font-medium">Edit</span></div>
                </div>
                <div className="p-4 space-y-4 bg-white rounded-lg">
                    <h3 className="text-[#64748b] text-sm ">Quick Check-In</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                        <div className="flex flex-col items-center text-center p-4 bg-[#f8fafc] rounded-lg w-full space-y-2">
                            <h3 className="text-xl font-semibold text-[#244d3f]"><MdAddCall /></h3>
                            <p className="text-[#64748b] text-sm ">Call</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 bg-[#f8fafc] rounded-lg w-full space-y-2">
                            <h3 className="text-xl font-semibold text-[#244d3f]"><FaEnvelopeOpenText /></h3>
                            <p className="text-[#64748b] text-sm ">Text</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 bg-[#f8fafc] rounded-lg w-full space-y-2">
                            <h3 className="text-xl font-semibold text-[#244d3f]"><IoVideocam /></h3>
                            <p className="text-[#64748b] text-sm ">Video</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendInfo;