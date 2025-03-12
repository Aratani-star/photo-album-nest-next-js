import { Image } from '../../lib/api'

interface ImageModalProps {
  image: Image | null
  onClose: () => void
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  if (!image) return null

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-black p-4 rounded-lg shadow-lg border-2 border-white max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={onClose}
        >
          ✖
        </button>
        <img
          src={process.env.SERVER_URL + image.url}
          alt={image.filename}
          className="w-full h-60 object-cover rounded"
        />
        <h2 className="text-xl font-bold mt-2">{image.filename}</h2>
        {image.description && (
          <p className="text-gray-600 mt-1">{image.description}</p>
        )}
      </div>
    </div>
  )
}
