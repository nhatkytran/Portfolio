/** Waves - https://codepen.io/goodkatz/pen/LYPGxQz?editors=1100. */
export default function Waves() {
  return (
    <div className="w-full">
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="#b4b4b4" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="#cecece" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="#dfdfdf" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#efefef" />
        </g>
      </svg>
    </div>
  );
}
