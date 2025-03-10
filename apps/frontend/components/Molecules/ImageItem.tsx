import { deleteImage, Image } from '../../lib/api'

export default function ImageItem({
  img,
  onDelete,
}: {
  img: Image
  onDelete: () => void
}) {
  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this image?')) {
      await deleteImage(img.id)
      onDelete()
    }
  }

  return (
    <div className="border p-2 rounded shadow">
      <img
        src={process.env.SERVER_URL + img.url}
        alt={img.filename}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="lg:text-lg sm:text-sm xs:text-xs xl:text-xl font-semibold">
        {img.filename}
      </h2>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-2 py-1 mt-2 rounded"
      >
        Delete
      </button>
    </div>
  )
}
