"use client";
import { authClient } from "@/lib/auth-client";
import { Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


const ProfileEditPage = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const handleUpdate = async (data) => {
    const { name, image } = data;
    try {
      await authClient.updateUser({
        name,
        image,
      });
      toast.success("Profile updated successfully");
      router.push("/myProfilePage");

    } catch (error) {
      console.log(error);
      toast.error("Failed to update profile");
    }
  };

  return (
    <div>
      <div className="w-full min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-10">
        <div
          className="
      w-full
      max-w-md
      rounded-2xl
      border
      border-gray-200
      bg-white
      shadow-xl
      p-5
      sm:p-8"
        >
          {/* HEADING */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Update Profile
            </h1>

            <p className="text-sm text-gray-500 mt-2">
              Change your profile information easily.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit(handleUpdate)}
            className="flex flex-col gap-5"
          >
            {/* NAME */}
            <TextField className="w-full">
              <Label className="mb-2 text-sm font-medium text-gray-700">
                Full Name
              </Label>

              <Input
                placeholder="Enter Your New Name"
                {...register("name")}
                className="w-full"
              />
            </TextField>

            {/* IMAGE */}
            <TextField className="w-full">
              <Label className="mb-2 text-sm font-medium text-gray-700">
                Profile Image URL
              </Label>

              <Input
                placeholder="Enter Your New Image URL"
                {...register("image")}
                className="w-full"
              />
            </TextField>

            {/* BUTTON */}
            <button
              type="submit"
              className="
          w-full
          rounded-xl
          bg-[#0e81fc]
          px-4
          py-3
          text-sm
          sm:text-base
          font-semibold
          text-white
          transition-all
          duration-300
          hover:scale-[1.02]
          hover:bg-[#0e81fc]
          active:scale-[0.98]
        "
            >
              Update Information
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditPage;
