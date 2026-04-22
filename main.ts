input.onButtonPressed(Button.A, function () {
    for (let y = 0; y <= 4; y++) {
        for (let X = 0; X <= 4; X++) {
            led.plot(X, y)
            basic.pause(100)
            led.unplot(0, 0)
        }
    }
})
let X = 0
