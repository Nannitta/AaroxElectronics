export default function Check({ height, width, value }) {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 118.43873 118.43873">
      <path className={`check ${value}`} strokeLinejoin="round" d="M34.682 60.352l15.61 15.61 33.464-33.464" stroke="#2dac44" strokeLinecap="round" strokeWidth="5" fill="none"/>
    </svg>
  )
}