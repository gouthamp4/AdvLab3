var ElemNums = 12;
var elmSize = 12;
var valNum = 0;
var numLevel = 0;
var entered = true;
var decNumVal = 0;
var valFixed = 0;
var flagExponent = false;
var numbers = 0;

function arrElementPush() {
    this.valNum = 0;
    this.op = ""
}

function array(A) {
    this[0] = 0;
    for (k = 0; k < A; ++k) {
        this[k] = 0;
        this[k] = new arrElementPush()
    }
    this.gG = A
}
uI = new array(elmSize);

function insertElem(B, C, A) {
    if (numLevel == elmSize) {
        return false
    }
    for (i = numLevel; i > 0; --i) {
        uI[i].valNum = uI[i - 1].valNum;
        uI[i].op = uI[i - 1].op;
        uI[i].vg = uI[i - 1].vg
    }
    uI[0].valNum = B;
    uI[0].op = C;
    uI[0].vg = A;
    ++numLevel;
    return true
}
function popVal() {
    if (numLevel == 0) {
        return false
    }
    for (i = 0; i < numLevel; ++i) {
        uI[i].valNum = uI[i + 1].valNum;
        uI[i].op = uI[i + 1].op;
        uI[i].vg = uI[i + 1].vg
    }--numLevel;
    return true
}
function readValue() {
    if (flagExponent) {
        valNum = valNum * Math.exp(Hj * Math.LN10)
    }
    entered = true;
    flagExponent = false;
    decNumVal = 0;
    valFixed = 0
}
    function scientificFunctn(A) {
                if (A == 1 || A == 2 || A == 3 || A == 4 || A == 5 || A == 6 || A == 7 || A == 8 || A == 9 || A == 0) {
                    calculateNumbers(A)
                } else {
                    if ( A == "+" || A == "-" || A == "*" || A == "/") {
                        operationsCal(A)
                    } else {
                           
                                    if (A == ".") {
                                        if (entered) {
                                            valNum = 0;
                                            numbers = 1
                                        }
                                        entered = false;
                                        if ((decNumVal == 0) && (valNum == 0) && (numbers == 0)) {
                                            numbers = 1
                                        }
                                        if (decNumVal == 0) {
                                            decNumVal = 1
                                        }
                                        numbersRefresh()
                                    } else {
                                        if (A == "+/-") {
                                            if (flagExponent) {
                                                Hj = -Hj
                                            } else {
                                                valNum = -valNum
                                            }
                                            numbersRefresh()
                                        } else {
                                            if (A == "C") {
                                                numLevel = 0;
                                                flagExponent = false;
                                                valNum = 0;
                                                readValue();
                                                numbersRefresh()
                                            } else {
                                                if (A == "=") {
                                                    readValue();
                                                    while (numLevel > 0) {
                                                        expEval()
                                                    }
                                                    numbersRefresh()
                                                }
                                            }
                                        }
                                    }
                            
                    }
                }
    
        }
        
       
        
        function eraseValue(I) {
            if (typeof(cc) != "undefined") {
                return
            };
            var E = "" + I;
            if (E.indexOf("N") >= 0 || (I == 2 * I && I == 1 + I)) {
                return "Error "
            }
            var G = E.indexOf("e");
            if (G >= 0) {
                var A = E.substring(G + 1, E.length);
                if (G > 11) {
                    G = 11
                }
                E = E.substring(0, G);
                if (E.indexOf(".") < 0) {
                    E += "."
                } else {
                    j = E.length - 1;
                    while (j >= 0 && E.charAt(j) == "0") {
                        --j
                    }
                    E = E.substring(0, j + 1)
                }
                E += " " + A
            } else {
                var J = false;
                if (I < 0) {
                    I = -I;
                    J = true
                }
                var C = Math.floor(I);
                var K = I - C;
                var D = ElemNums - ("" + C).length - 1;
                if (!entered && valFixed > 0) {
                    D = valFixed
                }
                var F = " 1000000000000000000".substring(1, D + 2) + "";
                if ((F == "") || (F == " ")) {
                    F = 1
                } else {
                    F = parseInt(F)
                }
                var B = Math.floor(K * F + 0.5);
                C = Math.floor(Math.floor(I * F + 0.5) / F);
                if (J) {
                    E = "-" + C
                } else {
                    E = "" + C
                }
                var H = "00000000000000" + B;
                H = H.substring(H.length - D, H.length);
                G = H.length - 1;
                if (entered || valFixed == 0) {
                    while (G >= 0 && H.charAt(G) == "0") {
                        --G
                    }
                    H = H.substring(0, G + 1)
                }
                if (G >= 0) {
                    E += "." + H
                }
            }
            return E
        }
        
        function numbersRefresh() {
            var A = eraseValue(valNum);
            if (flagExponent) {
                if (Hj < 0) {
                    A += " " + Hj
                } else {
                    A += " +" + Hj
                }
            }
            if (A.indexOf(".") < 0 && A != "Error ") {
                if (entered || decNumVal > 0) {
                    A += "."
                } else {
                    A += " "
                }
            }
            if ("" == ("" + A)) {
                document.getElementById("mainFunction").innerHTML = " "
            } else {
                document.getElementById("mainFunction").innerHTML = A
            }
        }
        
        function expEval() {
            if (numLevel == 0) {
                return false
            }
            op = uI[0].op;
            Qk = uI[0].valNum;
            if (op == "+") {
                valNum = parseFloat(Qk) + valNum
            } else {
                if (op == "-") {
                    valNum = Qk - valNum
                } else {
                    if (op == "*") {
                        valNum = Qk * valNum
                    } else {
                        if (op == "/") {
                            valNum = Qk / valNum
                        } 
                    }
                }
            }
            popVal();
            if (op == "(") {
                return false
            }
            return true
        }
        

        
        function operationsCal(A) {
            readValue();
            if (A == "+" || A == "-") {
                vg = 1
            } else {
                if (A == "*" || A == "/") {
                    vg = 2
                } 
            }
            if (numLevel > 0 && vg <= uI[0].vg) {
                expEval()
            }
            if (!insertElem(valNum, A, vg)) {
                valNum = "NAN"
            }
            numbersRefresh()
        }
        
        
        function calculateNumbers(K) {
            if (entered) {
                valNum = 0;
                numbers = 0;
                entered = false
            }
            if (K == 0 && numbers == 0) {
                numbersRefresh();
                return
            }
            if (flagExponent) {
                if (Hj < 0) {
                    K = -K
                }
                if (numbers < 3) {
                    Hj = Hj * 10 + K;
                    ++numbers;
                    numbersRefresh()
                }
                return
            }
            if (valNum < 0) {
                K = -K
            }
            if (numbers < ElemNums - 1) {
                ++numbers;
                if (decNumVal > 0) {
                    decNumVal = decNumVal * 10;
                    valNum = valNum + (K / decNumVal);
                    ++valFixed
                } else {
                    valNum = valNum * 10 + K
                }
            }
            numbersRefresh()
        }
        
        
