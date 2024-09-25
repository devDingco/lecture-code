"use client";

import styles from "./styles.module.css";

export default function CssPage() {
  return (
    <>
      <button className={styles.버튼스타일}>버튼</button>
      <div className={styles.네모상자스타일1}>네모상자</div>
      <br />

      <div className={styles.네모상자스타일2}>네모상자</div>

      <div className="lg:철수의상자">클때는 초록색</div>
    </>
  );
}
