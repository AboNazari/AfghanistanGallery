import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Gallery from "./gallery/Gallery";
import PhotoViewer from "./gallery/PhotoViewer";
import GalleryHome from "./gallery/GalleryHome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Gallery />}>
        <Route index element={<GalleryHome />} />
        <Route path=":type/:id" element={<PhotoViewer />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
