import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const headerData = [
  {
    label: "Dessert",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ4E6B_IF3VMeAFUORa1D_dJA5Huzo7wg1T5iCS2ArC9zcnYBSoMottcNrn1Bm4yszEfm3927RkNJOA0mThaC-9JJSHBehT19aHGrOlZx4pZcswLPbt9_IBjN9QOpEnCa2GLUZMWZNVcA&usqp=CAc",
  },
  { label: "", image: "url_to_image2" },
  { label: "", image: "url_to_image3" },
  { label: "", image: "url_to_image4" },
  { label: "", image: "url_to_image5" },
  { label: "", image: "url_to_image5" },
  { label: "", image: "url_to_image5" },
];

export default function Test() {
  const [selectedCell, setSelectedCell] = React.useState<string | null>(null);

  const handleCellClick = (index: string) => {
    setSelectedCell(index);
    console.log(`Selected cell: ${index}`);
    // const [rowIndex, colIndex] = index.split('-').map(Number);
    // const cellValue = rows[rowIndex][Object.keys(rows[rowIndex])[colIndex] as keyof typeof rows[0]];
    // console.log(` Value: ${cellValue}`);
  };

  return (
    <TableContainer component={Paper} style={{ width: "700px" }}>
      <Table sx={{ borderCollapse: "collapse" }}>
        <TableHead>
          <TableRow>
            {headerData.map((header, index) => (
              <TableCell
                key={`${index}`}
                onClick={() => handleCellClick(`${index}`)}
                sx={{
                  border: "2px solid #f7d64f",
                  height: "100px",
                  width: "100px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={header.image}
                  alt={header.label}
                  style={{ width: "50px", height: "50px" }}
                />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={`${rowIndex}`}>
              {headerData.map((_, colIndex) => (
                <TableCell
                  key={`${rowIndex}-${colIndex}`}
                  onClick={() => handleCellClick(`${rowIndex}-${colIndex}`)}
                  sx={{
                    border: "2px solid #f7d64f",
                    padding: "8px",
                    height: "100px",
                    cursor: "pointer",
                    backgroundColor: selectedCell === `${rowIndex}-${colIndex}` ? "#54e354" : "#d1d1d1",
                  }}
                >
                  {selectedCell === `${rowIndex}-${colIndex}` ? (
                    <strong>{row[Object.keys(row)[colIndex] as keyof typeof row]}</strong>
                  ) : (
                    row[Object.keys(row)[colIndex] as keyof typeof row]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
