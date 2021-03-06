  'use strict'

// const ui = require('./ui')

const onCSSClick = (event) => {
  $('.css-content').removeClass('hidden')
  $('.html-content').addClass('hidden')
  $('.keyframes-content').addClass('hidden')
}

const onHTMLClick = (event) => {
  $('.html-content').removeClass('hidden')
  $('.css-content').addClass('hidden')
  $('.keyframes-content').addClass('hidden')
}

const onKeyframesClick = (event) => {
  $('.keyframes-content').removeClass('hidden')
  $('.html-content').addClass('hidden')
  $('.css-content').addClass('hidden')
}

const addHandlers = () => {
  $('modal').modal('toggle')
  $('#grow-css').click(onCSSClick)
  $('#grow-html').click(onHTMLClick)
  $('#shrink-css').click(onCSSClick)
  $('#shrink-html').click(onHTMLClick)
  $('#right-Z360-css').click(onCSSClick)
  $('#right-Z360-html').click(onHTMLClick)
  $('#left-Z360-css').click(onCSSClick)
  $('#left-Z360-html').click(onHTMLClick)
  $('#right-Z180-css').click(onCSSClick)
  $('#right-Z180-html').click(onHTMLClick)
  $('#left-Z180-css').click(onCSSClick)
  $('#left-Z180-html').click(onHTMLClick)
  $('#right-Y360-css').click(onCSSClick)
  $('#right-Y360-html').click(onHTMLClick)
  $('#left-Y360-css').click(onCSSClick)
  $('#left-Y360-html').click(onHTMLClick)
  $('#right-Y180-css').click(onCSSClick)
  $('#right-Y180-html').click(onHTMLClick)
  $('#left-Y180-css').click(onCSSClick)
  $('#left-Y180-html').click(onHTMLClick)
  $('#right-X360-css').click(onCSSClick)
  $('#right-X360-html').click(onHTMLClick)
  $('#left-X360-css').click(onCSSClick)
  $('#left-X360-html').click(onHTMLClick)
  $('#right-X180-css').click(onCSSClick)
  $('#right-X180-html').click(onHTMLClick)
  $('#left-X180-css').click(onCSSClick)
  $('#left-X180-html').click(onHTMLClick)
  $('#fadeOut-hmtl').click(onHTMLClick)
  $('#fadeOut-css').click(onCSSClick)
  $('#fadeIn-html').click(onHTMLClick)
  $('#fadeIn-css').click(onCSSClick)
  $('#fadeOutPulse-html').click(onHTMLClick)
  $('#fadeOutPulse-css').click(onCSSClick)
  $('#fadeOutPulse-keyframes').click(onKeyframesClick)
  $('#fadeInPulse-html').click(onHTMLClick)
  $('#fadeInPulse-css').click(onCSSClick)
  $('#fadeInPulse-keyframes').click(onKeyframesClick)
  $('#Pulse-html').click(onHTMLClick)
  $('#Pulse-css').click(onCSSClick)
  $('#Pulse-keyframes').click(onKeyframesClick)
  $('#translatex-right-html').click(onHTMLClick)
  $('#translatex-right-css').click(onCSSClick)
  $('#translatex-left-html').click(onHTMLClick)
  $('#translatex-left-css').click(onCSSClick)
  $('#translatey-up-html').click(onHTMLClick)
  $('#translatey-up-css').click(onCSSClick)
  $('#translatey-down-html').click(onHTMLClick)
  $('#translatey-down-css').click(onCSSClick)
  $('#bounce-lr-html').click(onHTMLClick)
  $('#bounce-lr-css').click(onCSSClick)
  $('#bounce-lr-keyframes').click(onKeyframesClick)
  $('#bounce-ud-html').click(onHTMLClick)
  $('#bounce-ud-css').click(onCSSClick)
  $('#bounce-ud-keyframes').click(onKeyframesClick)
  $('#blink-html').click(onHTMLClick)
  $('#blink-css').click(onCSSClick)
  $('#blink-keyframes').click(onKeyframesClick)
}

module.exports = {
  addHandlers
}
