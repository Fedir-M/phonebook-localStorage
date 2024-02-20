import Button from 'components/Button';
import Filter from 'components/Filter';

import s from './ContactsList.module.css';

const ContactsList = ({ contactsArr, onClick, onChange }) => {
  return (
    <div>
      <h2>Contacts</h2>

      <Filter onChange={onChange} />

      <ul className={s.listWrapper}>
        {contactsArr.map(el => (
          <li key={el.id} className={s.listItem}>
            <div className={s.itemName}>
              <span>{el.name}</span>
            </div>
            <div className={s.itemNumber}>
              <span>{el.number}</span>
            </div>
            <Button
              btnType={'button'}
              btnName={'Delete'}
              id={el.id}
              onDelete={onClick}
              className={s.itemBtn}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
