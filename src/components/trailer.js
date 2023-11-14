import React, {useState} from "react";

const titleResults = (title) => {
    const trailers = (title) => {
        if (title !== "Dune") {
            return (
              <iframe width="560" height="315" src="https://www.youtube.com/embed/mSY_NbSmaUI?si=LlCII-jkA6zB9sHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            );
          };
    }
    

return (trailers({title}) );}

export default titleResults;