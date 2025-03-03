"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Fetch images from backend
  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch("https://api.example.com/images");
        const data = await res.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }
    fetchImages();
  }, []);

  return (
    <div className="bg-black min-h-screen p-10 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Image Gallery</h1>
      
      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative cursor-pointer transition-opacity duration-300 hover:opacity-70"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.url}
              alt={image.title}
              width={300}
              height={200}
              className="w-full h-auto object-cover rounded-lg"
            />
            <p className="text-center text-sm mt-2">{image.title}</p>
          </div>
        ))}
      </div>

      {/* Modal for Image Details */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="bg-gray-900 text-white rounded-lg p-5">
            <DialogTitle>{selectedImage.title}</DialogTitle>
            <Image
              src={selectedImage.url}
              alt={selectedImage.title}
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
            <p className="mt-3">{selectedImage.description}</p>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}