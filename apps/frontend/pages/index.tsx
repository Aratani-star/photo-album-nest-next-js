import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../context/AuthContext'
import { getImages, Image } from '../lib/api'
import ImageUpload from '../components/ImageUpload'
import ImageItem from '../components/ImageItem'
import ImageModal from '../components/ImageModal'

export default function Gallery() {
  const { user } = useAuth()
  const router = useRouter()
  const [images, setImages] = useState<Image[]>([])
  const [selectedImage, setSelectedImage] = useState<Image | null>(null)

  const fetchImages = () => {
    
    if (!user) {
      // router.push('/signin')
      getImages().then(setImages).catch(console.error)
    } else {
      getImages().then(setImages).catch(console.error)
    }
  }

  useEffect(fetchImages, [user, router])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Image Gallery</h1>
      <ImageUpload onUpload={fetchImages} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {images.map((img) => (
          <div key={img.id} onClick={() => setSelectedImage(img)} className="cursor-pointer">
          <ImageItem img={img} onDelete={fetchImages} />
        </div>
        ))}
      </div>

      {/* Show Modal when an image is selected */}
      {selectedImage && <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  )
}
