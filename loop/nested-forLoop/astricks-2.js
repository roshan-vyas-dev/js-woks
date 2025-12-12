for (let r = 1; r <= 5; r++) {
    let pattern = "";

    for (let c = 1; c <= 9; c++) {
        if (c + r == 6) {
            pattern += "* "
        }
        else if (c - r == 4) {
            pattern += "* "
        }
        else if (r == 5 && c % 2 != 0) {
            pattern += "* ";

        }
        else {
            pattern += "  "
        }

    }
    console.log(pattern);

}