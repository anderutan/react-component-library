export default function CheckMark({ fillColor }) {
  return (
    <svg
      height='20px'
      width='20px'
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 512 512'
      xmlSpace='preserve'
      fill='#000000'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <circle style={{ fill: fillColor }} cx='256' cy='256' r='256'></circle>
        <polygon
          style={{ fill: '#fff' }}
          points='230.288,365.04 137.456,292.528 157.152,267.312 223.04,318.768 329.984,161.28 356.448,179.248 '
        ></polygon>
      </g>
    </svg>
  );
}
