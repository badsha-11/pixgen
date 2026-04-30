import PhotoCart from "./PhotoCart";


const TopGenaretions = async () => {
  const res = await fetch("https://pixgen-ivory.vercel.app/data.json");
  const photos = await res.json();
  const topPhotos = photos.slice(0, 8);

  return (
    <div className="">
      <h1 className="text-2xl font-bold my-5">Top Genaretors</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5 ">
        {topPhotos.map((photo) => <PhotoCart key={photo.id} photo={photo} />)}
      </div>
    </div>
  );
};

export default TopGenaretions;
