import React from 'react';
import PropTypes from 'prop-types';

const Agreement = ({ color, classnames, width, height, ...attr }) => (
  <svg
    className={classnames}
    width={width || 39}
    height={height || 29}
    viewBox="0 0 39 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...attr}
  >
    <path
      d="M38.7769 9.3466L31.558 2.1277C31.2605 1.83025 30.778 1.83017 30.4804 2.1277C30.1828 2.42523 30.1828 2.9077 30.4804 3.20538L37.1604 9.88537L33.2548 13.7909C33.1351 13.9105 32.9405 13.9105 32.821 13.7909L25.1086 6.07859C24.9889 5.959 24.9889 5.76438 25.1086 5.64472L27.7297 3.02341C28.0272 2.72588 28.0272 2.24341 27.7297 1.9458C27.4321 1.64827 26.9498 1.64827 26.652 1.9458L24.0309 4.56696C23.4879 5.10999 23.3592 5.91178 23.6424 6.57882L22.7559 7.46531H19.3375H19.0681H16.5579L15.4395 6.34695C15.4825 6.19019 15.5052 6.02695 15.5052 5.86006C15.5052 5.37103 15.3147 4.91126 14.9689 4.56551L12.4186 2.0152C12.121 1.71767 11.6387 1.71767 11.3409 2.0152C11.0434 2.31272 11.0434 2.7952 11.3409 3.09288L13.8913 5.64319C13.9695 5.72135 13.9812 5.81268 13.9812 5.86006C13.9812 5.90743 13.9695 5.99876 13.8912 6.07699L13.679 6.28921L6.17645 13.7899C6.17401 13.7924 6.17196 13.7951 6.16959 13.7975C6.09357 13.8678 6.0075 13.8792 5.96187 13.8792C5.91442 13.8792 5.82309 13.8676 5.74493 13.7894L1.83952 9.88384L8.60939 3.11405C8.90691 2.81652 8.90691 2.33405 8.60939 2.03645C8.31186 1.73884 7.82954 1.73892 7.5317 2.03645L0.223146 9.34508C-0.074382 9.64261 -0.074382 10.1251 0.223146 10.4227L4.66748 14.8671C5.0245 15.224 5.49326 15.4024 5.96203 15.4024C6.17729 15.4024 6.39209 15.363 6.59646 15.2876L9.09818 17.7894C8.90394 18.1538 8.79349 18.5691 8.79349 19.01C8.79349 20.4461 9.96182 21.6144 11.3979 21.6144C11.4011 21.6144 11.4043 21.6142 11.4075 21.6142C11.4075 21.6143 11.4075 21.6145 11.4075 21.6146C11.4075 23.0475 12.5706 24.2136 14.0022 24.2188C14.0022 24.22 14.0021 24.221 14.0021 24.2222C14.0021 25.6582 15.1705 26.8266 16.6065 26.8266C17.0483 26.8266 17.4646 26.7157 17.8295 26.5207L18.7608 27.4521C19.1975 27.8887 19.778 28.1292 20.3955 28.1292C21.013 28.1292 21.5936 27.8887 22.0301 27.4521C22.4435 27.0387 22.6811 26.4963 22.7052 25.9156C23.2683 25.8876 23.8232 25.6591 24.2523 25.2299C24.7057 24.7765 24.9505 24.1737 24.9417 23.5327C24.9417 23.5313 24.9417 23.53 24.9417 23.5286C25.6046 23.4875 26.2145 23.197 26.6654 22.7056C27.1187 22.2118 27.3431 21.5892 27.3411 20.9681C27.9786 20.9497 28.5751 20.6929 29.028 20.24C29.5004 19.7676 29.7595 19.1395 29.7572 18.4714C29.7559 18.0781 29.6636 17.6996 29.4913 17.3587L31.9906 15.0735C32.304 15.2926 32.6705 15.4037 33.0378 15.4037C33.5066 15.4037 33.9754 15.2253 34.3324 14.8685L38.7767 10.4241C39.0744 10.1266 39.0744 9.64413 38.7769 9.3466ZM11.398 20.0906C10.8021 20.0906 10.3175 19.6059 10.3175 19.0101C10.3175 18.4144 10.8021 17.9297 11.398 17.9297C11.9938 17.9297 12.4785 18.4144 12.4785 19.0101C12.4784 19.6059 11.9937 20.0906 11.398 20.0906ZM14.8166 22.3332C14.7856 22.3626 14.7554 22.3927 14.7258 22.4235C14.5352 22.592 14.2857 22.6952 14.0119 22.6952C13.4161 22.6952 12.9315 22.2105 12.9315 21.6147C12.9315 21.0189 13.4161 20.5342 14.0119 20.5342C14.6077 20.5342 15.0924 21.0189 15.0924 21.6147C15.0923 21.8908 14.9874 22.1421 14.8166 22.3332ZM17.3809 24.9744C17.3774 24.9777 17.3737 24.9806 17.3702 24.984C17.3664 24.9878 17.3633 24.992 17.3597 24.9958C17.1649 25.1855 16.8993 25.3029 16.6067 25.3029C16.0108 25.3027 15.5261 24.8181 15.5261 24.2223C15.5261 23.9463 15.6309 23.6951 15.8018 23.5039C15.8328 23.4745 15.863 23.4444 15.8926 23.4136C16.0832 23.2451 16.3328 23.142 16.6065 23.142C17.2023 23.142 17.687 23.6267 17.687 24.2225C17.687 24.5147 17.57 24.7797 17.3809 24.9744ZM27.9505 19.1626C27.7681 19.3449 27.5257 19.4453 27.2678 19.4453C27.0099 19.4453 26.7675 19.3449 26.5851 19.1627L25.0021 17.5796C24.7045 17.2821 24.2222 17.2821 23.9244 17.5796C23.6269 17.8771 23.6269 18.3596 23.9244 18.6572L25.5073 20.2402C25.5074 20.2402 25.5075 20.2403 25.5075 20.2403L25.5123 20.2451C25.9051 20.6378 25.9185 21.2659 25.5428 21.6751C25.3541 21.8808 25.0965 21.9994 24.8175 22.0091C24.5391 22.0194 24.2733 21.9186 24.0706 21.7268L22.5464 20.2839C22.2407 19.9946 21.7584 20.0078 21.4691 20.3135C21.1798 20.6191 21.193 21.1013 21.4986 21.3907L23.1582 22.9617C23.3225 23.1173 23.4146 23.3275 23.4178 23.5538C23.4209 23.78 23.3345 23.9927 23.1745 24.1526C22.8507 24.4766 22.3235 24.4765 21.9997 24.1526L21.2303 23.3832C20.9327 23.0857 20.4503 23.0857 20.1526 23.3832C20.0038 23.532 19.9294 23.727 19.9294 23.922C19.9294 24.117 20.0038 24.312 20.1526 24.4607L20.9524 25.2605C21.1012 25.4094 21.1832 25.6072 21.1832 25.8176C21.1832 26.028 21.1012 26.2259 20.9524 26.3746C20.8035 26.5235 20.6057 26.6054 20.3953 26.6054C20.1849 26.6054 19.9871 26.5234 19.8383 26.3746L18.9063 25.4426C19.1004 25.0783 19.2108 24.6631 19.2108 24.2224C19.2108 22.7895 18.0476 21.6235 16.616 21.6182C16.616 21.6171 16.6161 21.616 16.6161 21.6149C16.6161 20.1788 15.4477 19.0105 14.0117 19.0105C14.0085 19.0105 14.0053 19.0107 14.0021 19.0107C14.0021 19.0106 14.0021 19.0104 14.0021 19.0102C14.0021 17.5742 12.8338 16.4059 11.3977 16.4059C10.9561 16.4059 10.54 16.5168 10.1753 16.7115L7.79373 14.3301L14.5304 7.59335L15.7034 8.7664C15.8463 8.9093 16.0401 8.98958 16.2421 8.98958H17.2284L14.2207 11.9973C13.7608 12.4572 13.5076 13.0687 13.5076 13.719C13.5076 14.3694 13.7608 14.9808 14.2207 15.4407C14.6805 15.9006 15.292 16.1538 15.9424 16.1538C16.5928 16.1538 17.2043 15.9005 17.6641 15.4407L20.2152 12.8895L23.008 12.9201L27.9459 17.7926C28.1304 17.9747 28.2325 18.2177 28.2332 18.4768C28.2343 18.7356 28.1338 18.9792 27.9505 19.1626ZM28.5012 16.1993L23.8594 11.619C23.8593 11.6189 23.8593 11.6188 23.8592 11.6187L23.8525 11.6121C23.6811 11.4429 23.4498 11.3721 23.2278 11.3982L19.9113 11.3619C19.7057 11.3604 19.5091 11.4401 19.3642 11.585L16.5864 14.3628C16.4144 14.5349 16.1856 14.6296 15.9424 14.6296C15.6992 14.6296 15.4704 14.5349 15.2984 14.3628C15.1263 14.1908 15.0316 13.9621 15.0316 13.7188C15.0316 13.4755 15.1263 13.2468 15.2984 13.0747L19.3837 8.98936H23.0716C23.2737 8.98936 23.4675 8.90907 23.6104 8.76617L24.6256 7.75095L30.8898 14.0151L28.5012 16.1993Z"
      fill={color}
      fillOpacity="1"
    />
    <path
      d="M33.3888 10.9964C33.8088 10.9964 34.1493 10.656 34.1493 10.236C34.1493 9.81604 33.8088 9.47559 33.3888 9.47559C32.9689 9.47559 32.6284 9.81604 32.6284 10.236C32.6284 10.656 32.9689 10.9964 33.3888 10.9964Z"
      fill={color}
      fillOpacity="1"
    />
    <path
      d="M5.53337 11.0726C5.95335 11.0726 6.2938 10.7322 6.2938 10.3122C6.2938 9.89221 5.95335 9.55176 5.53337 9.55176C5.1134 9.55176 4.77295 9.89221 4.77295 10.3122C4.77295 10.7322 5.1134 11.0726 5.53337 11.0726Z"
      fill={color}
      fillOpacity="1"
    />
    <path
      d="M9.98333 1.58164C10.4033 1.58164 10.7438 1.24119 10.7438 0.821217C10.7438 0.401245 10.4033 0.060791 9.98333 0.060791C9.56335 0.060791 9.2229 0.401245 9.2229 0.821217C9.2229 1.24119 9.56335 1.58164 9.98333 1.58164Z"
      fill={color}
      fillOpacity="1"
    />
    <path
      d="M29.0029 1.52085C29.4228 1.52085 29.7633 1.1804 29.7633 0.760425C29.7633 0.340454 29.4228 0 29.0029 0C28.5829 0 28.2424 0.340454 28.2424 0.760425C28.2424 1.1804 28.5829 1.52085 29.0029 1.52085Z"
      fill={color}
      fillOpacity="1"
    />
  </svg>
);

Agreement.propTypes = {
  color: PropTypes.string,
  classnames: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Agreement.defaultProps = {
  color: '',
  classnames: '',
  width: 39,
  height: 29,
};

export default Agreement;