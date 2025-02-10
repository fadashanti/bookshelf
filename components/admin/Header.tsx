import React from "react";
import { Session } from "next-auth";

const Header = ({ session }: { session: Session }) => {
  return (
    <header className="admin-header">
      <div>
        <h2 className="text-2xl text-dark-400 font-semibold">{session?.user?.name}</h2>
        <p className="text-base text-slate-500">Monitor your users and books here</p>
      </div>

      <p>Search</p>
    </header>
  );
}

export default Header;