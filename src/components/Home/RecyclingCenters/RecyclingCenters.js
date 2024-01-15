import { useState } from "react";
import ButtonAppBar from "../AppBar/ButtonAppBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import * as React from "react";
import Button from "@mui/material/Button";
import { AuthData } from "../../AuthWrapper";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

function RecyclingCenters() {
  const { allCenters } = AuthData();
  const [query, setQuery] = useState("");
  const [sorting, setSorting] = useState({ column: null, order: "desc" });

  const handleSort = (column) => {
    setSorting((prevSorting) => ({
      column,
      order:
        prevSorting.column === column && prevSorting.order === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const handleReset = () => {
    setQuery("");
    setSorting({ column: null, order: "desc" });
    setMaterialName([]);
  };

  const handleChangeMaterial = (event) => {
    const {
      target: { value },
    } = event;
    setMaterialName(typeof value === "string" ? value.split(",") : value);
  };
  const [materialName, setMaterialName] = React.useState([]);

  const materialsForm = [
    "Plastic",
    "Glass",
    "Aluminum",
    "Metal",
    "Paper & Cardboard",
    "Electronic Waste",
  ];

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

  const valueQuery = (str) => str.toLowerCase().includes(query);
  const filteredCenters = allCenters
    .filter(
      (center) =>
        center.name.toLowerCase().includes(query) ||
        center.city.toLowerCase().includes(query) ||
        center.county.toLowerCase().includes(query) ||
        center.centerAddress.toLowerCase().includes(query) ||
        (center.materials &&
          (Array.isArray(center.materials)
            ? center.materials.some(valueQuery)
            : center.materials.split(",").some(valueQuery))) ||
        center.hours.toLowerCase().includes(query)
    )
    .filter(
      (center) =>
        materialName.length === 0 ||
        (center.materials &&
          materialName.every((str) =>
            center.materials
              .split(",")
              .some((material) =>
                material.toLowerCase().includes(str.toLowerCase())
              )
          ))
    )
    .sort((a, b) => {
      const compareValue = a[sorting.column] > b[sorting.column] ? 1 : -1;
      return sorting.order === "asc" ? compareValue : compareValue * -1;
    });
  console.log(materialName);
  return (
    <div className="app">
      <ButtonAppBar />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 3 },
        }}
      >
        <FormControl sx={{ m: 1.5, width: 500 }}>
          <InputLabel id="demo-multiple-checkbox-label">Materials</InputLabel>
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
          id="standard-basic"
          label="Search"
          color="error"
          margin="normal"
          variant="standard"
          className="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <Button variant="text" color="inherit" onClick={handleReset}>
          Reset
        </Button>
      </Box>

      <TableContainer className="tablecontainer" component={Paper}>
        {filteredCenters.length > 0 ? (
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Button
                    variant="text"
                    color="inherit"
                    onClick={() => handleSort("name")}
                  >
                    Name
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="text"
                    color="inherit"
                    onClick={() => handleSort("location")}
                  >
                    Location
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="text"
                    color="inherit"
                    onClick={() => handleSort("materials")}
                  >
                    materials
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="text"
                    color="inherit"
                    onClick={() => handleSort("hours")}
                  >
                    Open Hours
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCenters.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{`${row.county}, ${row.city}, ${row.centerAddress}`}</TableCell>
                  <TableCell align="right">{row.materials}</TableCell>
                  <TableCell align="right">{row.hours}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p align="center">No Recycling Centers Available</p>
        )}
      </TableContainer>
    </div>
  );
}

export default RecyclingCenters;
