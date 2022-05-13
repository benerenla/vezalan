import { CONFIG } from '@/libs/config'
import Link from 'next/link'
import React from 'react'
import { Contact } from './Helper/Contact'

export const Navbar = () => {
  return (
    <div className="container mx-auto my-6 flex flex-col md:w-[90rem] md:flex-row md:justify-between">
      <div>
        <h1 className="text-2xl text-white">
          <Link href="/">{CONFIG.title}</Link>
        </h1>
      </div>
      <div className="z-10">
        {CONFIG.NAVBAR_ITEMS.map((data, index) => (
            <>
              <Link key={index} href={data.to}>
              <a
                href={data.to}
                className="rounded-lg px-4 py-2 text-lg text-white transition-all hover:text-gray-300 "
              >
                {data.title}
              </a>
            </Link>
          </>
        ))}
      </div>
      <div className="flex" style={{ zIndex: '10' }}>
        {CONFIG.CONTACT.map((data: IContactProps, index: number) => (
          <div key={index}>
            <p>{data.icon}</p>
            <Contact
              title={data.title}
              icon={data.icon}
              href={data.href}
            />
          </div>
        ))}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45rem"
        height="45rem"
        viewBox="0 0 1030 1041"
        fill="none"
        style={{ zIndex: '-1' }}
        className="absolute -mx-40 hidden opacity-70 md:-my-80 md:block"
      >
        <g opacity="0.2" filter="url(#filter0_f_714_1084)">
          <path
            opacity="0.5"
            d="M463.673 589.228C472.62 602.594 467.118 620.705 478.095 633.448C481.269 636.613 484.557 645.751 472.324 656.97C469.181 675.048 423.872 701.128 427.959 720.223C430.967 734.282 435.552 750.824 453.378 761.321C467.123 769.413 484.658 772.645 500.646 774.426C523.808 777.002 547.123 776.666 568.413 773.029C637.808 761.189 686.43 721.73 720.779 681.093C762.634 631.581 779.59 572.471 779.34 510.516C779.239 484.964 775.836 459.297 765.841 433.367C756.636 409.497 743.925 385.688 728.613 362.69C709.125 333.409 683.729 304.801 649.711 281.635C623.843 264.01 592.509 255.138 559.849 251.865C515.207 247.382 477.231 259.869 454.245 283.544C440.065 298.149 432.302 321.065 452.718 339.444C468.295 353.461 492.539 361.195 513.039 370.22C526.735 376.256 545.991 384.973 545.571 397.125C544.862 417.679 533.144 437.29 521.975 454.577C507.708 476.66 484.34 493.503 465.555 513.181C454.737 524.513 452.461 539.145 452.486 553.695C452.51 565.39 456.005 577.766 463.673 589.228Z"
            fill="#29b9d4"
          />
        </g>
        <g opacity="0.4" filter="url(#filter1_f_714_1084)">
          <path
            opacity="0.5"
            d="M566.327 603.23C557.38 616.595 562.882 634.706 551.905 647.449C548.731 650.615 545.443 659.753 557.676 670.972C560.819 689.05 606.128 715.129 602.041 734.225C599.033 748.283 594.448 764.826 576.622 775.322C562.877 783.415 545.342 786.647 529.354 788.428C506.192 791.003 482.877 790.668 461.587 787.031C392.192 775.19 343.57 735.732 309.221 695.095C267.366 645.583 250.41 586.473 250.66 524.518C250.761 498.966 254.164 473.299 264.159 447.368C273.364 423.498 286.075 399.689 301.387 376.692C320.875 347.41 346.271 318.803 380.289 295.637C406.157 278.012 437.491 269.139 470.151 265.867C514.793 261.384 552.769 273.871 575.755 297.546C589.935 312.151 597.698 335.067 577.282 353.445C561.705 367.462 537.461 375.196 516.961 384.222C503.265 390.258 484.009 398.975 484.429 411.127C485.138 431.681 496.856 451.292 508.025 468.579C522.292 490.662 545.66 507.505 564.445 527.182C575.263 538.515 577.539 553.146 577.514 567.696C577.49 579.392 573.995 591.768 566.327 603.23Z"
            fill="#29b9d4"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_714_1084"
            x="177.699"
            y="0.963013"
            width="851.644"
            height="1025.14"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="125"
              result="effect1_foregroundBlur_714_1084"
            />
          </filter>
          <filter
            id="filter1_f_714_1084"
            x="0.657349"
            y="14.9647"
            width="851.644"
            height="1025.14"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="125"
              result="effect1_foregroundBlur_714_1084"
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
