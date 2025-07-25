// Declarations to shorten referencing later.
const btn_win_select = document.getElementById("btn_win_select");
const btn_linux_select = document.getElementById("btn_linux_select");

const btn_win_dl = document.getElementById("btn_win_dl");
const btn_linux_dl = document.getElementById("btn_linux_dl");

// Lazy way to fix that overextending hyperlink by replacing it with this 
btn_win_dl.addEventListener( "click", () => { installWin(); } );
btn_linux_dl.addEventListener( "click", () => { installLinux(); } );

const btn_back = document.getElementById("btn_back");
const windows_only = document.getElementsByClassName("windows_only");
const linux_only = document.getElementsByClassName("linux_only")
const all_versions = document.getElementById("all_versions");
const choose_game_area = document.getElementById("choose-game-area");

const download_link = "https://dl.prefortress.com/0.7/pf2_0.7.4.7z"

const browser_hash = window.location.hash.split('#')[1];

var url = window.location.href;   


// Back button that disables itself and current download buttons and displays select buttons

function windows_onlyRender(state)
{
    for (var i = 0; i < windows_only.length; i++) {
        windows_only[i].style.display = state ? "block" : "none";
    }
}

function linux_onlyRender(state)
{
    for (var i = 0; i < linux_only.length; i++) {
        linux_only[i].style.display = state ? "block" : "none";
    }
}

function backPage()
{
    window.history.pushState('Selection', 'Select OS', '/download/#list');

    btn_back.style.display = "none";

    btn_win_dl.style.display = "none";
    btn_linux_dl.style.display = "none";

    btn_win_select.style.display = "block";
    btn_linux_select.style.display = "block";

    windows_onlyRender(false)
    linux_onlyRender(false)

    all_versions.style.display = "none";
}

// Called when an OS is selected
function showBackBtn()
{
    btn_back.style.display = "block";
    
    btn_win_select.style.display = "none";
    btn_linux_select.style.display = "none";
}

// Lets the user select the OS
function winSelect()
{   
    window.history.pushState('Windows', 'Chose Windows', '/download/#windows');

    btn_win_dl.style.display = "block";
    windows_onlyRender(true)
    all_versions.style.display = "block";
    showBackBtn();
}

function linuxSelect()
{
    window.history.pushState('Linux', 'Chose Linux', '/download/#linux');

    btn_linux_dl.style.display = "block";
    linux_onlyRender(true)
    all_versions.style.display = "block"
    showBackBtn()
}

// These functions actually take the user to the installation.
// Note: keep these functions separate for now if maybe you want to redirect OSes to other links in the future?
function installWin()
{
    window.open(download_link);
}

function installLinux()
{
    window.open(download_link);
}

// Hides all buttons except back button and then shows the detected option
window.onload = function() 
{
    backPage()

    if( navigator.userAgent.includes("Win")  ) 
    {
        winSelect()
    }
    if( !navigator.userAgent.includes("Win") ) 
    {
        linuxSelect()
    }
};
