export const getFilter = (query: any) => {
  return {
    firstName: { $regex: query.firstName || "", $options: "i" },
    lastName: { $regex: query.lastName || "", $options: "i" },
    email: { $regex: query.email || "", $options: "i" },
    phone: { $regex: query.phone || "", $options: "i" },
    gender: { $regex: query.gender || "", $options: "i" },
  };
};
