import { useEffect, useState } from "react";
import axios from "axios";
import ButtonAppBar from "../AppBar/ButtonAppBar";
import "./RecyclingCenters.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function RecyclingCenters() {
  const rows = [
    {
      name: "Center A",
      location: "Location A",
      materials: ["Plastic", "Metal"],
      hours: "8 AM - 5 PM",
    },
    {
      name: "Center B",
      location: "Location B",
      materials: ["Glass", "Paper & Cardboard"],
      hours: "9 AM - 6 PM",
    },
    {
      name: "Center C",
      location: "Location C",
      materials: ["Aluminum", "Electronic waste"],
      hours: "9 AM - 7 PM",
    },
  ];

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3000?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  return (
    <div className="app">
      <ButtonAppBar />
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <TableContainer component={Paper}>
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
              .filter((asd) => asd.name.toLowerCase().includes(query))
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
      {/* {recyclingCenters
        .filter((asd) => asd.name.toLowerCase().includes(query))
        .map((recyclingCenters) => (
          <li className="listItem" key={recyclingCenters.id}>
            {recyclingCenters.name}
            {recyclingCenters.location}
            {recyclingCenters.materials}
            {recyclingCenters.hours}
          </li>
        ))} */}
    </div>
  );
}

export default RecyclingCenters;
