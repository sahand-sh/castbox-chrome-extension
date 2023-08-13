let toHandler: NodeJS.Timeout | null = null;
const persianAlphabet: ReadonlyArray<string> = [
  "ا",
  "آ",
  "ب",
  "پ",
  "ت",
  "ث",
  "ج",
  "چ",
  "ح",
  "خ",
  "د",
  "ذ",
  "ر",
  "ز",
  "ژ",
  "س",
  "ش",
  "ص",
  "ض",
  "ط",
  "ظ",
  "ع",
  "غ",
  "ف",
  "ق",
  "ک",
  "گ",
  "ل",
  "م",
  "ن",
  "و",
  "ه",
  "ی",
  "ي",
];
function foreground() {
  // console.log("running foreground.js...");
  if (toHandler) {
    clearTimeout(toHandler);
    toHandler = null;
  }
  // console.log("checking if user is logged in");

  const signOut = document.getElementsByClassName("signOut");
  if (signOut && signOut.length) {
    if (typeof window === "undefined") {
      // console.log("window is not defined!");
      return;
    }

    if (window.location.href.includes("/my/subscribed")) {
      window.addEventListener("scroll", (ev) => {
        if (toHandler) {
          clearTimeout(toHandler);
        }
        toHandler = setTimeout(() => {
          updatePageDesign(false);
        }, 1000);
      });

      window.addEventListener("resize", (ev) => {
        if (toHandler) {
          clearTimeout(toHandler);
        }
        toHandler = setTimeout(() => {
          updatePageDesign(true);
        }, 1000);
      });

      updatePageDesign(true);
    } else {
      addLibraryButton();
    }
  } else {
    // console.log("no user detected! retrying in next 5 seconds...");

    toHandler = setTimeout(() => {
      if (toHandler) clearTimeout(toHandler);
      foreground();
    }, 3000);
  }
}

export function addLibraryButton() {
  let Library = document.getElementsByClassName("library");
  if (Library && Library.length) {
    // console.log("foreground.js is already proccessed this page");
    return;
  }
  const header = document.getElementById("castboxHeader");
  if (header) {
    const items = header.getElementsByClassName("navLogo");
    if (items && items.length) {
      const parent = items[0];
      const library = document.createElement("a");
      library.className = "nav-item link library";
      //   library.style.color = "#fff";
      //   library.style.backgroundColor = "#F55B23";
      library.href = "/my/subscribed";
      library.innerText = "🎧 Library";
      const before = parent.getElementsByClassName("link")[0];
      parent.insertBefore(library, before);
    }
  }
}

export function updatePageDesign(checkAll: boolean) {
//   console.log(
//     "updating page design with checkAll status set to :>> ",
//     checkAll
//   );
  const new_width = window.innerWidth * 0.9;
  const cbHeaderContainer = document.getElementsByClassName(
    "castboxHeaderContainer"
  )[0] as HTMLElement;

  const childrenBox = document.getElementById("childrenBox");
  const userCenterMain = childrenBox?.getElementsByClassName(
    "userCenterMain"
  )[0] as HTMLElement;

  const userCenterContainer = userCenterMain?.getElementsByClassName(
    "userCenterContainer"
  )[0] as HTMLElement;

  if (!cbHeaderContainer) {
    // console.log("cbHeaderContainer not found");
    return;
  }

  if (!userCenterMain) {
    // console.log("userCenterMain not found");
    return;
  }

  if (!userCenterContainer) {
    // console.log("userCenterContainer not found");
    return;
  }

  let cbHeaderContainer_style = window.getComputedStyle(cbHeaderContainer);
  let old_width = parseInt(cbHeaderContainer_style.width.replace("px", ""));

  // console.log("set header width to :>> ", new_width);
  cbHeaderContainer.style.width = `${new_width}px`;
  userCenterMain.style.maxWidth = `${new_width}px`;
  userCenterMain.style.width = `100%`;

  for (let i = 0; i < userCenterMain.children.length; i++) {
    const element = userCenterMain.children[i] as HTMLElement;
    element.style.maxWidth = `${new_width}px`;
    element.style.width = `100%`;
  }

  //   userCenterContainer.style.display = 'grid';
  //   userCenterContainer.style.gap = '5px';

  const leftItem = userCenterContainer.children[0] as HTMLElement;
  const rightItem = userCenterContainer.children[1] as HTMLElement;
  let usedWidth = 0;
  if (rightItem) {
    usedWidth = parseInt(
      window.getComputedStyle(rightItem).width.replace("px", "")
    );
  }

  if (leftItem) {
    const new_inner_width = new_width - usedWidth - 40; // 40 is for 2x20px padding
    leftItem.style.width = `${new_inner_width}px`;
    const genreMain = leftItem.getElementsByClassName(
      "genreMain"
    )[0] as HTMLElement;
    if (genreMain) {
      genreMain.style.maxWidth = `${new_inner_width}px`;
      const genreList = genreMain.getElementsByClassName(
        "genreList"
      )[0] as HTMLElement;
      if (genreList && genreList.children) {
        const genreDiv = genreList.children[0] as HTMLElement;
        genreDiv.style.display = "flex";
        genreDiv.style.flexDirection = "row";
        genreDiv.style.flexWrap = "wrap";
        genreDiv.style.alignContent = "flex-start";
        genreDiv.style.justifyContent = "flex-start";
        genreDiv.style.alignItems = "flex-start";

        const itemWidth = calcWidth(240, new_inner_width);
        // console.log("itemWidth :>> ", itemWidth);

        for (let i = 0; i < genreDiv.children.length; i++) {
          const channelDiv = genreDiv.children[i] as HTMLElement;
          const classes = channelDiv.className.split(" ");
          if (classes.includes("channelItem")) {
            if (!checkAll && classes.includes("redesigned")) continue;
            channelDiv.style.display = "flex";
            channelDiv.style.flexDirection = "column";
            channelDiv.style.alignItems = "center";
            channelDiv.style.justifyContent = "flex-start";
            channelDiv.style.maxWidth = `${itemWidth}px`;
            channelDiv.style.padding = "15px";
            channelDiv.style.marginBottom = "25px";

            // correct inner elements
            const cover = channelDiv.getElementsByClassName(
              "channelItem-cover"
            )[0] as HTMLElement;
            if (cover) {
              const cover_size = itemWidth - 30;
              cover.style.width = `${cover_size}px`;
              cover.style.height = `${cover_size}px`;
            }

            const info = channelDiv.getElementsByClassName(
              "channelItem-info"
            )[0] as HTMLElement;
            if (info) {
              info.style.width = "auto";
              info.style.marginLeft = "0";

              const a = info.getElementsByTagName("a")[0] as HTMLElement;
              if (a) {
                a.style.textAlign = "center";
              }

              const des = info.getElementsByClassName(
                "channelItem-des"
              )[0] as HTMLElement;
              if (des) {
                des.style.textAlign = "justify";
                const firstChar = des
                  .getElementsByTagName("span")[0]
                  .innerText.charAt(0);
                if (persianAlphabet.indexOf(firstChar) > -1) {
                  des.style.direction = "rtl";
                } else {
                  des.style.direction = "ltr";
                }
              }

              const bottom = info.getElementsByClassName(
                "channelItem-bottom"
              )[0] as HTMLElement;
              if (bottom) {
                bottom.style.display = "flex";
                bottom.style.flexDirection = "row";
                bottom.style.justifyContent = "space-between";
              }
            }

            // end inner elements
            if (!classes.includes("redesigned")) {
              channelDiv.className += " redesigned";
            }

            window.dispatchEvent(new Event("scroll"));
          }
        }
      } else {
        // console.log("genreList not found");
      }
    } else {
      // console.log("genreMain not found");
    }
  }

  //nav-item left navLogo
}

export function calcWidth(startWidth: number, ContainerWidth: number): number {
  //  console.log(
  //     `calculating items width starting at ${startWidth}px inside ${ContainerWidth}px container...`
  //   );
  let mod = ContainerWidth % startWidth;
  // console.log("mod :>> ", mod);
  if (mod > startWidth / 2) {
    let div = Math.floor(ContainerWidth / startWidth);
    // console.log("div :>> ", div);
    return ContainerWidth / (div + 1) - 1;
  } else {
    return startWidth;
  }
}

chrome.runtime.onMessage.addListener((message, sender, response) => {
  if (message === "installed") {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  }
});

foreground();
