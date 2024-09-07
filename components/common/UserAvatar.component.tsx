import React from "react";
import Image from "next/image";

type TUserAvatarProps = {
  src: string;
  alt: string;
  size?: number;
};

const UserAvatar: React.FC<TUserAvatarProps> = ({ src, alt, size = 50 }) => {
  return (
    <div className={`w-${size} h-${size} rounded-full overflow-hidden hover:cursor-pointer`}>
      <Image src={src} alt={alt} width={size} height={size} style={{objectFit: "contain"}} />
    </div>
  );
};

export default UserAvatar;
