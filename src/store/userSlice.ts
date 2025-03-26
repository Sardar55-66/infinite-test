import { createSlice } from "@reduxjs/toolkit";
import generateUsers from "../utils/generateUsers";

// Интерфейс пользователя
export interface User {
  id: number;
  name: string;
  department: string | null;
  company: string | null;
  jobTitle: string | null;
}

// Начальное состояние
const initialState = {
  users: generateUsers(10000), // 🔥 Загружаем пользователей
  selectedUser: null as User | null, // ❌ Теперь изначально null
};

// Создаём Redux Slice
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    updateUser: (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.id
          ? { ...user, ...action.payload } // ✅ Обновляем только нужного юзера
          : user
      );
      if (state.selectedUser?.id === action.payload.id) {
        state.selectedUser = { ...state.selectedUser, ...action.payload }; // ✅ Обновляем данные в `selectedUser`
      }
    },
  },
});


export { userSlice };
