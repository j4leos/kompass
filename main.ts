function fnZeigeGrad () {
    if (vGradZahl > 45 && vGradZahl <= 135) {
        basic.showString("o")
    } else if (vGradZahl > 135 && vGradZahl <= 225) {
        basic.showString("s")
    } else if (vGradZahl > 225 && vGradZahl <= 315) {
        basic.showString("w")
    } else {
        basic.showString("n")
    }
}
function fnZeigeWert () {
    basic.showNumber(vGradZahl)
}
let vGradZahl = 0
let vAnzeige = 0
basic.forever(function () {
    vGradZahl = input.compassHeading()
    if (vAnzeige == 0) {
        fnZeigeGrad()
    } else {
        fnZeigeWert()
    }
})
