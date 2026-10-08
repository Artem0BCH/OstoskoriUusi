export function laskeHinta(hinta, maara) {
    return hinta * maara;
}

export function onTyhja(teksti) {
    return teksti.trim() === "";
}

export function isoilleKirjaimille(teksti) {
    return teksti.toUpperCase();
}
