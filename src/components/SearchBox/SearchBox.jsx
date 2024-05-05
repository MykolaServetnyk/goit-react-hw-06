import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input type="text" value={filter} onChange={handleFilterChange} placeholder="Search Contacts" />
  );
}
