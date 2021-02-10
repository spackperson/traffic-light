input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P2, 1)
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.showLeds(`
        . . # # .
        . # . . #
        . . . # .
        . # . . #
        . . # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # # .
        . # . . #
        . . . # .
        . . # . .
        . # # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . # .
        . . # # .
        . . . # .
        . . . # .
        . . # # #
        `)
    basic.pause(1000)
    music.stopMelody(MelodyStopOptions.All)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
pins.digitalWritePin(DigitalPin.P16, 1)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.forever(function () {
    if (input.lightLevel() <= 1) {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Forever)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P2, 1)
        for (let index = 0; index < 5; index++) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
        }
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.showLeds(`
            . . # # .
            . # . . #
            . . . # .
            . # . . #
            . . # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . # # .
            . # . . #
            . . . # .
            . . # . .
            . # # # #
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . # .
            . . # # .
            . . . # .
            . . . # .
            . . # # #
            `)
        basic.pause(1000)
        music.stopMelody(MelodyStopOptions.All)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    basic.pause(200)
})
