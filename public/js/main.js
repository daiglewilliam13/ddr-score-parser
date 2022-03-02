console.log('connected');
let scores;
document.getElementById('upload-button')
    .addEventListener('click', function (e) {
        e.preventDefault();
        var fr = new FileReader();
        fr.onload = function () {
            scores=fr.result;
            let parser = new DOMParser();
            xml = parser.parseFromString(scores, "text/xml");
            console.log(xml)
            let genData = xml.getElementsByTagName('DisplayName')[0];
            let songs = Array.from(xml.getElementsByTagName('Song'));
            songs.forEach(song=>{
                let songTitle = song.getAttribute('Dir').split('/')[2];
                let p = document.createElement('p');
                    p.innerHTML = songTitle;
                let difficulty = Array.from(song.getElementsByTagName('Steps'))[0]
                console.log(difficulty?.getAttribute('Difficulty'))
                let output = document.getElementById('output')
                    output.appendChild(p);
            })
        }
       fr.readAsText(document.getElementById('file-loader').files[0]);
    })
