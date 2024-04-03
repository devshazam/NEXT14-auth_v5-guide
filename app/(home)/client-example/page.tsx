"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";


const UpdateForm = () => {
  const { data: session, update } = useSession();
  const [name, setName] = useState(session?.user.name ?? "");



export default function ClientExample() {
  const { data: session, status } = useSession();
  return (
    <div className="space-y-2">
  {session ? 
    (<>
        <p>{name}</p>

          <form
          action={async () => {
            "use server";
            await signOut();
          }}
          className="w-full"
        >
          <input type="submit" value="LogOut"/ >

        </form>
      </>
    ) : (
        <Link href="api/auth/signin"> Sign In </Link>
    )
  }
}
      
    </div>
  );
}
