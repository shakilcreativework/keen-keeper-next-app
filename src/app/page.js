
import AddFriend from "@/components/AddFriend/AddFriend";
import FriendsCount from "@/components/FriendsCount/FriendsCount";

export default function Home() {

  return (
    <div className="py-20">
      <AddFriend />
      <FriendsCount />
    </div>
  );
}
