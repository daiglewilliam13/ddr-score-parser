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
                let songWrapper = document.createElement('div');
                songWrapper.classList.add('song-wrapper');
                let songTitle = song.getAttribute('Dir').split('/')[2];
                let p = document.createElement('p');
                    p.innerHTML = songTitle;
                    songWrapper.appendChild(p)
                let stepScore = Array.from(song.getElementsByTagName('Steps'))
                if (stepScore){
                    stepScore.forEach(step=>{
                    console.log(step)
                    let diffTxt = step.getAttribute('Difficulty');
                    let pD = document.createElement('p');
                    pD.classList.add('tier')
                    pD.innerHTML=diffTxt;
                    p.appendChild(pD);
                    let score = step.getElementsByTagName('PercentDP')[0];
                    let span = document.createElement('span');
                    span.textContent = score ? score.firstChild.nodeValue : "No Score Saved";
                    p.appendChild(span);
                })
                } else {
                    let pD = document.createElement('p');
                    pD.textContent = "No Score Found";
                    p.appendChild(pD);
                }
                let output = document.getElementById('output')
                    output.appendChild(songWrapper);
            })
        }
       fr.readAsText(document.getElementById('file-loader').files[0]);
    })
