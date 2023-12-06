import Image from "next/image";
import React from "react";

// Use image component from Next to use NextJS optimizatio (Lazy loading, ...)
const Avatar = () => {
  return (
    <section className="w-full mx-auto">
      <Image
       className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
       src="/images/profile.jpg" 
       width={200} 
       height={200} 
       alt="Kiet Lee" 
       priority={true} />
    </section>
  );
};

export default Avatar;
