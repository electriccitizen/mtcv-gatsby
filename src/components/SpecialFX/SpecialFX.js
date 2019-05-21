import React from "react"
import 'typeface-roboto';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';

function SpecialFX(props) {

  const { children } = props;
  var fx = props.fx;
  var effect


  if (fx === 'pulse') {
     effect = <Pulse>{children}</Pulse>
  } else if (fx === 'fade-left') {
    effect =  <Fade left>{children}</Fade>
  } else if (fx === 'fade-right') {
    effect =  <Fade right>{children}</Fade>
  } else if (fx === 'fade-bottom') {
    effect =  <Fade bottom>{children}</Fade>
  } else if (fx === 'fade-top') {
    effect =  <Fade top>{children}</Fade>
  } else {

    return <>{children}</>;

  }
  return effect;

}

export default SpecialFX
