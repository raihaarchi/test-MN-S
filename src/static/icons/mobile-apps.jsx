import React from 'react';
import PropTypes from 'prop-types';

const MobileApps = ({ width, height, classnames, ...attr }) => (
  <svg
    width={width}
    height={height}
    className={classnames}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...attr}
  >
    <path
      d="M47.7018 4.86413C47.7018 2.1778 45.524 0 42.8376 0H17.038C14.3516 0 12.1738 2.1778 12.1738 4.86413V55.1359C12.1738 57.8222 14.3516 60 17.038 60H42.8376C45.524 60 47.7018 57.8222 47.7018 55.1359V4.86413ZM31.5241 53.2846C31.5241 54.1605 30.8142 54.8709 29.9378 54.8709C29.0614 54.8709 28.3515 54.1605 28.3515 53.2846C28.3515 52.4083 29.0614 51.6979 29.9378 51.6979C30.8137 51.6989 31.5231 52.4088 31.5241 53.2846ZM31.9191 48.1138L31.3033 47.0075C31.3023 47.006 31.3018 47.0046 31.3009 47.0031L27.808 40.7327C28.3753 40.3853 29.1105 40.495 29.5515 40.9923L30.819 42.4461C31.0912 42.7582 31.5289 42.8688 31.9166 42.7232C32.3048 42.5776 32.562 42.2064 32.5615 41.792C32.5591 38.2308 32.5586 33.5836 32.5645 31.1971C32.5645 30.9812 32.7707 30.9322 32.8915 30.9322H33.3787C33.5417 30.9322 33.7062 31.0083 33.7067 31.1981C33.7072 31.7731 33.6718 39.5167 33.6713 39.5958C33.6713 39.6395 33.6645 39.6778 33.6645 39.72V40.1276C33.6645 40.6764 34.1095 41.1214 34.6583 41.1214C35.2071 41.1214 35.6521 40.6764 35.6521 40.1276V37.7383C35.6521 37.6737 35.7341 37.6398 35.7986 37.6398H36.789C36.8172 37.6359 36.8448 37.6451 36.8652 37.664C36.8856 37.6834 36.8963 37.7106 36.8943 37.7383V40.9045C36.8943 41.4533 37.3393 41.8983 37.8881 41.8983C38.4369 41.8983 38.8819 41.4533 38.8819 40.9045V38.5161C38.8906 38.4448 38.9484 38.3899 39.0197 38.3851H40.0014C40.0693 38.3914 40.1222 38.4477 40.1237 38.5161V40.9045C40.1237 41.4533 40.5686 41.8983 41.1174 41.8983C41.6667 41.8983 42.1112 41.4533 42.1112 40.9045V40.5464C42.1044 40.4537 42.1316 40.3615 42.1879 40.2878C42.2243 40.2533 42.2743 40.2373 42.3238 40.2441L42.8444 40.2455C42.9289 40.2412 43.0119 40.2717 43.0735 40.33C43.1351 40.3882 43.17 40.4688 43.171 40.5537C43.1764 42.6 43.1759 42.6373 43.1739 43.6428C43.173 44.177 43.1715 44.9859 43.17 46.5106C43.1686 48.3312 41.6959 49.8078 39.8757 49.8137H34.7961C33.6 49.8098 32.4994 49.1595 31.9191 48.1138ZM24.4399 35.1553C23.9134 35.1504 23.4136 34.9224 23.0643 34.5283C22.7658 34.1964 22.6237 33.7534 22.6731 33.3099L23.9309 22.3602H24.9689V24.9418C24.9689 25.4911 25.4138 25.9356 25.9626 25.9356C26.5115 25.9356 26.9564 25.4911 26.9564 24.9418V22.3602H33.1676V24.9418C33.1676 25.4911 33.6126 25.9356 34.1614 25.9356C34.7102 25.9356 35.1552 25.4911 35.1552 24.9418V22.3602H36.0117L37.2694 33.2958C37.3184 33.7345 37.1758 34.1727 36.8783 34.4987C36.5692 34.8389 36.1436 35.05 35.6856 35.0898C35.6904 33.2356 35.6948 31.465 35.6943 31.1947C35.6924 29.9277 34.6758 28.9441 33.3792 28.9441H32.8925C32.283 28.9354 31.6949 29.1707 31.2596 29.5982C30.8248 30.0257 30.5793 30.6095 30.5774 31.2194C30.5749 32.2132 30.574 33.5404 30.5735 35.1553H24.4399ZM33.1676 20.3727H26.9564V19.4075C26.9564 17.8174 28.352 16.5247 30.062 16.5247C31.772 16.5247 33.1676 17.8178 33.1676 19.4075V20.3727ZM45.1581 40.5488C45.1479 39.2789 44.1139 38.2555 42.844 38.258L42.3223 38.257C42.2442 38.257 42.1675 38.2536 42.0913 38.2614C41.9647 37.2016 41.0684 36.4024 40.0014 36.398H39.0197C38.8363 36.3999 38.6538 36.4261 38.4767 36.4761C38.3675 36.3306 38.2394 36.2005 38.0963 36.0884C38.1895 36.004 38.2778 35.9152 38.3617 35.822C39.0343 35.0728 39.355 34.0727 39.2439 33.0726L37.8852 21.2568C37.8279 20.7546 37.4034 20.3741 36.8977 20.3727H35.1552V19.4075C35.1552 16.7217 32.8677 14.5371 30.062 14.5371C27.2563 14.5371 24.9689 16.7217 24.9689 19.4075V20.3727H23.0448C22.5387 20.3746 22.1146 20.7546 22.0574 21.2568L20.6982 33.0707C20.5871 34.08 20.9073 35.0893 21.5804 35.8502C22.3068 36.6673 23.3467 37.137 24.4399 37.1429H30.5725V39.2673C29.3264 38.3065 27.5805 38.3375 26.3693 39.3415L25.9156 39.6826C25.525 39.9762 25.4124 40.5134 25.6526 40.9385L28.7378 46.4596H14.1614V11.677H45.7142V46.4596H45.1576C45.1591 44.9689 45.161 44.1654 45.162 43.6345C45.1639 42.6257 45.1639 42.6009 45.1581 40.5488ZM17.0365 1.98758H42.8391C44.4254 1.98758 45.7142 3.31861 45.7142 4.90441V9.68944H14.1614V4.90441C14.1614 3.31861 15.4502 1.98758 17.0365 1.98758ZM42.8391 58.1366H17.0365C15.4502 58.1366 14.1614 56.8056 14.1614 55.2198V48.4472H29.8446L30.1829 49.0674C30.3211 49.3158 30.4789 49.5531 30.655 49.7763C29.1731 49.4716 27.6596 50.132 26.8749 51.4261C26.0908 52.7198 26.2053 54.3672 27.1607 55.5401C28.1162 56.7134 29.7063 57.1584 31.132 56.6518C32.5577 56.1457 33.5107 54.7972 33.5121 53.2842C33.5126 52.6538 33.3452 52.0351 33.0269 51.4912C33.5946 51.6955 34.1929 51.8003 34.7961 51.8017H39.8757C42.0452 51.8022 43.9925 50.4702 44.7777 48.4477H45.7142V55.2198C45.7142 56.8056 44.4254 58.1366 42.8391 58.1366Z"
      fill="black"
    />
    <path
      d="M25.7448 6.58377H34.1308C34.6796 6.58377 35.1246 6.1388 35.1246 5.58998C35.1246 5.04116 34.6796 4.59619 34.1308 4.59619H25.7448C25.1959 4.59619 24.751 5.04116 24.751 5.58998C24.751 6.1388 25.1959 6.58377 25.7448 6.58377Z"
      fill="black"
    />
  </svg>
);

MobileApps.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  classnames: PropTypes.string,
};

MobileApps.defaultProps = {
  classnames: '',
};

export default MobileApps;