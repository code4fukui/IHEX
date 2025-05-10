import * as t from "https://deno.land/std/testing/asserts.ts";
import { IHEX } from "./IHEX.js";

Deno.test("simple", () => {
  const s = `:0B0010006164647265737320676170A7
:00000001FF
`;
  const bin = new Uint8Array([
    0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x20, 0x67, 0x61, 0x70,    
  ]);
  t.assertEquals(IHEX.decode(s), bin);
});
