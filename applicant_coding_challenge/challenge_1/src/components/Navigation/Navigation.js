import SearchBar from "../search bar/SearchBar";
import AppBar from "@mui/material/AppBar";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from '@mui/material/Toolbar';
// icons
import Avatar from "@mui/material/Avatar";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import "../../styles/Navigation.css";





const Navigation = () => {

  return (

    <AppBar id="nav-container">
      
      <Toolbar>
      <Grid container>
        <Grid item xs={4} id="nav-container1">
          <MenuItem>Logo goes here</MenuItem>
        </Grid>
        <Grid item xs={4} id="nav-container2">
          <MenuItem className="menu-links">Place to Stay</MenuItem>
          <MenuItem className="menu-links">Experiences</MenuItem>
          <MenuItem className="menu-links">Online Experiences</MenuItem>
        </Grid>
        <Grid xs={4} id="nav-container3">
          <MenuItem className="menu-links-3">Become a Host</MenuItem>
          <MenuItem className="menu-links-3">
            <LanguageIcon />
          </MenuItem>
          <Box id="menu-icons">
            <MenuItem>
              <MenuIcon id="hamburger-icon" />
              <Avatar />
            </MenuItem>
          </Box>
        </Grid>
        <SearchBar />
      </Grid>
      </Toolbar>
    
    </AppBar>
  );
};

export default Navigation;
