import React from "react";
import "./Palette.css";

export type PaletteProps = {
  selected: string;
};

export type PaletteItemProps = {
  color: string;
  active: boolean;
  onClick: Function;
};

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const PaletteItem = ({ color, active, onClick }: PaletteItemProps) => {
  return (
    <div
      className={`PaletteItem ${active ? "active" : ""}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    />
  );
};

const Palette = ({ selected }: PaletteProps) => {
  return (
    <div className="Palette">
      <h2>색깔을 골라골라</h2>
      <div className="colors">
        {colors.map((color) => (
          <PaletteItem color={color} key={color} active={selected === color} />
        ))}
      </div>
    </div>
  );
};

export default Palette;
