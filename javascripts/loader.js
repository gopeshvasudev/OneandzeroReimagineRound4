function textSplitter(element) {
  const targetedElement = element;
  let content = targetedElement.textContent;
  targetedElement.innerHTML = "";

  const splittedTextcontent = content.split("");
  splittedTextcontent.forEach(function (letter, index) {
    if (index % 2 == 0) {
      targetedElement.innerHTML += `<span class="a">${letter}</span>`;
    } else {
      targetedElement.innerHTML += `<span class="b">${letter}</span>`;
    }
  });
}

textSplitter(document.querySelector(".loader h1"));

function loaderAnimation() {
  const growElement = document.querySelector(".loader .line .counting");
  let grow = 0;

  window.addEventListener("load", async function () {
    const performanceTiming = window.performance.timing;
    let pageLoadTime = Math.floor(
      performanceTiming.loadEventEnd - performanceTiming.navigationStart
    );

    const loaderPromise = function () {
      return new Promise(function (resolve) {
        const loaderInterval = setInterval(
          function () {
            if (grow < 100) {
              grow++;
              growElement.innerHTML = grow + "%";
              gsap.to(".loader .line .video-container", {
                x: "750%",
                duration: 2,
                ease: "linear",
              });
            } else {
              grow = 100;
              growElement.innerHTML = grow + "%";
              clearInterval(loaderInterval);
              resolve(true);
            }
          },
          pageLoadTime > 2000 ? pageLoadTime / 100 : 2000 / 100
        );
      });
    };

    const result = await loaderPromise();
    if (result) {
      gsap.to(".loader", {
        duration: 2,
        opacity: 0,
        ease: "expo",
        onComplete: function () {
          document.querySelector(".loader").classList.add("hidden");
        },
      });
      textEntry();
    }
  });

  function textEntry() {
    gsap.from(".main .page1", {
      y: "100%",
      duration: 1,
      ease: "power2",
    });
    gsap.from(".main .page1 .info .inner-info .hover-texts", {
      y: "100%",
      duration: 1,
      ease: "power2",
      opacity: 0,
    }, "load");

    gsap.from(".main .page1 .info .inner-info > h1", {
      y: "100%",
      duration: 1,
      ease: "power2",
      opacity: 0,
    }, "load");
  }
}

loaderAnimation();
