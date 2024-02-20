import { clsx } from 'clsx';
import s from './Button.module.css';

const Button = ({ btnName, btnType, id, onDelete }) => {
  return btnType === 'button' ? (
    <button
      className={clsx(s.button, btnName === 'Delete' ? s.btnDelete : null)}
      type={btnType}
      onClick={() => onDelete(id)}
    >
      {btnName}
    </button>
  ) : (
    <button
      className={clsx(s.button, btnName === 'Delete' ? s.btnDelete : null)}
      type={btnType}
    >
      {btnName}
    </button>
  );
};

export default Button;
