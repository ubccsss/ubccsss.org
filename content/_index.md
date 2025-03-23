---
title: UBC Computer Science Student Society
---

Welcome to the Computer Science Student Society, the student club for
undergraduates at the
[UBC Department of Computer Science](https://www.cs.ubc.ca/). We provide a
social space where everyone’s welcome (in ICICS 021), run events, and represent
your interests to the department. For more events you may be interested in, please follow us
on our social media outlets.
<br/>

Join us on <a id="discord-serverhttpsdiscordggxf3wbydubf" href="https://discord.gg/xF3WbYDubF" target="_blank" rel="noreferrer">Discord</a> or <a href="https://www.instagram.com/ubc_csss" target="_blank" rel="noreferrer">Instagram</a>!

<!-- APRIL FOOLS -->

<script>

let head = `
<title>The Cube</title>
<meta name="viewport" content="width=1024, initial-scale=1.0">
<link rel="icon" type="image/x-icon" href="/files/april_fools/cube_icon.ico">
`;


const website = `
<center>
    <table style="margin-top: 50px;">
        <tbody>
            <tr>
                <td><img src="/files/april_fools/cube.gif" width="200px"/></td>
                <td>
                    <div>
                        <center>
                            <h1>Computer Science Student Society</h1>
                            <h1 style="font-size:60px">The Cube</h1>
                        </center>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</center>
<hr width="100%">
<marquee><b>Welcome to the UBC CSSS web page. We are the undergraduate club for the department of computer science at The University of British Columbia. Explore this web site to learn more about our club.</b></marquee>
<center><a href="?aprilfools=disable">Go to main page.</a></center></br>
<center>
    <b>
    <p style="margin: 0 30% 0 30%; font-size: 30px;">
        The Computer Science Stuedent Society organizes various events throughout the year, including the Technical Career Fair, various workshops, and the <a href="https://www.instagram.com/p/DG6NqMIyJsq/">end-of year CS Gala</a>.
    </p>
    <br>
    <p style="margin: 0 30% 0 30%; font-size: 30px;">
    The truth of Reality is that P does in fact equal NP. In fact, I have proof of this. Simply set N=1. This is so <u><i>obvious</u></i> to me. I will give $1,000.00 to any person who can disprove this.
    </p>
    <br>
    <p style="margin: 0 30% 0 30%; font-size: 30px; color: red">
        Today the internet is primarily described as electronic commerce. Before 1995 it was lauded as a so-called information superhighway.
    </p>
    <br>
    <img src="/files/april_fools/3d.gif" width="50"/>
    <img src="/files/april_fools/dog1.gif" width="50"/>
    <img src="/files/april_fools/earth.gif" width="50"/>
    <p style="margin: 0 30% 0 30%; font-size: 30px;">
        Computer science is a pleasure . . . though also a hazard in the eyes (and minds) of some. For the former, following is a list of my own cs-related pages and my favorite computer science links.
    </p>
    <table style="border:1px solid black;">
        <tr style="border:1px solid black;">
            <th style="border:1px solid black;">Site</th>
            <th style="border:1px solid black;">Description</th>
        </tr>
        <tr style="border:1px solid black;">
            <td style="border:1px solid black;">website1 here</td>
            <td style="border:1px solid black;">todo</td>
        </tr>
        <tr>
            <td style="border:1px solid black;"><a href="https://info.cern.ch/">https://info.cern.ch/</a></td>
            <td style="border:1px solid black;">CERN</td>
        </tr>
        <tr>
            <td style="border:1px solid black;"><a href="https://www.spacejam.com/1996/index2.html">https://www.spacejam.com/1996/index2.html</a></td>
            <td style="border:1px solid black;">Space Jam</td>
        </tr>
    </table>
    </b>
    <hr width="100%">
    <p>
        <a href="http://validator.w3.org/check?uri=referer"><img src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Transitional" height="31" width="88"></a>
        <b>Site opened 1996; This page has been accessed: <img src="brokenlink.gif"/>times.</b>
        <img src="/files/april_fools/beaver.png" width="50"/>
    </p>
    <p>
        Get Netscape! <img src="/files/april_fools/netscape.gif" width="25"/>
    </p>
    <p><b><font color="#000000">© 2025 - www.UBCCSSS.org</font></b><img src="/files/april_fools/updated.gif" width="50"/></p>
    <p><a href="/files/april_fools/sources.txt">Sources</a></p>
</center>
`;

const p = new URLSearchParams(window.location.search)
const param = p.get('aprilfools');

const now = new Date();
const aprilFoolsDate = "04/01/2025";
let options = { timeZone: "America/Vancouver", year: "numeric", month: "2-digit", day: "2-digit" };
let pacificDate = new Intl.DateTimeFormat("en-US", options).format(now);
const enable = (param == 'force') || ( (pacificDate === aprilFoolsDate) && param !='disable')

if (enable) {
    document.querySelectorAll('link[rel="stylesheet"], style').forEach(el => el.remove());
    document.body.innerHTML = website;
    document.body.style = "background-image: url('/files/april_fools/grid.png')";
    window.onload = function() {
        document.body.innerHTML = website;
        document.head.innerHTML = head;
    }
}


console.log(
    `
                                         .
                                          \`.

                                     ...
                                        \`.
                                  ..
                                    \`.
                            \`.        \`.
                         ___\`.\\./
                            \`---.---
                           /     \`.--   
                          /       \\-    
                         |   /\\    \\   
                         |\\==/\\==/  |
                         | \`@'\`@'  .--.
                  .--------.           )
                .'             .   \`._/
               /               |     \\
              .               /       |
              |              /        |
              |            .'         |   .--.
             .'\`.        .'_          |  /    \\
           .'    \`.__.--'.--\`.       / .'      |
         .'            .|    \\\\     |_/        |
       .'            .' |     \\\\               |
     .-\`.           /   |      .      __       |
   .'    \`.     \\   |   \`           .'  )      \\
  /        \\   / \\  |            .-'   /       |
 (  /       \\ /   \\ |                 |        |
  \\/         (     \\/                 |        |
  (  /        )    /                 /   _.----|
   \\/   //   /   .'                  |.-'       \`
   (   /(   /   /                    /      \`.   |
    \`.(  \`-')  .---.                |    \`.   \`._/
       \`._.'  /     \`.   .---.      |  .   \`._.'
              |       \\ /     \`.     \\  \`.___.'
              |        Y        \`.    \`.___.'
              |      . |          \\         \\
              |       \`|           \\         |
              |        |       .    \\        |
              |        |        \\    \\       |
            .--.       |         \\           |
           /    \`.  .----.        \\          /
          /       \\/      \\        \\        /
          |       |        \\       |       /
           \\      |    @    \\   \`-. \\     /
            \\      \\         \\     \\|.__.'
             \\      \\         \\     |
              \\      \\         \\    |
               \\      \\         \\   |
                \\    .'\`.        \\  |
                 \`.-'    \`.    _.'\\ |
                   |       \`.-'    ||
              .     \\     . \`.     ||      .'
               \`.    \`-.-'    \`.__.'     .'
                 \`.                    .'
             .                       .'
              \`.
                                           .-'
                                        .-'

      \\                 \\
       \\         ..      \\
        \\       /  \`-.--.___ __.-.___
\`-.      \\     /  #   \`-._.-'    \\   \`--.__
   \`-.        /  ####    /   ###  \\        \`.
________     /  #### ############  |       _|           .'
            |\\ #### ##############  \\__.--' |    /    .'
            | ####################  |       |   /   .'
            | #### ###############  |       |  /
            | #### ###############  |      /|      ----
          . | #### ###############  |    .'<    ____
        .'  | ####################  | _.'-'\|   
      .'    |   ##################  |       |
             \`.   ################  |       |
               \`.    ############   |       | ----
              ___\`.     #####     _..____.-'     .
             |\`-._ \`-._       _.-'    \\\\         \`.
          .'\`-._  \`-._ \`-._.-'\`--.___.-' \\          \`.
        .' .. . \`-.
`)
</script>
