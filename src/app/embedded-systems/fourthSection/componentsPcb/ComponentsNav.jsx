import './components.css';

export default function ComponentsNav() {
  return(
    <ul className='components-nav'>
      <li id='layerStack'>Layer Stack</li>
      <li id='signal'>Signal Integrity</li>
      <li id='impedance'>Impedance Control</li>
      <li id='ddr'>DDR Routing</li>
      <li id='antena'>Antena Design</li>
    </ul>
  )
}