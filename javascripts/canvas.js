function canvas() {
  const canvas = document.querySelector(".main #canvas > canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
../assets/canvas/frame_0001.jpeg
../assets/canvas/frame_0002.jpeg
../assets/canvas/frame_0003.jpeg
../assets/canvas/frame_0004.jpeg
../assets/canvas/frame_0005.jpeg
../assets/canvas/frame_0006.jpeg
../assets/canvas/frame_0007.jpeg
../assets/canvas/frame_0008.jpeg
../assets/canvas/frame_0009.jpeg
../assets/canvas/frame_0010.jpeg
../assets/canvas/frame_0011.jpeg
../assets/canvas/frame_0012.jpeg
../assets/canvas/frame_0013.jpeg
../assets/canvas/frame_0014.jpeg
../assets/canvas/frame_0015.jpeg
../assets/canvas/frame_0016.jpeg
../assets/canvas/frame_0017.jpeg
../assets/canvas/frame_0018.jpeg
../assets/canvas/frame_0019.jpeg
../assets/canvas/frame_0020.jpeg
../assets/canvas/frame_0021.jpeg
../assets/canvas/frame_0022.jpeg
../assets/canvas/frame_0023.jpeg
../assets/canvas/frame_0024.jpeg
../assets/canvas/frame_0025.jpeg
../assets/canvas/frame_0026.jpeg
../assets/canvas/frame_0027.jpeg
../assets/canvas/frame_0028.jpeg
../assets/canvas/frame_0029.jpeg
../assets/canvas/frame_0030.jpeg
../assets/canvas/frame_0031.jpeg
../assets/canvas/frame_0032.jpeg
../assets/canvas/frame_0033.jpeg
../assets/canvas/frame_0034.jpeg
../assets/canvas/frame_0035.jpeg
../assets/canvas/frame_0036.jpeg
../assets/canvas/frame_0037.jpeg
../assets/canvas/frame_0038.jpeg
../assets/canvas/frame_0039.jpeg
../assets/canvas/frame_0040.jpeg
../assets/canvas/frame_0041.jpeg
../assets/canvas/frame_0042.jpeg
../assets/canvas/frame_0043.jpeg
../assets/canvas/frame_0044.jpeg
../assets/canvas/frame_0045.jpeg
../assets/canvas/frame_0046.jpeg
../assets/canvas/frame_0047.jpeg
../assets/canvas/frame_0048.jpeg
../assets/canvas/frame_0049.jpeg
../assets/canvas/frame_0050.jpeg
../assets/canvas/frame_0051.jpeg
../assets/canvas/frame_0052.jpeg
../assets/canvas/frame_0053.jpeg
../assets/canvas/frame_0054.jpeg
../assets/canvas/frame_0055.jpeg
../assets/canvas/frame_0056.jpeg
../assets/canvas/frame_0057.jpeg
../assets/canvas/frame_0058.jpeg
../assets/canvas/frame_0059.jpeg
../assets/canvas/frame_0060.jpeg
../assets/canvas/frame_0061.jpeg
../assets/canvas/frame_0062.jpeg
../assets/canvas/frame_0063.jpeg
../assets/canvas/frame_0064.jpeg
../assets/canvas/frame_0065.jpeg
../assets/canvas/frame_0066.jpeg
../assets/canvas/frame_0067.jpeg
../assets/canvas/frame_0068.jpeg
../assets/canvas/frame_0069.jpeg
../assets/canvas/frame_0070.jpeg
../assets/canvas/frame_0071.jpeg
../assets/canvas/frame_0072.jpeg
../assets/canvas/frame_0073.jpeg
../assets/canvas/frame_0074.jpeg
../assets/canvas/frame_0075.jpeg
../assets/canvas/frame_0076.jpeg
../assets/canvas/frame_0077.jpeg
../assets/canvas/frame_0078.jpeg
../assets/canvas/frame_0079.jpeg
../assets/canvas/frame_0080.jpeg
../assets/canvas/frame_0081.jpeg
../assets/canvas/frame_0082.jpeg
../assets/canvas/frame_0083.jpeg
../assets/canvas/frame_0084.jpeg
../assets/canvas/frame_0085.jpeg
../assets/canvas/frame_0086.jpeg
../assets/canvas/frame_0087.jpeg
../assets/canvas/frame_0088.jpeg
../assets/canvas/frame_0089.jpeg
../assets/canvas/frame_0090.jpeg
../assets/canvas/frame_0091.jpeg
../assets/canvas/frame_0092.jpeg
../assets/canvas/frame_0093.jpeg
../assets/canvas/frame_0094.jpeg
../assets/canvas/frame_0095.jpeg
../assets/canvas/frame_0096.jpeg
../assets/canvas/frame_0097.jpeg
../assets/canvas/frame_0098.jpeg
../assets/canvas/frame_0099.jpeg
../assets/canvas/frame_0100.jpeg
../assets/canvas/frame_0101.jpeg
../assets/canvas/frame_0102.jpeg
../assets/canvas/frame_0103.jpeg
../assets/canvas/frame_0104.jpeg
../assets/canvas/frame_0105.jpeg
../assets/canvas/frame_0106.jpeg
../assets/canvas/frame_0107.jpeg
../assets/canvas/frame_0108.jpeg
../assets/canvas/frame_0109.jpeg
../assets/canvas/frame_0110.jpeg
../assets/canvas/frame_0111.jpeg
../assets/canvas/frame_0112.jpeg
../assets/canvas/frame_0113.jpeg
../assets/canvas/frame_0114.jpeg
../assets/canvas/frame_0115.jpeg
../assets/canvas/frame_0116.jpeg
../assets/canvas/frame_0117.jpeg
../assets/canvas/frame_0118.jpeg
../assets/canvas/frame_0119.jpeg
../assets/canvas/frame_0120.jpeg
../assets/canvas/frame_0121.jpeg
../assets/canvas/frame_0122.jpeg
../assets/canvas/frame_0123.jpeg
../assets/canvas/frame_0124.jpeg
../assets/canvas/frame_0125.jpeg
../assets/canvas/frame_0126.jpeg
../assets/canvas/frame_0127.jpeg
../assets/canvas/frame_0128.jpeg
../assets/canvas/frame_0129.jpeg
../assets/canvas/frame_0130.jpeg
../assets/canvas/frame_0131.jpeg
../assets/canvas/frame_0132.jpeg
../assets/canvas/frame_0133.jpeg
../assets/canvas/frame_0134.jpeg
../assets/canvas/frame_0135.jpeg
../assets/canvas/frame_0136.jpeg
../assets/canvas/frame_0137.jpeg
../assets/canvas/frame_0138.jpeg
../assets/canvas/frame_0139.jpeg
../assets/canvas/frame_0140.jpeg
../assets/canvas/frame_0141.jpeg
../assets/canvas/frame_0142.jpeg
../assets/canvas/frame_0143.jpeg
../assets/canvas/frame_0144.jpeg
../assets/canvas/frame_0145.jpeg
../assets/canvas/frame_0146.jpeg
../assets/canvas/frame_0147.jpeg
../assets/canvas/frame_0148.jpeg
../assets/canvas/frame_0149.jpeg
../assets/canvas/frame_0150.jpeg
../assets/canvas/frame_0151.jpeg
../assets/canvas/frame_0152.jpeg
../assets/canvas/frame_0153.jpeg
../assets/canvas/frame_0154.jpeg
../assets/canvas/frame_0155.jpeg
../assets/canvas/frame_0156.jpeg
../assets/canvas/frame_0157.jpeg
../assets/canvas/frame_0158.jpeg
../assets/canvas/frame_0159.jpeg
../assets/canvas/frame_0160.jpeg
../assets/canvas/frame_0161.jpeg
../assets/canvas/frame_0162.jpeg
../assets/canvas/frame_0163.jpeg
../assets/canvas/frame_0164.jpeg
../assets/canvas/frame_0165.jpeg
../assets/canvas/frame_0166.jpeg
../assets/canvas/frame_0167.jpeg
../assets/canvas/frame_0168.jpeg
../assets/canvas/frame_0169.jpeg
../assets/canvas/frame_0170.jpeg
../assets/canvas/frame_0171.jpeg
../assets/canvas/frame_0172.jpeg
../assets/canvas/frame_0173.jpeg
../assets/canvas/frame_0174.jpeg
../assets/canvas/frame_0175.jpeg
../assets/canvas/frame_0176.jpeg
../assets/canvas/frame_0177.jpeg
../assets/canvas/frame_0178.jpeg
../assets/canvas/frame_0179.jpeg
../assets/canvas/frame_0180.jpeg
../assets/canvas/frame_0181.jpeg
../assets/canvas/frame_0182.jpeg
../assets/canvas/frame_0183.jpeg
../assets/canvas/frame_0184.jpeg
../assets/canvas/frame_0185.jpeg
../assets/canvas/frame_0186.jpeg
../assets/canvas/frame_0187.jpeg
../assets/canvas/frame_0188.jpeg
../assets/canvas/frame_0189.jpeg
../assets/canvas/frame_0190.jpeg
../assets/canvas/frame_0191.jpeg
../assets/canvas/frame_0192.jpeg
../assets/canvas/frame_0193.jpeg
../assets/canvas/frame_0194.jpeg
../assets/canvas/frame_0195.jpeg
../assets/canvas/frame_0196.jpeg
../assets/canvas/frame_0197.jpeg
../assets/canvas/frame_0198.jpeg
../assets/canvas/frame_0199.jpeg
../assets/canvas/frame_0200.jpeg
../assets/canvas/frame_0201.jpeg
../assets/canvas/frame_0202.jpeg
../assets/canvas/frame_0203.jpeg
../assets/canvas/frame_0204.jpeg
../assets/canvas/frame_0205.jpeg
../assets/canvas/frame_0206.jpeg
../assets/canvas/frame_0207.jpeg
../assets/canvas/frame_0208.jpeg
../assets/canvas/frame_0209.jpeg
../assets/canvas/frame_0210.jpeg
../assets/canvas/frame_0211.jpeg
../assets/canvas/frame_0212.jpeg
../assets/canvas/frame_0213.jpeg
../assets/canvas/frame_0214.jpeg
../assets/canvas/frame_0215.jpeg
../assets/canvas/frame_0216.jpeg
../assets/canvas/frame_0217.jpeg
../assets/canvas/frame_0218.jpeg
../assets/canvas/frame_0219.jpeg
../assets/canvas/frame_0220.jpeg
../assets/canvas/frame_0221.jpeg
../assets/canvas/frame_0222.jpeg
../assets/canvas/frame_0223.jpeg
../assets/canvas/frame_0224.jpeg
../assets/canvas/frame_0225.jpeg
../assets/canvas/frame_0226.jpeg
../assets/canvas/frame_0227.jpeg
../assets/canvas/frame_0228.jpeg
../assets/canvas/frame_0229.jpeg
../assets/canvas/frame_0230.jpeg
../assets/canvas/frame_0231.jpeg
../assets/canvas/frame_0232.jpeg
../assets/canvas/frame_0233.jpeg
../assets/canvas/frame_0234.jpeg
../assets/canvas/frame_0235.jpeg
../assets/canvas/frame_0236.jpeg
../assets/canvas/frame_0237.jpeg
../assets/canvas/frame_0238.jpeg
../assets/canvas/frame_0239.jpeg
../assets/canvas/frame_0240.jpeg
../assets/canvas/frame_0241.jpeg
../assets/canvas/frame_0242.jpeg
../assets/canvas/frame_0243.jpeg
../assets/canvas/frame_0244.jpeg
../assets/canvas/frame_0245.jpeg
../assets/canvas/frame_0246.jpeg
../assets/canvas/frame_0247.jpeg
../assets/canvas/frame_0248.jpeg
../assets/canvas/frame_0249.jpeg
../assets/canvas/frame_0250.jpeg
../assets/canvas/frame_0251.jpeg
../assets/canvas/frame_0252.jpeg
../assets/canvas/frame_0253.jpeg
../assets/canvas/frame_0254.jpeg
../assets/canvas/frame_0255.jpeg
../assets/canvas/frame_0256.jpeg
../assets/canvas/frame_0257.jpeg
../assets/canvas/frame_0258.jpeg
../assets/canvas/frame_0259.jpeg
../assets/canvas/frame_0260.jpeg
../assets/canvas/frame_0261.jpeg
../assets/canvas/frame_0262.jpeg
../assets/canvas/frame_0263.jpeg
../assets/canvas/frame_0264.jpeg
../assets/canvas/frame_0265.jpeg
../assets/canvas/frame_0266.jpeg
../assets/canvas/frame_0267.jpeg
../assets/canvas/frame_0268.jpeg
../assets/canvas/frame_0269.jpeg
../assets/canvas/frame_0270.jpeg
../assets/canvas/frame_0271.jpeg
../assets/canvas/frame_0272.jpeg
../assets/canvas/frame_0273.jpeg
../assets/canvas/frame_0274.jpeg
../assets/canvas/frame_0275.jpeg
../assets/canvas/frame_0276.jpeg
../assets/canvas/frame_0277.jpeg
../assets/canvas/frame_0278.jpeg
../assets/canvas/frame_0279.jpeg
../assets/canvas/frame_0280.jpeg
../assets/canvas/frame_0281.jpeg
../assets/canvas/frame_0282.jpeg
../assets/canvas/frame_0283.jpeg
../assets/canvas/frame_0284.jpeg
../assets/canvas/frame_0285.jpeg
../assets/canvas/frame_0286.jpeg
../assets/canvas/frame_0287.jpeg
../assets/canvas/frame_0288.jpeg
../assets/canvas/frame_0289.jpeg
../assets/canvas/frame_0290.jpeg
../assets/canvas/frame_0291.jpeg
../assets/canvas/frame_0292.jpeg
../assets/canvas/frame_0293.jpeg
../assets/canvas/frame_0294.jpeg
../assets/canvas/frame_0295.jpeg
../assets/canvas/frame_0296.jpeg
../assets/canvas/frame_0297.jpeg
../assets/canvas/frame_0298.jpeg
../assets/canvas/frame_0299.jpeg
../assets/canvas/frame_0300.jpeg
../assets/canvas/frame_0301.jpeg
../assets/canvas/frame_0302.jpeg
../assets/canvas/frame_0303.jpeg
../assets/canvas/frame_0304.jpeg
../assets/canvas/frame_0305.jpeg
../assets/canvas/frame_0306.jpeg
../assets/canvas/frame_0307.jpeg
../assets/canvas/frame_0308.jpeg
../assets/canvas/frame_0309.jpeg
../assets/canvas/frame_0310.jpeg
../assets/canvas/frame_0311.jpeg
../assets/canvas/frame_0312.jpeg
../assets/canvas/frame_0313.jpeg
../assets/canvas/frame_0314.jpeg
../assets/canvas/frame_0315.jpeg
../assets/canvas/frame_0316.jpeg
../assets/canvas/frame_0317.jpeg
../assets/canvas/frame_0318.jpeg
../assets/canvas/frame_0319.jpeg
../assets/canvas/frame_0320.jpeg
../assets/canvas/frame_0321.jpeg
../assets/canvas/frame_0322.jpeg
../assets/canvas/frame_0323.jpeg
../assets/canvas/frame_0324.jpeg
../assets/canvas/frame_0325.jpeg
../assets/canvas/frame_0326.jpeg
../assets/canvas/frame_0327.jpeg
../assets/canvas/frame_0328.jpeg
../assets/canvas/frame_0329.jpeg
../assets/canvas/frame_0330.jpeg
../assets/canvas/frame_0331.jpeg
../assets/canvas/frame_0332.jpeg
../assets/canvas/frame_0333.jpeg
../assets/canvas/frame_0334.jpeg
../assets/canvas/frame_0335.jpeg
../assets/canvas/frame_0336.jpeg
../assets/canvas/frame_0337.jpeg
../assets/canvas/frame_0338.jpeg
../assets/canvas/frame_0339.jpeg
../assets/canvas/frame_0340.jpeg
../assets/canvas/frame_0341.jpeg
../assets/canvas/frame_0342.jpeg
../assets/canvas/frame_0343.jpeg
../assets/canvas/frame_0344.jpeg
../assets/canvas/frame_0345.jpeg
../assets/canvas/frame_0346.jpeg
../assets/canvas/frame_0347.jpeg
../assets/canvas/frame_0348.jpeg
../assets/canvas/frame_0349.jpeg
../assets/canvas/frame_0350.jpeg
../assets/canvas/frame_0351.jpeg
../assets/canvas/frame_0352.jpeg
../assets/canvas/frame_0353.jpeg
../assets/canvas/frame_0354.jpeg
../assets/canvas/frame_0355.jpeg
../assets/canvas/frame_0356.jpeg
../assets/canvas/frame_0357.jpeg
../assets/canvas/frame_0358.jpeg
../assets/canvas/frame_0359.jpeg
../assets/canvas/frame_0360.jpeg
../assets/canvas/frame_0361.jpeg
../assets/canvas/frame_0362.jpeg
../assets/canvas/frame_0363.jpeg
../assets/canvas/frame_0364.jpeg
../assets/canvas/frame_0365.jpeg
../assets/canvas/frame_0366.jpeg
../assets/canvas/frame_0367.jpeg
../assets/canvas/frame_0368.jpeg
../assets/canvas/frame_0369.jpeg
../assets/canvas/frame_0370.jpeg
../assets/canvas/frame_0371.jpeg
../assets/canvas/frame_0372.jpeg
../assets/canvas/frame_0373.jpeg
../assets/canvas/frame_0374.jpeg
../assets/canvas/frame_0375.jpeg
../assets/canvas/frame_0376.jpeg
../assets/canvas/frame_0377.jpeg
../assets/canvas/frame_0378.jpeg
../assets/canvas/frame_0379.jpeg
../assets/canvas/frame_0380.jpeg
../assets/canvas/frame_0381.jpeg
../assets/canvas/frame_0382.jpeg
../assets/canvas/frame_0383.jpeg
../assets/canvas/frame_0384.jpeg
../assets/canvas/frame_0385.jpeg
../assets/canvas/frame_0386.jpeg
../assets/canvas/frame_0387.jpeg
../assets/canvas/frame_0388.jpeg
../assets/canvas/frame_0389.jpeg
../assets/canvas/frame_0390.jpeg
../assets/canvas/frame_0391.jpeg
../assets/canvas/frame_0392.jpeg
../assets/canvas/frame_0393.jpeg
../assets/canvas/frame_0394.jpeg
../assets/canvas/frame_0395.jpeg
../assets/canvas/frame_0396.jpeg
../assets/canvas/frame_0397.jpeg
../assets/canvas/frame_0398.jpeg
../assets/canvas/frame_0399.jpeg
../assets/canvas/frame_0400.jpeg
../assets/canvas/frame_0401.jpeg
../assets/canvas/frame_0402.jpeg
../assets/canvas/frame_0403.jpeg
../assets/canvas/frame_0404.jpeg
../assets/canvas/frame_0405.jpeg
../assets/canvas/frame_0406.jpeg
../assets/canvas/frame_0407.jpeg
../assets/canvas/frame_0408.jpeg
../assets/canvas/frame_0409.jpeg
../assets/canvas/frame_0410.jpeg
../assets/canvas/frame_0411.jpeg
../assets/canvas/frame_0412.jpeg
../assets/canvas/frame_0413.jpeg
../assets/canvas/frame_0414.jpeg
../assets/canvas/frame_0415.jpeg
../assets/canvas/frame_0416.jpeg
../assets/canvas/frame_0417.jpeg
../assets/canvas/frame_0418.jpeg
../assets/canvas/frame_0419.jpeg
../assets/canvas/frame_0420.jpeg
../assets/canvas/frame_0421.jpeg
../assets/canvas/frame_0422.jpeg
../assets/canvas/frame_0423.jpeg
../assets/canvas/frame_0424.jpeg
../assets/canvas/frame_0425.jpeg
../assets/canvas/frame_0426.jpeg
../assets/canvas/frame_0427.jpeg
../assets/canvas/frame_0428.jpeg
../assets/canvas/frame_0429.jpeg
../assets/canvas/frame_0430.jpeg
../assets/canvas/frame_0431.jpeg
../assets/canvas/frame_0432.jpeg
../assets/canvas/frame_0433.jpeg
../assets/canvas/frame_0434.jpeg
../assets/canvas/frame_0435.jpeg
../assets/canvas/frame_0436.jpeg
../assets/canvas/frame_0437.jpeg
../assets/canvas/frame_0438.jpeg
../assets/canvas/frame_0439.jpeg
../assets/canvas/frame_0440.jpeg
../assets/canvas/frame_0441.jpeg
../assets/canvas/frame_0442.jpeg
../assets/canvas/frame_0443.jpeg
../assets/canvas/frame_0444.jpeg
../assets/canvas/frame_0445.jpeg
../assets/canvas/frame_0446.jpeg
../assets/canvas/frame_0447.jpeg
../assets/canvas/frame_0448.jpeg
../assets/canvas/frame_0449.jpeg
../assets/canvas/frame_0450.jpeg
../assets/canvas/frame_0451.jpeg
../assets/canvas/frame_0452.jpeg
../assets/canvas/frame_0453.jpeg
../assets/canvas/frame_0454.jpeg
../assets/canvas/frame_0455.jpeg
../assets/canvas/frame_0456.jpeg
../assets/canvas/frame_0457.jpeg
../assets/canvas/frame_0458.jpeg
../assets/canvas/frame_0459.jpeg
../assets/canvas/frame_0460.jpeg
../assets/canvas/frame_0461.jpeg
../assets/canvas/frame_0462.jpeg
../assets/canvas/frame_0463.jpeg
../assets/canvas/frame_0464.jpeg
../assets/canvas/frame_0465.jpeg
../assets/canvas/frame_0466.jpeg
../assets/canvas/frame_0467.jpeg
../assets/canvas/frame_0468.jpeg
../assets/canvas/frame_0469.jpeg
../assets/canvas/frame_0470.jpeg
../assets/canvas/frame_0471.jpeg
../assets/canvas/frame_0472.jpeg
../assets/canvas/frame_0473.jpeg
../assets/canvas/frame_0474.jpeg
../assets/canvas/frame_0475.jpeg
../assets/canvas/frame_0476.jpeg
../assets/canvas/frame_0477.jpeg
../assets/canvas/frame_0478.jpeg
../assets/canvas/frame_0479.jpeg
../assets/canvas/frame_0480.jpeg
../assets/canvas/frame_0481.jpeg
   `;
    return data.split("\n")[index];
  }

  const frameCount = 481;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `#canvas`,
      start: `top top`,
      end: `500% top`,
      scroller: `body`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: ".main #canvas",
    pin: true,
    scroller: `body`,
    start: `top top`,
    end: `500% top`,
  });
}

canvas();
