/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Francisco
 * Created on: Oct 2024
 * This program acts as a replica of cookie clicker
*/

let cookieNumber = 0
basic.showNumber(cookieNumber)
input.onButtonPressed(Button.A, function () {
    cookieNumber += 1
    basic.showNumber(cookieNumber)
})

input.onButtonPressed(Button.B, function () {
    cookieNumber = 0
    basic.showNumber(cookieNumber)
})

