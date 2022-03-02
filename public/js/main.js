console.log('connected');
let scores;
document.getElementById('file-loader')
    .addEventListener('change', function () {

        var fr = new FileReader();
        fr.onload = function () {
            scores=fr.result;
            let parser = new DOMParser();
            xml = parser.parseFromString(scores, "text/xml");

            let songs = Array.from(xml.getElementsByTagName('Song'));
            songs.forEach(song=>{
                let songTitle = song.getAttribute('Dir').split('/')[2];
                console.log(songTitle);
                let p = document.createElement('p')
                    .textContent = songTitle;
                let output = document.getElementById('output')
                    output.appendChild(p);
            })

        }
       fr.readAsText(this.files[0]);
    })
document.getElementById('upload-button');
