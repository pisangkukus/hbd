const words = ["Selamat Ulang Tahun !!", "Happy Birthday !!", "祝 你 生 日 快 乐 !!", "   ¡Feliz cumpleaños!!","Bon anniversaire !!"];
let cursor = gsap.to(".cursor", { opacity: 0, ease: "power2.inOut", repeat: -1 });
let boxTl = gsap.timeline();
boxTl
  .to(".box", { duration: 1, width: "50vw", delay: 0.5, ease: "power4.inOut" })
  //   .from(".h1", { duration: 1, y: "7vw", ease: "power3.out" })
  .from(".hi", { duration: 1, y: "7vw", ease: "power3.out", onComplete: () => masterTl.play() })
  .to(".box", { duration: 1, height: "7vw", ease: "elastic.out" })
  .to(".box", { duration: 2, autoAlpha: 0.5, yoyo: true, repeat: -1 });

gsap.from(".primary-img ", { duration: 3, y: -500, opacity: 0, delay: 1, ease: "elastic" });

let masterTl = gsap.timeline({ repeat: -1 }).pause();
words.forEach((word) => {
  let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
  tl.to(".text", { duration: 1, text: word });
  masterTl.add(tl);
});

function stopAudio(musik) {
  musik.pause();
  musik.currentTime = 0;
}
const gallery = document.getElementById("gallery");
var a = document.getElementById("tampil");
function putarmusic() {
  var audio = new Audio("audio/biutyful.mp3");
  // this.audioCh1.pause();
  // this.audioCh1.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAVFYAAFRWAAABAAgAZGF0YQAAAAA=";
  tampil.style.display = "none";
  stopAudio(audio);
  audio.play();
}

// gsap.registerPlugin(ScrollTrigger);
// var cabin = document.querySelector("#cabin");
// cabin.loop = true;

// gsap.timeline().add(() => cabin.play(), 3);
// let masterTl = gsap.timeline({ repeat: -1 }).pause();
// let boxTl = gsap.timeline();

// boxTl
//   .to(".box", { duration: 1, width: "17vw", delay: 0.5, ease: "power4.inOut" })
//   .from(".hi", { duration: 1, y: "7vw", ease: "power3.out" })
//   .to(".box", { duration: 1, height: "7vw", ease: "elastic.out", onComplete: () => masterTl.play() })
//   .to(".box", { duration: 2, autoAlpha: 0.7, yoyo: true, repeat: -1, ease: "rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})" });
// words.forEach((word) => {
//   let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
//   tl.to(".text", { duration: 1, text: word });
//   masterTl.add(tl);
// });
