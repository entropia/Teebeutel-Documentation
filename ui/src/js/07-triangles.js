var triangles_canvas = document.getElementById("triangles-canvas");
var triangles_altBG = document.getElementById("navbar");
var triangles = new TriangleBG({
    canvas : triangles_canvas,
    alternateElem : triangles_altBG,
    cellHeight : 40,
    cellWidth : 40,
    mouseLight : false,
    mouseLightRadius : 80,
    mouseLightIncrement : 10,
    resizeAdjustment : true,
    variance : 1.3,
    pattern : "x*y",
    baseColor1 : {
      baseHue : 21,
      baseSaturation : 90,
      baseLightness : 48
    },
    baseColor2 : {
      baseHue : 21,
      baseSaturation : 90,
      baseLightness : 0
    },
    colorDelta : {
      hue : 0.2,
      lightness : 0,
      saturation : 0
    }
});
