import SearchIcon from '@mui/icons-material/Search';
import Container from "@mui/material/Container";
import TextField from '@mui/material/TextField';
import '../../styles/SearchBar.css';
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";






const SearchBar = () => {


    return(


            <Container id='search-container'>
                <Box id='seach-inner-container'>
            {/* location */}
            <TextField
            variant="standard"
            label="Location"
            disabled 
            defaultValue="Where are you going?"
            multiline
            className="search-input"
            />
            <span><Divider orientation='vertical' className='divi'/></span>
            {/* checkin */}
            <TextField
            variant="standard"
            label="Check In"
            disabled 
            defaultValue="Add dates"
            multiline
            className="search-input"
            />
            <span>
                <Divider orientation='vertical' className='divi'/>
            </span>
            {/* checkout */}
            <TextField
            variant="standard"
            label="Check Out"
            disabled
            defaultValue="Add dates"
            multiline
            className="search-input"
            />
            <span><Divider orientation='vertical' className='divi'/></span>
            {/* guests */}
            <TextField
            variant="standard"
            label="Guests"
            disabled
            defaultValue="Add guests"
            multiline
            className="search-input"

            />
            <SearchIcon id='search-icon'/>
            </Box>
            </Container>
    
    )
}


export default SearchBar;