"use client"
import AdminLayout from '@/components/AdminCmt/AdminLayout';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Page = () => {

  // const router = useRouter()
  // useEffect(() => {
     
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     router.push("/"); // Redirect to user dashboard if token is found
  //     return;
  //   }
  // }, []);
  return (
  
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <p>Welcome to the admin dashboard!</p>
    </AdminLayout>
  );
};

export default Page;
