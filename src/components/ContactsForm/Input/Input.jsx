import React from 'react';
import cn from 'classnames/bind';
import PropTypes from 'prop-types';

import { useIntl } from 'react-intl';
import { Field, ErrorMessage } from 'formik';
import styles from '../styles.module.scss';
import useTheme from '../../../hooks/useTheme';

const Input = ({ name, id, handleBlur, errors, touched, ...other }) => {
  const cx = cn.bind(styles);
  const intl = useIntl();
  const { isLight } = useTheme();
  return (
    <div className={cx('container')}>
      <Field
        name={name}
        type="text"
        onInput={handleBlur}
        placeholder={id ? intl.formatMessage({ id }) : 'Email'}
        className={cx('contacts__form-input-text', {
          'contacts__form-input-textarea': name === 'textarea',
          'contacts__form-input-text--error': errors[name] && touched[name],
          'contacts__form-dark--error': errors[name] && touched[name] && !isLight,
        })}
        {...other}
      />
      <div className={cx('container__error')}>
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  handleBlur: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  touched: PropTypes.objectOf(PropTypes.bool).isRequired,
};

Input.defaultProps = {
  id: '',
};

export default Input;
