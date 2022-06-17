import React from "react";
import { FadeIn } from "../../helperFunctions/FadeInAnimation";
import HomePricingCard from "../../molecules/homePricingCard/HomePricingCard";
import GppBadIcon from "@mui/icons-material/GppBad";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <FadeIn>
          <header className="section-header">
            <h2>Our Payment Plans</h2>
            <p>Our Pricing</p>
          </header>
        </FadeIn>

        <div className="row gy-4 ">
          <HomePricingCard
            styles={{ color: "#4DB5A3" }}
            plan={"Basic Plan"}
            amount={"0"}
            benefit1={"Vehicle Theft Report"}
            benefit2={"Free Car Safety Tips"}
            benefit3={"Access to our blog"}
            benefit4={"Access to our database"}
            src={
              "https://previews.123rf.com/images/jemastock/jemastock1711/jemastock171113569/90255474-car-gps-tracker-technology-icon-vector-illustration-graphic-design.jpg"
            }
            icon={
              <GppBadIcon
                sx={{
                  color: "red",
                  position: "absolute",
                  right: "1em",
                  fontFamily: "Merriweather",
                }}
              />
            }
            icon2={
              <GppBadIcon
                sx={{
                  color: "red",
                  position: "absolute",
                  right: "1em",
                  fontFamily: "Merriweather",
                }}
              />
            }
            icon3={
              <GppBadIcon
                sx={{
                  color: "red",
                  position: "absolute",
                  right: "1em",
                  fontFamily: "Merriweather",
                }}
              />
            }
          />
          <HomePricingCard
            styles={{ color: "#14A800" }}
            plan={"Standard Plan"}
            amount={"10,000"}
            benefit1={"Vehicle Theft Report"}
            benefit2={"Free Car Safety Tips"}
            benefit3={"Access to our blog"}
            benefit4={"Access to our database"}
            src={
              "https://cdn.w600.comps.canstockphoto.com/gps-car-tracking-eps-vector_csp59597388.jpg"
            }
            icon={
              <CheckCircleIcon
                color="success"
                sx={{
                  position: "absolute",
                  right: "1em",
                  fontFamily: "Merriweather",
                }}
              />
            }
            icon2={
              <GppBadIcon
                sx={{
                  color: "red",
                  position: "absolute",
                  right: "1em",
                  fontFamily: "Merriweather",
                }}
              />
            }
            icon3={
              <GppBadIcon
                sx={{
                  color: "red",
                  position: "absolute",
                  right: "1em",
                  fontFamily: "Merriweather",
                }}
              />
            }
          />
          <HomePricingCard
            styles={{ color: "#FF901C" }}
            plan={"Gold Plan"}
            amount={"50,000"}
            benefit1={"Vehicle Theft Report"}
            benefit2={"Free Car Safety Tips"}
            benefit3={"Access to our blog"}
            benefit4={"Access to our database"}
            src={"https://media.istockphoto.com/vectors/-vector-id1149902500"}
            icon={
              <CheckCircleIcon
                color="success"
                sx={{
                  position: "absolute",
                  right: "1em",
                  fontFamily: "Merriweather",
                }}
              />
            }
            icon2={
              <CheckCircleIcon
                color="success"
                sx={{
                  position: "absolute",
                  right: "1em",
                  fontFamily: "Merriweather",
                }}
              />
            }
            icon3={
              <GppBadIcon
                sx={{
                  color: "red",
                  position: "absolute",
                  right: "1em",
                  fontFamily: "Merriweather",
                }}
              />
            }
          />
          <HomePricingCard
            styles={{ color: " #B715E0" }}
            plan={"Platinum Plan"}
            amount={"100,000"}
            benefit1={"Vehicle Theft Report"}
            benefit2={"Free Car Safety Tips"}
            benefit3={"Access to our blog"}
            benefit4={"Access to our database"}
            src={
              "https://cdn1.vectorstock.com/i/1000x1000/44/85/autonomous-car-technology-vector-22414485.jpg"
            }
            icon={
              <CheckCircleIcon
                color="success"
                sx={{
                  position: "absolute",
                  right: "1em",
                  fontFamily: "Merriweather",
                }}
              />
            }
            icon2={
              <CheckCircleIcon
                color="success"
                sx={{
                  position: "absolute",
                  right: "1em",
                  fontFamily: "Merriweather",
                }}
              />
            }
            icon3={
              <CheckCircleIcon
                color="success"
                sx={{
                  position: "absolute",
                  right: "1em",
                  fontFamily: "Merriweather",
                }}
              />
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Pricing;
