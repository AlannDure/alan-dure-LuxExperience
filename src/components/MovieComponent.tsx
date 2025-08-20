import React from "react";
import type { ReactNode } from "react";

interface MovieComponent {
  left: ReactNode;
  right: ReactNode;
  className?: string;
}

const MovieComponent: React.FC<MovieComponent> = ({
  left,
  right,
  className = "",
}) => {
  return (
    <div className={`two-column-layout ${className}`}>
      <div className="two-column-left">{left}</div>
      <div className="two-column-right">{right}</div>
    </div>
  );
};

export default MovieComponent;
