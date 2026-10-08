import { describe, it, expect } from "vitest";
import { laskeHinta } from "../src/utils/testit.js";
import { onTyhja } from "../src/utils/testit.js";
import { isoilleKirjaimille } from "../src/utils/testit.js";

describe("Ostos testit", () => {
    it("Saadanko 6 jos hinta 2 ja määrä 3", () => {
        expect(laskeHinta(2, 3)).toBe(6);
    });

    it("Tyhjä teksti on tyhjä", () => {
        expect(onTyhja("   ")).toBe(true);
    });

    it("Maito muuttuu isoiksi kirjaimiksi", () => {
        expect(isoilleKirjaimille("maito")).toBe("MAITO");
    });
});
