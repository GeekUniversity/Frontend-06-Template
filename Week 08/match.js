// find "a"
/*function match(string) {
    for (let c of string) {
        if (c == "a") {
            return true;
        }
        return false;
    }
}

match("I am groot");*/

// find "ab"
/*function match(string) {
    let foundA = false;
    for (let c of string) {
        if (c == "a") {
            foundA = true;
        } else if (foundA && c == "b") {
            return true;
        } else {
            foundA = false;
        }
        return false;
    }
}

match("I abm groot");*/

// find "abcdef"
/*function match(string) {
    let foundA = false;
    let foundB = false;
    let foundC = false;
    let foundD = false;
    let foundE = false;
    for (let c of string) {
        if (c == "a") {
            foundA = true;
        } else if (foundA && c == "b") {
            return true;
        } else if (foundB && c == "c") {
            return true;
        } else if (foundC && c == "d") {
            return true;
        } else if (foundD && c == "e") {
            return true;
        } else if (foundE && c == "f") {
            return true;
        } else {
            foundA = false;
            foundB = false;
            foundC = false;
            foundD = false;
            foundE = false;
        }
        return false;
    }
}

match("I mabcdefgroot");*/

// 状态机 find "abcdef"
/*function match(string) {
    let state = start;
    for(let c of string) {
        state = state(c);
    }
    return state === end;
}

function start(c) {
    if(c === "a") {
        return foundA;
    } else {
        return start;
    }
}

function end(c) {
    return end;
}

function foundA(c) {
    if(c === "b") {
        return foundB;
    } else {
        return start(c);
    }
}

function foundB(c) {
    if(c === "c") {
        return foundC;
    } else {
        return start(c);
    }
}

function foundC(c) {
    if(c === "d") {
        return foundD;
    } else {
        return start(c);
    }
}

function foundD(c) {
    if(c === "e") {
        return foundE;
    } else {
        return start(c);
    }
}

function foundE(c) {
    if(c === "f") {
        return end;
    } else {
        return start(c);
    }
}

match("I mabcdefgroot");*/

// 状态机 find "abcabx"
/*function match(string) {
    let state = start;
    for(let c of string) {
        state = state(c);
    }
    return state === end;
}

function start(c) {
    if(c === "a") {
        return foundA;
    } else {
        return start;
    }
}

function end(c) {
    return end;
}

function foundA(c) {
    if(c === "b") {
        return foundB;
    } else {
        return start(c);
    }
}

function foundB(c) {
    if(c === "c") {
        return foundC;
    } else {
        return start(c);
    }
}

function foundC(c) {
    if(c === "a") {
        return foundA2;
    } else {
        return start(c);
    }
}

function foundA2(c) {
    if(c === "b") {
        return foundB2;
    } else {
        return start(c);
    }
}

function foundB2(c) {
    if(c === "x") {
        return end;
    } else {
        return foundB(c);
    }
}

match("abcabx");*/

// 状态机 find "abababx"
/*function match(string) {
    let state = start;
    for(let c of string) {
        state = state(c);
    }
    return state === end;
}

function start(c) {
    if(c === "a") {
        return foundA;
    } else {
        return start;
    }
}

function end(c) {
    return end;
}

function foundA(c) {
    if(c === "b") {
        return foundB;
    } else {
        return start(c);
    }
}

function foundB(c) {
    if(c === "a") {
        return foundA2;
    } else {
        return start(c);
    }
}

function foundA2(c) {
    if(c === "b") {
        return foundB2;
    } else {
        return start(c);
    }
}

function foundB2(c) {
    if(c === "a") {
        return foundA3;
    } else {
        return start(c);
    }
}

function foundA3(c) {
    if(c === "b") {
        return foundB3;
    } else {
        return start(c);
    }
}

function foundB3(c) {
    if(c === "x") {
        return end;
    } else {
        return foundB2(c);
    }
}

console.log(match("abababx"));*/
