import { FC } from "react";

type WelcomeMessageProps = {
  isLoggedIn: boolean;
  user?: {
    name: string;
    type: "admin" | "moderator" | "guest";
  };
};

const WelcomeMessage: FC<WelcomeMessageProps> = ({ isLoggedIn, user }) => {
  if (user?.type === "moderator") {
    return (
      <div className="text-red-500">
        <h1 className="text-lg">Ask admin for access</h1>
      </div>
    );
  } else if (user?.type === "guest") {
    return (
      <div className="text-red-500">
        <h1 className="text-lg">You are not an admin</h1>
      </div>
    );
  } 
    return (
      <div>
        <div>
          {isLoggedIn ? (
            <h1 className="text-lg">User Logged in</h1>
          ) : (
            <h1 className="text-lg">Please log in</h1>
          )}
        </div>
        <div>{user && <h1 className="text-lg">Welcome, {user.name}</h1>}</div>
      </div>
    );
  
};

export default WelcomeMessage;
