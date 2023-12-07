import TextBox from "devextreme-react/text-box";
import styles from "./header.module.scss";
import { Button } from "devextreme-react/button";
import { useEffect, useState } from "react";
import { ApiGetTaskCutting } from "../../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setBarCodePoodetail, setReqApiGetTaskCutting } from "../../../store/register";

export default function HeaderRegister() {
  const dispatch = useDispatch();
  const register = useSelector((state: RootState) => state.register);

  const [spreadingDocNo, setSpreadingDocNo] = useState<string>("");
  const [barcodeBoxValue, setBarcodeBoxValue] = useState<string>("");

  const handleJobProductionNoChange = (e: any) => {
    setSpreadingDocNo(e);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await ApiGetTaskCutting(spreadingDocNo);
        dispatch(setReqApiGetTaskCutting(result));
        console.log("Result", result);
      } catch (error) {
        console.log("error", error);
        dispatch(setReqApiGetTaskCutting(null));
      }
    };
    fetchData();
  }, [spreadingDocNo]);

  const handleBarCodeChange = (e: any) => {
    if (register.apiGetTaskCutting?.pooDetail) {
      const barcodeEntered = e;
      const matchingDetail = register.apiGetTaskCutting.pooDetail.filter(
        (detail) => detail.bundleBarCode === barcodeEntered
      );
      if (matchingDetail) {
        console.log("Matching Detail:", matchingDetail);
        dispatch(setBarCodePoodetail(matchingDetail))
      } else {
        console.log("Barcode not found in pooDetail");
      }
    } else {
      console.log("Invalid apiGetTaskCutting data");
    }
  };

  return (
    <div className={styles.containner}>
      <div className={styles.textGroups}>
        <div className={styles.textInformation}>Information</div>
        <div className={styles.textScanBarCode1}>ScanBarCode Box</div>
      </div>
      <div className={styles.textboxGroup1}>
        <div className={styles.Information}>
          <div className={styles.textbox}>
            <TextBox
              placeholder="Spreading Doc No"
              value={spreadingDocNo}
              onValueChange={handleJobProductionNoChange}
            />
          </div>
          <div className={styles.textbox}>
            <TextBox
              placeholder="Job"
              readOnly
              value={register.apiGetTaskCutting?.job}
            />
          </div>
          <div className={styles.textbox}>
            <TextBox
              placeholder="Customer Name"
              readOnly
              value={register.apiGetTaskCutting?.customerName}
            />
          </div>
          <div className={styles.textbox}>
            <TextBox
              placeholder="Customer Po"
              readOnly
              value={register.apiGetTaskCutting?.customerPo}
            />
          </div>
          <div className={styles.textbox}>
            <TextBox
              placeholder="Note"
              readOnly
              value={register.apiGetTaskCutting?.note}
            />
          </div>
          <div className={styles.textbox}>
            <TextBox
              placeholder="Style No"
              readOnly
              value={register.apiGetTaskCutting?.styleNo}
            />
          </div>
          <div className={styles.textbox}>
            <TextBox
              placeholder="Job Production No"
              readOnly
              value={register.apiGetTaskCutting?.jobProductionNo}
            />
          </div>
          <div className={styles.textbox}>
            <TextBox
              placeholder="Sub Job No"
              readOnly
              value={register.apiGetTaskCutting?.subjobNo}
            />
          </div>
          <div className={styles.textbox}>
            <TextBox placeholder="Gac Date" readOnly />
          </div>
        </div>
        <div className={styles.ScanBarCode}>
          <div className={styles.textScanBarCode2}>ScanBarCode Box</div>
          <TextBox
            // key={barcodeBoxValue}
            placeholder="BarCode Box"
            value={barcodeBoxValue}
            onValueChange={(e) => {
              setBarcodeBoxValue(e);
              handleBarCodeChange(e);
            }}
          />
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
