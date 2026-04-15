
import Image from "next/image";
import Link from "next/link";

const FriendCard = ({ friend }) => {
    // console.log(friend);
    const { id, name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = friend;

    return (
        <Link href={`/friend/${id}`}>
            <div className="p-6 md:p-5 lg:p-6 bg-white rounded-lg flex flex-col justify-center items-center shadow-xs space-y-3">
                <Image src={picture} width={80} height={80} priority className="w-20 rounded-full object-cover" alt={name} />
                <h3 className="text-[#1f2937] text-lg md:text-xl font-semibold">{name}</h3>
                <span className="text-xs text-[#64748b]">{days_since_contact}d ago</span>
                <div className="flex gap-3">
                    {
                        tags.map((tag, idx) => <span key={idx} className="bg-[#cbfadb] text-xs  py-2 px-4 rounded-full font-medium uppercase">{tag}</span>)
                    }
                </div>
                <span className={`text-xs text-white py-2 px-4 rounded-full font-medium capitalize ${status === 'almost due' ? 'bg-[#efad44]' : status === 'overdue' ? 'bg-[#ef4444]' : status === 'on-track' ? 'bg-[#244d3f]' : ''}`}>{status}</span>
            </div>
        </Link>
    );
};

export default FriendCard;