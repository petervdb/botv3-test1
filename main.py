def leesstuur():
    global autostuur
    autostuur = Math.round(pins.analog_read_pin(AnalogReadWritePin.P2) / 60)
    if autostuur > 9:
        autostuur = 9
    if autostuur < 0:
        autostuur = 0

def on_button_pressed_a():
    music.play(music.string_playable("C5 - C5 - C5 - C5 - ", 120),
        music.PlaybackMode.UNTIL_DONE)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_icon(IconNames.HAPPY)
input.on_button_pressed(Button.B, on_button_pressed_b)

autostuur = 0
basic.show_icon(IconNames.SMALL_HEART)
pins.digital_write_pin(DigitalPin.P8, 0)
pins.digital_write_pin(DigitalPin.P9, 0)
pins.digital_write_pin(DigitalPin.P16, 0)
basic.show_icon(IconNames.HEART)

def on_forever():
    leesstuur()
    basic.show_number(autostuur)
basic.forever(on_forever)
