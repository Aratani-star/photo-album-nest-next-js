export interface Image {
  id: string
  url: string
  filename: string
  description?: string
}

const API_URL = process.env.API_URL || 'http://localhost:3001/images' // Replace with your API URL

export const getImages = async (): Promise<Image[]> => {
  const res = await fetch(API_URL)
  if (!res.ok) throw new Error('Failed to fetch images')
  return res.json()
}

export const getImage = async (id: string): Promise<Image> => {
  const res = await fetch(`${API_URL}/${id}`)
  if (!res.ok) throw new Error('Failed to fetch image')
  return res.json()
}

export const uploadImage = async (data: FormData): Promise<Image> => {
  const res = await fetch(API_URL + '/upload', {
    method: 'POST',
    body: data,
  })
  if (!res.ok) throw new Error('Failed to upload image')
  return res.json()
}

export const updateImage = async (
  id: string,
  data: Partial<Image>,
): Promise<Image> => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Failed to update image')
  return res.json()
}

export const deleteImage = async (id: string): Promise<void> => {
  const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Failed to delete image')
}
