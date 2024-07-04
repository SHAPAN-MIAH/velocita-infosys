"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/adminPanel/create-job-post`);
  }, [])
  return <div className="admin_panel"></div>;
};

export default page;
