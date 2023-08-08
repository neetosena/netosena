const Logo = ({ name, fill, link }) => {
  return (
    <svg
      className={name}
      width="49"
      height="49"
      viewBox="0 0 49 49"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_77_3595)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.8444 49L43.9206 30.8685C44.817 29.9694 44.817 28.471 43.9206 27.5719L42.1279 25.7737C41.381 25.0245 40.4847 24.8746 39.5883 25.3242L25.3962 31.7676L48.9999 5.39452L46.9084 3.29666L8.51514 41.8074L9.85965 43.156L11.0548 44.3548L36.3017 31.7676L22.4084 45.5535L25.8444 49Z"
          fill={fill}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 23.2263L18.0762 5.0948C18.9726 4.19572 20.4665 4.19572 21.3628 5.0948L23.1555 6.89297C23.9024 7.49235 24.0518 8.54128 23.753 9.44037L17.3293 23.526L43.4726 0L45.564 2.09786L7.17073 40.6086L5.82622 39.2599L4.6311 38.0612L17.3293 12.737L3.58537 26.6728L0 23.2263Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_77_3595">
          <rect width="49" height="49" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;
