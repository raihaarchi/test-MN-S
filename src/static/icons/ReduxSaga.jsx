import React from 'react';
import PropTypes from 'prop-types';

const ReduxSaga = ({ classnames, width, height, ...attr }) => (
  <svg
    width={width || 50}
    height={height || 30}
    viewBox="0 0 50 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classnames}
    {...attr}
  >
    <path
      d="M26.8003 10.8805C26.8001 10.521 26.8955 10.1677 27.0769 9.85636C27.2584 9.545 27.5195 9.28651 27.8339 9.10696C28.1483 8.9274 28.5049 8.83312 28.8678 8.8336C29.2307 8.83408 29.5871 8.92931 29.901 9.1097C31.7721 8.42917 33.8559 8.07312 36.0226 8.07312C41.8248 8.07312 46.8013 10.6405 48.4835 14.3352C48.4692 15.21 47.2149 15.6173 46.7144 15.0805C45.335 12.1129 40.9777 9.97654 36.0226 9.97654C34.2217 9.97654 32.4932 10.2489 30.9282 10.7692C30.9435 11.0424 30.9034 11.3158 30.8102 11.5734C30.717 11.8309 30.5726 12.0673 30.3855 12.2687C30.1985 12.47 29.9726 12.6321 29.7212 12.7454C29.4699 12.8587 29.1981 12.9209 28.922 12.9283C28.646 12.9358 28.3712 12.8883 28.1139 12.7887C27.8567 12.6891 27.6223 12.5394 27.4245 12.3485C27.2266 12.1576 27.0695 11.9293 26.9623 11.6771C26.8551 11.425 26.8 11.1541 26.8003 10.8805ZM50 18.4942C50.0002 18.1677 49.9216 17.8459 49.7706 17.5557C49.6197 17.2655 49.4009 17.0153 49.1325 16.8259C48.864 16.6366 48.5538 16.5136 48.2276 16.4673C47.9014 16.4209 47.5687 16.4526 47.2574 16.5596C46.9461 16.6666 46.6651 16.8459 46.438 17.0824C46.2109 17.3189 46.0441 17.6058 45.9518 17.9192C45.8594 18.2326 45.844 18.5633 45.907 18.8838C45.9699 19.2042 46.1093 19.5051 46.3136 19.7613C45.6538 20.7663 44.6282 21.6765 43.3141 22.4076C41.2845 23.535 38.6954 24.1563 36.0218 24.1563C33.7069 24.1563 31.4844 23.7023 29.5926 22.8418C28.3144 22.26 27.2513 21.5258 26.4568 20.6802C25.9301 20.3763 24.7125 21.3458 25.1539 22.0847C27.5398 24.5431 31.5864 26.0605 36.0218 26.0605C39.0189 26.0605 41.9427 25.3531 44.2544 24.0679C45.9486 23.126 47.2635 21.9063 48.0907 20.5342C48.6097 20.4948 49.0947 20.2629 49.4486 19.8847C49.8026 19.5065 49.9995 19.0099 50 18.4942Z"
      fill="black"
      opacity="0.5"
    />
    <path
      d="M10.206 22.3342C8.32217 19.9145 7.25514 16.5 7.25514 12.8132C7.25514 9.45789 8.14845 6.29132 9.77011 3.89605C11.4699 1.38316 13.7697 0 16.2448 0C18.5008 0 20.6516 1.17789 22.3019 3.31579C23.8598 5.33526 24.8734 8.08974 25.1548 11.0732C24.4861 10.7071 23.7967 10.3794 23.09 10.0918C22.2907 5.34947 19.473 1.90342 16.2448 1.90342C14.4303 1.90342 12.6971 2.98737 11.3647 4.95632C9.95339 7.04132 9.17563 9.83211 9.17563 12.8139C9.17563 16.0918 10.1534 19.2039 11.8133 21.2803C12.2725 21.235 12.7338 21.3433 13.1235 21.588C13.5133 21.8327 13.8092 22.1996 13.9639 22.6303C14.1187 23.061 14.1234 23.5306 13.9773 23.9642C13.8312 24.3979 13.5428 24.7706 13.158 25.0229C12.7732 25.2752 12.3142 25.3926 11.8542 25.3564C11.3942 25.3201 10.9597 25.1323 10.62 24.8229C10.2803 24.5135 10.055 24.1004 9.97996 23.6493C9.90492 23.1982 9.9845 22.7353 10.206 22.3342ZM24.9029 12.2439C21.5305 10.3145 17.7676 9.54869 14.6534 10.0871C14.3245 9.76705 13.897 9.56519 13.439 9.51366C12.9809 9.46213 12.5186 9.56389 12.1257 9.80275C11.7328 10.0416 11.4318 10.4038 11.2707 10.8317C11.1096 11.2597 11.0976 11.7287 11.2366 12.1641C11.3757 12.5996 11.6578 12.9764 12.038 13.2347C12.4182 13.4929 12.8747 13.6177 13.3348 13.5892C13.7949 13.5607 14.2322 13.3806 14.577 13.0774C14.9218 12.7743 15.1543 12.3655 15.2375 11.9163C17.8585 11.5326 21.0404 12.2321 23.9419 13.8924C27.4856 15.9189 29.9918 19.065 30.4819 21.9821C31.0931 22.2347 31.7601 22.4511 32.4821 22.6192C32.294 18.8297 29.3591 14.7916 24.9029 12.2439ZM25.4121 28.0176C23.5522 28.2521 21.4421 27.9592 19.367 27.1903C18.7709 27.6466 18.1398 28.0745 17.4768 28.47C19.681 29.4726 21.9903 29.9992 24.1323 29.9992C24.6511 29.9992 25.1611 29.9684 25.656 29.9061C28.2212 29.5832 30.254 28.4368 31.423 26.6653C30.7614 26.5065 30.1095 26.3101 29.4707 26.0771C28.571 27.1168 27.1613 27.7974 25.4121 28.0176ZM23.3554 20.5397C23.8168 20.5348 24.2633 20.377 24.6236 20.0913C24.984 19.8057 25.2374 19.4088 25.3434 18.9639C25.4495 18.5189 25.4021 18.0516 25.2088 17.6365C25.0155 17.2213 24.6875 16.8823 24.277 16.6734C23.8665 16.4645 23.3973 16.3977 22.9441 16.4839C22.4909 16.57 22.0798 16.804 21.7765 17.1485C21.4732 17.4931 21.2951 17.9283 21.2706 18.3848C21.2461 18.8414 21.3766 19.2929 21.6413 19.6674C21.2484 20.6037 20.6723 21.5408 19.9375 22.4337C18.8012 23.8137 17.307 25.0547 15.6168 26.0218C13.2573 27.3726 10.716 28.0974 8.37875 28.0966C8.1349 28.0966 7.89265 28.0887 7.65358 28.0729C5.26612 27.9142 3.45241 26.9692 2.54476 25.4132C0.93665 22.6532 2.53998 18.5021 6.27896 15.4492C6.18702 14.77 6.13116 14.0864 6.11161 13.4013L6.00563 13.2553C3.57035 14.9897 1.69767 17.2287 0.731054 19.5576C-0.292942 22.0255 -0.239551 24.4429 0.880868 26.3645C2.11843 28.4874 4.478 29.7695 7.52449 29.9724C7.80419 29.9905 8.08709 30 8.37237 30C11.0459 30 13.9267 29.1868 16.5771 27.6703C19.7367 25.8639 22.1625 23.2839 23.3554 20.5397Z"
      fill="black"
      opacity="0.5"
    />
  </svg>
);

ReduxSaga.propTypes = {
  classnames: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

ReduxSaga.defaultProps = {
  classnames: '',
  width: 50,
  height: 30,
};

export default ReduxSaga;
