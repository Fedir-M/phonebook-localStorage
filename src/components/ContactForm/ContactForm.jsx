import Input from 'components/Input';
import Button from 'components/Button';
import s from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  return (
    <form className={s.formWrapper} onSubmit={onSubmit}>
      <Input
        title={'Name'}
        type={'text'}
        name={'name'}
        placeholder={'Enter name...'}
      />
      <Input
        title={'Number'}
        type={'tel'}
        name={'number'}
        placeholder={'Number XXX-XXX-XXXX'}
        pattern={'[0-9]{3}-[0-9]{3}-[0-9]{4}'}
      />
      <Button btnName={'Add contact'} btnType={'submit'} />
    </form>
  );
};

export default ContactForm;
