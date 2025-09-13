export const loginUser = async ({ email, password }) => {
  // Mock login - in real app, this would call an API
  if (!email || !password) {
    throw new Error("Invalid credentials");
  }
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { id: 1, email, name: "User" };
};
