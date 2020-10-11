const randomPalette = () => {
    const RED = Math.floor((Math.random() * 255) + 1);
    const GREEN = Math.floor((Math.random() * 255) + 1);
    const BLUE = Math.floor((Math.random() * 255) + 1);

    const HSL = rgbToHsl(RED, GREEN, BLUE);
    const initialRandom = Math.floor(Math.random()*(359-0+1)+0);
    let colors = [initialRandom];
    let resultArray = [];
    for(let i = 0; i < 5 ; i ++) {
        let num = 0;
        if(i > 0) {
            num = (colors[i-1] + 72) > 359 ? 0 : (colors[i-1] + 72);
            if(num === 0) {
                num = getColor(colors[i-1]);
            }
            colors.push(num);
        }
        console.log(num);
        const rgb = hslToRgb(((num*100)/360)/100, HSL[1], HSL[2]);
        resultArray[i] = [Math.floor(rgb[0]), Math.floor(rgb[1]), Math.floor(rgb[2])];
    }
    paint(resultArray);
    generateRules(resultArray, false);
}

const generateRules= (rgbColor, reset) => {
    console.log(reset);
    const text = !reset ? `
        .website-background{ RGB(${rgbColor[0][0]},${rgbColor[0][1]},${rgbColor[0][2]});}
        
        
        .element-text{ RGB(${rgbColor[1][0]},${rgbColor[1][1]},${rgbColor[1][2]});}       
        
         
        .element-border{ RGB(${rgbColor[2][0]},${rgbColor[2][1]},${rgbColor[2][2]})}    
        
            
        .element-background{ RGB(${rgbColor[3][0]},${rgbColor[3][1]},${rgbColor[3][2]});}      
        
          
        .header{ RGB(${rgbColor[4][0]},${rgbColor[4][1]},${rgbColor[4][2]});}` : '';


    document.querySelector('#css-rules').textContent = text;
}

const clean = () => {
    const init = [
        [255,255,255],
        [255,255,255],
        [255,255,255],
        [255,255,255],
        [255,255,255],
    ];

    paint(init);
    generateRules(init, true);
}

const paint = (rgbColor) => {
    document.querySelector('#color1').style.backgroundColor = 
    `rgb(${rgbColor[0][0]},${rgbColor[0][1]},${rgbColor[0][2]})`;

    document.querySelector('#color2').style.backgroundColor = 
    `rgb(${rgbColor[1][0]},${rgbColor[1][1]},${rgbColor[1][2]})`;

    document.querySelector('#color3').style.backgroundColor = 
    `rgb(${rgbColor[2][0]},${rgbColor[2][1]},${rgbColor[2][2]})`;

    document.querySelector('#color4').style.backgroundColor = 
    `rgb(${rgbColor[3][0]},${rgbColor[3][1]},${rgbColor[3][2]})`;

    document.querySelector('#color5').style.backgroundColor = 
    `rgb(${rgbColor[4][0]},${rgbColor[4][1]},${rgbColor[4][2]})`;
}

const getColor = (actualNumber) => {
    const difference = actualNumber - (359 - actualNumber);

    return 0 + difference;
}

document.querySelector('#clean').addEventListener("click", () => { clean(); });
document.querySelector('#new').addEventListener("click", () => { randomPalette(); });