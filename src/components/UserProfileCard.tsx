
import { Link } from "react-router-dom";

interface UserProfileCardProps {
  id: string;
  name: string;
  avatar: string;
  followers: number;
  isFollowing: boolean;
  onFollow?: () => void;
  displayFollowButton?: boolean;
}

export default function UserProfileCard({
  id,
  name,
  avatar,
  followers,
  isFollowing,
  onFollow,
  displayFollowButton = true
}: UserProfileCardProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm mb-3">
      <Link to={`/user/${id}`} className="flex items-center flex-1">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-3"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-salad-primary text-white flex items-center justify-center mr-3">
            {name ? name.charAt(0).toUpperCase() : "U"}
          </div>
        )}
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-500 text-sm">{followers} Followers</p>
        </div>
      </Link>
      
      {displayFollowButton && (
        <button
          onClick={onFollow}
          className={`py-1 px-4 rounded-full text-sm ${
            isFollowing
              ? "bg-salad-secondary text-salad-primary border border-salad-primary"
              : "bg-salad-primary text-white"
          }`}
        >
          {isFollowing ? "Following" : "+ Follow"}
        </button>
      )}
    </div>
  );
}
