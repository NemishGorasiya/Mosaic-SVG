import { useState } from "react";

const MosaicGridItem = ({ i, j }) => {
  const [isSelected, setIsSelected] = useState(false);

  const invertColor = () => {
    setIsSelected((prev) => !prev);
  };

  const handleMouseOver = (event) => {
    if (event.buttons === 1) {
      invertColor();
    }
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    if (event.buttons === 1) {
      invertColor();
    }
  };

  return (
    <div
      className={`grid-item ${isSelected ? "selected" : ""}`}
      onMouseOver={handleMouseOver}
      onMouseDown={handleMouseDown}
    />
  );
};

export default MosaicGridItem;
