var rootStyle = getComputedStyle(document.documentElement);
var value = rootStyle.getPropertyValue('--property-name');

document.getElementById('input').addEventListener('change', function () {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        console.log('dark');
        if (document.getElementById('input').checked) {
            document.documentElement.style.setProperty('--black', '#e8ecde');
            document.documentElement.style.setProperty('--dkblue', '#ffcc99');
            document.documentElement.style.setProperty('--plum', '#7fff7f');
            document.documentElement.style.setProperty('--hotmag', '#00ff00');
            document.documentElement.style.setProperty('--magenta', '#00eb6c');
            document.documentElement.style.setProperty('--aqua', '#ff0000');
            document.documentElement.style.setProperty('--white', '#000000');
            console.log('white for dark');
        } else {
            document.documentElement.style.setProperty('--black', '#171321');
            document.documentElement.style.setProperty('--dkblue', '#0d314b');
            document.documentElement.style.setProperty('--plum', '#4b0d49');
            document.documentElement.style.setProperty('--hotmag', '#ff17e4');
            document.documentElement.style.setProperty('--magenta', '#e310cb');
            document.documentElement.style.setProperty('--aqua', '#86fbfb');
            document.documentElement.style.setProperty('--white', '#f7f8fa');
            console.log('black for dark');
        }
    } else {
        console.log('light');
        if (document.getElementById('input').checked) {
            document.getElementById('container2').style.background = "black";
            document.getElementById('container2').style.color = "white";
            console.log('black for light');
        } else {
            document.getElementById('container2').style.background = "white";
            document.getElementById('container2').style.color = "black";
            console.log('white for light');
        }

    }
})