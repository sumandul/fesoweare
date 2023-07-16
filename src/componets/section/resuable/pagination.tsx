import React, { useState } from "react";
import { Pagination } from "antd";

interface paginationProps {
  current: any;
  total: any;
  onChange: any;
  setQuery: any;
  query: any;
}

const PaginationComponent: React.FC<paginationProps> = ({
  current,
  onChange,
  setQuery,
  total,
  query,
}) => {
  const [page, setPageNum] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const ShowSizeChange = (pageNum: number, pageSize: number) => {
    setPageNum(pageNum);
    setPageSize(pageSize);
    setQuery({
      ...query,
      skip: pageSize * (pageNum - 1),
      limit: pageSize,
    });
  };
  return (
    <div className="pagination-section">
      <Pagination
        showSizeChanger
        onShowSizeChange={ShowSizeChange}
        defaultCurrent={1}
        current={page}
        onChange={ShowSizeChange}
        total={100}
      />
    </div>
  );
};

export default PaginationComponent;
