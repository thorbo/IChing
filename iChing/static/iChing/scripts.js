var leaf = ["\\", "|", "/", "|"]
var coin = ["         _______         \n        /    /::\\        \n       /    /::::\\       \n      /    /::::::\\      \n     /    /::::::::\\     \n    /    /:::/~~\\:::\\    \n   /    /:::/    \\:::\\   \n  /    /:::/ \\    \\:::\\  \n /____/:::/   \\____\\:::\\ \n|    |:::|     |    |:::|\n|    |:::|     |____|:::|\n \\    \\:::\\   /    /:::/ \n  \\    \\:::\\ /    /:::/  \n   \\    \\:::\\    /:::/   \n    \\    \\:::\\__/:::/    \n     \\    \\::::::::/     \n      \\    \\::::::/      \n       \\    \\::::/       \n        \\____\\::/        \n             ~~         \n", 
"         _______________         \n        /:::::::::::::::\\        \n       /:::::::::::::::::\\       \n      /:::::::::::::::::::\\      \n     /:::::::::::::::::::::\\     \n    /::::::/~~~~~~~~~\\::::::\\    \n   /::::::/ /       \\ \\::::::\\   \n  /::::::/ /         \\ \\::::::\\  \n /::::::/_/           \\_\\::::::\\ \n|::::::| |             | |::::::|\n|::::::|_|             |_|::::::|\n \\::::::\\ \\           / /::::::/ \n  \\::::::\\ \\         / /::::::/  \n   \\::::::\\ \\_  _   / /::::::/   \n    \\::::::\\_________/::::::/    \n     \\:::::::::::::::::::::/     \n      \\:::::::::::::::::::/      \n       \\:::::::::::::::::/       \n        \\:::::::::::::::/        \n         ~~                      ", 
"         _______         \n        /::\\    \\        \n       /::::\\    \\       \n      /::::::\\    \\      \n     /::::::::\\    \\     \n    /:::/~~\\:::\\    \\    \n   /:::/    \\:::\\    \\   \n  /:::/    / \\:::\\    \\  \n /:::/____/   \\:::\\____\\ \n|:::|    |     |:::|    |\n|:::|____|     |:::|    |\n \\:::\\    \\   /:::/    / \n  \\:::\\    \\ /:::/    /  \n   \\:::\\    /:::/    /   \n    \\:::\\__/:::/    /    \n     \\::::::::/    /     \n      \\::::::/    /      \n       \\::::/    /       \n        \\::/____/        \n         ~~              ", 
"         _______         \n        |       |        \n        |       |        \n        |       |        \n        |       |        \n        |       |        \n        |       |        \n        |_      |        \n        |       |        \n        |_____  |        \n        |  _____|        \n        |       |        \n        |       |        \n        |       |        \n        |       |        \n        |       |        \n        |       |        \n        |      _|        \n        |       |        \n        |_______|        \n", 
"         _______         \n        /    /$$\\        \n       /    /$$$$\\       \n      /    /$$$$$$\\      \n     /    /$$$$$$$$\\     \n    /    /$$$/~~\\$$$\\    \n   /    /$$$/    \\$$$\\   \n  /    /$$$/ \\    \\$$$\\  \n /____/$$$/   \\____\\$$$\\ \n|    |$$$|     |    |$$$|\n|    |$$$|     |____|$$$|\n \\    \\$$$\\   /    /$$$/ \n  \\    \\$$$\\ /    /$$$/  \n   \\    \\$$$\\    /$$$/   \n    \\    \\$$$\\__/$$$/    \n     \\    \\$$$$$$$$/     \n      \\    \\$$$$$$/      \n       \\    \\$$$$/       \n        \\____\\$$/        \n             ~~         \n", 
"         _______________         \n        /$$$$$$$$$$$$$$$\\        \n       /$$$$$$$$$$$$$$$$$\\       \n      /$$$$$$$$$$$$$$$$$$$\\      \n     /$$$$$$$$$$$$$$$$$$$$$\\     \n    /$$$$$$/~~~~~~~~~\\$$$$$$\\    \n   /$$$$$$/ /       \\ \\$$$$$$\\   \n  /$$$$$$/ /         \\ \\$$$$$$\\  \n /$$$$$$/_/           \\_\\$$$$$$\\ \n|$$$$$$| |             | |$$$$$$|\n|$$$$$$|_|             |_|$$$$$$|\n \\$$$$$$\\ \\           / /$$$$$$/ \n  \\$$$$$$\\ \\         / /$$$$$$/  \n   \\$$$$$$\\ \\   _  _/ /$$$$$$/   \n    \\$$$$$$\\_________/$$$$$$/    \n     \\$$$$$$$$$$$$$$$$$$$$$/     \n      \\$$$$$$$$$$$$$$$$$$$/      \n       \\$$$$$$$$$$$$$$$$$/       \n        \\$$$$$$$$$$$$$$$/        \n                     ~~         \n",
"         _______         \n        /$$\\    \\        \n       /$$$$\\    \\       \n      /$$$$$$\\    \\      \n     /$$$$$$$$\\    \\     \n    /$$$/~~\\$$$\\    \\    \n   /$$$/    \\$$$\\    \\   \n  /$$$/    / \\$$$\\    \\  \n /$$$/____/   \\$$$\\____\\ \n|$$$|    |     |$$$|    |\n|$$$|____|     |$$$|    |\n \\$$$\\    \\   /$$$/    / \n  \\$$$\\    \\ /$$$/    /  \n   \\$$$\\    /$$$/    /   \n    \\$$$\\__/$$$/    /    \n     \\$$$$$$$$/    /     \n      \\$$$$$$/    /      \n       \\$$$$/    /       \n        \\$$/____/        \n         ~~             \n",
"         _______         \n        |       |        \n        |       |        \n        |       |        \n        |       |        \n        |       |        \n        |       |        \n        |      _|        \n        |       |        \n        |  _____|        \n        |_____  |        \n        |       |        \n        |       |        \n        |       |        \n        |       |        \n        |       |        \n        |       |        \n        |_      |        \n        |       |        \n        |_______|        \n"]

var changeInterval
var moveInterval 

function toLeaves() {
    // Clear page. Some div elements may not be present depending on page.
    try {
        document.querySelector("#qform").style.display = "flex"
        document.querySelector("#coins").style.display = "none"
        document.querySelector("#flip").style.display = "none"
        document.querySelector("#hexstack").style.display = "none"
        document.querySelector("#fortune").style.display = "none"
    }
    catch (err) {
        console.log(err.message)
    }

    // Start leaf background. Begin leaf movements. 
    initLeaf()
    changeInterval = setInterval(changeLeaf, 200)
    moveInterval = setInterval(moveLeaf, 2000)
}

function initLeaf() {
    // create DOM elements for leaves
    let numLeaves = 10
    let body = document.querySelector("body")
    for (i=0; i < numLeaves; i++){
        let newLeaf = document.createElement("h1")
        newLeaf.classList.add("leaf")
        newLeaf.dataset.value = Math.round(Math.random() * leaf.length)
        newLeaf.style.left = String(Math.random() * 100) + "%"
        newLeaf.style.top = String(Math.random() * 100) + "%"
        body.append(newLeaf)
    }
}

function moveLeaf() {
    // Move each leaf to new random location
    document.querySelectorAll(".leaf").forEach(element => {
        element.style.left = String(Math.random() * 100) + "%"
        element.style.top = String(Math.random() * 100) + "%"
    })
}

function changeLeaf() {
    // Update leaf to next appearance state
    document.querySelectorAll(".leaf").forEach(element => {
        element.dataset.value = (parseInt(element.dataset.value) + 1) % leaf.length
        element.innerHTML = leaf[element.dataset.value]
    })

}

function toCoins() {
    // Clear leaf animations and remove leaves from DOM
    clearInterval(changeInterval)
    clearInterval(moveInterval)
    document.querySelectorAll(".leaf").forEach(element => {
        element.parentElement.removeChild(element)
    })
    
    // Swap visible elements
    document.querySelector("#qform").style.animationPlayState = "running"
    document.querySelector("#coins").style.display = "flex"
    document.querySelector("#coins").style.animationPlayState = "running"
    document.querySelector("#hexstack").style.display = "none"
    document.querySelector("#flip").style.display = "flex"

    // Start drawing coins on screen
    drawCoins()
}

function drawCoins() {
    // Update coin to next appearance state
    document.querySelector("#coins").childNodes.forEach(element => {
        if (element.nodeType == 1) {
            element.dataset.value = (parseInt(element.dataset.value) + 1) % coin.length
            element.innerHTML = coin[element.dataset.value]
        }
    })

}

function coinFlip() {
    // Animate coin flip
    let flipSpeed = 200
    let flipTurns = 12
    setIntervalNumber(drawCoins, flipSpeed, flipTurns)

    // When flip animation ends, add line to hexstack
    setTimeout(buildLine, flipSpeed*flipTurns)
}

function buildLine() {
    // Roll 3 random numbers, adding line to hexstack based on results
    let c1 = Math.round(Math.random())
    let c2 = Math.round(Math.random())
    let c3 = Math.round(Math.random())
    let hexstack = document.querySelector("#hexstack")
    let hexline = document.querySelector("#hex"+hexstack.dataset.value)
    hexstack.style.display = "block"

    if (c1 + c2 + c3 == 0) {
        hexline.innerHTML = "─── ───"
        hexline.dataset.value = 0
        hexline.style.color = "goldenrod"
    } else if (c1 + c2 + c3 == 1) {
        hexline.innerHTML = "─── ───"
        hexline.dataset.value = 1
    } else if (c1 + c2 + c3 == 2) {
        hexline.innerHTML = "───────"
        hexline.dataset.value = 2
    } else {
        hexline.innerHTML = "───────"
        hexline.dataset.value = 3
        hexline.style.color = "goldenrod"
    }
    hexstack.dataset.value = parseInt(hexstack.dataset.value) + 1

    // Switch to fortune view when hexstack is full
    if (hexstack.dataset.value == 6) {
        toFortune()
    }
}

function toFortune() {
    // Reset elements to display
    toLeaves()
    document.querySelector("#qform").style.display = "none"
    document.querySelector("#hexstack").style.display = "block"
    document.querySelector("#fortune").style.display = "block"

    // Show fortune based on hexstack value and save question to DB.
    var digits = getDigits()
    record()
    showFortune(digits, false)

    // Set response form to activate when user sees bottom of page
    document.querySelector("#response").style.display = "flex"

    document.querySelector("#showq").style.display = "flex"
    document.querySelector("#underline").style.display = "flex"
    document.querySelector("#showq").innerHTML = document.querySelector("#question").value
}

function getDigits() {
    // Return string of digits based on hexstack values
    var digits = ""
    for (i=0; i<6; i++) {
        hexline = document.querySelector("#hex"+i)
        digits += hexline.dataset.value
    }
    return digits
}

async function showFortune(digits, showall) {
    document.querySelector("#fortune").style.display = "block"
    let hexagram = await loadHex(digits)

    document.querySelector("#name").innerHTML = hexagram["name"]
    document.querySelector("#overview").innerHTML = hexagram["overview"]
    document.querySelector("#overview_title").innerHTML = "Overview"
    if ( hexagram["sequence"] ) {
        document.querySelector("#sequence").innerHTML = hexagram["sequence"]
        document.querySelector("#sequence_title").innerHTML = "Sequence"
    } else {
        document.querySelector("#sequence").parentElement.style.display = "none"
    }
    if ( hexagram["note"] ) {
        document.querySelector("#note").innerHTML = hexagram["note"]
    }
    document.querySelector("#judge_poem").innerHTML = hexagram["judgement_poem"]
    document.querySelector("#judge").innerHTML = hexagram["judgement"]
    document.querySelector("#judge_title").innerHTML = "The Judgement"
    document.querySelector("#image_poem").innerHTML = hexagram["image_poem"]
    document.querySelector("#image").innerHTML = hexagram["image"]
    document.querySelector("#image_title").innerHTML = "The Image"

    let count = 0

    for (i=0; i<6; i++) {
        let num = String(i+1)
        if (digits[i] == 0 | digits[i] == 3 | showall) {
            document.querySelector(`#emph${num}_title`).innerHTML = `Emphasis on the ${num} line means:`
            document.querySelector(`#emph${num}_poem`).innerHTML = hexagram[`emphasis${num}_poem`]
            document.querySelector(`#emph${num}`).innerHTML = hexagram[`emphasis${num}`]
            count += 1
        }
        else {
            document.querySelector(`#emph${num}_title`).parentElement.style.display = "none"
        }
    }
    if (count == 6) {
        if (hexagram["emphasisall_poem"].length > 0 | hexagram["emphasisall"].length > 0) {
            document.querySelector(`#emphall_title`).innerHTML = `Emphasis on all lines means:`
            document.querySelector("#emphall_poem").innerHTML = hexagram["emphasisall_poem"]
            document.querySelector("#emphall").innerHTML = hexagram["emphasisall"]
        } else {
            document.querySelector(`#emphall_title`).parentElement.style.display = "none"
        }
    } else {
        document.querySelector(`#emphall_title`).parentElement.style.display = "none"
    }
}

async function loadHex(digits) {
    // digits can be 6 digit (0-3) or numbers 1-64
    let hexagram = await fetch(`/getHex?digits=${digits}`)
    .then(response => response.json())
    return hexagram
}

async function drawHex(num, mode) {
    // if mode=false --> get hex object from database
    //      takes 6 digit codes and numbers 1-64. 
    //      returns DOM object representing a hexstack
    //      if 6 digit code provided, will highlight strong rows

    // if mode=true --> draw hex with 6-digit binary num
    if (mode) {
        var hexagram = {"digits": num}
    } else {
        var hexagram = await loadHex(num)
    }

    let square = document.createElement('div')
    square.classList.add('square')
    
    if ( !mode & num.length == 6) {
        var digits = num
    } else {
        var digits = "xxxxxx"
    }
    
    for (i=5; i >= 0; i--) {
        if (hexagram["digits"][i] == '1') {
            let row = document.createElement('div')
            row.classList.add('row')
            let long = document.createElement('div')
            long.classList.add('long')
            if (digits[i] == '3'){
                long.classList.add('gold')
            }
            row.append(long)
            square.append(row)
        } else {
            let row = document.createElement('div')
            row.classList.add('row')
            let short1 = document.createElement('div')
            let short2 = document.createElement('div')
            short1.classList.add('short')
            short2.classList.add('short')
            if (digits[i] == '0') {
                short1.classList.add('gold')
                short2.classList.add('gold')
            }
            row.append(short1)
            row.append(short2)
            square.append(row)
        }
        if (i == '3') {
            let row = document.createElement('div')
            row.classList.add('row')
            square.append(row)
        }
    }

    square.onclick= () => { location.href = `/hexagram/${num}`}
    return square
}

async function getAllNums() {
    // Returns dictionary of all hexagram {number: digits}
    let allNums = await fetch(`/getHex?digits=allnum`)
    .then(response => response.json())
    return allNums
}

async function record() {
    let query = document.querySelector("#question").value
    let digits = getDigits()

    let save = await fetch("/record", {
        method: "POST",
        body: JSON.stringify({
            "query": query,
            "digits": digits
        })
    })
}

async function loadRecords(page) {
    let records = await fetch(`/record?page=${page}`, {
        method: "GET"
    })
    .then(response => response.json())
    
    let recorddiv = document.querySelector('#records')
    recorddiv.innerHTML = ''

    records.forEach(async function(record) {
        let fortunediv = document.createElement('div')
        let left = document.createElement('div')
        let right = document.createElement('div')
        let fortune = document.createElement('div')
        let image = await drawHex(record["digits"], false)
        

        fortune.innerHTML = record["query"]
        fortune.style.maxWidth = "500px"
        left.append(fortune)
        left.classList.add("left")
        if (record["notes"]) {
            let comments = document.createElement('div')
            comments.innerHTML = record["notes"]
            comments.style.maxWidth = "500px"
            comments.classList.add("red")
            left.append(comments)
        }
        
        right.append(image)
        right.classList.add("right")
        if (record["relevance"]) {
            let relevance = document.createElement('div')
            relevance.innerHTML = `Relevance: ${record["relevance"]}`
            relevance.classList.add("red")
            relevance.style.margin = "10px"
            right.append(relevance)
        }
        fortunediv.append(left)
        fortunediv.append(right)
        recorddiv.append(fortunediv)
    })
}

function changePage(mode) {
    
    let page = document.querySelector('#page')
    let num = parseInt(page.innerHTML)

    if (mode == "next") {
        num = num + 1
    } else if (num > 1) {
        num = num - 1
    }
    page.innerHTML = num
    loadRecords(num)
}

function setIntervalNumber(callback, delay, repetition) {
    var x = 0
    var intervalID = window.setInterval(() => {
        callback()

        if (++x == repetition) {
            window.clearInterval(intervalID)
        }
    }, delay)
}

async function setResponse() {

    document.querySelector("#response").style.animationPlayState = "running"
    setTimeout(() => {
        document.querySelector("#response").style.animationPlayState = "paused"
        document.querySelector("#response").style.display = "none" 
    }, 6000)
    let comment = document.querySelector("#comments").value
    let relevance = 1
    let radios = document.getElementsByName("relevance")

    for (i=0; i<5; i++) {
        if (radios[i].checked) {
            relevance = radios[i].value
            break
        }
    }
    
    let push = await fetch('/record', {
        method: "PUT", 
        body: JSON.stringify({
            "query": document.querySelector("#question").value, 
            "digits": getDigits(),
            "relevance": relevance,
            "comments": comment,
        })
    })
    console.log(push)
}