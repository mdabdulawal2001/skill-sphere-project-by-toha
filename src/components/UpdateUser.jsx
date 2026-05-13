"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useForm } from "react-hook-form";
import { BiEdit } from "react-icons/bi";
import toast from "react-hot-toast";

const UpdateUser = () => {
  const { register, handleSubmit } = useForm();

 const handleUpdate = async (data) => {
  const { name, image } = data;

  try {
    await authClient.updateUser({
      name,
      image,
    });

    toast.success("Profile updated successfully");
  } catch (error) {
    console.log(error);

    toast.error("Failed to update profile");
  }
};

  return (
    <div className="mt-4">
      <Modal>
        <Button
          className="
            group
            w-12.5
            h-12.5
            rounded-xl
            bg-transparent
            p-0
            min-w-0
            flex
            items-center
            justify-center
            hover:bg-blue-50
            transition-all
            duration-300"
        >
          <BiEdit
            className="
            w-10
            h-10
            text-gray-600
            transition-all
            duration-300
            group-hover:text-[#047bfb]
            group-hover:scale-110
            group-hover:drop-shadow-[0_0_10px_rgba(4,123,251,0.5)]"
          />
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <BiEdit className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Update Your Profile</Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Fill out the form below and update your profile.
                </p>
              </Modal.Header>

              <Modal.Body className="p-6">
                <Surface variant="default">
                  {/* FORM CONNECTED */}
                  <form
                    onSubmit={handleSubmit(handleUpdate)}
                    className="flex flex-col gap-4"
                  >
                    {/* NAME */}
                    <TextField className="w-full">
                      <Label>Name</Label>
                      <Input
                        placeholder="Enter Your New Name"
                        {...register("name")}
                      />
                    </TextField>

                    {/* IMAGE */}
                    <TextField className="w-full">
                      <Label>Image URL</Label>
                      <Input
                        placeholder="Enter Your New Image URL"
                        {...register("image")}
                      />
                    </TextField>

                    {/* SUBMIT BUTTON */}

                    <Modal.Footer>
                      <Button slot="close" type="submit" className="mt-2 pt-1">
                        Update
                      </Button>
                      <Button
                        className="mt-2 pt-4 py-3"
                        slot="close"
                        variant="secondary"
                      >
                        Cancel
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default UpdateUser;
