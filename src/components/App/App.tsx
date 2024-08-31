import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { getUsers } from "../../redux/users/actions";
import { getIsLoading, getAll } from "../../redux/users/selectors";
import { Head } from "components/Head/Head";
import { Body } from "components/Body/Body";
import styles from "./App.module.css";

export const App = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(getAll);
  const isLoading = useAppSelector(getIsLoading);

  useEffect(() => {
    try {
      dispatch(getUsers());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  return (
    <>
      {isLoading && <p className={styles.loading}>Loading...</p>}

      {!isLoading && (
        <table className={styles.table}>
          <Head columns={["Name", "Username", "E-mail", "Phone"]} />

          <Body />
        </table>
      )}

      {!isLoading && users.length === 0 && (
        <p className={styles.request}>
          Sorry, but nothing was found for your request.
        </p>
      )}
    </>
  );
};
