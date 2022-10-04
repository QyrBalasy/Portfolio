import React, {FC} from 'react'

type IconProps = {
  color?: string
  className?: string
}

// Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)

// Brands
export const FacebookIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className={className}>
    <path
      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
      fill={color}
    />
  </svg>
)

export const InstagramIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 448 512">
    <path
      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
      fill={color}
    />
  </svg>
)

export const LinkedinIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 448 512">
    <path
      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      fill={color}
    />
  </svg>
)

export const GithubIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512">
    <path
      d="M216.29 158.39H137C97 147.9 6.51 150.63 6.51 233.18c0 30.09 15 51.23 35 61-25.1 23-37 33.85-37 49.21 0 11 4.47 21.14 17.89 26.81C8.13 383.61 0 393.35 0 411.65c0 32.11 28.05 50.82 101.63 50.82 70.75 0 111.79-26.42 111.79-73.18 0-58.66-45.16-56.5-151.63-63l13.43-21.55c27.27 7.58 118.7 10 118.7-67.89 0-18.7-7.73-31.71-15-41.07l37.41-2.84zm-63.42 241.9c0 32.06-104.89 32.1-104.89 2.43 0-8.14 5.27-15 10.57-21.54 77.71 5.3 94.32 3.37 94.32 19.11zm-50.81-134.58c-52.8 0-50.46-71.16 1.2-71.16 49.54 0 50.82 71.16-1.2 71.16zm133.3 100.51v-32.1c26.75-3.66 27.24-2 27.24-11V203.61c0-8.5-2.05-7.38-27.24-16.26l4.47-32.92H324v168.71c0 6.51.4 7.32 6.51 8.14l20.73 2.84v32.1zm52.45-244.31c-23.17 0-36.59-13.43-36.59-36.61s13.42-35.77 36.59-35.77c23.58 0 37 12.62 37 35.77s-13.42 36.61-37 36.61zM512 350.46c-17.49 8.53-43.1 16.26-66.28 16.26-48.38 0-66.67-19.5-66.67-65.46V194.75c0-5.42 1.05-4.06-31.71-4.06V154.5c35.78-4.07 50-22 54.47-66.27h38.63c0 65.83-1.34 61.81 3.26 61.81H501v40.65h-60.56v97.15c0 6.92-4.92 51.41 60.57 26.84z"
      fill={color}
    />
  </svg>
)

export const TelegramIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 448 512">
    <path
      d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
      fill={color}
    />
  </svg>
)

export const YoutubeIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 576 512">
    <path
      d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
      fill={color}
    />
  </svg>
)

// Sidebar

export const HomeIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 576 512">
    <path
      d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
      fill={color}
    />
  </svg>
)

export const CodeIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 640 512">
    <path
      d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"
      fill={color}
    />
  </svg>
)

export const GraduationCapIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 640 512">
    <path
      d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"
      fill={color}
    />
  </svg>
)

export const BriefcaseIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512">
    <path
      d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"
      fill={color}
    />
  </svg>
)

export const PenIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512">
    <path
      d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"
      fill={color}
    />
  </svg>
)

export const CommentsIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className={className}>
    <path
      d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"
      fill={color}
    />
  </svg>
)

export const MoonIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512">
    <path
      d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
      fill={color}
    />
  </svg>
)

export const SunIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512">
    <path
      d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
      fill={color}
    />
  </svg>
)

// Regular

export const ArrowRightIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 448 512">
    <path
      d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
      fill={color}
    />
  </svg>
)

export const MapIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className={className}>
    <path
      d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"
      fill={color}
    />
  </svg>
)

export const MessageIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512">
    <path
      d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
      fill={color}
    />
  </svg>
)

export const StarIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 576 512">
    <path
      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
      fill={color}
    />
  </svg>
)

export const PhoneIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512">
    <path
      d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
      fill={color}
    />
  </svg>
)

export const CheckIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512">
    <path
      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
      fill={color}
    />
  </svg>
)

export const XmarkIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 320 512">
    <path
      d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
      fill={color}
    />
  </svg>
)

export const DownloadIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512">
    <path
      d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
      fill={color}
    />
  </svg>
)

export const CloneIcon: FC<IconProps> = ({color = '#FFB400', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512">
    <path
      d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"
      fill={color}
    />
  </svg>
)

// temporary stub for partitions, later need to replace
// My-services

export const WebDevelopmentIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 419.931 419.931">
    <g>
      <g>
        <g>
          <path
            d="M282.895,352.367c-2.176-1.324-4.072-3.099-5.579-5.25c-0.696-0.992-1.284-2.041-1.771-3.125H28.282V100.276h335.624
				v159.138c7.165,0.647,13.177,5.353,15.701,11.797c2.235-1.225,4.726-1.982,7.344-2.213c1.771-0.154,3.53-0.044,5.236,0.293
				V39.561c0-12.996-10.571-23.569-23.566-23.569H23.568C10.573,15.992,0,26.565,0,39.561v309.146
				c0,12.996,10.573,23.568,23.568,23.568h257.179c-2.007-4.064-2.483-8.652-1.302-13.066
				C280.126,356.67,281.304,354.354,282.895,352.367z M338.025,55.569c0-4.806,3.896-8.703,8.702-8.703h8.702
				c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702h-8.702c-4.807,0-8.702-3.896-8.702-8.702V55.569z
				 M297.56,55.569c0-4.806,3.896-8.703,8.702-8.703h8.703c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702
				h-8.703c-4.806,0-8.702-3.896-8.702-8.702V55.569z M257.094,55.569c0-4.806,3.897-8.703,8.702-8.703h8.702
				c4.807,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.896,8.702-8.703,8.702h-8.702c-4.805,0-8.702-3.896-8.702-8.702V55.569z"
            fill={color}
          />
          <path
            d="M419.875,335.77l-2.615-14.83c-0.353-1.997-2.256-3.331-4.255-2.979l-13.188,2.324c-1.583-3.715-3.605-7.195-6.005-10.38
				l8.614-10.268c0.626-0.744,0.931-1.709,0.847-2.68c-0.086-0.971-0.554-1.867-1.3-2.494l-11.534-9.68
				c-0.746-0.626-1.713-0.93-2.683-0.845c-0.971,0.085-1.867,0.552-2.493,1.298l-8.606,10.26c-3.533-1.8-7.312-3.188-11.271-4.104
				v-13.392c0-2.028-1.645-3.674-3.673-3.674h-15.06c-2.027,0-3.673,1.646-3.673,3.674v13.392
				c-3.961,0.915-7.736,2.304-11.271,4.104l-8.608-10.259c-1.304-1.554-3.62-1.756-5.175-0.453l-11.535,9.679
				c-0.746,0.627-1.213,1.523-1.299,2.494c-0.084,0.971,0.22,1.937,0.846,2.683l8.615,10.266c-2.396,3.184-4.422,6.666-6.005,10.38
				l-13.188-2.325c-1.994-0.351-3.901,0.982-4.255,2.979l-2.614,14.83c-0.169,0.959,0.05,1.945,0.607,2.744
				c0.561,0.799,1.41,1.342,2.37,1.511l13.198,2.326c0.215,4.089,0.927,8.045,2.073,11.812l-11.6,6.695
				c-0.844,0.485-1.459,1.289-1.712,2.229c-0.252,0.941-0.119,1.943,0.367,2.787l7.529,13.041c0.485,0.844,1.289,1.459,2.229,1.711
				c0.313,0.084,0.632,0.125,0.951,0.125c0.639,0,1.272-0.166,1.836-0.492l11.609-6.703c2.73,2.925,5.812,5.517,9.18,7.709
				l-4.584,12.593c-0.332,0.916-0.289,1.926,0.123,2.809s1.157,1.566,2.072,1.898l14.148,5.149c0.406,0.148,0.832,0.224,1.257,0.224
				c0.53,0,1.063-0.115,1.554-0.345c0.883-0.411,1.564-1.157,1.897-2.073l4.583-12.593c1.965,0.238,3.965,0.361,5.994,0.361
				s4.029-0.125,5.994-0.361l4.584,12.593c0.332,0.916,1.016,1.662,1.897,2.073c0.49,0.229,1.021,0.345,1.554,0.345
				c0.424,0,0.85-0.074,1.256-0.224l14.15-5.149c0.913-0.332,1.659-1.017,2.07-1.898c0.412-0.883,0.456-1.893,0.123-2.809
				l-4.584-12.591c3.365-2.192,6.447-4.786,9.18-7.709l11.609,6.703c0.563,0.324,1.197,0.492,1.836,0.492
				c0.318,0,0.64-0.043,0.951-0.125c0.941-0.252,1.743-0.869,2.229-1.711l7.529-13.043c0.486-0.842,0.619-1.846,0.367-2.787
				c-0.253-0.938-0.868-1.742-1.712-2.229l-11.598-6.693c1.146-3.768,1.856-7.724,2.071-11.812l13.198-2.327
				c0.96-0.169,1.812-0.712,2.37-1.511C419.825,337.715,420.044,336.729,419.875,335.77z M354.184,359.336
				c-11.155,0-20.2-9.045-20.2-20.201s9.046-20.2,20.2-20.2c11.156,0,20.201,9.044,20.201,20.2S365.34,359.336,354.184,359.336z"
            fill={color}
          />
          <g>
            <path
              d="M164.695,235.373c0-4.752-2.785-9.117-7.096-11.119l-39.455-18.332l39.456-18.334c4.31-2.004,7.095-6.368,7.095-11.118
					v-0.319c0-4.21-2.119-8.075-5.665-10.334c-1.962-1.253-4.247-1.916-6.606-1.916c-1.778,0-3.563,0.391-5.16,1.133l-63.078,29.333
					c-4.309,2.004-7.092,6.368-7.092,11.117v0.877c0,4.743,2.782,9.104,7.093,11.118l63.084,29.336
					c1.631,0.755,3.368,1.138,5.162,1.138c2.338,0,4.616-0.664,6.597-1.924c3.548-2.268,5.666-6.13,5.666-10.335L164.695,235.373
					L164.695,235.373z"
              fill={color}
            />
            <path
              d="M226.932,134.012c-2.301-3.15-6.002-5.03-9.901-5.03h-0.314c-5.354,0-10.048,3.425-11.679,8.516L163.478,266.27
					c-1.183,3.718-0.517,7.813,1.781,10.962c2.301,3.148,6.002,5.029,9.901,5.029h0.315c5.352,0,10.043-3.426,11.672-8.516
					l41.555-128.762C229.896,141.268,229.234,137.167,226.932,134.012z"
              fill={color}
            />
            <path
              d="M308.001,194.366l-63.079-29.333c-1.592-0.74-3.374-1.131-5.152-1.131c-2.358,0-4.644,0.661-6.605,1.912
					c-3.552,2.263-5.671,6.127-5.671,10.337v0.319c0,4.746,2.783,9.111,7.097,11.123l39.454,18.33l-39.455,18.331
					c-4.311,2.002-7.096,6.367-7.096,11.119v0.321c0,4.205,2.119,8.066,5.669,10.336c1.974,1.258,4.254,1.923,6.595,1.923
					c1.792,0,3.527-0.383,5.169-1.141l63.082-29.336c4.307-2.009,7.088-6.371,7.088-11.114v-0.877
					C315.094,200.735,312.311,196.371,308.001,194.366z"
              fill={color}
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export const UxUiDesignIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 496 496">
    <path
      d="M456,40H40C17.944,40,0,57.944,0,80v288c0,22.056,17.944,40,40,40h104v32h-32v16h272v-16h-32v-32h104
				c22.056,0,40-17.944,40-40V80C496,57.944,478.056,40,456,40z M336,440H160v-32h176V440z M480,368c0,13.232-10.768,24-24,24H40
				c-13.232,0-24-10.768-24-24v-8h464V368z M480,344H16V80c0-13.232,10.768-24,24-24h416c13.232,0,24,10.768,24,24V344z"
      fill={color}
    />
    <path
      d="M32,328h432V72H32V328z M360,88h88v112h-88V88z M360,216h88v96h-88V216z M232,88h112v112H232V88z M344,216v96H160v-96h56
				h16H344z M48,88h168v112H48V88z M48,216h96v96H48V216z"
      fill={color}
    />
    <path d="M64,184h80v-80H64V184z M80,120h48v48H80V120z" fill={color} />
    <path
      d="M288,104c-22.056,0-40,17.944-40,40c0,22.056,17.944,40,40,40c22.056,0,40-17.944,40-40C328,121.944,310.056,104,288,104
				z M288,168c-13.232,0-24-10.768-24-24s10.768-24,24-24s24,10.768,24,24S301.232,168,288,168z"
      fill={color}
    />
    <rect x="160" y="104" width="40" height="16" fill={color} />
    <rect x="160" y="136" width="40" height="16" fill={color} />
    <rect x="160" y="168" width="40" height="16" fill={color} />
    <rect x="376" y="104" width="56" height="16" fill={color} />
    <rect x="376" y="136" width="56" height="16" fill={color} />
    <rect x="376" y="168" width="56" height="16" fill={color} />
    <path d="M376,296h56v-64h-56V296z M392,248h24v32h-24V248z" fill={color} />
    <path
      d="M204,280h-28v16h28c15.512,0,28.632-11.104,31.176-26.416l1.424-8.544c1.264-7.552,7.736-13.04,15.4-13.04
				s14.136,5.488,15.4,13.04l1.424,8.552C271.368,284.896,284.488,296,300,296h28v-16h-28c-7.664,0-14.136-5.488-15.4-13.04
				l-1.424-8.552C280.632,243.104,267.512,232,252,232c-15.512,0-28.632,11.104-31.176,26.416l-1.424,8.544
				C218.136,274.512,211.664,280,204,280z"
      fill={color}
    />
    <path
      d="M52.688,264L96,307.312L139.312,264L96,220.688L52.688,264z M96,284.688L75.312,264L96,243.312L116.688,264L96,284.688z"
      fill={color}
    />
  </svg>
)

export const SoundDesignIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24">
    <path
      d="M12 9V15M9 11V13M6 10V14M3 11V13M15 6V8M15 18V12M18 10V14M21 11V13"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const PhotographerIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 347.878 347.878">
    <path
      d="M256.272,225.3l-43.444-9.656v-13.728c14.656-10.578,24.844-26.928,27.2-45.711c11.1-11.661,17.244-26.85,17.244-43.011
			V73.689c10.072-7.25,16.667-19.039,16.667-32.367c0-15.206-8.45-28.878-22.05-35.678L240.606,0v16.4
			c0,5.1-4.156,9.256-9.261,9.256c-2.9,0-5.667-1.383-7.417-3.717l-0.55-0.728c-8.344-11.133-21.633-17.778-35.55-17.778h-36.111
			c-33.694,0-61.111,27.417-61.111,61.111v48.65c0,16.156,6.144,31.344,17.244,43.006c2.356,18.789,12.544,35.133,27.2,45.711
			v13.728l-43.444,9.656c-33.3,7.405-56.556,36.394-56.556,70.505v52.078h105.556h66.667h105.556V295.8
			C312.827,261.689,289.572,232.7,256.272,225.3z M246.161,113.194c0,8.206-1.944,16.094-5.556,23.2V80.622
			c1.894-0.317,3.761-0.733,5.556-1.306V113.194z M107.272,92.322v5.556v38.517c-3.611-7.106-5.556-15-5.556-23.2V64.544h0.001
			c0-27.567,22.428-50,50-50h36.111c10.439,0,20.406,4.983,26.678,13.344l0.544,0.722c3.822,5.106,9.917,8.156,16.294,8.156
			c10.522,0,19.206-8.017,20.261-18.261c7.028,5.378,11.222,13.717,11.222,22.817c0,15.867-12.911,28.778-28.783,28.778h-104.55
			C117.238,70.1,107.272,80.067,107.272,92.322z M118.382,147.878v-50v-5.556c0-6.128,4.983-11.111,11.111-11.111h100v66.667
			c0,30.633-24.922,55.556-55.556,55.556C143.304,203.434,118.382,178.511,118.382,147.878z M206.494,225.622
			c-2.472,9.572-11.106,16.7-21.444,16.7h-22.222c-10.339,0-18.972-7.128-21.444-16.706l4.778-1.061V208.4
			c8.465,3.906,17.854,6.144,27.776,6.144s19.311-2.239,27.778-6.139v16.156L206.494,225.622z M129.494,292.322v44.444h-27.778
			v-22.221H90.606v22.222H46.16V295.8c0-28.861,19.678-53.394,47.85-59.656l15.878-3.528l23.378,51.428
			C130.973,286.083,129.494,289.016,129.494,292.322z M120.976,230.155l9.517-2.117c3.572,14.556,16.694,25.394,32.333,25.394
			h22.222c15.639,0,28.761-10.839,32.339-25.394l9.517,2.117l-23.211,51.056h-46.422V270.1h-11.111v11.111h-1.978L120.976,230.155z
			 M185.049,314.545c0,6.128-4.983,11.111-11.111,11.111c-6.128,0-11.111-4.983-11.111-11.111s4.983-11.111,11.111-11.111
			S185.049,308.417,185.049,314.545z M173.939,336.767h-33.333v-44.444H173.9c-12.237,0.021-22.184,9.979-22.184,22.221
			C151.716,326.8,161.684,336.766,173.939,336.767c12.255,0,22.222-9.967,22.222-22.223c0-12.243-9.946-22.2-22.184-22.221h33.295
			l0.006,44.444H173.939z M301.717,336.767L301.717,336.767h-44.445v-22.222h-11.111v22.222h-27.778v-44.444
			c0-3.306-1.478-6.239-3.772-8.278l23.378-51.428l15.878,3.528c28.172,6.261,47.85,30.794,47.85,59.656V336.767z"
      fill={color}
    />
  </svg>
)

export const VideoEditingIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512">
    <g>
      <path
        d="M336.458,74.175H175.542c-19.009,0-34.473,15.437-34.473,34.415v115.268c0,18.984,15.464,34.428,34.473,34.428h43.762
			l27.638,47.89c1.866,3.234,5.315,5.227,9.049,5.227c3.733,0,7.183-1.992,9.05-5.224l27.653-47.892h43.765
			c19.017,0,34.489-15.445,34.489-34.428V108.59C370.947,89.614,355.475,74.175,336.458,74.175z M350.049,223.858
			c0,7.462-6.097,13.53-13.591,13.53h-49.797c-3.732,0-7.183,1.992-9.049,5.224l-21.618,37.44l-21.605-37.438
			c-1.866-3.235-5.316-5.227-9.05-5.227h-49.797c-7.486,0-13.575-6.07-13.575-13.53V108.59h-0.001
			c0-7.453,6.09-13.517,13.575-13.517h160.916c7.494,0,13.591,6.064,13.591,13.517V223.858z"
        fill={color}
      />
    </g>
    <g>
      <path
        d="M292.668,157.187l-53.176-30.634c-3.233-1.861-7.214-1.86-10.445,0.007c-3.231,1.867-5.22,5.315-5.22,9.047v61.252
			c0,3.73,1.99,7.178,5.219,9.046c1.617,0.936,3.423,1.403,5.23,1.403c1.799,0,3.6-0.464,5.214-1.394l53.176-30.618
			c3.239-1.864,5.235-5.316,5.235-9.054C297.9,162.506,295.906,159.052,292.668,157.187z M244.724,178.785v-25.101l21.79,12.553
			L244.724,178.785z"
        fill={color}
      />
    </g>
    <g>
      <path
        d="M501.551,316.617h-29.257H347.603h-29.257H193.654h-29.257H39.706H10.449C4.678,316.617,0,321.296,0,327.066v100.31
			c0,5.77,4.678,10.449,10.449,10.449h29.257c5.771,0,10.449-4.679,10.449-10.449v-31.694h103.793v31.694
			c0,5.77,4.678,10.449,10.449,10.449h29.257c5.771,0,10.449-4.679,10.449-10.449v-31.694h103.794v31.694
			c0,5.77,4.678,10.449,10.449,10.449h29.257c5.771,0,10.449-4.679,10.449-10.449v-31.694h103.793v31.694
			c0,5.77,4.678,10.449,10.449,10.449h29.257c5.771,0,10.449-4.679,10.449-10.449v-100.31
			C512,321.295,507.322,316.617,501.551,316.617z M29.257,385.233v31.694h-8.359v-79.412h8.359V385.233z M153.948,374.784H50.155
			v-37.269h103.793V374.784z M183.205,416.927h-8.359v-31.694v-47.718h8.359V416.927z M307.897,374.784H204.104v-37.269h103.793
			V374.784z M337.154,385.233v31.694h-8.359v-79.412h8.359V385.233z M461.845,374.784H358.052v-37.269h103.793V374.784z
			 M491.102,416.927h-8.359v-31.694v-47.718h8.359V416.927z"
        fill={color}
      />
    </g>
    <g>
      <path
        d="M184.599,148.9c-5.771,0-10.449,4.679-10.449,10.449v56.281c0,5.772,4.679,10.449,10.449,10.449
			c5.771,0,10.449-4.679,10.449-10.449v-56.281C195.048,153.578,190.37,148.9,184.599,148.9z"
        fill={color}
      />
    </g>
    <g>
      <path
        d="M184.599,100.292c-5.771,0-10.449,4.679-10.449,10.449v17.117c0,5.771,4.678,10.449,10.449,10.449
			s10.449-4.679,10.449-10.449v-17.117C195.048,104.971,190.37,100.292,184.599,100.292z"
        fill={color}
      />
    </g>
  </svg>
)

export const InternetMarketingIcon: FC<IconProps> = ({color = '#FFF', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512.003 512.003">
    <path
      d="M256.002,42.668h42.667c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533h-42.667
				c-4.713,0-8.533,3.821-8.533,8.533S251.289,42.668,256.002,42.668z"
      fill={color}
    />
    <path
      d="M221.868,42.668h8.533c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533h-8.533c-4.713,0-8.533,3.821-8.533,8.533
				S217.156,42.668,221.868,42.668z"
      fill={color}
    />
    <path
      d="M477.606,93.868h-68.004V59.735V33.802c0-18.665-15.136-33.801-33.801-33.801H153.269
				c-18.665,0-33.801,15.136-33.801,33.801v25.933v17.067c-4.713,0-8.533,3.82-8.533,8.533v8.533c0,4.713,3.82,8.533,8.533,8.533
				v8.533c-4.713,0-8.533,3.82-8.533,8.533v8.533c0,4.713,3.82,8.533,8.533,8.533v42.667h-85.07C15.4,179.202,0,194.602,0,213.6
				v118.938c0,18.998,15.4,34.398,34.398,34.398h85.07v68.267v43c0,18.667,15.137,33.8,33.809,33.8h222.524
				c18.665,0,33.801-15.136,33.801-33.8v-43v-153.6h68.004c18.998,0,34.398-15.4,34.398-34.398V128.266
				C512.003,109.269,496.603,93.868,477.606,93.868z M153.269,17.068h222.532c9.239,0,16.734,7.495,16.734,16.734v17.399h-256
				V33.802C136.535,24.563,144.03,17.068,153.269,17.068z M17.067,332.537V213.6c0-9.572,7.759-17.331,17.331-17.331h93.604h59.467
				c9.572,0,17.331,7.759,17.331,17.331v118.938c0,9.572-7.759,17.331-17.331,17.331c-3.489,0-6.627,2.124-7.923,5.364
				l-9.143,22.857l-9.143-22.857c-1.296-3.24-4.434-5.364-7.923-5.364h-0.002h-25.334H34.398
				C24.826,349.868,17.067,342.109,17.067,332.537z M136.535,478.201v-34.466h105.434c-7.09,6.254-11.567,15.401-11.567,25.6
				s4.477,19.346,11.567,25.6h-88.692C144.031,494.935,136.535,487.441,136.535,478.201z M264.535,486.402
				c-9.427,0-17.067-7.64-17.067-17.067s7.64-17.067,17.067-17.067c9.427,0,17.067,7.64,17.067,17.067
				S273.962,486.402,264.535,486.402z M375.801,494.935h-88.7c7.09-6.254,11.567-15.401,11.567-25.6s-4.477-19.346-11.567-25.6
				h105.434v34.466C392.535,487.44,385.04,494.935,375.801,494.935z M392.535,426.668h-256v-59.733h11.023l14.921,37.303
				c1.431,3.576,4.677,5.364,7.924,5.364c3.247,0,6.493-1.788,7.924-5.364l15.129-37.821c16.145-2.832,28.413-16.923,28.413-33.879
				V213.6c0-18.998-15.4-34.398-34.398-34.398h-0.002h-50.934V68.268h256v25.6h-68h-0.002c-18.998,0-34.398,15.4-34.398,34.398
				v118.938c0,16.956,12.268,31.047,28.413,33.879l15.129,37.821c1.431,3.576,4.677,5.364,7.924,5.364
				c3.247,0,6.493-1.788,7.924-5.364l14.921-37.302h28.09V426.668z M494.937,247.204c0,9.572-7.759,17.331-17.331,17.331h-76.537
				h-42.4h-0.002c-3.489,0-6.627,2.124-7.923,5.364l-9.143,22.857l-9.143-22.857c-1.296-3.24-4.434-5.364-7.923-5.364
				c-9.572,0-17.331-7.759-17.331-17.331V128.266c0-9.572,7.759-17.331,17.331-17.331h76.534h76.537
				c9.572,0,17.331,7.759,17.331,17.331V247.204z"
      fill={color}
    />
    <path
      d="M168.169,215.834c-3.332-3.332-8.735-3.332-12.068,0l-102.4,102.4c-3.332,3.332-3.332,8.735,0,12.068
				c3.333,3.332,8.735,3.332,12.068,0l102.4-102.4C171.502,224.57,171.502,219.167,168.169,215.834z"
      fill={color}
    />
    <path
      d="M76.802,264.535c14.134,0,25.6-11.466,25.6-25.6s-11.466-25.6-25.6-25.6c-14.134,0-25.6,11.466-25.6,25.6
				S62.668,264.535,76.802,264.535z M76.802,230.402c4.708,0,8.533,3.825,8.533,8.533c0,4.708-3.825,8.533-8.533,8.533
				c-4.708,0-8.533-3.825-8.533-8.533C68.268,234.227,72.094,230.402,76.802,230.402z"
      fill={color}
    />
    <path
      d="M170.668,307.202c0-14.134-11.466-25.6-25.6-25.6c-14.134,0-25.6,11.466-25.6,25.6s11.466,25.6,25.6,25.6
				C159.202,332.802,170.668,321.335,170.668,307.202z M136.535,307.202c0-4.708,3.825-8.533,8.533-8.533
				c4.708,0,8.533,3.825,8.533,8.533c0,4.708-3.825,8.533-8.533,8.533C140.36,315.735,136.535,311.91,136.535,307.202z"
      fill={color}
    />
    <path
      d="M448.452,128.903l-49.398,24.699h-49.186c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h49.186
				l49.398,24.699c5.674,2.837,12.35-1.289,12.35-7.632v-102.4C460.802,130.192,454.126,126.066,448.452,128.903z M443.735,225.128
				l-38.85-19.425c-1.185-0.592-2.491-0.901-3.816-0.901h-42.667v-34.133h42.667c1.325,0,2.631-0.308,3.816-0.901l38.85-19.425
				V225.128z"
      fill={color}
    />
  </svg>
)
