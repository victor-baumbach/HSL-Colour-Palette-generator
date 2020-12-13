let array  = [
  {name: "A", value: 9},
  {name: "B", value: 8},
  {name: "C", value: 7},
  {name: "D", value: 6},
  {name: "E", value: 5},
  {name: "F", value: 4},
  {name: "G", value: 3},
  {name: "H", value: 2},
  {name: "I", value: 1}
];

console.log(array.map( (item, index) => [item.value, index] ))

var get_hsl_colour_palette = function (dataset) {
  let step = (2*360) /  dataset.length;

    var colours = [];

    let colourStep = 2;

    for (let i = 0; i < dataset.length / (2 * colourStep); i++) {
        for (let a = 0; a < colourStep; a++) {
            colours.push({hue: step * i + a * 360 / colourStep, saturation: 1,lightness: 0.4, alpha: 1});
        }
        for (let a = 0; a < colourStep; a++) {
            colours.push({hue: step * i + a * 1.5 * 360 / colourStep, saturation: 1,lightness: 0.3, alpha: 1});
        }
    }

    /*for (let i = this.count / (2 * colourStep); i > 0; i--) {
        for (let a = 0; a < colourStep; a++) {
            colours.push(d3.hsl(step * i + a * 360 / colourStep, 1, 0.3, 1));
        }
    }*/

    return colours/*.map(function (item, index, all) {
        let value = item;
        if (index % 2) {
            value = all[all.length - index - 1];
        }
        return value;
    })*/;
}

console.log(get_hsl_colour_palette(array));