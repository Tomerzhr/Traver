import styled from "styled-components";
import { Box, IconButton } from "@mui/material";
import NavLink from "../../components/NavLink";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "../Header/NavBar/Logo/Logo";

const FooterContainer = styled.footer`
  background-color: #f4f4f4;
  padding: 0 50px;
  .logo {
    padding: 20px 0;
  }
  svg {
    width: 18px;
    color: #f3711b;
  }
  h3 {
    font-size: 0.8rem;
  }
  h5 {
    font-weight: 300;
    color: #686868;
  }
  h6 {
    font-size: 0.7rem;
  }
  hr {
    border: 0.5px solid #9e9a7a31;
    width: 100%;
  }

  .context {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
  }
  .footerNav {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 15vw;
    padding: 20px 0;

    a {
      line-height: 1.2rem;
      text-decoration: none;
      :hover {
        transform: translateX(2px);
        color: #f3711b;
      }
    }
  }
  p {
    text-align: start;
    font-size: 0.6rem;
    font-weight: 300;
    padding: 5px 0;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div className="box">
        <div className="logo">
          <Logo width="20px" height="20px" />
        </div>

        <Box className="context">
          <hr />
          <Box className="footerNav" sx={{ justifyContent: { xs: "space-around", md: "normal" } }}>
            <div className="box1">
              <h6>About</h6>
              <NavLink to="/">About Us</NavLink>
              <NavLink to="/">Features</NavLink>
              <NavLink to="/">New</NavLink>
              <NavLink to="/">Careers</NavLink>
            </div>
            <div className="box2">
              <h6>Company</h6>
              <NavLink to="/">Our Team</NavLink>
              <NavLink to="/">Partners with Us</NavLink>
              <NavLink to="/">FAQ</NavLink>
              <NavLink to="/">Blog</NavLink>
            </div>
            <div className="box3">
              <h6>Support</h6>
              <NavLink to="/">Account</NavLink>
              <NavLink to="/">Support Center</NavLink>
              <NavLink to="/">Feedback</NavLink>
              <NavLink to="/">Terms of Service</NavLink>
            </div>
            <div className="box3">
              <h6>Social Media</h6>
              <IconButton size="small">
                <FacebookIcon />
              </IconButton>
              <IconButton size="small">
                <InstagramIcon />
              </IconButton>
              <IconButton size="small">
                <TwitterIcon />
              </IconButton>
            </div>
          </Box>
          <hr />
        </Box>
        <p>© 2024 All rights reserved</p>
      </div>
    </FooterContainer>
  );
}
