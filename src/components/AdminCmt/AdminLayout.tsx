"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AdminLayout = ({ children }: any) => {
  const router = useRouter()
  const logout = async () => {
    try {
        const response = await fetch('/api/users/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        localStorage.setItem( 'token' ,"");
        router.push('/')
    
    } catch (error) {
        console.error('Fetch error:', error);
    }
};
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-indigo-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl">Admin Panel</h1>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-800 text-white p-4">
          <nav>
            <ul>
              <li>
                <Link href="/admin/dashbord">
                  <p className="block py-2 px-4 hover:bg-gray-700">Dashboard</p>
                </Link>
              </li>
              <li>
                <Link href="/admin/blogs">
                  <p className="block py-2 px-4 hover:bg-gray-700">Create Blogs</p>
                </Link>
              </li>
              <li>
                {/* <Link href="/admin/blogs"> */}
  
                  <p className="block py-2 px-4 hover:bg-gray-700" onClick={logout}>Logout</p>
                {/* </Link> */}
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
