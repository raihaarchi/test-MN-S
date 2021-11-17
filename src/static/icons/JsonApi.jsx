import React from 'react';
import PropTypes from 'prop-types';

const JsonApi = ({ classnames, width, height, ...attr }) => (
  <svg
    width={width || 30}
    height={height || 30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classnames}
    {...attr}
  >
    <path
      opacity="0.5"
      d="M15.054 29.96C15.6543 29.955 16.2483 29.9238 16.841 29.8425C18.1944 29.67 19.5265 29.3013 20.7834 28.7638C22.549 28.0114 24.1643 26.9252 25.5365 25.5853C26.7934 24.3491 27.8448 22.8967 28.5941 21.3018C29.232 19.9306 29.6831 18.4594 29.8723 16.957C30.0591 15.5071 30.0415 14.0247 29.816 12.5835C29.6292 11.3836 29.2909 10.2136 28.8222 9.09871C28.5215 8.3975 28.1643 7.72254 27.752 7.07757C26.2884 4.78146 24.1668 2.93531 21.7245 1.70163C20.856 1.25791 19.9413 0.89543 19.0027 0.615446H18.9964C19.1455 0.694192 19.2971 0.780437 19.4287 0.866682C19.5791 0.959176 19.7282 1.04917 19.8686 1.14792C20.5816 1.62914 21.2395 2.18161 21.8222 2.81032C23.1543 4.24149 24.0741 5.99514 24.6017 7.86128C24.9576 9.08871 25.1455 10.3586 25.222 11.6323C25.2771 12.561 25.2771 13.496 25.1631 14.4184C24.9764 16.0058 24.4688 17.5557 23.6242 18.9131C23.0039 19.9168 22.1956 20.8118 21.2395 21.518C19.6806 22.6779 17.6342 23.3704 15.6806 22.9104C15.3623 22.8342 15.0415 22.7279 14.7433 22.5879C14.4037 22.4329 14.0666 22.2417 13.7671 22.0267C13.1844 21.638 12.658 21.1705 12.2082 20.6443C11.663 19.9943 11.2132 19.2556 10.8936 18.4607C10.5001 17.4532 10.2934 16.3708 10.2746 15.2858C10.237 13.6947 10.5565 12.0948 11.3448 10.6986C11.8711 9.76867 12.5841 8.95372 13.4287 8.30125C13.7107 8.07877 14.0102 7.88503 14.3109 7.70254L14.331 7.69379C13.747 7.56255 13.128 7.50505 12.5252 7.5438C12.0014 7.58004 11.4939 7.67504 10.9864 7.84253C10.5365 7.99252 10.1041 8.18126 9.70941 8.405C9.38986 8.59124 9.07282 8.79872 8.79086 9.02371C8.52645 9.2487 8.26455 9.47243 8.02019 9.71742C6.61292 11.1586 5.80464 13.0697 5.48635 15.0371C5.29838 16.2533 5.29838 17.4882 5.37231 18.7257C5.50389 20.4681 5.86229 22.208 6.55652 23.8016C6.9876 24.7941 7.55026 25.7102 8.24575 26.5177C9.31593 27.7514 10.6693 28.7088 12.1706 29.3063C13.0164 29.645 13.9174 29.8875 14.8184 29.9813C14.9112 30 15.0052 30 15.0803 30L15.054 29.96ZM11.3773 29.4625C11.1718 29.375 10.9839 29.2763 10.8134 29.1775C10.6267 29.0738 10.4375 28.9676 10.2508 28.8538C9.51768 28.4013 8.86229 27.8701 8.25953 27.2602C6.88861 25.8377 5.97006 24.0516 5.44374 22.1592C5.08785 20.8668 4.89863 19.5319 4.82344 18.1944C4.7683 17.3157 4.7871 16.4533 4.88108 15.5921C5.05026 14.0209 5.50139 12.466 6.28961 11.1173C6.85226 10.1249 7.62169 9.24495 8.52395 8.55124C9.14299 8.08377 9.83848 7.68879 10.5703 7.4263C11.6029 7.05258 12.7107 6.94008 13.7821 7.08882C14.1956 7.14507 14.6067 7.24006 14.9839 7.37006C15.0202 7.37006 15.0202 7.37006 15.0402 7.40756C15.059 7.4263 15.0966 7.4263 15.1154 7.44505C15.1718 7.46505 15.2458 7.5013 15.3222 7.53755C15.6217 7.68754 15.9225 7.87628 16.2044 8.06252C17.331 8.84872 18.2508 9.93491 18.8322 11.1898C19.3585 12.3323 19.6029 13.6072 19.623 14.8621C19.6405 16.2108 19.3974 17.5582 18.8147 18.7944C18.1192 20.2743 16.9375 21.5292 15.5089 22.3342C15.6217 22.3717 15.7345 22.3904 15.8485 22.4279C16.1305 22.4829 16.4112 22.5204 16.7107 22.5204C18.5503 22.5767 20.3347 21.6967 21.648 20.4618C21.8924 20.2368 22.1179 19.9931 22.3247 19.7306C22.6067 19.3931 22.8698 19.0569 23.0941 18.7019C23.3936 18.2332 23.6393 17.7645 23.8636 17.2595C24.1468 16.5858 24.3698 15.8921 24.5014 15.1796C24.747 13.9247 24.7658 12.6523 24.6881 11.3973C24.519 8.86997 23.8448 6.34137 22.3799 4.24274C22.1543 3.92526 21.93 3.62527 21.6844 3.34404C21.2721 2.87532 20.821 2.44534 20.3523 2.05161C19.826 1.62039 19.2433 1.22791 18.6443 0.90793C18.0265 0.629196 17.2934 0.349212 16.524 0.160473L16.148 0.0854769C15.8861 0.0479791 15.6217 0.0304801 15.3535 0.0104813C14.9463 -0.00826766 14.5152 -0.00201802 14.0816 0.0304801C13.1994 0.0867269 12.3122 0.230469 11.435 0.451706C7.22946 1.53414 3.55026 4.45773 1.59161 8.33625C0.963786 9.57243 0.520176 10.8936 0.260777 12.251C-0.0387217 13.8047 -0.0775689 15.4046 0.130451 16.9695C0.280828 18.2444 0.599124 19.4981 1.10539 20.6905C1.38985 21.403 1.74574 22.0955 2.13923 22.7504C3.51016 24.979 5.50139 26.7952 7.79086 28.0501C8.65302 28.5388 9.55528 28.9126 10.4939 29.2313C10.7771 29.3238 11.0578 29.4175 11.3573 29.4925L11.3773 29.4625Z"
      fill="black"
    />
  </svg>
);

JsonApi.propTypes = {
  classnames: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

JsonApi.defaultProps = {
  classnames: '',
  width: 30,
  height: 30,
};

export default JsonApi;
