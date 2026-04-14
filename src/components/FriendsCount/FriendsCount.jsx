"use client";

import AppContexts from "@/context/AppContexts";
import { useContext } from "react";
import FriendCard from "./FriendCard";


const FriendsCount = () => {
    const { friends } = useContext(AppContexts);
    // console.log(friends); 

    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-8 lg:my-10 lg:gap-6">
                <div className="flex flex-col justify-center items-center gap-2 bg-white rounded-md p-6 text-center">
                    <h3 className="text-3xl text-[#244d3f] font-semibold">{friends.length}</h3>
                    <p className="text-sm md:text-base lg:text-lg text-[#64748b] font-normal">Total Friends</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 bg-white rounded-md p-6 text-center">
                    <h3 className="text-3xl text-[#244d3f] font-semibold">3</h3>
                    <p className="text-sm md:text-base lg:text-lg text-[#64748b] font-normal">On Track</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 bg-white rounded-md p-6 text-center">
                    <h3 className="text-3xl text-[#244d3f] font-semibold">6</h3>
                    <p className="text-sm md:text-base lg:text-lg text-[#64748b] font-normal">Need Attention</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 bg-white rounded-md p-6 text-center">
                    <h3 className="text-3xl text-[#244d3f] font-semibold">12</h3>
                    <p className="text-sm md:text-base lg:text-lg text-[#64748b] font-normal">Interactions This Month</p>
                </div>
            </div>
            <hr className="text-[#e9e9e9]" />
            <h3 className=" text-xl md:text-2xl text-[#1f2937] mt-6 mb-4">Your Friends</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
                {
                    friends.map((friend) => <FriendCard key={friend.id} friend={friend} />)
                }
            </div>
        </div>
    );
};

export default FriendsCount;