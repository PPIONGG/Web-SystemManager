import TextBox from "devextreme-react/text-box";
import styles from "./header.module.scss";
import { Button } from "devextreme-react/button";

export default function HeaderRegister() {
  return (
    <div className={styles.containner}>
      <div className={styles.headerText}>
        <div>Information</div>
        <div>ScanBarCode Box</div>
      </div>
      <div>
        <div className={styles.textboxGroup1}>
          <div className={styles.textboxRow}>
            <TextBox width={200} placeholder="POO No" />
            <TextBox width={200} placeholder="Job" readOnly />
            <TextBox width={200} placeholder="Customer Name" readOnly />
            <TextBox width={200} placeholder="Customer Po" readOnly />
            <TextBox width={200} placeholder="Note" readOnly />
          </div>
          <div>
            <TextBox width={200} placeholder="BarCode Box" />
          </div>
        </div>
        <div className={styles.textboxGroup2}>
          <TextBox width={200} placeholder="Style No" readOnly />
          <TextBox width={200} placeholder="Job Production No" readOnly />
          <TextBox width={200} placeholder="Sub Job No" readOnly />
          <TextBox width={200} placeholder="Gac Date" readOnly />
        </div>
        <div className={styles.buttonGroups}>
          <div className={styles.btnRfidBundle}>
            <TextBox placeholder="RFID Bundle" />
            <div className={styles.btnadd}>
            <Button text="Add" type="normal" stylingMode="contained"/>
            <Button text="Reprint All" type="normal" stylingMode="contained"/>              
            </div>
          </div>
          <div className={styles.test1223}>
            <div className={styles.btntest}>
              <Button text="Serach" type="normal" stylingMode="contained"  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
