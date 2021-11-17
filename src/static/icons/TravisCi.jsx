import React from 'react';
import PropTypes from 'prop-types';

const TravisCi = ({ classnames, width, height, ...attr }) => (
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
      d="M15.3504 0.00463291C14.0836 -0.041043 7.97194 0.116865 4.46452 6.93758C5.96846 6.5787 7.2566 6.54999 7.35784 6.54999C7.72217 6.54999 8.02122 6.84362 8.02389 7.2025C8.02655 7.56204 7.72417 7.85306 7.35784 7.85502C7.31588 7.85502 3.4448 7.91374 1.63382 9.75187C1.31944 10.4886 1.31944 11.9313 1.42601 12.7084C1.42867 12.7312 1.75104 14.9948 2.46638 15.5429L0.177834 19.5187L0.115226 19.6211C0.0158616 19.7644 -0.0213296 19.9405 0.0118335 20.1107C0.0449967 20.2808 0.145798 20.4311 0.292062 20.5284C0.438325 20.6258 0.618071 20.6622 0.791756 20.6297C0.965441 20.5972 1.11884 20.4985 1.2182 20.3552C1.22087 20.35 1.4007 20.1438 1.44732 20.0896C1.59319 19.9265 1.82231 19.6975 2.09272 19.4175C2.10005 19.4097 2.10605 19.3862 2.11337 19.3764C2.28521 19.1976 2.54297 18.9758 2.75877 18.7644C2.82604 19.2231 2.89398 19.736 3.02919 20.1307C3.14375 20.4674 3.33091 20.9138 3.52872 21.3137C3.6273 21.5147 3.71855 21.6955 3.8411 21.8638C3.90105 21.9486 3.97098 22.0426 4.06956 22.1294C4.1688 22.2155 4.31999 22.333 4.61105 22.333C4.88413 22.333 5.15455 22.2919 5.46426 22.2514C5.47492 22.2488 5.47492 22.254 5.48491 22.2514C5.55818 22.5111 5.57349 22.6364 5.75599 23.0873C5.89586 23.4344 6.08102 23.8037 6.29682 24.1685C5.80528 24.145 5.40965 24.1274 5.40165 24.1274C5.27512 24.1231 5.14985 24.1532 5.0397 24.2143C4.92955 24.2755 4.83883 24.3653 4.77757 24.4739C4.71491 24.5809 4.68551 24.7036 4.69297 24.8268C4.70042 24.95 4.7444 25.0684 4.81953 25.1675C6.67847 27.5883 8.82514 28.695 10.022 28.695C10.1912 28.695 10.3757 28.6774 10.5635 28.6539C10.6748 28.7211 12.8447 30 15.3504 30C18.7093 30 21.1837 27.8206 21.3655 27.6549C22.0216 27.5198 22.6483 27.3619 23.01 27.2268C24.4513 26.6865 26.247 23.7346 26.59 23.1486C26.6973 23.1238 26.7966 23.0733 26.879 23.0016C26.9614 22.9299 27.0243 22.8393 27.062 22.7378C27.0998 22.6364 27.1112 22.5274 27.0952 22.4205C27.0793 22.3137 27.0365 22.2124 26.9707 22.1258C26.9048 22.0392 26.818 21.97 26.7181 21.9244C26.6182 21.8788 26.5083 21.8583 26.3983 21.8647C26.2883 21.8711 26.1816 21.9041 26.0879 21.9609C25.9941 22.0177 25.9163 22.0965 25.8613 22.1901L26.0278 21.6602L27.298 21.5173C27.4113 21.5019 27.5186 21.4581 27.6096 21.3902C27.7006 21.3223 27.7722 21.2326 27.8175 21.1297C27.8175 21.1297 28.2032 20.3324 28.359 19.6616C28.4396 19.3203 28.5102 18.8003 28.5675 18.2959C28.6248 17.7908 28.6714 17.4215 28.6714 17.154C28.6714 16.769 28.4969 16.6515 28.401 16.5621C28.3044 16.4734 28.2058 16.4199 28.1092 16.3586C27.9473 16.262 27.7806 16.1733 27.6097 16.093C28.0733 15.9507 28.5229 15.8059 28.7134 15.6852C29.4573 15.2167 29.8943 13.0373 29.8989 13.0144C30.1001 11.9332 29.9928 10.3835 29.6498 9.69053C29.6265 9.64486 29.5766 9.60636 29.5452 9.56786C27.7189 8.18127 23.9438 7.81913 23.9052 7.81456C23.7285 7.79819 23.5657 7.71384 23.4524 7.58001C23.3392 7.44618 23.2847 7.27381 23.301 7.10071C23.335 6.74183 23.6707 6.47626 24.0297 6.50953C24.1229 6.51736 25.3178 6.64656 26.7359 6.99892C23.3537 0.186031 16.2323 -0.000587197 15.3504 0.00463291ZM12.6862 3.89948H18.0146V5.85702H16.6825V5.20451H16.0165V9.11959H16.6825V10.4246H14.0183V9.11959H14.6844V5.20451H14.0183V5.85702H12.6862V3.89948ZM15.3504 12.3822H15.6834C14.2681 12.8206 13.0605 13.4092 12.2493 13.8301L12.3945 12.9936C12.5717 12.8663 12.6729 12.6601 12.6656 12.4435C13.56 12.4036 14.4551 12.3832 15.3504 12.3822ZM18.9511 12.4839C20.1247 12.5479 21.181 12.6497 22.0735 12.7495C21.1837 13.2363 19.9422 13.6258 18.8678 13.8705C18.4962 13.9554 18.5115 13.9371 18.2018 13.9932C18.3163 13.8301 18.4336 13.6669 18.5348 13.5038C18.7093 13.2232 18.8525 12.9688 18.9304 12.6471C18.9438 12.5936 18.9511 12.5401 18.9511 12.4839ZM9.04361 12.7084C9.05693 12.7058 9.07225 12.711 9.08557 12.7084C7.4018 13.4347 5.84857 14.4389 4.52713 15.4614C4.50049 15.4816 4.46985 15.5018 4.44388 15.522C4.18412 15.7243 3.93635 15.9351 3.69457 16.1341C3.68391 16.1445 3.66327 16.1445 3.65261 16.1543L4.79821 14.1563H4.8182C4.90212 14.1355 5.00868 14.1054 5.13124 14.0748L5.02667 13.5436V13.4823C5.02134 13.4627 5.01335 13.4418 5.00602 13.4216C5.00602 13.4216 6.35144 13.0105 9.04361 12.7078V12.7084ZM23.5928 12.9329C25.3618 13.1952 26.2776 13.4627 26.2776 13.4627L24.9249 18.7442L23.1345 20.1921L18.4935 19.6211L17.3066 16.705C17.2557 16.584 17.1691 16.4806 17.058 16.408C16.9468 16.3354 16.8161 16.2968 16.6825 16.2972H14.0183C13.7452 16.2972 13.4955 16.4577 13.3936 16.705L12.208 19.6414L8.10714 20.5386L6.17161 19.5396L5.54685 16.3377C7.13205 15.1449 9.01497 13.9952 10.9585 13.4014L10.6881 14.8702C10.6335 15.1253 10.7374 15.3876 10.9532 15.541C11.1723 15.691 11.4607 15.6989 11.6872 15.5638C11.6872 15.5638 14.3747 14.1107 16.9323 13.4634C16.909 13.4966 16.893 13.5325 16.8697 13.5658C16.4954 14.0702 16.1417 14.5035 16.1417 14.5035C16.0593 14.6038 16.0088 14.7255 15.9962 14.8536C15.9837 14.9818 16.0097 15.1107 16.0711 15.2245C16.1983 15.4568 16.4561 15.5899 16.7238 15.5638C16.7238 15.5638 17.8095 15.4437 19.1596 15.1358C20.5096 14.8271 22.1488 14.3482 23.3224 13.5247C23.5122 13.3877 23.6161 13.1626 23.5928 12.9335V12.9329ZM20.1167 16.0525C19.4872 16.0728 19.0843 16.8786 19.1176 17.8469C19.1516 18.8127 19.6744 18.8081 20.3045 18.7853C21.1497 18.7696 21.6079 18.5021 22.0316 18.7037C22.0262 18.6802 21.9097 18.288 21.3242 18.3566C21.3915 18.2117 21.4075 18.0329 21.3862 17.7654C21.3082 16.7997 20.7467 16.0323 20.1167 16.0525ZM10.9378 16.277C10.3084 16.2822 9.71232 17.0822 9.75162 18.0505C9.76161 18.3031 9.79558 18.4916 9.85552 18.6215C9.3067 18.7572 9.15617 19.0913 9.14751 19.1109C9.49386 18.9282 9.88949 18.9458 10.5009 18.9477C10.5655 18.9503 10.6181 18.9503 10.6881 18.9477C10.748 18.9477 10.8106 18.9503 10.8752 18.9477C11.5053 18.9432 12.0308 18.9993 12.0202 18.0303C12.0095 17.062 11.5673 16.2718 10.9378 16.277ZM20.0547 16.6639C20.0972 16.6624 20.1396 16.6691 20.1794 16.6837C20.2192 16.6983 20.2557 16.7205 20.2867 16.7491C20.3177 16.7776 20.3426 16.8119 20.3599 16.8499C20.3773 16.8879 20.3867 16.929 20.3877 16.9706C20.3897 17.1435 20.2312 17.291 20.0547 17.2969C19.8776 17.2988 19.745 17.1435 19.7417 16.9706C19.737 16.7971 19.8776 16.6666 20.0547 16.6639ZM11.0418 16.8884C11.2189 16.8832 11.3488 17.0189 11.3541 17.1944C11.3565 17.2782 11.325 17.3594 11.2665 17.4205C11.208 17.4816 11.1272 17.5176 11.0418 17.5207C10.8619 17.5259 10.7354 17.3882 10.73 17.2147C10.7286 17.1732 10.7356 17.1318 10.7505 17.093C10.7654 17.0541 10.7879 17.0185 10.8169 16.9882C10.8458 16.9579 10.8806 16.9335 10.9192 16.9164C10.9578 16.8993 10.9994 16.8898 11.0418 16.8884ZM26.7359 17.1129C26.8158 17.1488 26.8191 17.154 26.9024 17.1944C27.0609 17.2708 27.2068 17.3523 27.3187 17.4189C27.3053 17.5892 27.2767 17.7961 27.2354 18.153C27.1781 18.6371 27.1128 19.1879 27.0689 19.3764C27.0036 19.657 26.8478 19.9905 26.7359 20.2528L25.4244 20.4159C25.1646 20.4439 24.9429 20.6201 24.8623 20.8648L24.3214 22.5979C23.8166 22.7284 23.3923 22.8374 23.2597 22.8426C22.8801 22.8426 21.3136 22.825 20.8247 22.8224C19.7031 22.3003 18.4962 21.7209 18.327 21.6191C18.2092 21.5457 18.0708 21.5101 17.9314 21.5173C17.8894 21.5199 17.8481 21.5323 17.8061 21.5376C17.8353 21.4277 17.8346 21.3122 17.8041 21.2027C17.7736 21.0931 17.7144 20.9933 17.6323 20.9131C17.5505 20.8327 17.4486 20.7747 17.3368 20.7448C17.2249 20.7149 17.1071 20.7142 16.9949 20.7428C16.8783 20.7669 16.7705 20.8212 16.6826 20.9001C16.5947 20.9789 16.5301 21.0794 16.4954 21.1911C16.4954 21.1911 16.4274 21.4436 16.2243 21.7007C16.0218 21.9584 15.7714 22.1698 15.3504 22.1698C15.2592 22.1698 15.1446 22.1418 15.038 22.1287C14.3906 21.9656 14.1848 21.3131 14.1848 21.3131C14.1747 21.2216 14.145 21.1333 14.0976 21.0539C14.0503 20.9745 13.9863 20.9058 13.9099 20.8523C13.8335 20.7988 13.7464 20.7618 13.6544 20.7436C13.5623 20.7254 13.4674 20.7265 13.3758 20.7467C13.2842 20.767 13.1981 20.806 13.123 20.8612C13.0478 20.9164 12.9855 20.9866 12.94 21.0671C12.8945 21.1475 12.8669 21.2365 12.859 21.3282C12.851 21.4198 12.863 21.5121 12.894 21.5989C12.8037 21.5902 12.7126 21.6002 12.6265 21.6283C12.5404 21.6564 12.4614 21.702 12.3945 21.762L10.5216 23.4546C9.78758 23.7352 8.63266 24.1045 7.96128 24.1887C7.59495 23.8011 7.23795 23.1793 7.00417 22.5979C6.73375 21.9252 6.60853 21.3744 6.60853 21.3744C6.59547 21.3175 6.5744 21.2626 6.54593 21.2113L7.71151 21.8031C7.80809 21.8514 7.91732 21.884 8.02389 21.884C8.07318 21.884 8.12246 21.8743 8.16975 21.8645L12.8321 20.8446C12.9379 20.8229 13.0368 20.7762 13.1201 20.7087C13.2034 20.6412 13.2687 20.5548 13.3103 20.457L14.4766 17.6023H16.2249L17.3905 20.457C17.4818 20.6789 17.6903 20.8342 17.932 20.8648L23.2604 21.5173C23.3492 21.5281 23.4393 21.521 23.5252 21.4964C23.6111 21.4718 23.691 21.4303 23.76 21.3744L25.9246 19.6211C26.0312 19.5343 26.1178 19.4071 26.1537 19.274L26.7359 17.1129ZM4.3806 17.276L4.9221 20.0903C4.95807 20.286 5.07529 20.4466 5.25512 20.5386L5.83792 20.8648C5.83792 20.8648 5.57216 20.9059 5.27577 20.9464C5.10127 20.9692 5.01801 20.9725 4.88014 20.9875C4.83618 20.9131 4.76824 20.8544 4.71363 20.7421C4.55244 20.4159 4.39126 19.9983 4.29735 19.7229C4.23007 19.5239 4.1335 18.966 4.06822 18.5197C4.00362 18.074 3.96432 17.704 3.96432 17.704V17.6434C4.10752 17.5181 4.23007 17.4032 4.3806 17.276ZM15.3304 26.5945C15.7807 26.9312 16.4987 27.4435 16.933 27.6757C17.3026 27.8741 17.8954 27.9811 18.307 28.0216C17.4705 28.3974 16.4461 28.695 15.3504 28.695C14.3567 28.695 13.3676 28.4274 12.603 28.1443C12.7961 28.0783 12.9959 28.0072 13.1651 27.9407C13.61 27.7671 14.6997 27.0252 15.3298 26.5945H15.3304Z"
      fill="black"
    />
  </svg>
);

TravisCi.propTypes = {
  classnames: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

TravisCi.defaultProps = {
  classnames: '',
  width: 30,
  height: 30,
};

export default TravisCi;
