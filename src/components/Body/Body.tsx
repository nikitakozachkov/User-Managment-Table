import { useAppSelector, useDebounce } from "hooks";
import { getAll } from "../../redux/users/selectors";
import { TUser } from "types/User.type";
import styles from "./Body.module.css";

export const Body = () => {
  const users = useAppSelector(getAll);
  const debouncedSearch = useDebounce(users);

  return (
    <>
      <tbody className={styles.container}>
        {debouncedSearch.map(({ id, name, username, email, phone }: TUser) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{username}</td>
            <td>
              <a href={`mailto:${email}`}>{email}</a>
            </td>
            <td>
              <a href={`tel:${phone}`}>{phone}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};
