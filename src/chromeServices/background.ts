export {};

chrome.runtime.onInstalled.addListener(() => {
  // chrome.storage.local.set({
  //     name: "Jack"
  // });
  console.log("background.js installed");
//   chrome.tabs &&
//     chrome.tabs.query(
//       {
//         url: "https://castbox.fm/*",
//       },
//       (tabs) => {
//         for (let i = 0; i < tabs.length; i++) {
//           const tab = tabs[i];
// 		  chrome.tabs.connect(tab.id || 0);
//         //   chrome.tabs.sendMessage(
//         //     tab.id || 0,
//         //     "installed",
//         //     (response?: any) => {}
//         //   );
//         }
//       }
//     );
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url?.toLowerCase().startsWith("https://castbox.fm")
  ) {
    chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        files: ["./static/js/foreground.js"],
      })
      .then(() => {
        console.log("INJECTED THE FOREGROUND SCRIPT.");
      })
      .catch((err) => console.log(err));
  }
});
