// Copyright (c) 2022 Ekaterina All rights reserved
//
// Created by: Ekaterina
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-5-01/sw.js", {
    scope: "/ICS20-Unit-5-01/",
  })
}

const randomNumber = Math.floor(Math.random() * 6) + 1

/**
 * This function updates the slider value
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider

  if (valueFromSlider == randomNumber) {
    document.getElementById(answer).innerHTML = "The answer was " + randomNumber + "! You got it right!"
  }
    
  if (valueFromSlider != randomNumber) {
    document.getElementById("answer").innerHTML = "The answer was" + randomNumber + ". You got it wrong. :("
  }
}