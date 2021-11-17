import React from 'react';
import PropTypes from 'prop-types';

const Settings = ({ color, classnames, ...attr }) => (
  <svg
    className={classnames}
    width="29"
    height="30"
    viewBox="0 0 29 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...attr}
  >
    <path
      d="M12.9197 0.0920887C12.4666 0.211035 12.0758 0.44326 11.7189 0.794434C11.1809 1.32119 10.9316 1.96123 10.9316 2.77686V3.26963L10.4389 3.45654C10.1613 3.55849 9.75352 3.72842 9.52129 3.83603L9.09649 4.02861L8.78496 3.71709C7.99199 2.94678 7.05742 2.66924 6.08887 2.91846C5.51113 3.07139 5.18262 3.30928 4.24238 4.24385C3.30781 5.18408 3.06992 5.5126 2.91699 6.09033C2.66777 7.05889 2.94531 7.99346 3.71563 8.78076L4.02148 9.09795L3.77227 9.65869C3.63633 9.97021 3.46641 10.3837 3.39844 10.5763L3.26816 10.9331H2.77539C1.95977 10.9331 1.32539 11.1823 0.787305 11.7204C0.130273 12.3831 0 12.8362 0 14.5015C0 16.1724 0.124609 16.6028 0.792969 17.2825C1.31973 17.8206 1.95977 18.0698 2.77539 18.0698H3.26816L3.45508 18.5626C3.55703 18.8401 3.72695 19.2479 3.83457 19.4802L4.02715 19.905L3.71563 20.2165C3.5457 20.3921 3.33047 20.6583 3.23418 20.8169C2.72441 21.6325 2.70176 22.7087 3.1832 23.5583C3.42109 23.9831 5.01836 25.5804 5.44316 25.8183C6.24746 26.2714 7.25 26.2827 8.06563 25.8409C8.22422 25.756 8.51875 25.5294 8.72832 25.3368L9.10215 24.98L9.66289 25.2235C9.97441 25.3595 10.3822 25.5294 10.5805 25.603L10.9316 25.7276V26.2204C10.9316 27.0417 11.1809 27.6817 11.7189 28.2085C12.3986 28.8769 12.8291 29.0015 14.5 29.0015C16.1652 29.0015 16.6184 28.8712 17.2811 28.2142C17.8191 27.6761 18.0684 27.0417 18.0684 26.2204V25.7276L18.4252 25.603C18.6178 25.5294 19.0256 25.3595 19.3371 25.2235L19.8979 24.98L20.2717 25.3368C20.4813 25.5294 20.7758 25.756 20.9344 25.8409C21.733 26.2714 22.7242 26.2714 23.5285 25.8409C23.908 25.637 25.5676 23.9831 25.8111 23.564C26.2699 22.7767 26.2812 21.7571 25.8395 20.9358C25.7545 20.7772 25.5279 20.4827 25.3354 20.2731L24.9785 19.8993L25.2221 19.3386C25.358 19.0271 25.5279 18.6192 25.6016 18.421L25.7262 18.0698H26.2189C27.0572 18.0698 27.6689 17.8263 28.207 17.2825C28.8754 16.6028 29 16.1724 29 14.5015C29 12.8306 28.8754 12.4001 28.207 11.7204C27.6689 11.1767 27.0572 10.9331 26.2189 10.9331H25.7262L25.6016 10.5763C25.5279 10.3837 25.358 9.97588 25.2221 9.66435L24.9785 9.10361L25.3354 8.72978C25.5279 8.52021 25.7545 8.22568 25.8395 8.06709C26.2812 7.25146 26.2699 6.24892 25.8168 5.44463C25.5789 5.02549 23.925 3.37158 23.5285 3.16201C22.6789 2.70322 21.6141 2.73154 20.8154 3.23564C20.6625 3.33193 20.3906 3.54717 20.215 3.71709L19.9035 4.02861L19.4787 3.83603C19.2465 3.72842 18.8387 3.55849 18.5668 3.45654L18.0684 3.26963V2.77686C18.0684 1.96123 17.8191 1.32685 17.2811 0.788769C16.9242 0.431932 16.5391 0.216698 16.0463 0.0864258C15.5988 -0.0325203 13.3615 -0.0268574 12.9197 0.0920887ZM15.8424 1.81963C16.0066 1.89893 16.1369 2.01787 16.2275 2.17646C16.3578 2.40303 16.3691 2.47099 16.3691 3.21865C16.3691 4.11357 16.4371 4.40244 16.7033 4.57803C16.7826 4.63467 17.1848 4.7876 17.5869 4.92353C17.9947 5.05381 18.6801 5.34267 19.1162 5.55791C19.5523 5.77314 19.9658 5.94873 20.0395 5.94873C20.3113 5.94873 20.6002 5.75615 21.1496 5.2124C21.7387 4.63467 21.9029 4.53271 22.2314 4.53271C22.5713 4.53271 22.7299 4.64033 23.5285 5.42764C24.3271 6.2206 24.4688 6.41885 24.4688 6.76435C24.4688 7.09853 24.3668 7.26279 23.7891 7.85185C23.2396 8.40693 23.0527 8.69014 23.0527 8.96767C23.0527 9.04131 23.2283 9.46045 23.4492 9.89658C23.6645 10.3384 23.9477 11.0237 24.0779 11.4202C24.2139 11.8224 24.3668 12.2188 24.4234 12.2981C24.599 12.5644 24.8879 12.6323 25.7828 12.6323C26.5305 12.6323 26.5984 12.6437 26.825 12.7739C27.2498 13.0231 27.3008 13.2157 27.3008 14.5015C27.3008 15.7872 27.2498 15.9798 26.825 16.229C26.5984 16.3593 26.5305 16.3706 25.7828 16.3706C24.8879 16.3706 24.599 16.4386 24.4234 16.7048C24.3668 16.7841 24.2139 17.1806 24.0779 17.5827C23.9477 17.9792 23.6645 18.6646 23.4492 19.1063C23.2283 19.5425 23.0527 19.9616 23.0527 20.0353C23.0527 20.3128 23.2396 20.596 23.7891 21.1511C24.3668 21.7401 24.4688 21.9044 24.4688 22.2329C24.4688 22.5728 24.3611 22.7257 23.5795 23.5187C22.7752 24.3286 22.577 24.4702 22.2428 24.4702C21.9029 24.4702 21.7443 24.3683 21.1496 23.7905C20.5945 23.2411 20.3113 23.0542 20.0281 23.0542C19.9545 23.0542 19.5354 23.2298 19.1049 23.445C18.6744 23.6603 17.9947 23.9491 17.5869 24.0794C17.1848 24.2153 16.7826 24.3683 16.7033 24.4249C16.4371 24.6005 16.3691 24.8894 16.3691 25.7843C16.3691 26.5319 16.3578 26.5999 16.2275 26.8265C15.9783 27.2513 15.7857 27.3022 14.5 27.3022C13.2143 27.3022 13.0217 27.2513 12.7725 26.8265C12.6422 26.5999 12.6309 26.5319 12.6309 25.7843C12.6309 24.8894 12.5629 24.6005 12.2967 24.4249C12.2174 24.3683 11.8209 24.2097 11.4131 24.0794C11.0109 23.9435 10.3199 23.6603 9.88945 23.445C9.45332 23.2298 9.03984 23.0542 8.96621 23.0542C8.68867 23.0542 8.40547 23.2411 7.85039 23.7905C7.26133 24.3683 7.09707 24.4702 6.76289 24.4702C6.41738 24.4702 6.21914 24.3286 5.42617 23.53C4.63887 22.7313 4.53125 22.5728 4.53125 22.2329C4.53125 21.9044 4.6332 21.7401 5.21094 21.1511C5.76035 20.596 5.94727 20.3128 5.94727 20.0353C5.94727 19.9616 5.77168 19.5425 5.55078 19.1063C5.33555 18.6646 5.05234 17.9792 4.92207 17.5827C4.78613 17.1806 4.6332 16.7841 4.57656 16.7048C4.40098 16.4386 4.11211 16.3706 3.21719 16.3706C2.46953 16.3706 2.40156 16.3593 2.175 16.229C1.7502 15.9798 1.69922 15.7872 1.69922 14.5015C1.69922 13.2157 1.7502 13.0231 2.175 12.7739C2.40156 12.6437 2.46953 12.6323 3.21719 12.6323C4.11211 12.6323 4.40098 12.5644 4.57656 12.2981C4.6332 12.2188 4.7918 11.8167 4.92207 11.4146C5.05234 11.0067 5.34121 10.3214 5.55645 9.89092C5.77168 9.45478 5.94727 9.04131 5.94727 8.96767C5.94727 8.69014 5.76035 8.40693 5.21094 7.85185C4.6332 7.26279 4.53125 7.09853 4.53125 6.76435C4.53125 6.41885 4.67285 6.2206 5.47148 5.42764C6.27012 4.64033 6.42871 4.53271 6.76855 4.53271C7.09707 4.53271 7.26133 4.63467 7.85039 5.2124C8.40547 5.76182 8.68867 5.94873 8.96621 5.94873C9.03984 5.94873 9.45898 5.77314 9.89512 5.55225C10.3369 5.33701 11.0223 5.05381 11.4188 4.92353C11.8209 4.7876 12.2174 4.63467 12.2967 4.57803C12.5629 4.40244 12.6309 4.11357 12.6309 3.21865C12.6309 2.47099 12.6422 2.40303 12.7725 2.18213C12.8631 2.02353 12.9934 1.89893 13.152 1.81963C13.3729 1.71201 13.4918 1.70068 14.4943 1.70068C15.4969 1.70068 15.6215 1.71201 15.8424 1.81963Z"
      fill={color}
      fillOpacity="1"
    />
    <circle cx="14.5" cy="14.5" r="5.6" stroke={color} strokeOpacity="1" strokeWidth="1.8" />
  </svg>
);

Settings.propTypes = {
  color: PropTypes.string,
  classnames: PropTypes.string,
};

Settings.defaultProps = {
  color: '',
  classnames: '',
};

export default Settings;
