import React from 'react';
import PropTypes from 'prop-types';

const IconTennis = ({ classnames, width, height, ...attr }) => (
  <svg
    width={width || 71}
    height={height || 79}
    viewBox="0 0 71 79"
    fill="none"
    className={classnames}
    xmlns="http://www.w3.org/2000/svg"
    {...attr}
  >
    <path
      opacity="0.5"
      d="M7.91992 62H6.78906V58.0566H2.48828V62H1.36328V53.4688H2.48828V57.1367H6.78906V53.4688H7.91992V62ZM13.6621 62C13.5996 61.875 13.5488 61.6523 13.5098 61.332C13.0059 61.8555 12.4043 62.1172 11.7051 62.1172C11.0801 62.1172 10.5664 61.9414 10.1641 61.5898C9.76562 61.2344 9.56641 60.7852 9.56641 60.2422C9.56641 59.582 9.81641 59.0703 10.3164 58.707C10.8203 58.3398 11.5273 58.1562 12.4375 58.1562H13.4922V57.6582C13.4922 57.2793 13.3789 56.9785 13.1523 56.7559C12.9258 56.5293 12.5918 56.416 12.1504 56.416C11.7637 56.416 11.4395 56.5137 11.1777 56.709C10.916 56.9043 10.7852 57.1406 10.7852 57.418H9.69531C9.69531 57.1016 9.80664 56.7969 10.0293 56.5039C10.2559 56.207 10.5605 55.9727 10.9434 55.8008C11.3301 55.6289 11.7539 55.543 12.2148 55.543C12.9453 55.543 13.5176 55.7266 13.9316 56.0938C14.3457 56.457 14.5605 56.959 14.5762 57.5996V60.5176C14.5762 61.0996 14.6504 61.5625 14.7988 61.9062V62H13.6621ZM11.8633 61.1738C12.2031 61.1738 12.5254 61.0859 12.8301 60.9102C13.1348 60.7344 13.3555 60.5059 13.4922 60.2246V58.9238H12.6426C11.3145 58.9238 10.6504 59.3125 10.6504 60.0898C10.6504 60.4297 10.7637 60.6953 10.9902 60.8867C11.2168 61.0781 11.5078 61.1738 11.8633 61.1738ZM18.8184 61.2324C19.2051 61.2324 19.543 61.1152 19.832 60.8809C20.1211 60.6465 20.2812 60.3535 20.3125 60.002H21.3379C21.3184 60.3652 21.1934 60.7109 20.9629 61.0391C20.7324 61.3672 20.4238 61.6289 20.0371 61.8242C19.6543 62.0195 19.248 62.1172 18.8184 62.1172C17.9551 62.1172 17.2676 61.8301 16.7559 61.2559C16.248 60.6777 15.9941 59.8887 15.9941 58.8887V58.707C15.9941 58.0898 16.1074 57.541 16.334 57.0605C16.5605 56.5801 16.8848 56.207 17.3066 55.9414C17.7324 55.6758 18.2344 55.543 18.8125 55.543C19.5234 55.543 20.1133 55.7559 20.582 56.1816C21.0547 56.6074 21.3066 57.1602 21.3379 57.8398H20.3125C20.2812 57.4297 20.125 57.0938 19.8438 56.832C19.5664 56.5664 19.2227 56.4336 18.8125 56.4336C18.2617 56.4336 17.834 56.6328 17.5293 57.0312C17.2285 57.4258 17.0781 57.998 17.0781 58.748V58.9531C17.0781 59.6836 17.2285 60.2461 17.5293 60.6406C17.8301 61.0352 18.2598 61.2324 18.8184 61.2324ZM27.2676 56.5391H25.1406V62H24.0566V56.5391H21.9707V55.6602H27.2676V56.5391ZM27.7891 58.7715C27.7891 58.1504 27.9102 57.5918 28.1523 57.0957C28.3984 56.5996 28.7383 56.2168 29.1719 55.9473C29.6094 55.6777 30.1074 55.543 30.666 55.543C31.5293 55.543 32.2266 55.8418 32.7578 56.4395C33.293 57.0371 33.5605 57.832 33.5605 58.8242V58.9004C33.5605 59.5176 33.4414 60.0723 33.2031 60.5645C32.9688 61.0527 32.6309 61.4336 32.1895 61.707C31.752 61.9805 31.248 62.1172 30.6777 62.1172C29.8184 62.1172 29.1211 61.8184 28.5859 61.2207C28.0547 60.623 27.7891 59.832 27.7891 58.8477V58.7715ZM28.8789 58.9004C28.8789 59.6035 29.041 60.168 29.3652 60.5938C29.6934 61.0195 30.1309 61.2324 30.6777 61.2324C31.2285 61.2324 31.666 61.0176 31.9902 60.5879C32.3145 60.1543 32.4766 59.5488 32.4766 58.7715C32.4766 58.0762 32.3105 57.5137 31.9785 57.084C31.6504 56.6504 31.2129 56.4336 30.666 56.4336C30.1309 56.4336 29.6992 56.6465 29.3711 57.0723C29.043 57.498 28.8789 58.1074 28.8789 58.9004ZM40.0234 55.6602V62H38.9336V56.5566H36.7773L36.6484 58.9297C36.5781 60.0195 36.3945 60.7988 36.0977 61.2676C35.8047 61.7363 35.3379 61.9805 34.6973 62H34.2637V61.0449L34.5742 61.0215C34.9258 60.9824 35.1777 60.7793 35.3301 60.4121C35.4824 60.0449 35.5801 59.3652 35.623 58.373L35.7402 55.6602H40.0234ZM42.9473 57.8457H44.5938C45.3125 57.8535 45.8809 58.041 46.2988 58.4082C46.7168 58.7754 46.9258 59.2734 46.9258 59.9023C46.9258 60.5352 46.7109 61.043 46.2812 61.4258C45.8516 61.8086 45.2734 62 44.5469 62H41.8633V55.6602H42.9473V57.8457ZM42.9473 58.7305V61.1152H44.5586C44.9648 61.1152 45.2793 61.0117 45.502 60.8047C45.7246 60.5938 45.8359 60.3066 45.8359 59.9434C45.8359 59.5918 45.7266 59.3047 45.5078 59.082C45.293 58.8555 44.9902 58.7383 44.5996 58.7305H42.9473ZM53.459 62H52.375V59.293H49.4629V62H48.373V55.6602H49.4629V58.4082H52.375V55.6602H53.459V62ZM56.3887 57.8457H58.0352C58.7539 57.8535 59.3223 58.041 59.7402 58.4082C60.1582 58.7754 60.3672 59.2734 60.3672 59.9023C60.3672 60.5352 60.1523 61.043 59.7227 61.4258C59.293 61.8086 58.7148 62 57.9883 62H55.3047V55.6602H56.3887V57.8457ZM62.6289 62H61.5391V55.6602H62.6289V62ZM56.3887 58.7305V61.1152H58C58.4062 61.1152 58.7207 61.0117 58.9434 60.8047C59.166 60.5938 59.2773 60.3066 59.2773 59.9434C59.2773 59.5918 59.168 59.3047 58.9492 59.082C58.7344 58.8555 58.4316 58.7383 58.041 58.7305H56.3887ZM68.623 55.6602H69.707V62H68.623V57.377L65.6992 62H64.6152V55.6602H65.6992V60.2891L68.623 55.6602ZM68.916 53.3516C68.916 53.8242 68.7539 54.2051 68.4297 54.4941C68.1094 54.7793 67.6875 54.9219 67.1641 54.9219C66.6406 54.9219 66.2168 54.7773 65.8926 54.4883C65.5684 54.1992 65.4062 53.8203 65.4062 53.3516H66.291C66.291 53.625 66.3652 53.8398 66.5137 53.9961C66.6621 54.1484 66.8789 54.2246 67.1641 54.2246C67.4375 54.2246 67.6504 54.1484 67.8027 53.9961C67.959 53.8438 68.0371 53.6289 68.0371 53.3516H68.916ZM21.6719 70.5391H19.5449V76H18.4609V70.5391H16.375V69.6602H21.6719V70.5391ZM24.8887 76.1172C24.0293 76.1172 23.3301 75.8359 22.791 75.2734C22.252 74.707 21.9824 73.9512 21.9824 73.0059V72.8066C21.9824 72.1777 22.1016 71.6172 22.3398 71.125C22.582 70.6289 22.918 70.2422 23.3477 69.9648C23.7812 69.6836 24.25 69.543 24.7539 69.543C25.5781 69.543 26.2188 69.8145 26.6758 70.3574C27.1328 70.9004 27.3613 71.6777 27.3613 72.6895V73.1406H23.0664C23.082 73.7656 23.2637 74.2715 23.6113 74.6582C23.9629 75.041 24.4082 75.2324 24.9473 75.2324C25.3301 75.2324 25.6543 75.1543 25.9199 74.998C26.1855 74.8418 26.418 74.6348 26.6172 74.377L27.2793 74.8926C26.748 75.709 25.9512 76.1172 24.8887 76.1172ZM24.7539 70.4336C24.3164 70.4336 23.9492 70.5938 23.6523 70.9141C23.3555 71.2305 23.1719 71.6758 23.1016 72.25H26.2773V72.168C26.2461 71.6172 26.0977 71.1914 25.832 70.8906C25.5664 70.5859 25.207 70.4336 24.7539 70.4336ZM33.8008 76H32.7168V73.293H29.8047V76H28.7148V69.6602H29.8047V72.4082H32.7168V69.6602H33.8008V76ZM40.7266 76H39.6426V73.293H36.7305V76H35.6406V69.6602H36.7305V72.4082H39.6426V69.6602H40.7266V76ZM46.5742 69.6602H47.6582V76H46.5742V71.377L43.6504 76H42.5664V69.6602H43.6504V74.2891L46.5742 69.6602ZM51.9414 75.2324C52.3281 75.2324 52.666 75.1152 52.9551 74.8809C53.2441 74.6465 53.4043 74.3535 53.4355 74.002H54.4609C54.4414 74.3652 54.3164 74.7109 54.0859 75.0391C53.8555 75.3672 53.5469 75.6289 53.1602 75.8242C52.7773 76.0195 52.3711 76.1172 51.9414 76.1172C51.0781 76.1172 50.3906 75.8301 49.8789 75.2559C49.3711 74.6777 49.1172 73.8887 49.1172 72.8887V72.707C49.1172 72.0898 49.2305 71.541 49.457 71.0605C49.6836 70.5801 50.0078 70.207 50.4297 69.9414C50.8555 69.6758 51.3574 69.543 51.9355 69.543C52.6465 69.543 53.2363 69.7559 53.7051 70.1816C54.1777 70.6074 54.4297 71.1602 54.4609 71.8398H53.4355C53.4043 71.4297 53.248 71.0938 52.9668 70.832C52.6895 70.5664 52.3457 70.4336 51.9355 70.4336C51.3848 70.4336 50.957 70.6328 50.6523 71.0312C50.3516 71.4258 50.2012 71.998 50.2012 72.748V72.9531C50.2012 73.6836 50.3516 74.2461 50.6523 74.6406C50.9531 75.0352 51.3828 75.2324 51.9414 75.2324Z"
      fill="black"
    />
    <path
      d="M55.6968 24.1866C59.3345 17.031 58.5896 9.08575 53.7528 4.24937C50.5917 1.08825 46.1418 -0.387501 41.2135 0.0871014C36.1254 0.664974 31.3941 2.98622 27.8233 6.65684C25.855 8.60614 24.2577 10.8973 23.1096 13.4184C22.9383 13.7776 22.7889 14.1296 22.6424 14.4939C22.4507 14.9642 22.2819 15.4307 22.1384 15.8813L22.1379 15.8822L22.1365 15.8866L22.1342 15.8929L22.1338 15.8948C22.0322 16.2 21.9386 16.5048 21.8815 16.7425C21.8734 16.7641 21.8442 16.8535 21.8383 16.8758C21.7357 17.2695 21.6346 17.6705 21.5673 18.0451C21.0531 20.4734 21.0563 22.9829 21.5768 25.4099C21.8959 26.8272 21.8153 28.3053 21.3439 29.6795C20.9722 30.7654 20.356 31.7515 19.5429 32.5619L15.4789 36.6337C15.4434 36.6693 15.4099 36.7068 15.3785 36.7461L15.3696 36.7562L13.8309 38.2948C12.7465 39.3872 12.7202 41.1417 13.7716 42.2659L15.6721 44.1665C16.7855 45.2778 18.5884 45.2778 19.7018 44.1665L25.4193 38.4492L25.4269 38.4442C26.1779 37.6882 27.0839 37.1039 28.0825 36.7319C29.5173 36.1858 31.0811 36.0744 32.5786 36.4114C34.9994 36.9245 37.5004 36.9291 39.9231 36.425C40.2922 36.3587 40.6679 36.2649 41.0377 36.1694C41.0635 36.1649 41.089 36.159 41.1141 36.1518C41.1321 36.1473 41.1506 36.1487 41.1681 36.1429C41.2007 36.1387 41.2329 36.1325 41.2648 36.1243C41.4087 36.0893 41.5507 36.0468 41.6903 35.9969C41.7156 35.9893 41.7581 35.9739 41.8004 35.9576C41.863 35.942 41.925 35.9254 41.9862 35.9072L42.0844 35.8787C42.1488 35.8613 42.2104 35.8347 42.2674 35.8C42.6544 35.6763 43.0788 35.5359 43.4942 35.3671C43.8552 35.2286 44.2105 35.0748 44.5825 34.9129C45.2366 34.6109 45.8343 34.2882 46.4132 33.9494C48.1347 35.7284 50.6925 36.4208 53.0763 35.7532C55.46 35.0855 57.2862 33.1652 57.8332 30.7508C58.3802 28.3364 57.56 25.8165 55.6968 24.1866ZM18.6413 43.106C18.1137 43.6318 17.2603 43.6318 16.7327 43.106L14.8563 41.231C14.3732 40.6938 14.3886 39.8741 14.8914 39.3553L16.4555 37.7912L16.458 37.7894L16.4633 37.7834L25.7382 28.5086C26.7737 27.4729 28.4529 27.4728 29.4886 28.5084C30.5242 29.544 30.5243 31.2232 29.4887 32.2589L18.6413 43.106ZM39.6418 34.9517C37.4195 35.4165 35.1248 35.4147 32.9031 34.9466C31.6013 34.6575 30.2528 34.6489 28.9474 34.9213L30.5492 33.3196C31.5999 32.2711 32.011 30.7413 31.6273 29.3074C31.2436 27.8734 30.1235 26.7535 28.6896 26.3698C27.2556 25.9862 25.7259 26.3974 24.6775 27.4482L23.0643 29.0614C23.3409 27.7488 23.3328 26.3921 23.0407 25.0829C22.5653 22.8568 22.565 20.5555 23.0399 18.3293C23.0874 18.0633 23.1515 17.7991 23.2151 17.5462L40.4417 34.7663C40.178 34.833 39.9146 34.9024 39.6418 34.9517ZM43.9666 33.5451C43.6326 33.6901 43.2979 33.8355 42.9427 33.9721C42.6756 34.0808 42.3996 34.177 42.1333 34.266L42.08 34.2834L23.7165 15.9259C23.8163 15.6388 23.9114 15.3538 24.0324 15.0571C24.1686 14.7191 24.3048 14.3958 24.4703 14.0497C25.545 11.6886 27.0405 9.54277 28.8837 7.71731C32.2086 4.29252 36.6163 2.12403 41.3585 1.58008C45.8239 1.14503 49.8543 2.47181 52.6922 5.30984C57.0225 9.63963 57.689 16.7919 54.4573 23.3139C51.7777 21.8582 48.4545 22.3832 46.3541 24.5939C44.2537 26.8047 43.8993 30.1505 45.4902 32.7522C45.0044 33.0298 44.5049 33.2967 43.9666 33.5451ZM53.2592 34.102C51.2975 34.9146 49.0395 34.4654 47.538 32.964C46.0366 31.4625 45.5875 29.2044 46.4 27.2426C47.2125 25.2809 49.1268 24.0018 51.2501 24.0018C54.1481 24.0052 56.4965 26.3537 56.4998 29.2517C56.4999 31.3751 55.2209 33.2894 53.2592 34.102Z"
      fill="black"
      fillOpacity="0.5"
    />
  </svg>
);

IconTennis.propTypes = {
  classnames: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

IconTennis.defaultProps = {
  width: 71,
  height: 79,
  classnames: '',
};

export default IconTennis;
