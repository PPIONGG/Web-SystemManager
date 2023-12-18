import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function Test() {
  const mockdata = [
    { boundleQuantity: 1, marker: "A", route: "Heat", size: "S" },
    { boundleQuantity: 2, marker: "A", route: "Heat", size: "M" },
    { boundleQuantity: 3, marker: "A", route: "Heat", size: "L" },
    { boundleQuantity: 4, marker: "A", route: "Heat", size: "XL" },
    { boundleQuantity: 5, marker: "A", route: "Heat", size: "2XL" },
    { boundleQuantity: 6, marker: "B", route: "Heat", size: "S" },
    { boundleQuantity: 7, marker: "B", route: "Heat", size: "M" },
    { boundleQuantity: 8, marker: "B", route: "Heat", size: "L" },
    { boundleQuantity: 9, marker: "B", route: "Heat", size: "XL" },
    { boundleQuantity: 10, marker: "B", route: "Heat", size: "2XL" },
  ];

  // ดึง marker ที่ไม่ซ้ำกัน
  const uniqueMarkers = [...new Set(mockdata.map((item) => item.marker))];

  const [clickedCell, setClickedCell] = useState(null);

  const handleClick = (quantity: any) => {
    setClickedCell(quantity);
  };

  useEffect(() => {
    console.log("Clicked on boundleQuantity:", clickedCell);
  }, [clickedCell]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ border: "2px solid #f7d64f" }}>
                <img
                  width={50}
                  height={50}
                  src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ4E6B_IF3VMeAFUORa1D_dJA5Huzo7wg1T5iCS2ArC9zcnYBSoMottcNrn1Bm4yszEfm3927RkNJOA0mThaC-9JJSHBehT19aHGrOlZx4pZcswLPbt9_IBjN9QOpEnCa2GLUZMWZNVcA&usqp=CAc"
                  alt=""
                />
              </TableCell>
              {uniqueMarkers.map((marker) => (
                <TableCell
                  sx={{ border: "2px solid #f7d64f" }}
                  key={marker}
                >{`Marker ${marker}`}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {["S", "M", "L", "XL", "2XL"].map((size) => (
              <TableRow key={size}>
                <TableCell sx={{ border: "2px solid #f7d64f" }}>
                  {size}
                </TableCell>
                {uniqueMarkers.map((marker) => {
                  const filteredData = mockdata.filter(
                    (item) => item.marker === marker && item.size === size
                  );
                  const quantity =
                    filteredData.length > 0
                      ? filteredData[0].boundleQuantity
                      : 0;

                      const cellStyle = {
                        border: "2px solid #f7d64f",
                        cursor: 'pointer',
                        backgroundColor: clickedCell === quantity ? 'yellow' : 'gray',
                        // เพิ่มเงื่อนไขเพื่อให้พื้นหลังเป็นสีขาวเมื่อยังไม่มีการคลิก
                        ...(clickedCell === null && { backgroundColor: 'white' }),
                      };

                  return (
                    <TableCell
                      sx={cellStyle}
                      key={marker}
                      onClick={() => handleClick(quantity)}
                    >
                      {quantity}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
