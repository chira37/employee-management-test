import { Schema, model,  PaginateModel } from "mongoose";
import paginate from "mongoose-paginate-v2";
import { Employee } from "../type";

export const employeeSchema = new Schema<Employee>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true },
});

employeeSchema.plugin(paginate);

export default model<Employee, PaginateModel<Employee>>("employee", employeeSchema);
