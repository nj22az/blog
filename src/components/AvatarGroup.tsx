import React from "react";
import { Link } from "react-router-dom";
import { MonoAvatar } from "./MonoAvatar";
import NilsProfile from '@/assets/images/nils-profile.jpeg';
import ThuanProfile from '@/assets/images/thuan-profile.jpeg';

const AvatarGroup = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="z-0 flex items-center -space-x-4">
        <Link
          to="/about#nils"
          className="block transform transition duration-200 hover:scale-105 relative z-10"
        >
          <MonoAvatar 
            src={NilsProfile} 
            alt="Nils Johansson" 
            owner="nils" 
            size="md"
          />
        </Link>
        <Link
          to="/about#thuan"
          className="block transform transition duration-200 hover:scale-105 relative z-20"
        >
          <MonoAvatar 
            src={ThuanProfile} 
            alt="Thuan" 
            owner="thuan" 
            size="lg"
          />
        </Link>
      </div>
    </div>
  );
};

export default AvatarGroup;