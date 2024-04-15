import React from "react";

// components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function LoginUser() {
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="text-white">
        <p>
          Hi <span className="font-bold">Jun</span>, <span>Good morning!</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default LoginUser;
