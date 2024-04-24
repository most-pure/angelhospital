import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/users')
    }, 3000)
  }, [router])

  return (
    <div className='no-page'>
      <h1>Ooooooops....</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to <Link href='/users'>Users</Link>
      </p>
    </div>
  )
}
