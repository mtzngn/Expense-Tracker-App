import { firestore } from "@/config/firebase";
import { UserDataType, ResponseType } from "@/types";
import { doc, updateDoc } from "firebase/firestore";

export const updateUser = async (
  uid: string,
  updateData: UserDataType
): Promise<ResponseType> => {
  try {
    // todo image upload
    const userRef = doc(firestore, "users", uid);
    await updateDoc(userRef, updateData);

    return { success: true, msg: "Updated successfully" };
  } catch (error: any) {
    console.log("error updating the user", error);
    return { success: false, msg: error?.message };
  }
};
