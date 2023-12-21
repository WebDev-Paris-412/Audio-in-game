/**
 * @type {HTMLAudioElement}
 */
const creepyAudioTag = document.getElementById("audio")
const audioTag = new Audio("./assets/audio/8-bit_slay_the_evil.ogg.mp3")
// const otherAudioTag = document.createElement("audio")
// otherAudioTag.src = './assets/audio/8-bit_slay_the_evil.ogg.mp3'

const normalButton = document.getElementById("play-background")
const badButton = document.getElementById("play-audio")

normalButton.addEventListener("click", () => {
	audioTag.currentTime = 0
	audioTag.playbackRate = 1
	audioTag.play()
})
badButton.addEventListener("click", () => {
	creepyAudioTag.currentTime = 0
	creepyAudioTag.playbackRate = 1
	creepyAudioTag.play()
})
