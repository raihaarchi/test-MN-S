import React from 'react';
import PropTypes from 'prop-types';

const Jwt = ({ classnames, width, height, ...attr }) => (
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
      d="M12.7767 0.0432739C12.7359 0.0839062 12.7053 1.82097 12.7053 3.91357C12.7053 6.08744 12.6645 7.70261 12.6135 7.70261C12.5625 7.70261 12.226 7.30643 11.869 6.80868C10.2883 4.6856 8.44231 2.14603 8.26893 1.88192C8.17714 1.72955 8.03436 1.60765 7.95277 1.60765C7.82019 1.60765 5.47452 3.25329 4.64843 3.93389L4.29148 4.21832L4.59744 4.66529C4.77081 4.90908 4.93399 5.13256 4.96459 5.16304C4.99518 5.19351 5.25015 5.52874 5.53571 5.92491C5.81107 6.31092 6.65755 7.47912 7.41225 8.51527C8.16695 9.55141 8.81965 10.4453 8.86045 10.5063C8.90124 10.5774 8.70747 10.5571 8.34032 10.4453C7.70801 10.2422 4.32208 9.14508 2.57812 8.57622C1.9662 8.37305 1.43588 8.23084 1.38488 8.26131C1.2727 8.32226 1.11972 8.75907 0.46701 10.7907C0.0488676 12.1113 -0.0327211 12.4364 0.0794634 12.5278C0.150853 12.5989 1.80302 13.1779 3.75096 13.8077C5.70908 14.4477 7.30007 14.9962 7.30007 15.0369C7.30007 15.0673 6.92272 15.2197 6.46378 15.3721C2.84328 16.52 0.191648 17.3936 0.0794634 17.485C0.00807323 17.546 -0.0225225 17.678 0.0182718 17.7999C0.375222 19.0088 1.22171 21.5382 1.32369 21.6702C1.42568 21.8226 1.72144 21.7413 4.29148 20.9084C5.86206 20.4004 7.50404 19.8621 7.94258 19.7198C8.38111 19.5776 8.76866 19.4862 8.79926 19.5167C8.82985 19.5471 8.68707 19.7909 8.4831 20.0652C8.28933 20.3293 7.93238 20.8068 7.70801 21.1115C7.28987 21.6702 6.3516 22.9705 5.03598 24.8091C4.64843 25.3374 4.34247 25.7843 4.34247 25.8148C4.34247 25.9469 7.7692 28.4255 7.95277 28.4255C8.03436 28.4255 8.19754 28.2731 8.30972 28.0902C8.42191 27.8972 8.64628 27.5823 8.79926 27.3893C8.96243 27.1862 9.16641 26.9119 9.25819 26.7798C10.2679 25.3983 10.5432 25.0224 11.0327 24.3622C11.3387 23.9457 11.7874 23.326 12.0322 23.001C12.2668 22.6657 12.5217 22.3711 12.5829 22.3508C12.6747 22.3204 12.7053 23.3057 12.7257 26.1602L12.7563 30H15H17.2437L17.2947 26.0891C17.3457 22.3711 17.3559 22.1883 17.5191 22.3813C17.6822 22.5641 19.059 24.4333 19.4364 24.9717C19.518 25.0936 19.9565 25.6827 20.3951 26.2719C20.8336 26.8713 21.3639 27.6026 21.5577 27.8972C21.7515 28.1817 21.9758 28.4255 22.0574 28.4255C22.1288 28.4255 22.7101 28.0496 23.3424 27.5925C23.9646 27.1252 24.6785 26.6173 24.913 26.4649C25.1476 26.3024 25.4128 26.0891 25.5147 25.9773C25.6779 25.7945 25.6779 25.764 25.3924 25.3577C25.2292 25.1139 25.066 24.9006 25.0354 24.8701C25.0048 24.8396 24.7498 24.4942 24.4643 24.1082C24.1889 23.712 23.3424 22.554 22.5877 21.5178C21.8331 20.4817 21.1803 19.5878 21.1395 19.5268C21.0988 19.4557 21.2925 19.476 21.6597 19.5878C22.292 19.7909 25.6779 20.888 27.4219 21.4569C28.0338 21.6601 28.5641 21.8023 28.6049 21.7718C28.7069 21.7109 28.8905 21.2131 29.533 19.2424C29.9511 17.932 30.0327 17.5968 29.9205 17.5053C29.8491 17.4342 28.7579 17.0482 27.4933 16.652C23.475 15.3619 22.6999 15.0978 22.6999 15.0369C22.6999 14.9962 24.2909 14.4477 26.249 13.8077C28.197 13.1779 29.8491 12.609 29.9205 12.5481C29.9919 12.4973 30.0225 12.3551 29.9817 12.2332C29.635 11.0244 28.7783 8.50511 28.6865 8.37305C28.5641 8.21052 28.3194 8.27147 25.7085 9.12476C24.1379 9.63268 22.496 10.1711 22.0574 10.3133C21.6189 10.4555 21.2313 10.5469 21.2007 10.5164C21.1701 10.486 21.3129 10.2422 21.5169 9.9679C21.7107 9.70378 22.0676 9.22635 22.292 8.9216C22.7101 8.36289 23.6484 7.06264 24.9742 5.22399C25.3516 4.69576 25.6575 4.2488 25.6575 4.21832C25.6575 4.08626 22.2308 1.60765 22.0472 1.60765C21.9656 1.60765 21.8025 1.76002 21.6903 1.94287C21.5781 2.13588 21.3537 2.45078 21.2007 2.64379C21.0376 2.84695 20.854 3.09075 20.7826 3.19234C20.599 3.46661 19.5996 4.85829 18.8551 5.87412C17.8556 7.24548 17.4885 7.70261 17.3865 7.70261C17.3355 7.70261 17.2845 6.0976 17.2743 3.86278L17.2437 0.0331154L15.0408 0.00263977C13.8374 -0.00751686 12.8175 0.0127983 12.7767 0.0432739ZM13.6538 9.38888C15.0306 11.2478 14.9694 11.1767 15.1632 10.9939C15.3264 10.8415 16.4992 9.26698 16.8969 8.65748C16.9887 8.52542 17.0907 8.44416 17.1213 8.48479C17.1621 8.51527 17.1927 9.27714 17.1927 10.1609C17.1927 11.4612 17.2233 11.7862 17.3355 11.8269C17.4171 11.8573 18.1208 11.6745 18.8959 11.4205C20.6092 10.8618 20.7622 10.9025 20.1095 11.7558C19.2732 12.8528 18.7021 13.7061 18.7531 13.828C18.7735 13.8991 19.4976 14.1734 20.3441 14.4477C21.2007 14.722 21.9146 14.9759 21.935 15.0166C21.9554 15.0572 21.2619 15.3111 20.3849 15.5854C19.518 15.8597 18.7837 16.134 18.7531 16.2051C18.7225 16.2762 19.1202 16.8958 19.6302 17.5968C20.3135 18.5313 20.5174 18.8869 20.4256 18.958C20.3441 19.0291 19.8647 18.9173 18.9061 18.6024C18.1412 18.3485 17.4375 18.1656 17.3559 18.1961C17.2131 18.2469 17.1927 18.5008 17.1927 19.8722C17.1927 20.756 17.1621 21.5178 17.1213 21.5483C17.0907 21.589 16.9887 21.5077 16.8969 21.3756C16.4992 20.7661 15.3264 19.1916 15.1632 19.0392C14.9898 18.8869 14.949 18.9072 14.4799 19.537C13.5824 20.7458 13.3376 21.0709 13.0725 21.4671L12.8073 21.8531V20.0551C12.8073 18.572 12.7767 18.2469 12.6543 18.2063C12.5727 18.1758 11.8792 18.3586 11.1143 18.6126C9.39078 19.1814 9.2276 19.1408 9.89051 18.2774C10.737 17.1803 11.2979 16.327 11.2469 16.2051C11.2163 16.134 10.5024 15.8597 9.65594 15.5956C8.80946 15.3315 8.11595 15.0775 8.11595 15.0267C8.11595 14.9861 8.80946 14.722 9.65594 14.4477C10.5024 14.1734 11.2163 13.8991 11.2469 13.828C11.2775 13.7569 10.8798 13.1373 10.3698 12.4364C9.69673 11.5018 9.48256 11.1463 9.57435 11.0752C9.65594 11.004 10.1455 11.1259 11.1041 11.4307C11.869 11.6846 12.5727 11.8573 12.6543 11.8269C12.7869 11.7862 12.8073 11.4713 12.8073 9.97806V8.18004L13.0725 8.56606C13.2152 8.77938 13.4804 9.15524 13.6538 9.38888Z"
      fill="black"
    />
  </svg>
);

Jwt.propTypes = {
  classnames: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Jwt.defaultProps = {
  classnames: '',
  width: 30,
  height: 30,
};

export default Jwt;