import React, { useState } from "react";
import "../../styles/LandingPage.css";
//material ui components
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// importing images
import TentImg from "../images/tent-in-desert-1128.webp";
import HostingImg from "../images/airbnb-hosting.webp";
import ToDoTrip from "../images/things-to-do-home-788.webp";
import ToDoHome from "../images/things-to-do-trip-788.webp";
import BooneImg from "../images/boone.webp";
import GaitlinImg from "../images/gaitlin.webp";
import MyrtleBeachImg from "../images/myrtle-beach.webp";
import BrysonCityImg from "../images/bryson-city.webp";
import GiftCardImg from "../images/gift-cards.webp";

const LandingPage = () => {
  const [value, setValue] = useState("1");

  return (
    <Container id="content">
      {/* top section */}
      <Container id="top-container">
        <Container id="top-inner-container">
          <img src={TentImg} alt="" id="tent-img" />
          <h1 id="main-header">
            Not sure where to go? Perfect.{"\n"}
            <Button variant="contained" id="top-btn">
              <span id="text">I'm flexible.</span>
            </Button>
          </h1>
        </Container>
      </Container>

      {/* gift card section */}
      <Container id="gift-card-container">
        <Container id="gift-card-inner-container">
          <img src={GiftCardImg} alt="" id="gift-card-img" />
          <Box id="test1">
            <h2 id="gift-card-header1">Introducing</h2>
            <h2 id="gift-card-header2">
              Airbnb {"\n"} gift cards {"\n"}
              <Button variant="contained" id="shop-btn">
                Shop Now
              </Button>
            </h2>
          </Box>
        </Container>
      </Container>

      {/* inspiration for next trip section */}
      <Container id="next-trip-container">
        <h2 id="inspiration-header">Inspiration for your next trip</h2>
        <Grid
          container
          id='card-container'
          sx={{ justifyContent: "space-evenly", padding: "0 1% 0 1%" }}
        >
          <Card sx={{ maxWidth: 350, borderRadius: "15px" }} className='card'>
            <CardMedia width="300" component="img" alt="" image={BooneImg} />
            <CardContent
              sx={{ height: "200px", backgroundColor: "rgb(222, 49, 81)" }}
              className='card-content'
            >
              <h2 className="card-header">Boone</h2>
              <Typography className="card-text">83 miles away</Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 350, borderRadius: "15px" }} className='card'>
            <CardMedia width="300" component="img" alt="" image={GaitlinImg} />
            <CardContent
              sx={{ height: "200px", backgroundColor: "rgb(204, 45, 74)" }}
              className='card-content'
            >
              <h2 className="card-header">Gaitlinburg</h2>
              <Typography className="card-text">154 miles away</Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 350, borderRadius: "15px" }} className='card'>
            <CardMedia
              width="300"
              component="img"
              alt=""
              image={MyrtleBeachImg}
            />
            <CardContent
              sx={{ height: "200px", backgroundColor: "rgb(217, 59, 48)" }}
              className='card-content'
            >
              <h2 className="card-header">Myrtle Beach</h2>
              <Typography className="card-text">154 miles away</Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 350, borderRadius: "15px" }} className='card'>
            <CardMedia
              width="300"
              component="img"
              alt=""
              image={BrysonCityImg}
            />
            <CardContent
              sx={{ height: "200px", backgroundColor: "rgb(188, 26, 110)" }}
              className='card-content'
            >
              <h2 className="card-header">Bryson City</h2>
              <Typography className="card-text">147 miles away</Typography>
            </CardContent>
          </Card>
        </Grid>
        </Container>

        <Container id="middle-container">
          <Container id="middle-inner-container">
            {/* Discover airbnb experiences section */}
            <Grid container xs={12}>
              <Grid item xs={12}>
                {/* 2 photos side by side */}
                <Box id="todo-container">
                  <h2 id="discover-header">Discover Airbnb Experiences</h2>

                  <Box sx={{ display: "flex" }} id="todo-inner-container">
                    <img src={ToDoHome} alt="" className="things-to-do-img" />
                    <h2 id="todo-home-header">
                      Things to do {"\n"} from home
                      <div>
                        <Button
                          variant="contained"
                          backgroundColor="#FFFFFF"
                          className="discover-buttons"
                        >
                          Experiences
                        </Button>
                      </div>
                    </h2>

                    <img src={ToDoTrip} alt="" className="things-to-do-img" />
                    <h2 id="todo-trip-header">
                      Things to do {"\n"} on your trip
                      <div>
                        <Button
                          variant="contained"
                          backgroundColor="#FFFFFF"
                          className="discover-buttons"
                        >
                          Online Experiences
                        </Button>
                      </div>
                    </h2>
                  </Box>
                </Box>
                {/* one photo across the bottom cols */}
                <Grid>
                  <Box id="hosting-img-container">
                    <Grid item xs={12} id="hosting-img-inner-container">
                      <img src={HostingImg} alt="" id="hosting-img" />
                      <h2 id="hosting-header">
                        Questions {"\n"}about {"\n"} hosting?
                        <div>
                          <Button
                            variant="contained"
                            backgroundColor="#FFFFFF"
                            className="discover-buttons"
                            id='host-btn'
                          >
                            Ask a superhost
                          </Button>
                        </div>
                      </h2>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Container />

            {/* future getaways section */}
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
              id="future-getaway-container"
            >
              <Container id="future-getaway-inner-container">
                <TabContext value={value}>
                  <Box>
                    <h2 id="future-getaway-header">
                      Inspiration for future getaways
                    </h2>
                    <Tabs
                      value={value}
                      textColor="#222222"
                      indicatorColor="secondary"
                      sx={{ borderBottom: 1, borderColor: "divider" }}
                    >
                      <Tab
                        label="Destinations for arts & culture"
                        className="getaway-tab"
                        value="1"
                      />
                      <Tab
                        label="Destinations for outdoor adventure"
                        className="getaway-tab"
                        value="2"
                      />
                      <Tab
                        label="Mountain Cabins"
                        className="getaway-tab"
                        value="3"
                      />
                      <Tab
                        label="Beach destinations"
                        className="getaway-tab"
                        value="4"
                      />
                      <Tab
                        label="Popular destinations"
                        className="getaway-tab"
                        value="5"
                      />
                      <Tab
                        label="Unique Stays"
                        className="getaway-tab"
                        value="6"
                      />
                    </Tabs>
                    <Grid container spacing={1} id="tabpanel-container">
                      {/* col 1 */}
                      <Grid item xs={3} className="tabpanel-inner-container">
                        <TabPanel value="1" className="tabpanel">
                          Phoenix
                          <p>Arizona</p>
                        </TabPanel>
                        <TabPanel value="1" className="tabpanel">
                          San Francisco
                          <p> California</p>
                        </TabPanel>
                        <TabPanel value="1" className="tabpanel">
                          Keswick
                          <p>England</p>
                        </TabPanel>
                      </Grid>
                      {/* col 2 */}
                      <Grid item xs={3} className="tabpanel-inner-container">
                        <TabPanel value="1" className="tabpanel">
                          Hot Springs
                          <p> Arkansas</p>
                        </TabPanel>
                        <TabPanel value="1" className="tabpanel">
                          Barcelona
                          <p>Catalonia</p>
                        </TabPanel>
                        <TabPanel value="1" className="tabpanel">
                          London
                          <p>England</p>
                        </TabPanel>
                      </Grid>
                      {/* col 3 */}
                      <Grid item xs={3} className="tabpanel-inner-container">
                        <TabPanel value="1" className="tabpanel">
                          Los Angeles
                          <p>California</p>
                        </TabPanel>
                        <TabPanel value="1" className="tabpanel">
                          Prague
                          <p>Czechia</p>
                        </TabPanel>
                        <TabPanel value="1" className="tabpanel">
                          Scarborough
                          <p>England</p>
                        </TabPanel>
                      </Grid>
                      {/* col 4 */}
                      <Grid item xs={3} className="tabpanel-inner-container">
                        <TabPanel value="1" className="tabpanel">
                          San Diego
                          <p>California</p>
                        </TabPanel>
                        <TabPanel value="1" className="tabpanel">
                          Washington
                          <p>District of Columbia</p>
                        </TabPanel>
                        <TabPanel value="1" className="tabpanel">
                          Show More
                        </TabPanel>
                      </Grid>
                    </Grid>
                  </Box>
                </TabContext>
              </Container>
            </Container>
          </Container>
        </Container>
    </Container>

    // </Container>
  );
};

export default LandingPage;
