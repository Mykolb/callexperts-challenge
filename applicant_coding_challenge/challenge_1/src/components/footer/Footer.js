import "../../styles/Footer.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
// importing icons
import LanguageIcon from "@mui/icons-material/Language";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer>
      <Container
        sx={{ display: "flex", backgroundColor: "#F7F7F7", textAlign: "left" }}
        id="footer-top"
      >
        <Box id="support" className="footer-box">
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Safety Information</li>
            <li>Cancellation Options</li>
            <li>Our Covid-19 Response</li>
            <li>Supporting people with disabilities</li>
            <li>Report a neighborhood concern</li>
          </ul>
        </Box>

        <Box id="community" className="footer-box">
          <h3>Community</h3>
          <ul>
            <li>Airbnb.org: disaster relief housing</li>
            <li>Support Afghan refugees</li>
            <li>Celebrating diversity & belonging</li>
            <li>Combating discrimination</li>
          </ul>
        </Box>

        <Box id="hosting" className="footer-box">
          <h3>Hosting</h3>
          <ul>
            <li>Try hosting</li>
            <li>AirCover: protection for Hosts</li>
            <li>Explore hosting resources</li>
            <li>Visit our community forum</li>
            <li>How to host responsibly</li>
          </ul>
        </Box>

        <Box id="about" className="footer-box">
          <h3>About</h3>
          <ul>
            <li>Newsroom</li>
            <li>Learn about new features</li>
            <li>Letter from our founders</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Airbnb Luxe</li>
          </ul>
        </Box>
      </Container>
      {/* line break goes here */}
      <Divider sx={{ maxWidth: "90%", margin: "2% auto" }}></Divider>

      <Container id="footer-bottom">
        <Box
          id="copyright-inner-container"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box id="list-one">
            <h4>© 2021 Airbnb, Inc.</h4>
            <h4>Privacy</h4>
            <h4>Terms</h4>
            <h4>Sitemap</h4>
          </Box>
          <Box id="list-two">
            <LanguageIcon />
            <h4> English (US)</h4>
            <h4>$ USD</h4>
            <h4 className='social-icons'>
              {" "}
              <FacebookOutlinedIcon  />{" "}
            </h4>
            <h4 className='social-icons'>
              <TwitterIcon  />
            </h4>
            <h4 className='social-icons' >
              <InstagramIcon />
            </h4>
          </Box>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
