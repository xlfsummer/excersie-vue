export default class Color{
    r: number;
    g: number;
    b: number;

    /** @example new Color(117, 0, 255) */
    constructor(r: number, g: number, b:number);

    /** @example new Color(0xffcc00) */
    constructor(hexValue: number);

    /** @example new Color("#ffcc00") */
    constructor(hexValue: string);

    /** @example new Color("rgb(117,0,255)") */
    constructor(rgb: string);

    constructor(){
        this.set.apply(this, arguments);
    }

    set(){
        let args = ColorParser.normalizeArgs(arguments);
        this.r = args[0];
        this.g = args[1];
        this.b = args[2];
    }

    toString(type: "rgb" | "hex" = "rgb"): string{
        if(type == "rgb"){
            return `rgb(${this.r},${this.g},${this.b})`
        }else{
            let hex = n => n.toString(16).padStart(2, "0");
            return `#` + hex(this.r) + hex(this.g) + hex(this.b);
        }
    }

    valueOf(): number{
        return this.r << 16 | this.g << 8 | this.b;
    }
}

interface INormalColorArgs {
    0: number, //r
    1: number, //g
    2: number, //b
    length: number
};

class ColorParser{
    static normalizeArgs(args: IArguments): INormalColorArgs{
        let arg0 = args[0];
        let arg1 = args[1];
        let arg2 = args[2];
        if(typeof arg0 == "string" && /#[\da-f]{6}/i.test(arg0))
            return ColorParser.hexStringColor(arg0);

        if(typeof arg0 == "string" && /rgb\(\d+,\d+,\d+\)/.test(arg0))
            return ColorParser.rgbStringColor(arg0);
            
        if (
            typeof arg0 == "number" &&
            typeof arg1 == "number" &&
            typeof arg2 == "number" &&
            [arg0, arg1, arg2].every(arg=> arg >= 0 && arg <= 255 && arg == ~~arg)
        ) return [arg0, arg1, arg2];

        if(
            typeof arg0 == "number" &&
            arg0 >= 0x000000 &&
            arg0 <= 0xffffff &&
            arg0 == ~~arg0
        ) return ColorParser.hexNumberColor(arg0);

        throw new Error("color value not valid:" + JSON.stringify(arguments));
    }

    static hexNumberColor(value: number): INormalColorArgs{
        let r = (value & 0xff0000) >> 16;
        let g = (value & 0x00ff00) >> 8;
        let b = value & 0x0000ff;
        return [r, g, b];
    }

    static hexStringColor(value: string): INormalColorArgs{
        let r = parseInt(value.substr(1,2), 16);
        let g = parseInt(value.substr(3,2), 16);
        let b = parseInt(value.substr(5,2), 16);
        return [r, g, b];
    }

    static rgbStringColor(value: string): INormalColorArgs{
        let [,r,g,b] = /rgb\((\d+),(\d+),(\d+)\)/g.exec(value);
        return [+r, +g, +b];
    }
}
