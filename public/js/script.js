document.querySelector('#cantWait').addEventListener('click', function() {
    let word = document.querySelector('.word .w2')
    let body = document.querySelector('body')
    document.querySelector('.w1').classList.add('move')
    document.querySelector('.w2').classList.add('move')
    this.remove()
    setInterval(() => {
        let obj = getRandomColor()
        body.style.backgroundColor = obj.body
        word.style.color = obj.word
    }, 2e3)
})

function getRandomColor() {
    let rColor = () => Math.floor(Math.random() * 255)
    let bodyCls = [rColor(), rColor(), rColor()]
    let wordCls = [255 - bodyCls[0], 255 - bodyCls[1], 255 - bodyCls[2]]
    return {
        body: `rgb(${bodyCls[0]}, ${bodyCls[1]}, ${bodyCls[2]})`,
        word: `rgb(${wordCls[0]}, ${wordCls[1]}, ${wordCls[2]})`,
    }
}