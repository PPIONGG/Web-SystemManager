import DataGrid, { Column } from "devextreme-react/data-grid";
import styles from "./main.module.scss";
import Button from "devextreme-react/button";

export default function MainRegister() {

  const onCellPrepared = (e: any) => {
    // if (e.data && e.data.State !== undefined) {
    //   if (e.data.Quantity === 0) {
    //     e.cellElement.style.backgroundColor = "#88db88";
    //   } else if (e.data.Quantity !== 0 ) {
    //     e.cellElement.style.backgroundColor = "#eb7149";
    //   } 
    //   // else if (e.data.Quantity === 0) {
    //   //   e.cellElement.style.backgroundColor = "#878584";
    //   // }
    // }
  };

  const onCellClick = (e: any) => {
    // if (e.data && e.data.Size !== undefined) {
    //   const updatedData = data.map((item) =>
    //     item.Size !== e.data.Size ? { ...item, color: "grey" } : item
    //   );
    //   setGridData(updatedData);
    // } else {
    //   console.error("e.data or 'Size' property is undefined");
    // }
  };

  const onCellHoverChanged = (e: any) => {
    if (e.rowType === "data" && e.column.dataField !== "State") {
      // const cellElement = e.cellElement;
      // cellElement.style.cursor = "pointer";
    }
  };

  return (
    <div className={styles.container}>
      <div className="">
        <DataGrid
          dataSource={data}
          width="100%"
          showBorders={true}
          onCellPrepared={onCellPrepared}
          onCellClick={onCellClick}
          onCellHoverChanged={onCellHoverChanged}
        >
          <Column
            dataField="State"
            caption="Marker (Part) "
            dataType="string"
            groupIndex={0}
          />
          <Column dataField="Size" dataType="string" allowSorting={false} />
          <Column dataField="Route" dataType="string" allowSorting={false} />
          <Column dataField="Qty" dataType="string" allowSorting={false} />
          <Column
          width={160}
            caption="Quantity"
            dataType="number"
            allowSorting={false}
            cellRender={(data) => (
              <div className={styles.groupbtn}>
                <Button
                height={25}
                  text="-"
                  type="danger"
                  onClick={() => ''}
                />
                <span>{data.data.Quantity}</span>
                <Button
                height={25}
                  text="+"
                  type="success"
                  onClick={() => ''}
                />
              </div>
            )}
          />
        </DataGrid>
      </div>
      <div className={styles.textWorkbox}>Work box</div>
      <div className={styles.datagrid2}>
        <DataGrid dataSource={null} width="100%" showBorders={true}>
          <Column dataField="Size" dataType="string" allowSorting={false} />
          <Column dataField="Route" dataType="string" allowSorting={false} />
          <Column dataField="Qty" dataType="string" allowSorting={false} />
        </DataGrid>
      </div>
      <div className={styles.btnConfirm}>
        <Button
          text="Confirm"
          type="success"
          stylingMode="contained"
          width={150}
        />
      </div>
    </div>
  );
}

const data = [
  {
    State: "A",
    Size: "S",
    Route: "[ Embroidery, Laser ]",
    Qty: " 2 / 2",
    Quantity: 0,
  },
  {
    State: "A",
    Size: "M",
    Route: "[ Embroidery, Laser ]",
    Qty: "3 / 3",
    Quantity: 0,
  },
  {
    State: "A",
    Size: "L",
    Route: "[ Embroidery, Laser ]",
    Qty: "2 / 2",
    Quantity: 0,
  },
  {
    State: "B",
    Size: "S",
    Route: "[Laser]",
    Qty: "1 / 1",
    Quantity: 0,
  },
  {
    State: "B",
    Size: "M",
    Route: "[Laser]",
    Qty: "2 / 2",
    Quantity: 0,
  },
  {
    State: "B",
    Size: "L",
    Route: "[Laser]",
    Qty: "3 / 3",
    Quantity: 0,
  },
];
