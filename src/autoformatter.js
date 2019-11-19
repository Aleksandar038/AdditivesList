let i=0;

function autoformatter(item) {
    for (i = 0; i < item.length; i++) {
        if (item[i].innerHTML === " Suspicious ") {
            item[i].classList.add("suspiciousLevel");
        }
        else if (item[i].innerHTML === " Safe ") {
            item[i].classList.add("safeLevel");
        }
        else if (item[i].innerHTML === " Forbidden ") {
            item[i].classList.add("forbiddenLevel");
        }
        else if (item[i].innerHTML === " Avoid ") {
            item[i].classList.add("avoidLevel");
        }
        else {
            console.log(item[i]);
        }
    }
}

export default autoformatter;