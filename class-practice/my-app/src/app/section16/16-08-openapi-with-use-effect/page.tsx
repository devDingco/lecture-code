"use client";

import { useEffect, useState } from "react";

export default function RestGetPage() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const 나만의함수 = async () => {
      const result = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await result.json();
      setImageUrl(data.message);
    };
    나만의함수();
  }, []);

  return <img src={imageUrl} />;
}
