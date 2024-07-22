export default function handleVisibility(frame, screenWidth, screenSizes) {
  const containerTools = document.querySelector('.pcb-tools-container');
  const pcbSchematics = document.querySelector('.pcb-schematics');
  const diagrams = document.querySelector('#diagrams');
  const variants = document.querySelector('#variants');
  const netClasses = document.querySelector('#net-classes');
  const netNaming = document.querySelector('#net-naming');
  const detailing = document.querySelector('#detailing');
  const pcbComponents = document.querySelector('.pcb-components');
  const layerStack = document.querySelector('#layerStack');
  const signal = document.querySelector('#signal');
  const impedance = document.querySelector('#impedance');
  const ddr = document.querySelector('#ddr');
  const antena = document.querySelector('#antena');
  const pcbMechanical = document.querySelector('.pcb-mechanical');
  const dfm = document.querySelector('#dfm');
  const mechanical = document.querySelector('#mechanical');
  const modeling = document.querySelector('#modeling');
  const prototyping = document.querySelector('#prototyping');
  const production = document.querySelector('#production');

  if(containerTools) {
    if(screenWidth >= screenSizes.laptop) {
      if (frame >= 6 && frame <= 23) {
        containerTools.style.opacity = 1;
      } else {
        containerTools.style.opacity = 0;
      }
    }
  }

  if(pcbSchematics) {
    if(screenWidth >= screenSizes.laptop) {
      if (frame >= 28 && frame <= 58) {
        pcbSchematics.style.opacity = 1
      } else {
        pcbSchematics.style.opacity = 0
      }

      if(frame >= 28 && frame <= 36) {
        diagrams.style.color = '#cafb4b';
      } else {
        diagrams.style.color = '#fefffa';
      }

      if(frame >= 37 && frame <= 41) {
        variants.style.color = '#cafb4b';
      } else {
        variants.style.color = '#fefffa';
      }

      if(frame >= 42 && frame <= 46) {
        netClasses.style.color = '#cafb4b';
      } else {
        netClasses.style.color = '#fefffa';
      }

      if(frame >= 47 && frame <= 51) {
        netNaming.style.color = '#cafb4b';
      } else {
        netNaming.style.color = '#fefffa';
      }

      if(frame >= 52 && frame <= 58) {
        detailing.style.color = '#cafb4b';
      } else {
        detailing.style.color = '#fefffa';
      }
    }
  }

  if(pcbComponents) {
    if(screenWidth >= screenSizes.laptop) {
      if (frame >= 59 && frame <= 111) {
        pcbComponents.style.opacity = 1
      } else {
        pcbComponents.style.opacity = 0
      }

      if(frame >= 59 && frame <= 66) {
        layerStack.style.color = '#cafb4b';
      } else {
        layerStack.style.color = '#2dac44';
      }

      if(frame >= 67 && frame <= 75) {
        signal.style.color = '#cafb4b';
      } else {
        signal.style.color = '#2dac44';
      }

      if(frame >= 77 && frame <= 86) {
        impedance.style.color = '#cafb4b';
      } else {
        impedance.style.color = '#2dac44';
      }

      if(frame >= 88 && frame <= 101) {
        ddr.style.color = '#cafb4b';
      } else {
        ddr.style.color = '#2dac44';
      }

      if(frame >= 102 && frame <= 109) {
        antena.style.color = '#cafb4b';
      } else {
        antena.style.color = '#2dac44';
      }
    }
  }

  if(pcbMechanical) {
    if(screenWidth >= screenSizes.laptop) {
      if (frame >= 115 && frame <= 157) {
        pcbMechanical.style.opacity = 1
      } else {
        pcbMechanical.style.opacity = 0
      }

      if(frame >= 117 && frame <= 124) {
        dfm.style.color = '#cafb4b';
      } else {
        dfm.style.color = '#fefffa';
      }

      if(frame >= 125 && frame <= 132) {
        mechanical.style.color = '#cafb4b';
      } else {
        mechanical.style.color = '#fefffa';
      }

      if(frame >= 133 && frame <= 141) {
        modeling.style.color = '#cafb4b';
      } else {
        modeling.style.color = '#fefffa';
      }

      if(frame >= 142 && frame <= 149) {
        prototyping.style.color = '#cafb4b';
      } else {
        prototyping.style.color = '#fefffa';
      }

      if(frame >= 150 && frame <= 157) {
        production.style.color = '#cafb4b';
      } else {
        production.style.color = '#fefffa';
      }
    }
  }
}