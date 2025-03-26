import { useDispatch, useSelector } from "react-redux";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import { RootState } from "../store/store";
import { userSlice } from "../store/userSlice";
import userLogo from '../assets/user-in-list.png';
import './userList.scss'

const UserList = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();

  console.log("users:", users); // 🔥 Проверяем, загружаются ли пользователи

  if (!users || users.length === 0) {
    return <div>Загрузка пользователей...</div>;
  }

  const Row = ({ index, style }: ListChildComponentProps) => (
    <div
      style={{ ...style, padding: "10px", cursor: "pointer" }}
      className="user-item"
      onClick={() => dispatch(userSlice.actions.selectUser(users[index]))}
    >
        <img src={userLogo} alt="User Logo" className="user-small-logo" /> 
        <span>{users[index]?.name || "Неизвестный пользователь"}</span>
    </div>
  );

  return (
    <List
      height={400}
      itemCount={users.length}
      itemSize={40}
      width={200}
    >
      {Row}
    </List>
  );
};

export default UserList;
