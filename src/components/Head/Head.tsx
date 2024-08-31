import { useAppDispatch, useAppSelector } from "hooks";
import { setFilter } from "../../redux/users/slice";
import styles from "./Head.module.css";

interface Props {
  columns: string[];
}

export const Head = ({ columns }: Props) => {
  const dispatch = useAppDispatch();
  const values = useAppSelector((state) => state.users.filter);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    try {
      const input = event.currentTarget;

      switch (input.name) {
        case "Name":
          dispatch(setFilter({ ...values, name: input.value }));
          break;
        case "Username":
          dispatch(setFilter({ ...values, username: input.value }));
          break;
        case "E-mail":
          dispatch(setFilter({ ...values, email: input.value }));
          break;
        case "Phone":
          dispatch(setFilter({ ...values, phone: input.value }));
          break;
        default:
          console.log("Sorry, something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <thead className={styles.container}>
      <tr>
        {columns.map((column) => (
          <th key={column}>
            <p>{column}</p>

            <input
              type="text"
              placeholder="type here..."
              name={column}
              onChange={handleInputChange}
            />
          </th>
        ))}
      </tr>
    </thead>
  );
};
