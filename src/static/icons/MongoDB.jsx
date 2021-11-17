import React from 'react';
import PropTypes from 'prop-types';

const MongoDB = ({ classnames, width, height, ...attr }) => (
  <svg
    width={width || 14}
    height={height || 30}
    viewBox="0 0 14 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classnames}
    {...attr}
  >
    <path
      opacity="0.5"
      d="M13.7165 11.9062C12.0753 4.9484 8.19784 2.66698 7.78121 1.79268C7.3236 1.17261 6.83086 0 6.83086 0C6.82598 0.0243902 6.82598 0.0393996 6.82111 0.0637899V0.0787992C6.82111 0.0984991 6.81623 0.10788 6.81623 0.12758V0.14728H6.81135C6.81135 0.15666 6.81135 0.166979 6.81135 0.17636V0.210131H6.80647C6.80647 0.219512 6.80647 0.234522 6.80159 0.239212V0.268293C6.80159 0.277674 6.80159 0.287992 6.79671 0.292683V0.317073C6.79671 0.332083 6.79671 0.346154 6.79184 0.356473V0.361163C6.79184 0.380863 6.78696 0.405253 6.78208 0.424953V0.434334C6.7772 0.439024 6.7772 0.443715 6.7772 0.449343V0.469043H6.77232V0.498124H6.76744V0.517824H6.75769V0.546904H6.75281V0.571295H6.74793V0.590994H6.74305V0.610694H6.73817V0.630394H6.73329V0.650094H6.72841V0.665103H6.72354V0.684803H6.71866V0.689493V0.704503H6.71378C6.7089 0.704503 6.7089 0.709193 6.7089 0.709193V0.718574L6.70402 0.727955C6.70402 0.737336 6.69914 0.747655 6.69426 0.757036C6.68938 0.761726 6.68939 0.761726 6.68939 0.766416V0.775797H6.68451V0.785178H6.67475V0.809568H6.66499V0.824578H6.66011V0.829268H6.65524V0.838649H6.65036V0.853659H6.64548V0.863039H6.63572V0.878049H6.63084V0.88743H6.62596V0.896811H6.62109V0.91182H6.61621V0.921201H6.61133V0.925891H6.60645V0.935272H6.59669V0.950281H6.59181V0.954972H6.58694V0.964353H6.58206V0.979362H6.57718V0.984052H6.5723V0.993433H6.56742V0.998124H6.56254V1.01313H6.55279V1.01782H6.54791V1.0272H6.54303V1.03189H6.53815V1.04128H6.53327C6.53327 1.04597 6.53327 1.04597 6.53327 1.04597V1.05066C6.52839 1.05066 6.52839 1.05535 6.52839 1.05535V1.06004H6.52351C6.51864 1.06942 6.51376 1.07505 6.5079 1.08443C6.5079 1.08443 6.49815 1.09381 6.49815 1.09944C6.49327 1.09944 6.49327 1.10413 6.49327 1.10413V1.10882H6.48839V1.11351H6.48351C6.48351 1.11351 6.48351 1.11351 6.48351 1.1182V1.12289H6.47375V1.12758H6.46887V1.13227H6.464V1.13696V1.14634H6.45912V1.15103H6.45424V1.15572H6.44936V1.1651H6.44448V1.15572H6.43472V1.16041H6.42985V1.16979H6.42497V1.17917H6.42009V1.18386H6.41521V1.18856H6.41033V1.19325H6.40545V1.20263H6.3957V1.20732H6.39082V1.2167H6.38594V1.22139H6.38106V1.22608H6.37618V1.24109H6.3713V1.24578H6.36643V1.25047H6.36155V1.25516H6.35667V1.25985H6.34691V1.26923H6.34203V1.27392H6.33715V1.27861H6.33227V1.28799H6.3274V1.29268H6.31764V1.29737H6.31276V1.30206H6.30788V1.31144H6.303V1.32083H6.29813V1.32552H6.29325V1.33021H6.28349V1.3349H6.27861V1.33959H6.27373V1.34897H6.26885V1.35366H6.26397V1.36304H6.2591V1.36773H6.25422V1.37242H6.24934V1.37711H6.24446V1.3818H6.2347V1.38649C6.22983 1.38649 6.22983 1.39118 6.22983 1.39118L6.22495 1.39587L6.22007 1.40056V1.40994H6.21519V1.41463H6.21031V1.41932H6.20543V1.42401H6.20055L6.1908 1.4334V1.43809C6.18104 1.44278 6.18104 1.44747 6.17031 1.45779C6.17031 1.45779 6.16055 1.46717 6.1547 1.46717C6.13908 1.47655 6.11957 1.49625 6.10396 1.51126C6.0942 1.51595 6.08347 1.52627 6.07371 1.53096C6.05322 1.55066 6.03273 1.56473 6.01224 1.57974C5.98199 1.60882 5.95077 1.62852 5.91565 1.6576H5.91077C5.83954 1.7167 5.75856 1.78424 5.67172 1.85835H5.66684C5.44828 2.04409 5.18874 2.2833 4.89408 2.5666L4.86871 2.59099C3.09974 4.34991 0.31018 8.01876 0.0203933 13.9456C-0.00985379 14.4343 -0.00497604 14.9128 0.025271 15.3771V15.3865C0.167725 17.7223 0.929756 19.7158 1.88498 21.3377C2.26063 21.9831 2.67238 22.5694 3.08901 23.0966C4.52233 24.9146 5.9859 25.9944 6.35667 26.258C6.93136 27.5328 6.87965 29.7317 6.87965 29.7317L7.71779 30C7.71779 30 7.54509 27.8743 7.78413 26.8433C7.86024 26.5253 8.03294 26.2523 8.23687 26.0178C8.37932 25.925 8.78619 25.6417 9.27405 25.212C9.29942 25.1876 9.31503 25.1679 9.33552 25.1435C11.3123 23.3696 15.0073 19.0019 13.7418 11.8884L13.7165 11.9062Z"
      fill="black"
    />
  </svg>
);

MongoDB.propTypes = {
  classnames: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

MongoDB.defaultProps = {
  classnames: '',
  width: 14,
  height: 30,
};

export default MongoDB;