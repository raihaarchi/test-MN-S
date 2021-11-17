import React from 'react';
import cn from 'classnames/bind';
import styles from './styles.module.scss';
import ModalOk from '../../static/icons/modalOk';
import ModalCross from '../../static/icons/modalCross';

const ContactsModal = ({ isOpen, setModalIsOpen }) => {
  const cx = cn.bind(styles);
  const modalClassName = cx('modal', {
    'modal-block': isOpen,
  });
  const closeModal = () => setModalIsOpen(false);
  return (
    <div className={modalClassName}>
      <button onClick={closeModal} type="button" className={cx('modal__cross')}>
        <ModalCross />
      </button>
      <ModalOk classnames={cx('modal__icon')} />
      <span className={cx('modal__text')}>Сообщение успешно отправлено!</span>
    </div>
  );
};

export default ContactsModal;
