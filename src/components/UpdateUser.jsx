"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useForm } from "react-hook-form";
import { BiEdit } from "react-icons/bi";

const UpdateUser = () => {
  const { register, handleSubmit } = useForm();

  const handleUpdate = async (data) => {
    const { name, image } = data;
    console.log(data);

    await authClient.updateUser({
      name: name,
      image: image,
    });
  };

  return (
    <div className="mt-4">
      <Modal>
        <Button variant="secondary">Update Profile</Button>

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
                      <Button type="submit" className="mt-2">
                        Update
                      </Button>
                      <Button
                        className="mt-2 py-4.75"
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
