import React, { useEffect, useState } from "react";
import { DOMMessage } from "./types";

function App() {
  const [trackName, setTrackName] = useState("");
  const [channelName, setChannelName] = useState("");

  //   function runInit() {
  //     // console.log("cbce init started!");

  //     /**
  //      * We can't use "chrome.runtime.sendMessage" for sending messages from React.
  //      * For sending messages from React we need to specify which tab to send it to.
  //      */
  //     chrome.tabs &&
  //       chrome.tabs.query(
  //         {
  //           //   active: true,
  //           //currentWindow: true,
  //           url: "https://castbox.fm/*",
  //         },
  //         (tabs) => {
  //           /**
  //            * Sends a single message to the content script(s) in the specified tab,
  //            * with an optional callback to run when a response is sent back.
  //            *
  //            * The runtime.onMessage event is fired in each content script running
  //            * in the specified tab for the current extension.
  //            */
  //           chrome.tabs.sendMessage(
  //             tabs[0].id || 0,
  //             { type: "GET_DOM" } as DOMMessage,
  //             (response?: any) => {}
  //           );
  //         }
  //       );
  //   }

  //   useEffect(() => {
  //     runInit();
  //   });

  //   useEffect(() => {
  //     runInit();
  //   }, []);

  function togglePlayPause() {
    // const playpause = document.getElementById("play");
    // if (audio.paused || audio.ended) {
    //   playpause.title = "Pause";
    //   audio.play();
    // } else {
    //   playpause.title = "Play";
    //   audio.pause();
    // }
  }

  return (
    <article className="screen">
      {/* <input type="checkbox" value="None" id="magicButton" name="check" /> */}
      {/* <label className="main" htmlFor="magicButton"></label> */}

      <div className="coverImage"></div>
      {/* <div className="search"></div> */}
      <div className="bodyPlayer"></div>
      {/* <div className="list">
        <table>
          <tr className="song">
            <td className="nr">
              <h5>1</h5>
            </td>
            <td className="title">
              <h6>Heavydirtysoul</h6>
            </td>
            <td className="length">
              <h5>3:54</h5>
            </td>
            <td>
              <input type="checkbox" id="heart" />
              <label className="zmr" htmlFor="heart"></label>
            </td>
          </tr>

          <tr className="song">
            <td className="nr">
              <h5>2</h5>
            </td>
            <td className="title">
              <h6 style={{ color: "#ff564c" }}>StressedOut</h6>
            </td>
            <td className="length">
              <h5>3:22</h5>
            </td>
            <td>
              <input type="checkbox" id="heart1" checked />
              <label className="zmr" htmlFor="heart1"></label>
            </td>
          </tr>

          <tr className="song">
            <td className="nr">
              <h5>3</h5>
            </td>
            <td className="title">
              <h6>Ride</h6>
            </td>
            <td className="length">
              <h5>3:34</h5>
            </td>
            <td>
              <input type="checkbox" id="heart2" />
              <label className="zmr" htmlFor="heart2"></label>
            </td>
          </tr>

          <tr className="song">
            <td className="nr">
              <h5>4</h5>
            </td>
            <td className="title">
              <h6>Fairy Local</h6>
            </td>
            <td className="length">
              <h5>3:27</h5>
            </td>
            <td>
              <input type="checkbox" id="heart3" checked />
              <label className="zmr" htmlFor="heart3"></label>
            </td>
          </tr>

          <tr className="song">
            <td className="nr">
              <h5>5</h5>
            </td>
            <td className="title">
              <h6>Tear in My Heart</h6>
            </td>
            <td className="length">
              <h5>3:08</h5>
            </td>
            <td>
              <input type="checkbox" id="heart4" />
              <label className="zmr" htmlFor="heart4"></label>
            </td>
          </tr>

          <tr className="song">
            <td className="nr">
              <h5>6</h5>
            </td>
            <td className="title">
              <h6>Lane Boy</h6>
            </td>
            <td className="length">
              <h5>4:13</h5>
            </td>
            <td>
              <input type="checkbox" id="heart5" />
              <label className="zmr" htmlFor="heart5"></label>
            </td>
          </tr>

          <tr className="song">
            <td className="nr">
              <h5>7</h5>
            </td>
            <td className="title">
              <h6>The Judge</h6>
            </td>
            <td className="length">
              <h5>4:57</h5>
            </td>
            <td>
              <input type="checkbox" id="heart6" />
              <label className="zmr" htmlFor="heart6"></label>
            </td>
          </tr>

          <tr className="song">
            <td className="nr">
              <h5>8</h5>
            </td>
            <td className="title">
              <h6>Doubt</h6>
            </td>
            <td className="length">
              <h5>3:11</h5>
            </td>
            <td>
              <input type="checkbox" id="heart7" />
              <label className="zmr" htmlFor="heart7"></label>
            </td>
          </tr>

          <tr className="song">
            <td className="nr">
              <h5>9</h5>
            </td>
            <td className="title">
              <h6>Polarize</h6>
            </td>
            <td className="length">
              <h5>3:46</h5>
            </td>
            <td>
              <input type="checkbox" id="heart8" />
              <label className="zmr" htmlFor="heart8"></label>
            </td>
          </tr>
        </table>
      </div> */}

      <div className="shadow"></div>

      {/* <div className="bar"></div> */}

      <div className="info">
        <h4>STRESSED OUT</h4>
        <h3>twenty one pilots - Blurryface</h3>
      </div>

      <table className="player">
        <td>
          <input type="checkbox" id="backward" />
          <label className="backward" htmlFor="backward"></label>
        </td>
        <td>
          <input
            type="checkbox"
            id="play"
            title="Play"
            onClick={() => togglePlayPause()}
          />
          <label className="play" htmlFor="play"></label>
        </td>
        <td>
          <input type="checkbox" id="forward" />
          <label className="forward" htmlFor="forward"></label>
        </td>
      </table>

      <table className="footer">
        <td>
          <input type="checkbox" id="love" checked />
          <label className="love" htmlFor="love"></label>
        </td>
        <td>
          <input type="checkbox" id="shuffle" />
          <label className="shuffle" htmlFor="shuffle"></label>
        </td>
        <td>
          <input type="checkbox" id="repeat" checked />
          <label className="repeat" htmlFor="repeat"></label>
        </td>
        <td>
          <input type="checkbox" id="options" />
          <label className="options" htmlFor="options"></label>
        </td>
      </table>

      <div className="current">
        <h2>STRESSED OUT</h2>
      </div>
    </article>
  );
}

export default App;
