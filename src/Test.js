{ "type": "get_background_image", "requestDate": "2019-11-07T13:06:45.683Z" }
let x = document.querySelectorAll('.safetyLevel');
undefined
x
NodeList(3) [p.safetyLevel, p.safetyLevel, p.safetyLevel]
let i;
undefined
i
undefined
for (i = 0; i < x.length; i++) {
    console.log(x[i].innerHTML);
}
VM391: 2 Safe
VM391: 2 Suspicious
VM391: 2 Safe
undefined
for (i = 0; i < x.length; i++) {
    if (x[i].innerHTML === " Safe ") {
        console.log(x[i].innerHTML)
    }
}
2 VM552: 3 Safe
undefined
for (i = 0; i < x.length; i++) {
    if (x[i].innerHTML === " Suspicious ") {
        console.log(x[i].innerHTML)
    }
}
VM565: 3 Suspicious
undefined
for (i = 0; i < x.length; i++) {
    if (x[i].innerHTML === " Suspicious ") {
        x[i].classList.add("suspiciousLevel");
    }
}
undefined
for (i = 0; i < x.length; i++) {
    if (x[i].innerHTML === " Suspicious ") {
        x[i].classList.remove("suspiciousLevel");
    }
}
undefined
for (i = 0; i < x.length; i++) {
    if (x[i].innerHTML === " Suspicious ") {
        x[i].classList.add("suspiciousLevel");
    } else if (x.[i].innerHTML === " Safe ") {
        x[i].classList.add("safeLevel");
    } else if (x.[i].innerHTML === " Forbidden ") {
        x[i].classList.add("forbiddenLevel");
    } else if (x.[i].innerHTML === " Avoid ") {
        x[i].classList.add("avoidLevel");
    } else {
        console.log(x[i]);
    }
}
VM967: 4 Uncaught SyntaxError: Unexpected token '['
for (i = 0; i < x.length; i++) {
    if (x[i].innerHTML === " Suspicious ") {
        x[i].classList.add("suspiciousLevel");
    } else if (x[i].innerHTML === " Safe ") {
        x[i].classList.add("safeLevel");
    } else if (x[i].innerHTML === " Forbidden ") {
        x[i].classList.add("forbiddenLevel");
    } else if (x[i].innerHTML === " Avoid ") {
        x[i].classList.add("avoidLevel");
    } else {
        console.log(x[i]);
    }
}
undefined

function Test1() {
    for (i = 0; i < x.length; i++) {
        if (x[i].innerHTML === " Suspicious ") {
            x[i].classList.add("suspiciousLevel");
        } else if (x[i].innerHTML === " Safe ") {
            x[i].classList.add("safeLevel");
        } else if (x[i].innerHTML === " Forbidden ") {
            x[i].classList.add("forbiddenLevel");
        } else if (x[i].innerHTML === " Avoid ") {
            x[i].classList.add("avoidLevel");
        } else {
            console.log(x[i]);
        }
    }
}
undefined
Test1
ƒ Test1() {
        for (i = 0; i < x.length; i++) {
            if (x[i].innerHTML === " Suspicious ") {
                x[i].classList.add("suspiciousLevel");
            } else if (x[i].innerHTML === " Safe ") {
                x[i].classList.add("safeLevel");…
                function Test2() {
                    for (i = 0; i < x.length; i++) {
                        if (x[i].innerHTML === " Suspicious ") {
                            x[i].classList.remove("suspiciousLevel");
                        } else if (x[i].innerHTML === " Safe ") {
                            x[i].classList.remove("safeLevel");
                        } else if (x[i].innerHTML === " Forbidden ") {
                            x[i].classList.remove("forbiddenLevel");
                        } else if (x[i].innerHTML === " Avoid ") {
                            x[i].classList.remove("avoidLevel");
                        } else {
                            console.log(x[i]);
                        }
                    }



                    VM1175: 16 Uncaught SyntaxError: Unexpected end of input
                    test2
                    VM1189: 1 Uncaught ReferenceError: test2 is not defined
                    at < anonymous >: 1: 1(anonymous) @ VM1189: 1
                    Test1
                    ƒ Test1() {
                            for (i = 0; i < x.length; i++) {
                                if (x[i].innerHTML === " Suspicious ") {
                                    x[i].classList.add("suspiciousLevel");
                                } else if (x[i].innerHTML === " Safe ") {
                                    x[i].classList.add("safeLevel");…
                                    function Test3() {
                                        for (i = 0; i < x.length; i++) {
                                            if (x[i].innerHTML === " Suspicious ") {
                                                x[i].classList.remove("suspiciousLevel");
                                            } else if (x[i].innerHTML === " Safe ") {
                                                x[i].classList.remove("safeLevel");
                                            } else if (x[i].innerHTML === " Forbidden ") {
                                                x[i].classList.remove("forbiddenLevel");
                                            } else if (x[i].innerHTML === " Avoid ") {
                                                x[i].classList.remove("avoidLevel");
                                            } else {
                                                console.log(x[i]);
                                            }
                                        }
                                    }
                                    undefined
                                    Test3
                                    ƒ Test3() {
                                            for (i = 0; i < x.length; i++) {
                                                if (x[i].innerHTML === " Suspicious ") {
                                                    x[i].classList.remove("suspiciousLevel");
                                                } else if (x[i].innerHTML === " Safe ") {
                                                    x[i].classList.remove("safeLev…
                                                            test3() VM1322: 1 Uncaught ReferenceError: test3 is not defined at < anonymous >: 1: 1(anonymous) @ VM1322: 1 Test3() undefined Test1() undefined