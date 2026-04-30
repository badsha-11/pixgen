import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { IoMdHeart } from "react-icons/io";

const PhotoCart = ({ photo }) => {
  return (
    <Card className="rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition duration-300">
      
      {/* Image Wrapper */}
      <div className="relative w-full aspect-square overflow-hidden rounded-xl group">
        {photo.imageUrl && (
          <Image
            src={photo.imageUrl}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={photo.title}
            className="w-full rounded-xl  h-52 object-cover transition duration-500 group-hover:scale-110"
          />
        )}
        <Chip size="sm" className="absolute right-2 top-2">{photo.category}</Chip>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        
        {/* Title */}
        <h2 className="text-lg font-semibold line-clamp-1">
          {photo.title}
        </h2>

        {/* Stats */}
        <div className="flex justify-between items-center text-sm text-gray-600">
          
          <div className="flex items-center gap-1">
            <IoMdHeart className="text-red-500 text-lg group-hover:scale-125 transition" />
            <span>{photo.likes}</span>
          </div>

          <div className="flex items-center gap-1">
            <FiDownload className="text-lg group-hover:translate-y-[-2px] transition" />
            <span>{photo.downloads}</span>
          </div>
        </div>
          <Button variant="outline" className="w-full">
            View
          </Button>

      </div>
    </Card>
  );
};

export default PhotoCart;