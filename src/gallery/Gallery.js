import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const PhotoGallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full overflow-hidden" id="gallery">
      <Outlet />
    </div>
  );
};

export default PhotoGallery;
