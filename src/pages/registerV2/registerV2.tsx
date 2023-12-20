import styles from "./registerV2.module.scss";
import RegisterHeader from "../../components/registerV2/header/header";
import InformationTable from "../../components/registerV2/main/informationTable";
import Confirm from "../../components/registerV2/main/confirm";

function registerV2() {
  return (
    <div className={styles.container}>
      <RegisterHeader />
      <div className={styles.main}>
        <div className={styles.informationTable}>
          <InformationTable />
        </div>
        <div className={styles.confirm}>
          <Confirm />
        </div>
      </div>
    </div>
  );
}

export default registerV2;
