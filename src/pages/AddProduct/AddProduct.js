import React from "react";
import { useForm } from "react-hook-form";
import Titles from "../../utilities/Titles";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();
  return (
    <section>
      <Titles>Add new products</Titles>
    </section>
  );
};

export default AddProduct;
