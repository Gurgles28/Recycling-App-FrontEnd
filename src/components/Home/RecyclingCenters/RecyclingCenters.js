import { useState } from "react";
import ButtonAppBar from "../AppBar/ButtonAppBar";
import "./RecyclingCenters.css";
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
import { useAutocomplete } from "@mui/base/useAutocomplete";
import CheckIcon from "@mui/icons-material/Check";
import Root from "./DropDownMenuComponents/Root";
import Label from "./DropDownMenuComponents/Label";
import InputWrapper from "./DropDownMenuComponents/InputWrapper";
import StyledTag from "./DropDownMenuComponents/StyledTag";
import Listbox from "./DropDownMenuComponents/Listbox";
import Button from "@mui/material/Button";

function RecyclingCenters() {
  const rows = [
    {
      name: "Center A",
      location: "Location A",
      materials: "Plastic",
      hours: "8 AM - 5 PM",
    },
    {
      name: "Center B",
      location: "Location B",
      materials: "Glass",
      hours: "8 AM - 6 PM",
    },
    {
      name: "Center C",
      location: "Location C",
      materials: "Aluminum",
      hours: "11 AM - 7 PM",
    },
    {
      name: "Center D",
      location: "Location D",
      materials: "Metal",
      hours: "11 AM - 10 PM",
    },
    {
      name: "Center E",
      location: "Location E",
      materials: "Paper & Cardboard",
      hours: "10 AM - 9 PM",
    },
    {
      name: "Center F",
      location: "Location F",
      materials: "Electronic Waste",
      hours: "10 AM - 5 PM",
    },
  ];

  const materials = [
    "Plastic",
    "Glass",
    "Aluminum",
    "Metal",
    "Paper & Cardboard",
    "Electronic Waste",
  ];

  const [query, setQuery] = useState("");
  const [sorting, setSorting] = useState({ column: null, order: "desc" });

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    multiple: true,
    options: materials,
    getOptionLabel: (option) => option.material,
  });

  const handleSort = (column) => {
    setSorting((prevSorting) => ({
      column,
      order:
        prevSorting.column === column && prevSorting.order === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const filteredRows = rows
    .filter(
      (asd) =>
        asd.name.toLowerCase().includes(query) ||
        asd.location.toLowerCase().includes(query) ||
        asd.materials.toLowerCase().includes(query) ||
        asd.hours.toLowerCase().includes(query)
    )
    .filter((asd) => value.every((str) => str.includes(asd.materials)))
    .sort((a, b) => {
      const compareValue = a[sorting.column] > b[sorting.column] ? 1 : -1;
      return sorting.order === "asc" ? compareValue : compareValue * -1;
    });

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
        <Root>
          <div {...getRootProps()}>
            <Label {...getInputLabelProps()}>Filter Materials</Label>
            <InputWrapper
              ref={setAnchorEl}
              className={focused ? "focused" : ""}
            >
              {value.map((option, index) => (
                <StyledTag label={option} {...getTagProps({ index })} />
              ))}
              <input {...getInputProps()} />
            </InputWrapper>
          </div>
          {groupedOptions.length > 0 ? (
            <Listbox {...getListboxProps()}>
              {groupedOptions.map((option, index) => (
                <li {...getOptionProps({ option, index })}>
                  <span>{option}</span>
                  <CheckIcon fontSize="small" />
                </li>
              ))}
            </Listbox>
          ) : null}
        </Root>

        <TextField
          id="standard-basic"
          label="Search"
          color="error"
          margin="normal"
          variant="standard"
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <Button
          variant="text"
          color="inherit"
          onClick={() => window.location.reload(false)}
        >
          Reset
        </Button>
      </Box>

      <TableContainer className="tablecontainer" component={Paper}>
        {filteredRows.length > 0 ? (
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
                    material
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
              {filteredRows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.location}</TableCell>
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
