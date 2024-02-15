let help = document.querySelectorAll('.help');
let faq1 = document.querySelector('#faq1');
let accordions = document.querySelectorAll('.accordion');
let panels = document.querySelectorAll('.panel');
let allLines = document.querySelector('#murls-list');


function show_help() {
    let panel1 = faq1.nextElementSibling;
    if (panel1.style.maxHeight) {
        window.open('#faq1', '_parent')
    } else {
        faq1.click();
        setTimeout(function () {
            window.open('#faq1', '_parent')
        }, 300)
    }
}

function open_single() {
    let url = document.getElementById('surl').value;
    let num = document.getElementById('url-number').value;

    if (num <= 0) {
        alert("Enter a valid number (>0)");
        return;
    }

    if (!url) {
        alert('Please enter a url');
        return;
    }

    for (let i = 0; i < num; i++) {
        if (url.substr(0, 5) != 'http:' && url.substr(0, 6) != 'https:') {
            url = 'https://' + url;
        }
        let urlOpened = window.open(url);
        if (!urlOpened) {
            help[0].style.display = 'block';
        }
    }
}


function open_all() {
    let murls = document.getElementById('urls-list').value;
    murls = murls.split(/[\s,]+/);

    if (murls == "") {
        alert('Please enter urls');
        return;
    }

    for (let i = 0; i < murls.length; i++) {
        let strLink = murls[i];
        if (!strLink) return;
        if (strLink.substr(0, 5) != 'http:' && strLink.substr(0, 6) != 'https:') {
            strLink = 'https://' + strLink;
        }
        allLines.innerHTML += `<div class="murl_text"><a href="${strLink}" target="_blank">${murls[i]}</a></div>`;
        let WindowOpened = window.open(strLink);
        if (!WindowOpened) {
            help[1].style.display = 'block'
        }
        WindowOpened = null
    }
}

document.getElementById('resetall').addEventListener('click', function () {
    document.getElementById('murls-list').innerHTML = "";
});

//accordion
accordions.forEach(accordion => {
    accordion.addEventListener("click", function () {
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            this.classList.remove("active")
        } else {
            panels.forEach(e => e.style.maxHeight = null);
            accordions.forEach(e => e.classList.remove("active"));
            this.classList.add("active");
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
})