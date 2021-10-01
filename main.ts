if (true) {
    basic.showString("si no le das agua  te rañara ")
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        . . # . .
        `)
} else {
    basic.showString("si le hechas agua estara ")
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . # # # .
        . . . . .
        `)
}
if (true) {
    basic.showString("si no hablas con el  es estara re bravo ")
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        . . # . .
        `)
} else {
    basic.showString("si le hablas estara felis ")
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        # . . . #
        . # # # .
        `)
}
if (true) {
    basic.showString("si le hablo feo  ha el se pondra bravo")
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        . . # . .
        `)
} else {
    basic.showString("si lle hablas bien estara felis")
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . # # # .
        . . . . .
        `)
}
basic.forever(function () {
	
})
