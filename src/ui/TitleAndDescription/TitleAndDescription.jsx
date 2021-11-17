import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

const TitleAndDescription = ({ title, text }) => (
  <div className={cn(styles.main__text, styles.text)}>
    <h1 className={cn(styles.text__title, styles.text)}>{title}</h1>
    <hr className={styles.text__line} />
    {text && <span className={styles.text__subtitle}>{text}</span>}
  </div>
);

TitleAndDescription.propTypes = {
  title: PropTypes.objectOf(PropTypes.any).isRequired,
  text: PropTypes.string.isRequired,
};

export default TitleAndDescription;
