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
        <center>
            <b>
            <p style="margin: 0 30% 0 30%; font-size: 30px;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis, diam quis porttitor laoreet, augue arcu convallis est, et fermentum nulla tellus non diam. Donec fermentum lacus ornare mauris fermentum, ut convallis arcu cursus.
            </p>
            <br>
            <p style="margin: 0 30% 0 30%; font-size: 30px; color: red">
                Aenean lobortis elit lobortis, elementum nisl in, tincidunt ligula. Duis tellus lorem, efficitur malesuada finibus sed, maximus eu sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            </p>
            <br>
            <p style="margin: 0 30% 0 30%; font-size: 30px;">
                Quisque tristique venenatis neque eu posuere. Praesent eu dictum urna, ac congue elit. Mauris ac lobortis urna, ac accumsan mauris. Etiam vitae dolor nunc. Cras pellentesque id erat nec vulputate. Sed ex leo, mattis ut sodales id, convallis molestie augue. Nullam convallis est eget ipsum laoreet tincidunt.
            </p>
            </b>
            <hr width="100%">
            <p><b><font color="#000000">© 2025 - www.UBCCSSS.org</font></b></p>
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
</script>
