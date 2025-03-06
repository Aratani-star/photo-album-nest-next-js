import { useState } from 'react'
import { uploadImage } from '../lib/api'

export default function ImageUpload({ onUpload }: { onUpload: () => void }) {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  const handleUpload = async () => {
    if (!file) return alert('Please select a file')
    setLoading(true)

    const formData = new FormData()
    formData.append('file', file)

    try {
      await uploadImage(formData)
      onUpload()
    } catch (error) {
      console.error('Upload failed:', error)
    } finally {
      setLoading(false)
      setFile(null)
    }
  }

  return (
    <div className="border p-4 rounded shadow">
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
        disabled={loading}
      >
        {loading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  )
}
