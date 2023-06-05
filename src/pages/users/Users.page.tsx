import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";

// COMPONENTS
import LoaderWrapper from "components/loader-wrapper/LoaderWrapper.component";
import CTable from "components/table/Table.component";
// SLICES
import { selectUsers } from "store/users/users.slice";
// ACTIONS
import { getUsersListAsync } from "store/users/users.actions";
// STORE
import { useAppDispatch } from "store";

export const headItems: any = [
  { displayName: "name", label: "name", isSortable: true },
  { displayName: "email", label: "email", isSortable: false },
  { displayName: "address", label: "address", isSortable: false },
];


function UsersPage() {
  const dispatch = useAppDispatch();
  const usersStore = useSelector(selectUsers);

  const { isLoading, usersList } = usersStore;


  useEffect(() => {
    dispatch(getUsersListAsync());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="users-list">
      <h1>Users</h1>
      <LoaderWrapper isLoading={isLoading!}>
        <Box className="users-list__box">
          <Grid
            container
            item={true}
            xs={8}
          >
            <CTable
              headItems={headItems}
              bodyItems={usersList}
              sortField={'name'}
            />
          </Grid>
        </Box>
      </LoaderWrapper>
    </div>
  );
}

export default UsersPage;
