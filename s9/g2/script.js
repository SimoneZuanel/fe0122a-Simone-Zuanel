let contAudio = document.getElementById("container-audio")
let contVideo = document.getElementById("container-video")
let tracklist = document.getElementById("tracklist")
let videolist = document.getElementById("videolist")

fetch('audio.json')
    .then(res => res.json())
    .then(data => {

        data.forEach((item) => {
            let btnAudio = document.createElement("button")
            contAudio.prepend(btnAudio)
            btnAudio.innerHTML = item.title

            btnAudio.addEventListener("click", function() {
                let sourceAttuale = document.querySelector("#tracklist > source")
                if (sourceAttuale) {
                    sourceAttuale.remove()
                }
                let srcAudio = document.createElement("source")
                srcAudio.src = "audio/" + item.file
                tracklist.prepend(srcAudio)
                tracklist.load()
                tracklist.play()
            })
        })
    })

fetch('video.json')
    .then(res => res.json())
    .then(data => {

        data.forEach((item) => {
            let btnVideo = document.createElement("button")
            contVideo.prepend(btnVideo)
            btnVideo.innerHTML = item.title

            btnVideo.addEventListener("click", function() {
                let sourceAttuale = document.querySelector("#videolist > source")
                if (sourceAttuale) {
                    sourceAttuale.remove()
                }
                let srcVideo = document.createElement("source")
                srcVideo.src = "video/" + item.file
                videolist.prepend(srcVideo)
                videolist.load()
                videolist.play()
            })
        })
    })