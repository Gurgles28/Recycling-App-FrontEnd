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
import { AuthData } from "../../../Routes&Navigation/AuthWrapper";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const RecyclingTracking = () => {
  const { user } = AuthData();
  const location = useLocation();
  const { tableRowMats } = location.state;
  const materialsArray = tableRowMats ? tableRowMats.split(", ") : [];

  const materialPointValues = {
    Plastic: 5,
    Aluminum: 10,
    Metal: 15,
    Glass: 8,
    "Paper & Cardboard": 2,
    "Electronic Waste": 20,
  };

  const [materialStates, setMaterialStates] = useState(
    materialsArray.map((material) => ({
      material: material,
      amount: 0,
      unit: 0,
    }))
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

  const handleContribute = async () => {
    try {
      const overallPoints = materialStates.reduce(
        (total, materialState) =>
          total +
          (materialState.amount *
            materialState.unit *
            materialPointValues[materialState.material]) /
            5,
        0
      );
      const response = await axios.post(
        "http://localhost:8080/api/v1/users/updatePoints",
        null,
        {
          params: {
            email: user.email,
            newPoints: overallPoints,
          },
        }
      );
      alert(response.data);
      alert("");
    } catch (error) {
      alert("Invalid Input. Numbers-Only");
    }
  };

  return (
    <div>
      <ButtonAppBar />
      <div className="containerC">
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
                  {(materialStates[index].amount *
                    materialStates[index].unit *
                    materialPointValues[material]) /
                    5}
                </h4>
              </FormControl>
            </Container>
          </Box>
        ))}

        <h3 align="center">
          Total Recycling Points:
          {materialStates.reduce(
            (total, materialState) =>
              total +
              (materialState.amount *
                materialState.unit *
                materialPointValues[materialState.material]) /
                5,
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
      <div>
        <TableContainer className="tablecontainer" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {materialStates.map((item) => (
                  <TableCell>{item.material} Contribution</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {materialStates.map(() => (
                  <TableCell component="th" scope="row">
                    Contribution Points
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer className="tablecontainer" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {materialStates.map((item) => (
                  <TableCell>{item.material} Environmantal Impact</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {materialStates.map(() => (
                  <TableCell component="th" scope="row">
                    Environmantal Impact
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default RecyclingTracking;
