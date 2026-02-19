function leesstuur () {
    autostuur = Math.round(pins.analogReadPin(AnalogReadWritePin.P2) / 60)
    if (autostuur > 9) {
        autostuur = 9
    }
    if (autostuur < 0) {
        autostuur = 0
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallHeart)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallHeart)
    for (let index = 0; index < 10; index++) {
        pins.analogWritePin(AnalogPin.P9, 0)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P9, 1023)
    }
    basic.showIcon(IconNames.Yes)
})
let autostuur = 0
basic.showIcon(IconNames.SmallHeart)
pins.digitalWritePin(DigitalPin.P8, 0)
pins.digitalWritePin(DigitalPin.P9, 0)
pins.digitalWritePin(DigitalPin.P16, 0)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    leesstuur()
    basic.showNumber(autostuur)
})
