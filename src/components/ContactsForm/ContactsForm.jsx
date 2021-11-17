import React, { useState } from 'react';
import cn from 'classnames/bind';
import { FormattedMessage, useIntl } from 'react-intl';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '@/ui/Button';
import styles from './styles.module.scss';
import Title from '../../ui/Title';
import useTheme from '../../hooks/useTheme';
import ContactsModal from '../ContactsModal';
import Input from './Input';

const ContactsForm = () => {
  const cx = cn.bind(styles);
  const intl = useIntl();
  const { isLight } = useTheme();
  const contactsClassNames = cx('contacts', {
    'contacts-dark': !isLight,
  });
  const formClassName = cx('contacts__form', {
    'contacts__form-dark': !isLight,
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <Formik
      initialValues={{ name: '', email: '', phone: '', textarea: '' }}
      validateOnChange
      validateOnMount
      validationSchema={Yup.object({
        name: Yup.string()
          .matches(
            /^[A-Za-z, А-Яа-я ]*$/,
            'Имя должно содержать не менее 2 символов и состоять только из букв',
          )
          .min(2, 'Имя должно содержать не менее 2 символов и состоять только из букв')
          .required('Не указано имя'),
        email: Yup.string().email('Некорректный Email').required('Введите свой Email'),
        phone: Yup.string()
          .matches(/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/, 'Некорректный номер телефона')
          .required('Введите свой номер телефона'),
        textarea: Yup.string()
          .min(5, 'Сообщение должно содержать не менее 5 символов')
          .required('Введите сообщение'),
      })}
      onSubmit={(values, { resetForm }) => {
        setModalIsOpen(true);
        resetForm();
      }}
    >
      {({ errors, touched, handleBlur }) => (
        <div className={contactsClassNames}>
          <ContactsModal isOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
          <Title Tag="h2">
            <FormattedMessage id="contacts.titleWriteForUs" />
          </Title>
          <Form className={formClassName}>
            <div className={cx('contacts__form-group')}>
              <div className={cx('contacts__form-group-three')}>
                <Input
                  name="name"
                  id="contacts.inputName"
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
                <Input name="email" handleBlur={handleBlur} errors={errors} touched={touched} />
                <Input
                  name="phone"
                  id="contacts.inputNumber"
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
              </div>
              <Input
                name="textarea"
                id="contacts.inputMessage"
                as="textarea"
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
            </div>
            <div className={cx('contacts__form-input-btn-container')}>
              <Button className={cx('contacts__form-input-btn')} type="submit">
                {intl.formatMessage({ id: 'contacts.btnSend' })}
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ContactsForm;
