import React from "react";
import ButtonAppBar from "../AppBar/ButtonAppBar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./LearningMaterials.css";
import infograph1 from "./Infographs/infograph1.png";
import infograph2 from "./Infographs/infograph2.png";
import Link from "@mui/material/Link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const LearningMaterials = () => {
  return (
    <div className="learningmats">
      <ButtonAppBar />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 3 },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs="auto">
            <Item>
              <h3>What is Recycling?</h3>
              <p>
                Recycling is the process of collecting, processing, and
                transforming materials into new products to prevent the waste of
                potentially useful resources. It helps reduce the consumption of
                raw materials, energy usage, and pollution.
              </p>
            </Item>
          </Grid>
          <Grid item xs="auto">
            <Item>
              <h3>Types of Materials That Can Be Recycled:</h3>
              <li>
                <b>Paper and Cardboard:</b> Newspapers, magazines, cardboard
                boxes, etc.
              </li>
              <li>
                <b>Plastics:</b> PET bottles, HDPE containers, PVC, etc.
              </li>
              <li>
                <b>Glass:</b> Bottles, jars, etc.
              </li>
              <li>
                <b>Metals:</b> Aluminum cans, steel containers, etc.
              </li>
            </Item>
          </Grid>
          <Grid item xs="auto">
            <Item>
              <h3>Benefits of Recycling:</h3>
              <li>
                <b>Conservation of Resources:</b> Recycling helps conserve
                natural resources by reducing the need for raw materials.
              </li>
              <li>
                <b>Energy Savings:</b> The production of recycled materials
                often requires less energy compared to making products from raw
                materials.
              </li>
              <li>
                <b>Reduced Pollution:</b> Recycling reduces pollution associated
                with the extraction and processing of raw materials.
              </li>
            </Item>
          </Grid>
          <Grid item xs="auto">
            <Item>
              <img
                src={infograph1}
                style={{ width: "800px", height: "auto" }}
                alt="Recycling Example"
                className="image-example"
              />
            </Item>
            <Grid item xs="auto">
              <Item>
                <h3>Tips about recycling</h3>
                <li>
                  <b>Know Your Local Recycling Guidelines:</b>
                  <p>
                    Understand what materials are accepted for recycling in your
                    area. Different regions have different recycling
                    capabilities.
                  </p>
                </li>

                <li>
                  <b>Reduce Contamination:</b>
                  <p>
                    Rinse or clean recyclables before placing them in the
                    recycling bin to reduce contamination.
                  </p>
                </li>
                <li>
                  <b>Recycle Electronics Properly:</b>
                  <p>
                    Dispose of electronic waste responsibly by taking it to
                    designated e-waste recycling facilities.
                  </p>
                </li>
                <li>
                  <b>Reuse and Repurpose:</b>
                  <p>
                    Before discarding items, consider whether they can be reused
                    or repurposed. This helps to reduce waste.
                  </p>
                </li>
              </Item>
            </Grid>
          </Grid>

          <Grid item xs="auto">
            <Item>
              <img
                src={infograph2}
                style={{ width: "600px", height: "auto" }}
                alt="Recycling Example"
                className="image-example"
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Grid item xs="auto">
        <Item>
          <h3>
            Want to learn more about recycling? Click the links bellow to watch
            informative videos about recycling!
          </h3>
          <Item>
            <b>How recycling works? - </b>
            <Link
              href="https://www.youtube.com/watch?v=b7GMpjx2jDQ"
              underline="hover"
            >
              {"https://www.youtube.com/watch?v=b7GMpjx2jDQ"}
            </Link>
          </Item>
          <Item>
            <b>What Happens to Your Recycling After It's Collected? - </b>
            <Link
              href="https://www.youtube.com/watch?v=s4LZwCDaoQM"
              underline="hover"
            >
              {"https://www.youtube.com/watch?v=s4LZwCDaoQM"}
            </Link>
          </Item>
        </Item>
      </Grid>
    </div>
  );
};

export default LearningMaterials;
