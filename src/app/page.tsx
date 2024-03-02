'use client'

import Login from "./(login)/page";
import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      {session 
      ? <div className="text-4xl text-center "> 
          <button onClick={() => {signOut()}}
            className="my-2 border-solid border-2 border-black rounded-lg bg-white">
            로그아웃
          </button>
          <p> 어서오고 </p> 
        </div> 
      :  <Login />}
    </div>
  );
}
