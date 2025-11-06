import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <div>
        <div className='flex justify-center gap-5 py-3'>  
             <Link href='/product/men'>Men's Collection</Link>
             <Link href='/product/women'>Women's Collection</Link>
        </div>
      <h2 >This is product page</h2>
    </div>
  )
}

export default page
