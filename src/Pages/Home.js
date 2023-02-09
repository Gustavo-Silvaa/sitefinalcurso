import React from "react";
import "../Css/Home.css";

function Home() {
  return (
    <main>
      <iframe
        id="video"
        // width="500"
        // height="315"
        src="https://www.youtube.com/embed/Hl3v5tQRw1Y"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      {/* </> */}
    </main>
  );
}

export default Home;
