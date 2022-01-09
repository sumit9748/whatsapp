import "./search.css"
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
    return (
        <div className='search'>
            <SearchIcon />
            <input type="text" placeholder='write about your search..' className="searchContainer" />

        </div>
    )
}
