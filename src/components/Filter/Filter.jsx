import { useSelector, useDispatch } from 'react-redux';
import { filteredContact } from 'redux/contacts/contacts.reducer';
import { selectContactsFilter } from 'redux/contacts/contacts.selector';

import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const newFilterValue = e.target.value;
    dispatch(filteredContact(newFilterValue));
  };

  return (
    <label className={css.label}>
      <input
        className={css.input}
        type="text"
        placeholder="Search"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
};

export default Filter;
