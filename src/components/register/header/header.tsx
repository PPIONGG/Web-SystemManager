import TextBox from "devextreme-react/text-box";
import styles from "./header.module.scss";
import { Button } from "devextreme-react/button";

export default function HeaderRegister() {
  return (
    <div className={styles.containner}>
      <div className={styles.textGroups}>
        <div className={styles.textInformation}>Information</div>
        <div className={styles.textScanBarCode1}>ScanBarCode Box</div>
      </div>
      <div className={styles.textboxGroup1}>
        <div className={styles.Information}>
          <div className={styles.textbox}>
            <TextBox placeholder="Spreading Doc No" />
          </div>
          <div className={styles.textbox}>
            <TextBox placeholder="Job" readOnly />
          </div>
          <div className={styles.textbox}>
            <TextBox placeholder="Customer Name" readOnly />
          </div>
          <div className={styles.textbox}>
            <TextBox placeholder="Customer Po" readOnly />
          </div>
          <div className={styles.textbox}>
            <TextBox placeholder="Note" readOnly />
          </div>
          <div className={styles.textbox}>
            <TextBox placeholder="Style No" readOnly />
          </div>
          <div className={styles.textbox}>
            <TextBox placeholder="Job Production No" readOnly />
          </div>
          <div className={styles.textbox}>
            <TextBox placeholder="Sub Job No" readOnly />
          </div>
          <div className={styles.textbox}>
            <TextBox placeholder="Gac Date" readOnly />
          </div>
        </div>
        <div className={styles.ScanBarCode}>
          <div className={styles.textScanBarCode2}>ScanBarCode Box</div>
          <TextBox placeholder="BarCode Box" />
        </div>
      </div>
      <div className={styles.textboxGroup2}>
        <TextBox placeholder="RFID Bundle" />
        <div className={styles.btnGroups}>
          <Button text="Add" type="normal" stylingMode="contained" />
          <Button text="Reset" type="normal" stylingMode="contained" />
          <Button text="Suspension" type="normal" stylingMode="contained" />
        </div>
      </div>
      <div className={styles.textboxGroup3}>
        <div className={styles.btnSearch}>
          <Button text="Search" type="normal" stylingMode="contained" />
        </div>
      </div>
    </div>
  );
}
