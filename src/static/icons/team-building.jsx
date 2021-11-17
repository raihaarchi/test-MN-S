import React from 'react';
import PropTypes from 'prop-types';

const TeamBuilding = ({ classnames, width, height, ...attr }) => (
  <svg
    width={width || 69}
    height={height || 65}
    viewBox="0 0 69 65"
    fill="none"
    className={classnames}
    xmlns="http://www.w3.org/2000/svg"
    {...attr}
  >
    <path
      d="M58.956 44.0635C58.184 41.8634 56.9634 40.3489 55.2247 39.4333C54.7115 39.163 54.1535 38.9462 53.5394 38.7795C52.0313 37.3574 50.1641 36.1329 47.9843 35.1394C47.6314 34.9784 47.2139 35.1311 47.0515 35.48C46.889 35.8289 47.0431 36.242 47.3958 36.4027C48.6695 36.9833 49.8256 37.6456 50.8549 38.3814C50.5139 38.3636 50.1607 38.3537 49.791 38.3537C49.7804 38.3537 49.7696 38.3537 49.7591 38.3537C48.3502 38.3562 46.8995 38.4776 45.3635 38.606C42.2182 38.8689 38.9658 39.1409 36.0643 38.3374C36.0604 38.3363 36.0495 38.3335 36.0457 38.3325L36.0214 38.3254C36.0027 38.3199 35.9844 38.3146 35.9694 38.3105C29.3495 36.4975 23.9438 36.9579 20.5582 37.6712C20.5405 37.6736 20.5226 37.6767 20.5049 37.6805C20.4472 37.6927 20.3906 37.7061 20.3331 37.7187C22.7173 35.9585 25.9675 34.7143 29.7641 34.1387C34.5804 33.4089 39.9599 33.8299 44.5235 35.2941C44.8928 35.4129 45.2894 35.2126 45.4092 34.8472C45.529 34.4819 45.3267 34.0895 44.9573 33.9711C43.2178 33.4129 41.3648 33.0006 39.4688 32.7381C39.4669 32.7379 39.4656 32.7362 39.4659 32.7343L42.0293 13.1904C42.0296 13.1885 42.0312 13.1872 42.033 13.1874L48.4184 13.8839C48.4202 13.8841 48.4216 13.8857 48.4213 13.8876L48.289 15.0841C48.2549 15.3916 48.4128 15.6988 48.6981 15.8254C48.7977 15.8696 48.8926 15.8874 48.9852 15.8874C49.3392 15.8874 49.6439 15.6235 49.6833 15.2674L49.8191 14.04C49.8193 14.0382 49.821 14.0368 49.8229 14.0371L56.9859 14.8184L56.8481 16.0484C56.8053 16.4302 57.0836 16.774 57.4694 16.8163C57.4958 16.8192 57.5219 16.8207 57.5477 16.8207C57.9013 16.8207 58.2058 16.5574 58.2457 16.2016L58.4609 14.2799C58.4614 14.2753 58.4613 14.2708 58.4618 14.2662C58.4621 14.2619 58.4623 14.2575 58.4625 14.2531C58.4672 14.1888 58.4634 14.1256 58.4511 14.0651C58.4509 14.064 58.4509 14.0628 58.4506 14.0616C57.8337 10.7294 56.1496 7.56143 53.7071 5.13942C51.0827 2.53704 47.6536 0.858219 43.7438 0.249679C43.7271 0.246619 43.7104 0.243651 43.6936 0.241797C43.3956 0.19617 43.0951 0.156015 42.7917 0.122908C42.7888 0.12263 42.7858 0.122351 42.7829 0.122073C42.7816 0.12198 42.7804 0.121795 42.7791 0.121702C38.0823 -0.385013 33.7213 0.696764 30.1674 3.2512C29.8477 3.48101 29.7813 3.92754 30.0245 4.23922C30.2588 4.5396 30.7049 4.58365 31.0156 4.36117C33.6524 2.47258 36.7803 1.46555 40.1711 1.39554C40.1745 1.39544 40.176 1.3999 40.1731 1.40175C36.585 3.81356 34.4993 7.68922 33.9319 10.9023C33.9316 10.904 33.9299 10.9053 33.9282 10.9051L26.1328 10.0559C26.1303 10.0556 26.1289 10.0531 26.13 10.051C26.7673 8.78612 27.5861 7.60446 28.5716 6.52862C28.8654 6.20803 28.8005 5.69028 28.4007 5.4576C28.1095 5.28817 27.736 5.36867 27.5095 5.61674C26.2094 7.04053 25.1768 8.63579 24.4397 10.3589C24.4385 10.3614 24.4374 10.364 24.4363 10.3665C24.4357 10.3679 24.4351 10.3693 24.4344 10.3707C24.4331 10.3738 24.4323 10.377 24.431 10.3802C24.423 10.3997 24.4158 10.4197 24.4096 10.4402C24.4071 10.4481 24.4053 10.4559 24.4031 10.4639C24.3988 10.4802 24.3948 10.4967 24.3917 10.5134C24.3898 10.5232 24.3883 10.5329 24.3869 10.5426C24.3858 10.5501 24.3841 10.5571 24.3833 10.5646L24.1717 12.4536C24.1285 12.8397 24.409 13.2179 24.7998 13.2554C24.8226 13.2576 24.8453 13.2586 24.8677 13.2586C25.2213 13.2586 25.5258 12.9954 25.5657 12.6396L25.7032 11.4121C25.7034 11.4102 25.7051 11.4088 25.707 11.4091L33.75 12.2852C33.7519 12.2854 33.7533 12.287 33.753 12.289L33.6189 13.4867C33.5754 13.8747 33.8581 14.2506 34.2511 14.2863C34.2726 14.2882 34.294 14.2891 34.3152 14.2891C34.6688 14.2891 34.9733 14.0258 35.0131 13.6701L35.1508 12.4412C35.151 12.4393 35.1527 12.4379 35.1547 12.4382L40.6276 13.0344C40.6295 13.0346 40.6309 13.0363 40.6306 13.0382L38.069 32.5694C38.0687 32.5713 38.0671 32.5726 38.0652 32.5724C36.1161 32.3806 34.14 32.3466 32.211 32.4759C32.2088 32.4761 32.207 32.4741 32.2074 32.472C32.5291 30.671 32.1897 28.7941 31.235 27.2129C30.1763 25.4551 28.4895 24.2108 26.4853 23.7091C24.4829 23.2078 22.4029 23.5076 20.6279 24.5534C20.6267 24.5542 20.6254 24.5547 20.6242 24.5555L20.6241 24.5556C16.9581 26.718 15.7544 31.4279 17.9404 35.0543C18.2982 35.6488 18.7768 36.2345 19.3091 36.739C19.3106 36.7404 19.3104 36.7428 19.3088 36.744C18.5661 37.3089 17.9011 37.9218 17.3222 38.5788C17.3218 38.5793 17.3213 38.5795 17.3207 38.5797C15.93 39.0819 14.6991 39.6914 13.6815 40.3894C11.9082 41.6063 10.9567 43.0017 11.0015 44.3198C11.0143 44.6938 11.3295 45 11.7079 45H58.2963C58.6136 45 58.9037 44.7882 58.9832 44.4578C59.0144 44.3276 59.0003 44.1899 58.956 44.0635ZM46.1208 2.21172C52.4159 4.13378 55.7656 9.04254 56.8678 13.4014C56.8684 13.4037 56.8664 13.4058 56.8641 13.4056L49.9701 12.6536C49.9683 12.6534 49.967 12.6519 49.9671 12.6501C50.1134 9.45178 48.9718 5.321 46.1173 2.21719C46.1149 2.21468 46.1175 2.2107 46.1208 2.21172ZM35.3355 11.0583C35.3335 11.0581 35.3321 11.0562 35.3325 11.0543C35.9819 7.56013 38.6462 3.37158 42.8245 1.52843C42.8251 1.52815 42.8258 1.52806 42.8264 1.52815C42.997 1.54837 43.1661 1.57035 43.3332 1.59437C43.3338 1.59446 43.3344 1.59464 43.3348 1.59501C47.013 4.28819 48.6963 8.94544 48.5665 12.4969C48.5664 12.4988 48.5646 12.5004 48.5626 12.5001L35.3355 11.0583ZM23.6372 24.9347C24.4608 24.8109 25.309 24.8493 26.1408 25.0574C27.7808 25.468 29.161 26.4863 30.0278 27.9254C30.876 29.3301 31.1308 31.0195 30.744 32.6052C30.7436 32.6066 30.7425 32.6077 30.741 32.6078C30.3413 32.6527 29.9441 32.7041 29.551 32.7637C29.4449 32.7798 29.3398 32.7973 29.2344 32.8144C29.2328 32.8146 29.2312 32.8136 29.2306 32.812C28.8834 31.6784 28.3401 30.4837 27.6451 29.3316C26.4471 27.3427 24.9975 25.7737 23.6358 24.9409C23.633 24.9393 23.634 24.9352 23.6372 24.9347ZM21.3449 25.75C21.3452 25.7498 21.3456 25.7497 21.3459 25.7495C21.498 25.6601 21.7165 25.65 21.9955 25.7197C23.072 25.9887 24.8628 27.4301 26.4374 30.044C27.045 31.0515 27.5243 32.088 27.8397 33.0711C27.8404 33.073 27.8392 33.075 27.8371 33.0754C26.5201 33.3546 25.2738 33.7157 24.1115 34.1523C24.1101 34.1528 24.1086 34.1524 24.1077 34.1513C23.6217 33.5691 23.1614 32.9216 22.7392 32.2233C21.8218 30.7014 21.2043 29.1384 21.0003 27.8221C20.8366 26.7661 20.9685 25.9724 21.3449 25.75ZM19.1489 34.3422C17.7931 32.0929 18.0317 29.3353 19.532 27.3611C19.534 27.3586 19.538 27.3598 19.5382 27.3629C19.551 27.5775 19.5743 27.8004 19.6103 28.033C19.8411 29.5224 20.5234 31.2635 21.5318 32.9364C21.9128 33.5666 22.3231 34.1596 22.7559 34.7079C22.7572 34.7095 22.7567 34.712 22.7546 34.713C21.9515 35.0776 21.1967 35.4817 20.4955 35.9225C20.4942 35.9234 20.4925 35.9232 20.4914 35.9223C19.9698 35.4664 19.485 34.9006 19.1489 34.3422ZM57.2536 43.6089H12.5459C12.5435 43.6089 12.5417 43.6064 12.5427 43.6042C13.1993 42.0217 16.1904 40.0307 20.7453 39.0522C20.7627 39.0499 20.7803 39.0468 20.7977 39.043C24.0255 38.3558 29.2125 37.9032 35.5967 39.6518L35.617 39.6577C35.6417 39.665 35.6671 39.6724 35.6926 39.6789C38.8364 40.5475 42.2148 40.2651 45.4819 39.992C46.988 39.8661 48.4107 39.7471 49.7611 39.7447H49.7897C53.7477 39.7447 55.9854 40.8783 57.2567 43.6039C57.2578 43.6063 57.2561 43.6089 57.2536 43.6089Z"
      fill="black"
      fillOpacity="0.5"
    />
    <path
      opacity="0.5"
      d="M6.94922 54.3945H4.20703V62H3.08789V54.3945H0.351562V53.4688H6.94922V54.3945ZM11.502 55.6602H12.5859V62H11.502V57.377L8.57812 62H7.49414V55.6602H8.57812V60.2891L11.502 55.6602ZM17.9766 60.5645L20.1328 55.6602H21.4863V62H20.4023V57.3887L18.3516 62H17.6016L15.5098 57.2891V62H14.4258V55.6602H15.832L17.9766 60.5645ZM26.0156 56.0234C26.8125 56.0234 27.4492 56.291 27.9258 56.8262C28.4062 57.3574 28.6465 58.0586 28.6465 58.9297V59.0293C28.6465 59.627 28.5312 60.1621 28.3008 60.6348C28.0703 61.1035 27.7383 61.4688 27.3047 61.7305C26.875 61.9883 26.3789 62.1172 25.8164 62.1172C24.9648 62.1172 24.2793 61.834 23.7598 61.2676C23.2402 60.6973 22.9805 59.9336 22.9805 58.9766V58.4492C22.9805 57.1172 23.2266 56.0586 23.7188 55.2734C24.2148 54.4883 24.9453 54.0098 25.9102 53.8379C26.457 53.7402 26.8262 53.6211 27.0176 53.4805C27.209 53.3398 27.3047 53.1465 27.3047 52.9004H28.1953C28.1953 53.3887 28.084 53.7695 27.8613 54.043C27.6426 54.3164 27.291 54.5098 26.8066 54.623L25.998 54.8047C25.3535 54.957 24.8691 55.2148 24.5449 55.5781C24.2246 55.9375 24.0156 56.418 23.918 57.0195C24.4922 56.3555 25.1914 56.0234 26.0156 56.0234ZM25.8047 56.9141C25.2734 56.9141 24.8516 57.0938 24.5391 57.4531C24.2266 57.8086 24.0703 58.3027 24.0703 58.9355V59.0293C24.0703 59.709 24.2266 60.248 24.5391 60.6465C24.8555 61.041 25.2812 61.2383 25.8164 61.2383C26.3555 61.2383 26.7812 61.0391 27.0938 60.6406C27.4062 60.2422 27.5625 59.6602 27.5625 58.8945C27.5625 58.2969 27.4043 57.8184 27.0879 57.459C26.7754 57.0957 26.3477 56.9141 25.8047 56.9141ZM33.8613 55.6602H34.9453V62H33.8613V57.377L30.9375 62H29.8535V55.6602H30.9375V60.2891L33.8613 55.6602ZM41.8828 55.6602V62H40.793V56.5566H38.6367L38.5078 58.9297C38.4375 60.0195 38.2539 60.7988 37.957 61.2676C37.6641 61.7363 37.1973 61.9805 36.5566 62H36.123V61.0449L36.4336 61.0215C36.7852 60.9824 37.0371 60.7793 37.1895 60.4121C37.3418 60.0449 37.4395 59.3652 37.4824 58.373L37.5996 55.6602H41.8828ZM43.5703 61.1152L43.9453 60.6523C44.3672 60.1055 44.6074 59.2852 44.666 58.1914L44.7656 55.6602H48.8496V61.1152H49.6641V63.8633H48.5801V62H44.1562V63.8633H43.0723L43.0781 61.1152H43.5703ZM44.8535 61.1152H47.7656V56.6621H45.8145L45.75 58.1738C45.6836 59.4355 45.3848 60.416 44.8535 61.1152ZM54.9668 55.6602H56.0508V62H54.9668V57.377L52.043 62H50.959V55.6602H52.043V60.2891L54.9668 55.6602ZM62.9707 62H61.8867V59.293H58.9746V62H57.8848V55.6602H58.9746V58.4082H61.8867V55.6602H62.9707V62ZM68.8125 56.5566H65.8887V62H64.7988V55.6602H68.8125V56.5566Z"
      fill="black"
    />
  </svg>
);

TeamBuilding.propTypes = {
  classnames: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

TeamBuilding.defaultProps = {
  classnames: '',
  width: 69,
  height: 65,
};

export default TeamBuilding;