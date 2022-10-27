import React from "react";
import GenreSelect from "../components/GenreSelect";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="w-full mt-4 mb-10 flex flex-col sm:flex-row justify-between items-center">        
        <GenreSelect />
      </div>
    </div>
  );
}
