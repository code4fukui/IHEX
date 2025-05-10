import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";

// https://en.wikipedia.org/wiki/Intel_HEX

export class IHEX {
  static decode(txt) {
    const ss = txt.split("\n");
    const res = [];
    for (const s of ss) {
      if (s.length == 0 || s[0] != ":") continue;
      const bin = Base16.decode(s.substring(1));
      //const cnt = bin[0];
      //const ad = (bin[1] << 8) | bin[2];
      const type = bin[3];
      if (type == 0) { // Data
        for (let i = 4; i < bin.length - 1; i++) {
          res.push(bin[i]);
        }
      } else if (type == 1) { // eof
        break;
      }
    }
    return new Uint8Array(res);
  }
}
