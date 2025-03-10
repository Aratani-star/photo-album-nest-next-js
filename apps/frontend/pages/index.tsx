import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Gallery() {
  const [user] = useState(null)

  const router = useRouter()

  const fetchImages = () => {
    if (!user) {
      router.push('/signin')
    } else {
      router.push('/album')
    }
  }

  useEffect(fetchImages, [user, router])

  return <div className="container mx-auto p-4"></div>
}
