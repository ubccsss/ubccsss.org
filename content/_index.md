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

const website =
`
<html>
    <head>
        <title>The Cube</title>
        <meta name="viewport" content="width=1024, initial-scale=1.0">
    </head>
    <body>
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
                The Computer Science Stuedent Society organizes various events throughout the year, including the Technical Career Fair, various workshops, and the <a href="https://www.instagram.com/p/DG6NqMIyJsq/">end-of year CS Gala</a>. I will give $1,000.00 to any person who can disprove this.
            </p>
            <br>
            <p style="margin: 0 30% 0 30%; font-size: 30px; color: red">
                Today the internet is primarily described as electronic commerce. Before 1995 it was lauded as a so-called information superhighway.
            </p>
            <br>
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
                    <td style="border:1px solid black;">website2 here</td>
                    <td style="border:1px solid black;">descriptions</td>
                </tr>
            </table>
            </b>
            <hr width="100%">
                        <p>
                <a href="http://validator.w3.org/check?uri=referer"><img src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Transitional" height="31" width="88"></a>
                <b>Site opened 1996; This page has been accessed: times.</b>
                <img src="/files/april_fools/beaver.png" width="50"/>
            </p>
            <p><b><font color="#000000">© 2025 - www.UBCCSSS.org</font></b></p>
            <p><a href="/files/april_fools/sources.txt">Sources</a></p>
        </center>
    </body>
</html>
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
