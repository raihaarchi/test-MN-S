import React from 'react';
import PropTypes from 'prop-types';

const WebSockets = ({ classnames, width, height, ...attr }) => (
  <svg
    width={width || 40}
    height={height || 30}
    viewBox="0 0 40 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classnames}
    {...attr}
  >
    <path
      opacity="0.5"
      d="M0.103586 0.0488949C0.0478088 0.0646057 0 0.143156 0 0.21385C0 0.35524 4.62948 4.95041 4.91633 5.0918C5.03586 5.15464 6.57371 5.17821 10 5.17821C14.3665 5.17821 14.9402 5.19392 15.1633 5.30389C15.4741 5.46099 18.2151 8.11598 18.3745 8.41447C18.4781 8.61084 18.4781 8.65797 18.3745 8.84649C18.2151 9.15284 13.8645 13.3945 13.6494 13.4574C13.5458 13.4888 13.3785 13.4652 13.251 13.3945C12.9402 13.2374 10.3267 10.6139 10.1673 10.3075C10.0637 10.1111 10.0398 9.8048 10.0398 8.87006C10.0398 7.79392 10.0239 7.6761 9.88048 7.53471C9.72908 7.38546 9.61753 7.37761 7.41036 7.37761C5.20319 7.37761 5.09163 7.38546 4.94024 7.53471C4.78884 7.68395 4.78088 7.79392 4.78088 9.93048C4.78088 11.7293 4.80478 12.2163 4.89243 12.3891C4.95618 12.5069 6.78885 14.3528 8.96414 16.4894C11.1394 18.626 12.9721 20.4797 13.0359 20.5976C13.1076 20.7232 13.1315 20.8882 13.0996 20.9903C13.0757 21.0846 12.3506 21.8544 11.506 22.7027C10.6534 23.5432 9.96016 24.2894 9.96016 24.3444C9.96016 24.4858 15.259 29.7329 15.5538 29.89C15.7371 29.9843 17.5219 30 27.761 30C34.3506 30 39.8008 29.9764 39.8725 29.9529C39.9442 29.9293 40 29.8429 40 29.7722C40 29.6308 35.3705 25.0435 35.0837 24.9021C34.9641 24.8393 32.4701 24.8157 26.4542 24.8157C18.8287 24.8157 17.9761 24.8 17.745 24.69C17.4343 24.5329 14.2151 21.4066 14.0558 21.1003C13.8964 20.8018 13.9681 20.6211 14.4542 20.1184C14.996 19.545 15.2271 19.435 15.5219 19.5843C15.6414 19.6471 16.3506 20.3069 17.0916 21.0453C17.8406 21.7837 18.5418 22.4435 18.6614 22.5063C18.8367 22.5927 19.4582 22.6163 22.1275 22.6163C23.9124 22.6163 25.4582 22.5927 25.5618 22.5692C25.6574 22.5378 25.7371 22.4592 25.7371 22.3885C25.7371 22.3178 24.3187 20.8646 22.5817 19.1601C20.8526 17.4556 19.3785 15.9631 19.3147 15.8453C19.1633 15.5625 19.2749 15.3426 19.8566 14.7927C20.4303 14.2429 20.5737 14.1722 20.8526 14.3214C20.9801 14.3843 22.494 15.8374 24.2231 17.542C25.9522 19.2544 27.4263 20.6526 27.498 20.6526C27.5697 20.6526 27.6494 20.574 27.6813 20.4719C27.7052 20.3776 27.7291 18.8538 27.7291 17.0942C27.7291 14.4628 27.7052 13.8501 27.6175 13.6773C27.5538 13.5595 26.8845 12.8604 26.1355 12.1299C25.3865 11.3915 24.7171 10.7003 24.6534 10.5746C24.502 10.2918 24.6135 10.064 25.1952 9.52988C25.7052 9.05072 25.8884 8.98003 26.1912 9.13713C26.502 9.29423 29.6733 12.4676 29.8327 12.774C29.9442 12.9939 29.9602 13.5516 29.9602 17.6677C29.9602 22.2 29.9602 22.3021 30.1195 22.4592C30.2709 22.6084 30.3825 22.6163 32.5896 22.6163C34.7968 22.6163 34.9084 22.6084 35.0598 22.4592C35.2191 22.3021 35.2191 22.2 35.2191 16.568C35.2191 11.745 35.2032 10.7945 35.1076 10.6139C34.9482 10.3232 29.6255 5.09966 29.4821 5.09966C29.4263 5.09966 28.6693 5.78304 27.8167 6.62353C26.9562 7.45616 26.1753 8.17096 26.0797 8.19453C25.9761 8.22595 25.8088 8.20238 25.6813 8.13169C25.5618 8.06885 23.6813 6.2622 21.5139 4.11778C19.3466 1.97337 17.4741 0.166721 17.3546 0.10388C17.1713 0.00962067 15.8805 -0.00609016 8.66932 0.0017662C4.00797 0.0017662 0.151394 0.0253315 0.103586 0.0488949Z"
      fill="black"
    />
  </svg>
);

WebSockets.propTypes = {
  classnames: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

WebSockets.defaultProps = {
  classnames: '',
  width: 40,
  height: 30,
};

export default WebSockets;
