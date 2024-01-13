import * as React from "react";
import ButtonAppBar from "../../AppBar/ButtonAppBar";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import counties from "./counties.json";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const CreateRecyclingCenters = () => {
  const [county, setCounty] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [materialsToRecycle, setMaterialsToRecycle] = useState([]);
  const [centerName, setCenterName] = useState("");
  const [workingHours, setWorkingHours] = useState("");

  const handleSave = () => {
    if (
      !county ||
      !city ||
      !address ||
      materialsToRecycle.length === 0 ||
      !centerName ||
      !workingHours
    ) {
      alert("All fields are mandatory. Please fill them out.");
      return;
    }
  };

  const newCenter = {
    county,
    city,
    address,
    materialsToRecycle,
    centerName,
    workingHours,
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const materialsForm = [
    "Plastic",
    "Glass",
    "Aluminum",
    "Metal",
    "Paper & Cardboard",
    "Electronic Waste",
  ];

  const handleChangeCounty = (event) => {
    setCounty(event.target.value);
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleChangeMaterial = (event) => {
    const {
      target: { value },
    } = event;
    setMaterialName(typeof value === "string" ? value.split(",") : value);
  };

  const [materialName, setMaterialName] = React.useState([]);

  return (
    <div>
      <ButtonAppBar />
      <div className="container">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 5, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Container fixed>
            <FormControl sx={{ m: 1.5, width: 385 }}>
              <InputLabel id="county-label">County</InputLabel>
              <Select
                labelId="county-label"
                id="county-select"
                value={county}
                label="County"
                onChange={handleChangeCounty}
              >
                {counties.map((county) => (
                  <MenuItem key={county.id} value={county.county}>
                    {county.county}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1.5, width: 385 }}>
              <InputLabel id="city-label">City</InputLabel>
              <Select
                labelId="city-label"
                id="city-select"
                value={city}
                label="City"
                onChange={handleChangeCity}
                placeholder="Select County First"
              >
                {counties
                  .find((item) => item.county === county)
                  ?.cities?.map((city) => (
                    <MenuItem key={city.name} value={city.name}>
                      {city.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <TextField
              sx={{ m: 1.5, width: 385 }}
              id="outlined-basic"
              label="Address"
              variant="outlined"
            />
            <FormControl sx={{ m: 1.5, width: 385 }}>
              <InputLabel id="demo-multiple-checkbox-label">
                Materials
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={materialName}
                onChange={handleChangeMaterial}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {materialsForm.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={materialName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              sx={{ m: 1.5, width: 385 }}
              id="centerName"
              label="Center Name"
              variant="outlined"
              fullWidth
              onChange={(e) => setCenterName(e.target.value)}
            />
            <TextField
              sx={{ m: 1.5, width: 385 }}
              id="workingHours"
              label="Working Hours"
              variant="outlined"
              fullWidth
              onChange={(e) => setWorkingHours(e.target.value)}
            />

            <Button
              sx={{ m: 4.8, width: 330 }}
              variant="outlined"
              color="inherit"
            >
              Save
            </Button>
          </Container>
        </Box>
      </div>
    </div>
  );
};

export default CreateRecyclingCenters;
