import video from "../data/video.js";
import Details from "./Details.js";
function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <Details data = {video} />
    </div>
  );
}

export default App;
