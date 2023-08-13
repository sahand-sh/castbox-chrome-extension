import React, { useEffect } from "react";
import { DOMMessage } from "./types";

function App() {
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

  return null;
}

export default App;
