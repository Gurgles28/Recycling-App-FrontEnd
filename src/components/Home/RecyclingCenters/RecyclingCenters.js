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
import DropDownMenu from "./DropDownMenu";

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
      hours: "9 AM - 6 PM",
    },
    {
      name: "Center C",
      location: "Location C",
      materials: "Aluminum",
      hours: "9 AM - 7 PM",
    },
    {
      name: "Center D",
      location: "Location D",
      materials: "Metal",
      hours: "8 AM - 8 PM",
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

  const [query, setQuery] = useState("");

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
        <DropDownMenu />
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
      </Box>

      <TableContainer className="tablecontainer" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell align="right">LOCATION</TableCell>
              <TableCell align="right">MATERIAL</TableCell>
              <TableCell align="right">OPEN HOURS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .filter(
                (asd) =>
                  asd.name.toLowerCase().includes(query) ||
                  asd.location.toLowerCase().includes(query) ||
                  asd.materials.toLowerCase().includes(query) ||
                  asd.hours.toLowerCase().includes(query)
              )
              .map((row) => (
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
      </TableContainer>
    </div>
  );
}

export default RecyclingCenters;
