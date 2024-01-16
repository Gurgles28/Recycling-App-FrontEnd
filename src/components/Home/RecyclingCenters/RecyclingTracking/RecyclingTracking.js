import * as React from "react";
import ButtonAppBar from "../../AppBar/ButtonAppBar";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const RecyclingTracking = () => {
  const location = useLocation();
  const { tableRowMats } = location.state;
  const materialsArray = tableRowMats ? tableRowMats.split(", ") : [];
  const [materialStates, setMaterialStates] = useState(
    materialsArray.map(() => ({ amount: 0, unit: 0 }))
  );

  const handleAmountChange = (index, value) => {
    setMaterialStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index].amount = value;
      return newStates;
    });
  };

  const handleUnitChange = (index, value) => {
    setMaterialStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index].unit = value;
      return newStates;
    });
  };

  const handleContribute = () => {
    const overallTotalPoints = materialStates.reduce(
      (total, materialState) =>
        total + materialState.amount * materialState.unit,
      0
    );
  };

  return (
    <div>
      <ButtonAppBar />
      <div className="container">
        {materialsArray.map((material, index) => (
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 3, width: "85ch" },
              flexDirection: "row",
              alignItems: "center",
            }}
            noValidate
            autoComplete="off"
          >
            <h3>{material}</h3>
            <Container fixed>
              <TextField
                sx={{ m: 0.5, width: 100 }}
                id="materialRecycle"
                label="Amount"
                variant="standard"
                onChange={(e) => handleAmountChange(index, e.target.value)}
              />
              <FormControl variant="standard" sx={{ m: 0.5, minWidth: 50 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Unit
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Age"
                  onChange={(e) => handleUnitChange(index, e.target.value)}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={100}>Kg</MenuItem>
                  <MenuItem value={10}>Piece</MenuItem>
                  <MenuItem value={1}>Dkg</MenuItem>
                  <MenuItem value={0.1}>G</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard" sx={{ m: 0.8, minWidth: 10 }}>
                <h4>
                  Points:{" "}
                  {materialStates[index].amount * materialStates[index].unit}
                </h4>
              </FormControl>
            </Container>
          </Box>
        ))}

        <h3 align="center">
          Total Recycling Points:
          {materialStates.reduce(
            (total, materialState) =>
              total + materialState.amount * materialState.unit,
            0
          )}
        </h3>
        <Button
          sx={{ m: 4.8, width: 460 }}
          variant="outlined"
          color="inherit"
          onClick={handleContribute}
        >
          Contribute
        </Button>
      </div>
    </div>
  );
};

export default RecyclingTracking;
