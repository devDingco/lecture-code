"use client";

import Image from "next/image";
import styles from "./styles.module.css";

export default function ImagePage() {
  return (
    <>
      {/* 이미지 고전 방식 */}
      <img
        src="/images/04-01-dog.jpg"
        alt="강아지이미지"
        className={styles.이미지를보여주자}
      />

      {/* 이미지 Next 방식 */}
      <Image
        src="/images/04-01-dog.jpg"
        alt="강아지이미지"
        className={styles.이미지를보여주자}
        width={0}
        height={0}
        sizes="100vw"
      />
    </>
  );
}
