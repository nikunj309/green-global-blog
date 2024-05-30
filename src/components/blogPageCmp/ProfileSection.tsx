// ProfileSection.js
import React from 'react';
import Image from 'next/image';

const ProfileSection = ({ profileImg }: any) => {
    return (
        <div className="flex flex-col items-center px-16 py-9 mt-16 w-full bg-zinc-600">
            <Image src={profileImg} alt="Profile" className="rounded-50" />
            <div className="mt-5 text-sm font-bold text-center text-white uppercase">
                Status
            </div>
            <div className="mt-3 text-xs text-center text-white uppercase">
                December 24, 2023
            </div>
            <div className="mt-4 text-lg font-bold text-center text-white uppercase">
                Picanha ball tip spare ribs kielbasa chuck t-bone ground round
            </div>
        </div>
    );
};

export default ProfileSection;
