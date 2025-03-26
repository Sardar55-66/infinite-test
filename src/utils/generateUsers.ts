
export interface User {
  id: number;
  name: string;
  department: string;
  company: string;
  jobTitle: string;
}

const generateUsers = (num: number): User[] => {
  return Array.from({ length: num }, (_, i) => ({
    id: i + 1,
    name: `Пользователь ${i + 1}`,
    department: null,
    company: null,
    jobTitle: null,
  }));
};
export default generateUsers