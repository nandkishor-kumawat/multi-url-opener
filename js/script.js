let help = document.querySelectorAll('.help');
var faq1 = document.querySelector('#faq1');
let accordion = document.querySelectorAll('.accordion');
let pnl = document.querySelectorAll('.panel');
let allLines = document.querySelector('#murls-list');


function show_help() {
    var panel1 = faq1.nextElementSibling;
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
    var url = document.getElementById('surl').value;
    var num = document.getElementById('url-number').value;

    if (num > 0 && url != "") {
        for (var i = 0; i < num; i++) {
            if (!url) return;
            if (url.substr(0, 5) != 'http:' && url.substr(0, 6) != 'https:') {
                url = 'https://' + url;
            }
            var urlOpened = window.open(url);
            if (!urlOpened) {
                help[0].style.display = 'block';
            }

        }
    } else {
        alert('Please enter a valid value or enter url');
    }
}

function open_all() {
    let murls = document.getElementById('urls-list').value;
    murls = murls.split(/[\s,]+/);
    if (murls != "") {
        for (var i = 0; i < murls.length; i++) {
            var strLink = murls[i];
            if (!strLink) return;
            if (strLink.substr(0, 5) != 'http:' && strLink.substr(0, 6) != 'https:') {
                strLink = 'https://' + strLink;
            }
            allLines.innerHTML += '<div class="murl_text"><a href="' + strLink + '" target="_blank">' + murls[i] + '</a></div>';
            var WindowOpened = window.open(strLink);
            if (!WindowOpened) {
                help[1].style.display = 'block'
            }
            WindowOpened = null

        }
    } else {
        alert('Please enter urls');
    }
}

document.getElementById('resetall').addEventListener('click', function () {
    document.getElementById('murls-list').innerHTML = "";
});

//accordion


for (var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            this.classList.remove("active")
        } else {
            Array.from(pnl).forEach(e => e.style.maxHeight = null);
            Array.from(accordion).forEach(e => e.classList.remove("active"));
            this.classList.add("active");
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}