import React, { useState } from "react";
import userService from "../../services/user.service";
import Loader from "../../components/display/Loader";
import { Container, Snackbar, Typography } from "../../components/display";
import { Table } from "../../components/display";
import { IHttpResponse, ITablePaginationResponse } from "../../types";
import { useCustomQuery } from "../../hooks/useCustomQuery";

const UserList: React.FC = () => {
  const [page, setPage] = useState(0);
  const limit = 5;

  const headers = [
    "User ID",
    "First Name",
    "Last Name",
    "Email Address",
    "Created Date",
    "Updated Date",
  ];

  const { data, error, isError, isSuccess } = useCustomQuery<
    IHttpResponse<ITablePaginationResponse>
  >(["users", page, limit], () => userService.fetchusers(page, limit));

  const users = data?.data?.users || [];
  const totalRows = data?.data?.totalCount || 0;

  return (
    <Container maxWidth="lg" title="User List">
      {isError && (
        <Snackbar isOpen={true} message={error.message} severity="error" />
      )}
      {users.length > 0 && (
        <Table
          headers={headers}
          data={users}
          totalRows={totalRows}
          page={page}
          setPage={setPage}
        />
      )}

      {isSuccess &&  !users.length && (
        <Typography>No Record Found</Typography>
      )}
    </Container>
  );
};

export default UserList;
