import { h } from "preact";

export const Egg = (props: { color: string }) => (
  <svg
    version="1.0"
    viewBox="0 0 493.99 699.15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="matrix(.1 0 0 -.1 -102.98 699.61)" fill="#fff">
      <path
        d="m3365 6993c-584-74-1142-564-1602-1408-144-265-324-688-413-970-87-279-168-585-196-745-3-14-7-31-9-38s-7-34-10-60c-4-26-10-63-15-82s-16-87-25-150l-20-140c-5-31-17-145-20-185-1-16-6-66-9-110-4-44-9-107-11-140-7-83-7-486 0-565 3-36 7-94 10-130 44-545 216-1041 489-1410 79-107 271-303 361-370 33-25 62-47 65-50 17-20 176-114 271-162 169-85 256-119 428-168 112-31 361-83 368-76 2 2 21 0 41-5 135-31 658-33 862-3 510 74 886 227 1218 497 96 78 297 298 360 393 7 10 29 44 48 74 105 159 235 458 291 665 13 52 33 132 39 165 3 14 7 33 10 42 3 10 7 28 9 40 10 56 27 167 31 203 2 22 7 54 9 71 3 17 8 66 11 110 3 43 7 97 9 119 6 49 6 483 1 545-3 25-7 90-11 145s-8 114-10 130c-10 79-18 152-20 175-1 14-5 39-8 55-4 17-9 55-12 85-4 30-13 87-20 125-8 39-16 88-20 110-3 22-8 48-11 57-6 20-13 52-20 98-10 63-112 452-149 570-114 366-225 643-379 950-432 862-986 1401-1566 1525-70 15-309 27-375 18z"
        fill="#fff"
      />
    </g>
    <ellipse
      cx="246.99"
      cy="408.62"
      rx="144.78"
      ry="166.15"
      fill={props.color}
      style="paint-order:markers stroke fill"
    />
  </svg>
);