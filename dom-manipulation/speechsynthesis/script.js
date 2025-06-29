function speak(){
    let text = document.getElementById("input").value
    let utterance = new SpeechSynthesisUtterance(text)   
    speechSynthesis.speak(utterance)
}

document.getElementById("button").addEventListener("click", function(){
    speak()
})