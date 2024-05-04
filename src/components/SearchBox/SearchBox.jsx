import { useDispatch, useSelector } from 'react-redux';
import {filterContacts} from '../../redux/store';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    dispatch(filterContacts(filterValue));
  };
  
    return (<div>    
      <p>Find contacts by name</p>
        <input type="text" name="filter" value={ filter} onChange={handleFilterChange} />
    </div>)
};