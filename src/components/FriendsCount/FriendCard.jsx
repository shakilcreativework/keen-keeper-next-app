// {
// "id": 1,
// "name": "Amit Rahman",
// "picture": "https://randomuser.me/api/portraits/men/32.jpg",
// "email": "amit.rahman@gmail.com",
// "days_since_contact": 20,
// "status": "overdue",
// "tags": ["college", "close friend"],
// "bio": "We studied computer science together at university. Often go on weekend trips.",
// "goal": 14,
// "next_due_date": "2026-04-01"
// },

import Image from "next/image";

const FriendCard = ({friend}) => {
    // console.log(friend);
    const {id, name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date} = friend;

    return (
        <div className="p-6 md:p-5 lg:p-6 bg-white rounded-b-lg flex flex-col justify-center items-center shadow-xs">
            <Image src={picture} width={80} height={80} priority className="w-20 rounded-full" alt={name} />
            <span className="text-xs text-[#64748b]">{days_since_contact}d ago</span>
            <span className={`text-xs text-white py-2 px-4 rounded-full font-medium capitalize ${status === 'almost due' ? 'bg-[#efad44]' : status === 'overdue' ? 'bg-[#ef4444]' : status === 'on-track' ? 'bg-[#244d3f]' : ''}`}>{status}</span>
        </div>
    );
};

export default FriendCard;