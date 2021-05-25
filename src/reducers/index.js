import { STATUS } from "@/constants";

const generateRandomStatus = () => {
  const statuses = Object.values(STATUS);
  return statuses[Math.floor(Math.random() * statuses.length)];
};

export { generateRandomStatus };
