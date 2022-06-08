import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter/filterSelector';
import { changeFilter } from 'redux/filter/filterActions';

const Filter = () => {
  const data = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleChange = data => {
    dispatch(changeFilter(data));
  };

  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        onChange={e => handleChange(e.target.value)}
        type="text"
        name="filter"
        value={data}
      />
    </div>
  );
};
export default Filter;
