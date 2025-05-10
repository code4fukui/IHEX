import { IHEX } from "./IHEX.js";

const fn = Deno.args[0];
if (!fn) {
  console.log("ihex2bin [fn.ihx] ([fn.bin])");
  Deno.exit();
}
const dst = fn.substring(0, fn.lastIndexOf(".ihx")) + ".bin";
const fndst = Deno.args[1] ?? dst;
const ihex = await Deno.readTextFile(fn);
await Deno.writeFile(fndst, IHEX.decode(ihex));
