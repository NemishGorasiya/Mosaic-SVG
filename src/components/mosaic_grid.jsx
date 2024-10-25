const count = 10;
import "./mosaic_grid.css";
import MosaicGridItem from "./mosaic_grid_item";

const MosaicGrid = () => {
  return (
    <div className="grid-container">
      {Array(count)
        .fill(0)
        .map((_, i) =>
          Array(count)
            .fill(0)
            .map((_, j) => <MosaicGridItem key={`${i}-${j}`} i={i} j={j} />)
        )}
    </div>
  );
};

export default MosaicGrid;
