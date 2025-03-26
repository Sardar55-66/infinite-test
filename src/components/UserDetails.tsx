import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import avatar from '../assets/main-user.png'
import './userDetails.scss'
import { userSlice } from "../store/userSlice";
import { RootState } from "../store/store";

const UserDetails = () => {
    const selectedUser = useSelector((state: RootState) => state.users.selectedUser);
    const dispatch = useDispatch();
    const [form, setForm] = useState({ name: "", department: "", company: "", jobTitle: "" });

 useEffect(() => {
    if (selectedUser) {
      setForm({
        name: selectedUser.name || "",
        department: selectedUser.department || "",
        company: selectedUser.company || "",
        jobTitle: selectedUser.jobTitle || "",
      });
    }
  }, [selectedUser]);


  if (!selectedUser) return <div className="details-unselected">Выберите пользователя</div>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

    const handleSave = () => {
    dispatch(userSlice.actions.updateUser({ ...selectedUser, ...form })); // ✅ Обновляем Redux store
  };


  return (
    <div className="details">
      <div className="username">
        <input name="name" value={form?.name} onChange={handleChange} placeholder="Не указано" />
      </div>
      
      <div className="other-user-info">
        <div className="user-avatar">
            <img src={avatar} alt="avatar" />
        </div>
        <div className="other-user-info-container">
            <div>
                <label> Должность </label>
                <input name="jobTitle" value={form?.jobTitle} onChange={handleChange} placeholder="Не указано" />
            </div>
            <div>
                <label> Отдел</label>
                <input name="department" value={form?.department} onChange={handleChange} placeholder="Не указано" />
            </div>
            <div>
                <label> Компания </label>
                <input name="company" value={form?.company} onChange={handleChange} placeholder="Не указано" />
            </div>
        </div>
      </div>
      <button onClick={handleSave} className="save-button">Сохранить</button>
    </div>
  );
};
export default UserDetails;

