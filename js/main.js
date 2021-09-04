var LoadingDiv = document.getElementById('LoadingDiv')
var MenuDiv = document.getElementById('MenuDiv')
var ProyectTab = document.getElementById('ProyectTab')

var messages = [
    "Loading text",
    "Loading js",
    "Loading images",
    "Sending your IP to FBI",
    "Just kidding",
    "Maybe not...",
    "Loaded: 100/100",
    "Starting..."
]

var data = [
    "Juan Pedro Goicochea",
    "Tel: +51 995 551 239",
    "Email: juanpe500@outlook.com",
    "Country: Lima - Perú",
]

var desc = [
    "Summary: I love programming, everything. Make games, bots, automations, programs, webs, stores, emulators, solutions to deficiencies, Apis, and AI. ",
    "I only include the languages ​​that I know 100%. I have played with all the other languages ​​and finally documentation and knowing how to program is the guide.",
    "I'm a big fan of efficient code and using the terminal."
]

var lenguajes = [
    "*[Python]",
    "*[C#]",
    "*[Java]",
    "*[Javascript]",
    "*[Lua]",
    "*[SQL]",
    "*[Spanish]",
    "*[English]"
]

var proyects = [
    "*[LM Roleplay]",
    "*[Miners Monitor]",
    "*[Punch Time]",
    "*[Transparencer]",
    "*[Looker]",
    "*[Bots]",
    "*[Online Stores]",
    "*[Django Intranet]"
]

var lmtitle = [
    "888          e    e        888~-_            888                     888",
    "888         d8b  d8b       888   \   e88~-_  888  e88~~8e  888-~88e  888   /~~~8e  Y88b  //",
    "888        d888bdY88b      888    | d888   i 888 d888  88b 888  888b 888       88b  Y888//",
    "888       / Y88Y Y888b     888   /  8888   | 888 8888__888 888  8888 888  e88~-888   Y8//",
    "888      /   YY   Y888b    888_-~   Y888   ' 888 Y888    , 888  888P 888 C888  888    Y/",
    "888____ /          Y888b   888 ~-_   '88_-~  888  '88___/  888-_88'  888  '88_-888   //",
    "                                                           888                     _//",
    "                                                           888       By JP"
]

var RavenminerStatusTitle = [
    " *                                  *                                   ",
    " (  `                               (  `                      )           ",
    " )\))(   (            (   (         )\))(              (   ( /(      (    ",
    "((_)()\  )\   (      ))\  )(   (   ((_)()\   (    (    )\  )\()) (   )(   ",
    "(_()((_)((_)  )\ )  /((_)(()\  )\  (_()((_)  )\   )\ )((_)(_))/  )\ (()\  ",
    "|  \/  | (_) _(_/( (_))   ((_)((_) |  \/  | ((_) _(_/( (_)| |_  ((_) ((_) ",
    "| |\/| | | || ' \))/ -_) | '_|(_-< | |\/| |/ _ \| ' \))| ||  _|/ _ \| '_| ",
    "|_|  |_| |_||_||_| \___| |_|  /__/ |_|  |_|\___/|_||_| |_| \__|\___/|_| By JP"                                                               
]

var lminfo = [
    "LM Roleplay            <button onclick='Conectarse()' class='b all'>[Conectarse]</button>",
    "Platform:              MTA San Andreas",
    "Language:              Lua/javascript/python",
    "Integrations:          MySQL, Discord Bots, Log System, etc",
    "Cuentas registradas:   249,215",
    "Jugadores diarios:     2,512",
    "IP:                    mtasa://144.217.120.177:22126",
    "<br>",
    "Summary:               Online Roleplay in a open world scripted in the most popular game GTA San Andreas,",
    "                       implementing a modification to allowing reprogram the game in a custom one, ",
    "                       allowing player to interact, live and simulate real-life situations behind a screen.",
    "Implementations:       I have made Bot integrations with discord to allow the server community to keep ",
    "                       interacting with the game even if they are not connected.",
    "                       Also many of the game interfaces are made in html5/css/js to give the best UI experience, ",
    "                       I've made so many for this game, Whatsapp clone named \"Wasap\" for the players, 2048 game, ",
    "                       calculators, contact systems, web browsers, and a Ads system.",
    "Images:                "
]

var RavenminerStatusInfo = [
    "Miners Monitor         <button onclick='RavenminerStatus()' class='b all'>[Ir]</button>",
    "Language:              Html & js",
    "Integrations:          RavenMiners api",
    "Link:                  https://juanpe500.github.io/RavenminerStatus/",
    "<br>",
    "Summary:               Simple web interface with added features for basic ravenminer pool, with this",
    "                       notification sounds can be setted, as many extra currencies convertions.",
    "Images:                "
]

const sleepNow = (delay) => new Promise ((resolve) => setTimeout(resolve, delay))

function openCV(){
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
}

function Conectarse(){
    window.open('mtasa://144.217.120.177:22003',"_self")
}

function RavenminerStatus(){
    window.open('https://juanpe500.github.io/RavenminerStatus/',"_self")
}

async function PrintTable(div,table,stringOpen,StringClose,waitTime){
    for (let index = 0; index < table.length; index++) {
        const element = table[index];
        div.innerHTML = div.innerHTML + stringOpen + element + StringClose
        await sleepNow(waitTime)
    }
}

async function openProyect(x){
    ProyectTab.innerHTML = ""
    if (x==0){
        await PrintTable(ProyectTab,lmtitle,"<p class='all' style='white-space: pre;'>","</p>",20)
        await PrintTable(ProyectTab,lminfo,"<p class='all' style='white-space: pre;'>","</p>",20)
        ProyectTab.innerHTML = ProyectTab.innerHTML + ""
    }else if (x==1){
        await PrintTable(ProyectTab,RavenminerStatusTitle,"<p class='all' style='white-space: pre;'>","</p>",20)
        await PrintTable(ProyectTab,RavenminerStatusInfo,"<p class='all' style='white-space: pre;'>","</p>",20)
        ProyectTab.innerHTML = ProyectTab.innerHTML + ""
    }
}

async function ListLenguageProyects(x){
    ProyectTab.innerHTML = ""
    if (x==4){
        await PrintTable(ProyectTab,lmtitle,"<p class='all' style='white-space: pre;'>","</p>",20)
        await PrintTable(ProyectTab,lminfo,"<p class='all' style='white-space: pre;'>","</p>",20)
        ProyectTab.innerHTML = ProyectTab.innerHTML + ""
    }
}

async function LoadIntro(){
    await PrintTable(LoadingDiv,messages,"<p class='all'>","</p>",30)
    LoadingDiv.innerHTML = ''
    LoadingDiv.style.display = 'none'
    await PrintTable(MenuDiv,data,"<p class='all'>","</p>",20)
    MenuDiv.innerHTML = MenuDiv.innerHTML + "<p class='all'>CV: <button onclick='openCV()' class='all b'>[OPEN]</button></p>"
    MenuDiv.innerHTML = MenuDiv.innerHTML + "<br>"
    await PrintTable(MenuDiv,desc,"<p class='all'>","</p>",20)
    MenuDiv.innerHTML = MenuDiv.innerHTML + "<br>"
    MenuDiv.innerHTML = MenuDiv.innerHTML + "<p class='all'>Languages:</p>"

    for (let index = 0; index < lenguajes.length; index++) {
        const element = lenguajes[index];
        MenuDiv.innerHTML = MenuDiv.innerHTML + "<button onclick='ListLenguageProyects("+index+")' class='all b'>" + element + "</button><br>"
        await sleepNow(20)
    }
    MenuDiv.innerHTML = MenuDiv.innerHTML + "<br>"
    MenuDiv.innerHTML = MenuDiv.innerHTML + "<p class='all'>Proyects:</p>"
    for (let index = 0; index < proyects.length; index++) {
        const element = proyects[index];
        MenuDiv.innerHTML = MenuDiv.innerHTML + "<button onclick='openProyect("+index+")' class='all b'>" + element + "</button><br>"
        await sleepNow(20)
    }
}
LoadIntro()
