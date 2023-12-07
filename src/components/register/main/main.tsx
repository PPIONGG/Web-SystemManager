import DataGrid, { Column } from "devextreme-react/data-grid";
import styles from "./main.module.scss";
import Button from "devextreme-react/button";
import TextBox from "devextreme-react/text-box";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export default function MainRegister() {
  const register = useSelector((state: RootState) => state.register);

  return (
    <div className={styles.container}>
      <div className={styles.datagrid1}>
        <div className="">
          <DataGrid
            focusedRowEnabled={true}
            dataSource={register.barCodePoodetail}
            keyExpr="marker"
            width="100%"
            showBorders={true}
          >
            <Column
              dataField="marker"
              caption="Marker (Part) "
              dataType="string"
              groupIndex={0}
            />
            <Column dataField="size" dataType="string" allowSorting={false} />
            <Column dataField="route" dataType="string" allowSorting={false} />
            <Column
              caption="Qty"
              dataField="boundleQuantity"
              dataType="string"
              allowSorting={false}
            />
          </DataGrid>
        </div>
        <div className={styles.card}>
          <div className={styles.logo}>Logo</div>
          <div className={styles.textNextSteps}>Recommended Next Steps</div>
          <div className={styles.textGroups}>
            <TextBox placeholder="marker" readOnly />
            <TextBox placeholder="size" readOnly />
            <TextBox placeholder="route" readOnly />
          </div>
          <div className={styles.btnqty}>
            <Button text="-" type="danger" stylingMode="contained" width={70} />
            <TextBox placeholder="0" readOnly width={100} />
            <Button
              text="+"
              type="success"
              stylingMode="contained"
              width={70}
            />
          </div>
        </div>
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
          text="Call Old Work"
          type="default"
          stylingMode="contained"
          width={150}
        />
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
