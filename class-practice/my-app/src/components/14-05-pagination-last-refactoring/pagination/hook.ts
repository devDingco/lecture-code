import { useState } from "react";

export const usePagination = (props) => {
  const [startPage, setStartPage] = useState(1);

  const onClickPage = (event) => {
    props.refetch({ mypage: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    props.refetch({ mypage: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= props.lastPage) {
      setStartPage(startPage + 10);
      props.refetch({ mypage: startPage + 10 });
    }
  };

  return {
    startPage,
    onClickPage,
    onClickPrevPage,
    onClickNextPage,
  };
};
