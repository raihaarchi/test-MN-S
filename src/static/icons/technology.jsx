import React from 'react';
import PropTypes from 'prop-types';

const Technology = ({ classnames, width, height, ...attr }) => (
  <svg
    width={width || 82}
    height={height || 65}
    viewBox="0 0 82 65"
    fill="none"
    className={classnames}
    xmlns="http://www.w3.org/2000/svg"
    {...attr}
  >
    <path
      opacity="0.5"
      d="M7.83594 58.0098C7.83594 58.8457 7.69531 59.5762 7.41406 60.2012C7.13281 60.8223 6.73438 61.2969 6.21875 61.625C5.70312 61.9531 5.10156 62.1172 4.41406 62.1172C3.74219 62.1172 3.14648 61.9531 2.62695 61.625C2.10742 61.293 1.70312 60.8223 1.41406 60.2129C1.12891 59.5996 0.982422 58.8906 0.974609 58.0859V57.4707C0.974609 56.6504 1.11719 55.9258 1.40234 55.2969C1.6875 54.668 2.08984 54.1875 2.60938 53.8555C3.13281 53.5195 3.73047 53.3516 4.40234 53.3516C5.08594 53.3516 5.6875 53.5176 6.20703 53.8496C6.73047 54.1777 7.13281 54.6562 7.41406 55.2852C7.69531 55.9102 7.83594 56.6387 7.83594 57.4707V58.0098ZM6.7168 57.459C6.7168 56.4473 6.51367 55.6719 6.10742 55.1328C5.70117 54.5898 5.13281 54.3184 4.40234 54.3184C3.69141 54.3184 3.13086 54.5898 2.7207 55.1328C2.31445 55.6719 2.10547 56.4219 2.09375 57.3828V58.0098C2.09375 58.9902 2.29883 59.7617 2.70898 60.3242C3.12305 60.8828 3.69141 61.1621 4.41406 61.1621C5.14062 61.1621 5.70312 60.8984 6.10156 60.3711C6.5 59.8398 6.70508 59.0801 6.7168 58.0918V57.459ZM12.1367 56.0234C12.9336 56.0234 13.5703 56.291 14.0469 56.8262C14.5273 57.3574 14.7676 58.0586 14.7676 58.9297V59.0293C14.7676 59.627 14.6523 60.1621 14.4219 60.6348C14.1914 61.1035 13.8594 61.4688 13.4258 61.7305C12.9961 61.9883 12.5 62.1172 11.9375 62.1172C11.0859 62.1172 10.4004 61.834 9.88086 61.2676C9.36133 60.6973 9.10156 59.9336 9.10156 58.9766V58.4492C9.10156 57.1172 9.34766 56.0586 9.83984 55.2734C10.3359 54.4883 11.0664 54.0098 12.0312 53.8379C12.5781 53.7402 12.9473 53.6211 13.1387 53.4805C13.3301 53.3398 13.4258 53.1465 13.4258 52.9004H14.3164C14.3164 53.3887 14.2051 53.7695 13.9824 54.043C13.7637 54.3164 13.4121 54.5098 12.9277 54.623L12.1191 54.8047C11.4746 54.957 10.9902 55.2148 10.666 55.5781C10.3457 55.9375 10.1367 56.418 10.0391 57.0195C10.6133 56.3555 11.3125 56.0234 12.1367 56.0234ZM11.9258 56.9141C11.3945 56.9141 10.9727 57.0938 10.6602 57.4531C10.3477 57.8086 10.1914 58.3027 10.1914 58.9355V59.0293C10.1914 59.709 10.3477 60.248 10.6602 60.6465C10.9766 61.041 11.4023 61.2383 11.9375 61.2383C12.4766 61.2383 12.9023 61.0391 13.2148 60.6406C13.5273 60.2422 13.6836 59.6602 13.6836 58.8945C13.6836 58.2969 13.5254 57.8184 13.209 57.459C12.8965 57.0957 12.4688 56.9141 11.9258 56.9141ZM15.6992 58.7715C15.6992 58.1504 15.8203 57.5918 16.0625 57.0957C16.3086 56.5996 16.6484 56.2168 17.082 55.9473C17.5195 55.6777 18.0176 55.543 18.5762 55.543C19.4395 55.543 20.1367 55.8418 20.668 56.4395C21.2031 57.0371 21.4707 57.832 21.4707 58.8242V58.9004C21.4707 59.5176 21.3516 60.0723 21.1133 60.5645C20.8789 61.0527 20.541 61.4336 20.0996 61.707C19.6621 61.9805 19.1582 62.1172 18.5879 62.1172C17.7285 62.1172 17.0312 61.8184 16.4961 61.2207C15.9648 60.623 15.6992 59.832 15.6992 58.8477V58.7715ZM16.7891 58.9004C16.7891 59.6035 16.9512 60.168 17.2754 60.5938C17.6035 61.0195 18.041 61.2324 18.5879 61.2324C19.1387 61.2324 19.5762 61.0176 19.9004 60.5879C20.2246 60.1543 20.3867 59.5488 20.3867 58.7715C20.3867 58.0762 20.2207 57.5137 19.8887 57.084C19.5605 56.6504 19.123 56.4336 18.5762 56.4336C18.041 56.4336 17.6094 56.6465 17.2812 57.0723C16.9531 57.498 16.7891 58.1074 16.7891 58.9004ZM28.1855 58.9004C28.1855 59.8652 27.9648 60.6426 27.5234 61.2324C27.082 61.8223 26.4844 62.1172 25.7305 62.1172C24.9609 62.1172 24.3555 61.873 23.9141 61.3848V64.4375H22.8301V55.6602H23.8203L23.873 56.3633C24.3145 55.8164 24.9277 55.543 25.7129 55.543C26.4746 55.543 27.0762 55.8301 27.5176 56.4043C27.9629 56.9785 28.1855 57.7773 28.1855 58.8008V58.9004ZM27.1016 58.7773C27.1016 58.0625 26.9492 57.498 26.6445 57.084C26.3398 56.6699 25.9219 56.4629 25.3906 56.4629C24.7344 56.4629 24.2422 56.7539 23.9141 57.3359V60.3652C24.2383 60.9434 24.7344 61.2324 25.4023 61.2324C25.9219 61.2324 26.334 61.0273 26.6387 60.6172C26.9473 60.2031 27.1016 59.5898 27.1016 58.7773ZM31.5723 60.4121L33.0488 55.6602H34.209L31.6602 62.9785C31.2656 64.0332 30.6387 64.5605 29.7793 64.5605L29.5742 64.543L29.1699 64.4668V63.5879L29.4629 63.6113C29.8301 63.6113 30.1152 63.5371 30.3184 63.3887C30.5254 63.2402 30.6953 62.9688 30.8281 62.5742L31.0684 61.9297L28.8066 55.6602H29.9902L31.5723 60.4121ZM34.8008 61.1152L35.1758 60.6523C35.5977 60.1055 35.8379 59.2852 35.8965 58.1914L35.9961 55.6602H40.0801V61.1152H40.8945V63.8633H39.8105V62H35.3867V63.8633H34.3027L34.3086 61.1152H34.8008ZM36.084 61.1152H38.9961V56.6621H37.0449L36.9805 58.1738C36.9141 59.4355 36.6152 60.416 36.084 61.1152ZM41.8086 58.7715C41.8086 58.1504 41.9297 57.5918 42.1719 57.0957C42.418 56.5996 42.7578 56.2168 43.1914 55.9473C43.6289 55.6777 44.127 55.543 44.6855 55.543C45.5488 55.543 46.2461 55.8418 46.7773 56.4395C47.3125 57.0371 47.5801 57.832 47.5801 58.8242V58.9004C47.5801 59.5176 47.4609 60.0723 47.2227 60.5645C46.9883 61.0527 46.6504 61.4336 46.209 61.707C45.7715 61.9805 45.2676 62.1172 44.6973 62.1172C43.8379 62.1172 43.1406 61.8184 42.6055 61.2207C42.0742 60.623 41.8086 59.832 41.8086 58.8477V58.7715ZM42.8984 58.9004C42.8984 59.6035 43.0605 60.168 43.3848 60.5938C43.7129 61.0195 44.1504 61.2324 44.6973 61.2324C45.248 61.2324 45.6855 61.0176 46.0098 60.5879C46.334 60.1543 46.4961 59.5488 46.4961 58.7715C46.4961 58.0762 46.3301 57.5137 45.998 57.084C45.6699 56.6504 45.2324 56.4336 44.6855 56.4336C44.1504 56.4336 43.7188 56.6465 43.3906 57.0723C43.0625 57.498 42.8984 58.1074 42.8984 58.9004ZM49.0391 62V55.6602H51.5117C52.3555 55.6602 53.002 55.8086 53.4512 56.1055C53.9043 56.3984 54.1309 56.8301 54.1309 57.4004C54.1309 57.6934 54.043 57.959 53.8672 58.1973C53.6914 58.4316 53.4316 58.6113 53.0879 58.7363C53.4707 58.8262 53.7773 59.002 54.0078 59.2637C54.2422 59.5254 54.3594 59.8379 54.3594 60.2012C54.3594 60.7832 54.1445 61.2285 53.7148 61.5371C53.2891 61.8457 52.6855 62 51.9043 62H49.0391ZM50.123 59.2168V61.127H51.916C52.3691 61.127 52.707 61.043 52.9297 60.875C53.1562 60.707 53.2695 60.4707 53.2695 60.166C53.2695 59.5332 52.8047 59.2168 51.875 59.2168H50.123ZM50.123 58.3496H51.5234C52.5391 58.3496 53.0469 58.0527 53.0469 57.459C53.0469 56.8652 52.5664 56.5586 51.6055 56.5391H50.123V58.3496ZM59.709 62C59.6465 61.875 59.5957 61.6523 59.5566 61.332C59.0527 61.8555 58.4512 62.1172 57.752 62.1172C57.127 62.1172 56.6133 61.9414 56.2109 61.5898C55.8125 61.2344 55.6133 60.7852 55.6133 60.2422C55.6133 59.582 55.8633 59.0703 56.3633 58.707C56.8672 58.3398 57.5742 58.1562 58.4844 58.1562H59.5391V57.6582C59.5391 57.2793 59.4258 56.9785 59.1992 56.7559C58.9727 56.5293 58.6387 56.416 58.1973 56.416C57.8105 56.416 57.4863 56.5137 57.2246 56.709C56.9629 56.9043 56.832 57.1406 56.832 57.418H55.7422C55.7422 57.1016 55.8535 56.7969 56.0762 56.5039C56.3027 56.207 56.6074 55.9727 56.9902 55.8008C57.377 55.6289 57.8008 55.543 58.2617 55.543C58.9922 55.543 59.5645 55.7266 59.9785 56.0938C60.3926 56.457 60.6074 56.959 60.623 57.5996V60.5176C60.623 61.0996 60.6973 61.5625 60.8457 61.9062V62H59.709ZM57.9102 61.1738C58.25 61.1738 58.5723 61.0859 58.877 60.9102C59.1816 60.7344 59.4023 60.5059 59.5391 60.2246V58.9238H58.6895C57.3613 58.9238 56.6973 59.3125 56.6973 60.0898C56.6973 60.4297 56.8105 60.6953 57.0371 60.8867C57.2637 61.0781 57.5547 61.1738 57.9102 61.1738ZM67.502 62H66.418V59.293H63.5059V62H62.416V55.6602H63.5059V58.4082H66.418V55.6602H67.502V62ZM73.3496 55.6602H74.4336V62H73.3496V57.377L70.4258 62H69.3418V55.6602H70.4258V60.2891L73.3496 55.6602ZM78.8047 62.1172C77.9453 62.1172 77.2461 61.8359 76.707 61.2734C76.168 60.707 75.8984 59.9512 75.8984 59.0059V58.8066C75.8984 58.1777 76.0176 57.6172 76.2559 57.125C76.498 56.6289 76.834 56.2422 77.2637 55.9648C77.6973 55.6836 78.166 55.543 78.6699 55.543C79.4941 55.543 80.1348 55.8145 80.5918 56.3574C81.0488 56.9004 81.2773 57.6777 81.2773 58.6895V59.1406H76.9824C76.998 59.7656 77.1797 60.2715 77.5273 60.6582C77.8789 61.041 78.3242 61.2324 78.8633 61.2324C79.2461 61.2324 79.5703 61.1543 79.8359 60.998C80.1016 60.8418 80.334 60.6348 80.5332 60.377L81.1953 60.8926C80.6641 61.709 79.8672 62.1172 78.8047 62.1172ZM78.6699 56.4336C78.2324 56.4336 77.8652 56.5938 77.5684 56.9141C77.2715 57.2305 77.0879 57.6758 77.0176 58.25H80.1934V58.168C80.1621 57.6172 80.0137 57.1914 79.748 56.8906C79.4824 56.5859 79.123 56.4336 78.6699 56.4336Z"
      fill="black"
    />
    <path
      d="M58.5 15.0029H22.5V37.5007H58.5V15.0029ZM57 36.0008H24V16.5028H57V36.0008Z"
      fill="black"
      fillOpacity="0.5"
    />
    <path
      d="M61.5 38.9988V14.2512C61.5 13.0087 60.4927 12.0015 59.25 12.0015H21.75C20.5073 12.0015 19.5 13.0087 19.5 14.2512V38.9988H18V41.2486C18.0024 43.3183 19.68 44.9957 21.75 44.9982H59.25C61.32 44.9957 62.9976 43.3183 63 41.2486V38.9988H61.5ZM21 14.2512C21 13.8371 21.3358 13.5013 21.75 13.5013H59.25C59.6642 13.5013 60 13.8371 60 14.2512V38.9988H43.5V39.7487C43.5 40.1628 43.1642 40.4986 42.75 40.4986H38.25C37.8358 40.4986 37.5 40.1628 37.5 39.7487V38.9988H21V14.2512ZM61.5 41.2486C61.5 42.4911 60.4927 43.4983 59.25 43.4983H21.75C20.5073 43.4983 19.5 42.4911 19.5 41.2486V40.4986H36.1283C36.1372 40.5249 36.1515 40.5481 36.162 40.5736C36.1777 40.6134 36.195 40.6486 36.213 40.6899C36.2527 40.7748 36.2976 40.8572 36.3472 40.9366C36.3697 40.9718 36.3907 41.0078 36.4155 41.0423C36.479 41.1317 36.5489 41.2165 36.6248 41.2958C36.6405 41.3115 36.6525 41.3295 36.6682 41.3453C36.7612 41.4367 36.8615 41.5202 36.9683 41.595C36.9983 41.6153 37.0305 41.6325 37.062 41.652C37.1437 41.7035 37.2286 41.7495 37.3162 41.79C37.3575 41.8087 37.3988 41.8252 37.4408 41.8417C37.5292 41.8754 37.6196 41.9037 37.7115 41.9265C37.7528 41.9362 37.7925 41.9482 37.8345 41.9557C37.9714 41.9831 38.1105 41.9974 38.25 41.9985H42.75C42.8888 41.9975 43.0271 41.9835 43.1633 41.9565C43.2053 41.949 43.245 41.937 43.2863 41.9265C43.3782 41.9043 43.4686 41.8762 43.557 41.8425C43.599 41.826 43.6403 41.8095 43.6815 41.7907C43.7692 41.7502 43.8541 41.7041 43.9358 41.6528C43.9673 41.6333 43.9995 41.616 44.0295 41.5958C44.1363 41.521 44.2366 41.4374 44.3295 41.346C44.3453 41.3303 44.3573 41.3123 44.373 41.2965C44.4488 41.2172 44.5188 41.1325 44.5823 41.0431C44.607 41.0086 44.628 40.9726 44.6505 40.9373C44.7 40.8578 44.7445 40.7754 44.784 40.6906C44.802 40.6516 44.82 40.6156 44.8365 40.5736C44.8463 40.5481 44.8605 40.5249 44.8695 40.4986H61.5V41.2486Z"
      fill="black"
      fillOpacity="0.5"
    />
    <path
      d="M34.1353 4.13957L34.1375 4.14182C37.6468 0.628418 43.34 0.624669 46.8538 4.13357C46.8565 4.13629 46.8593 4.1391 46.862 4.14182C47.1554 4.43523 47.6313 4.43523 47.9248 4.14182C48.2182 3.84841 48.2182 3.37258 47.9248 3.07917C43.8315 -1.02114 37.189 -1.02714 33.0883 3.06568C33.0838 3.07018 33.0793 3.07467 33.0748 3.07917C32.787 3.37708 32.7953 3.85188 33.0932 4.13957C33.3839 4.42023 33.8446 4.42023 34.1353 4.13957Z"
      fill="black"
      fillOpacity="0.5"
    />
    <path
      d="M44.7397 7.01297C44.8803 7.15358 45.071 7.2327 45.2699 7.2327C45.6841 7.2326 46.0198 6.89682 46.0197 6.48258C46.0197 6.28376 45.9407 6.09318 45.8002 5.95257C42.8813 3.02562 38.142 3.01887 35.2148 5.93748C35.2097 5.94254 35.2046 5.94751 35.1997 5.95257C34.9017 6.24026 34.8935 6.71506 35.1812 7.01297C35.4689 7.31088 35.9438 7.31913 36.2417 7.03144C36.248 7.02534 36.2541 7.01925 36.2602 7.01297C38.5938 4.67161 42.3837 4.66523 44.7253 6.99863C44.7301 7.00341 44.7349 7.00819 44.7397 7.01297Z"
      fill="black"
      fillOpacity="0.5"
    />
    <path
      d="M37.294 9.87345C37.5803 10.1727 38.0551 10.1832 38.3544 9.89689C38.3603 9.89117 38.3662 9.88545 38.3719 9.87955C39.5644 8.74725 41.4349 8.74725 42.6274 9.87955C42.9268 10.1658 43.4015 10.1553 43.6878 9.85611C43.9675 9.56383 43.965 9.10234 43.6819 8.81315C41.9209 7.06424 39.0784 7.06424 37.3174 8.81315C37.0182 9.09944 37.0077 9.57414 37.294 9.87345Z"
      fill="black"
      fillOpacity="0.5"
    />
  </svg>
);

Technology.propTypes = {
  classnames: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Technology.defaultProps = {
  classnames: '',
  width: 82,
  height: 65,
};

export default Technology;