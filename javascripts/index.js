function textSplitter(element) {
  const targetedElement = element;
  let content = targetedElement.textContent;
  targetedElement.innerHTML = "";

  const splittedTextcontent = content.split("");
  splittedTextcontent.forEach(function (letter) {
    targetedElement.innerHTML += `<span>${letter}</span>`;
  });
}

textSplitter(document.querySelector(".main .page2 .txt p"));

function page1Animation() {
  const texts = document.querySelectorAll(
    ".main .page1 .info .inner-info .hover-texts h1"
  );
  const video = document.querySelector(".main .page1 .video-container video");

  texts.forEach(function (text, index) {
    text.addEventListener("mouseover", function (e) {
      const id = e.target.id;
      if (id === "text-1") {
        video.src = "../assets/videos/v1.mp4";
      } else if (id === "text-2") {
        video.src = "../assets/videos/v2.mp4";
      } else if (id === "text-3") {
        video.src = "../assets/videos/v3.mp4";
      }
    });
  });
}

page1Animation();

gsap.to(".main .page2 .txt p span", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".main .page2",
    start: "30% bottom",
    end: "80% bottom",
    scrub: 2,
  },
  stagger: 1,
  color: "#ffffff",
  ease: "none",
});

function rotating_card() {
  document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        // ease: Power3,
        duration: 0.5,
      });
    });

    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        // ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
}

rotating_card();

document.querySelectorAll(".container button").forEach((elem) => {
  textSplitter(elem);
});
