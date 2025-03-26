
export interface User {
  id: number;
  name: string;
  department: string | null;
  company: string | null;
  jobTitle: string | null;
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