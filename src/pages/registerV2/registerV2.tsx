import styles from "./registerV2.module.scss";
import RegisterHeader from "../../components/registerV2/header/header";

function registerV2() {
  return (
    <div className={styles.container}>
      <RegisterHeader/>
      <div className={styles.main}>
        <div>Table</div>
        <div>boxconfirm</div>
      </div>
    </div>
  );
}

export default registerV2;
