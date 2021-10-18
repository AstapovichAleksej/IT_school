function stars(lines) {
    let maxStar = lines * 2 - 1;
    
    for (let i = 0; i < lines; i++) {

        let res = "";

        for (let k = 0; k < (maxStar - (i * 2) - 1) / 2; k++) {
            res += " ";
        }
        for (let j = 0; j < (i + 1) * 2 - 1; j++) {
            res += "*";
        }
        console.log(res);
    }
    for (let i = 1; i < lines; i++) {

        let res = "";

        for (let k = 0; k < i ; k++) {
            res += " ";
        }
        for (let j = 0; j < maxStar - i * 2; j++) {
            res += "*";
        }
        console.log(res);
    }
}


stars(19);