import { Tldraw } from '@tldraw/tldraw';
import 'tldraw/tldraw.css'

const DrawingPage = () => {
  return (
    <div className="draw_component" style={{ width: "100%", height: "100%" }}>
    <Tldraw />
  </div>
  );
};

export default DrawingPage;
