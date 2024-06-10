"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Pagination = ({ page, hasPrev, hasNext }) => {

  const router = useRouter()
  return (
    <div className='flex justify-between mt-2'>
      <button
        className='bg-red-800 text-white object-cover p-4 mr-3 text-xs rounded-[1rem] w-24 disabled:cursor-not-allowed disabled:bg-[rgba(220,20,60,0.473)'
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Prev
      </button>
      <button
        className='bg-red-800 text-white object-cover p-4 text-xs rounded-[1rem] w-24 disabled:cursor-not-allowed disabled:bg-[rgba(220,20,60,0.473)'
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination