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
          <TextBox width={200} placeholder="POO No" />
          <TextBox width={200} placeholder="Job" readOnly />
          <TextBox width={200} placeholder="Customer Name" readOnly />
          <TextBox width={200} placeholder="Customer Po" readOnly />
          <TextBox width={200} placeholder="Note" readOnly />
          <TextBox width={200} placeholder="Style No" readOnly />
          <TextBox width={200} placeholder="Job Production No" readOnly />
          <TextBox width={200} placeholder="Sub Job No" readOnly />
          <TextBox width={200} placeholder="Gac Date" readOnly />
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
          <Button text="Reprint All" type="normal" stylingMode="contained" />
        </div>
      </div>
      <div className={styles.textboxGroup3}>
        <div className={styles.btnSearch}>
        <Button
          text="Search"
          type="normal"
          stylingMode="contained"
        />          
        </div>
      </div>
    </div>
  );
}
