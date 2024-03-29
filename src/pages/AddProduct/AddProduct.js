import React from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import Titles from "../../utilities/Titles";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const addProduct = (data) => {
    console.log(data);
  };
  return (
    <section>
      <Titles>Add new products</Titles>
      <div className="bg-white p-5 lg:p-10 border border-gray-200">
        <form onSubmit={handleSubmit(addProduct)}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5">
            <div>
              <label className="font-medium text-sm lg:text-base">
                Product Name
              </label>

              <input
                type="text"
                {...register("name", { required: "This field is required" })}
                className="border border-gray-200 outline-none focus:border-theme rounded w-full  p-2"
              />
              {errors.name && (
                <p className="text-red-500">
                  <small>{errors?.name?.message}</small>
                </p>
              )}
            </div>
            <div>
              <label className="font-medium text-sm lg:text-base">
                Product Image Url
              </label>

              <input
                type="url"
                {...register("productPhoto", {
                  required: "This field is required",
                })}
                className="border border-gray-200 outline-none focus:border-theme rounded w-full  p-2"
              />
              {errors.productPhoto && (
                <p className="text-red-500">
                  <small>{errors?.productPhoto?.message}</small>
                </p>
              )}
            </div>
            <div>
              <label className="font-medium text-sm lg:text-base">
                Product Category
              </label>

              <select
                {...register("category", {
                  required: "This field is required",
                })}
                required
                className="p-2 w-full border border-gray-200 outline-none focus:outline-none rounded   "
              >
                <option className="capitalize" value="">
                  Select a category
                </option>
                <option className="capitalize" value="Category 2">
                  Category 2
                </option>
                <option className="capitalize" value="Category 3">
                  Category 3
                </option>
                <option className="capitalize" value="Category 4">
                  Category 4
                </option>
              </select>
              {errors.category && (
                <p className="text-red-500">
                  <small>{errors?.category?.message}</small>
                </p>
              )}
            </div>
            <div>
              <label className="font-medium text-sm lg:text-base">
                Orginal Price
              </label>

              <input
                type="number"
                {...register("orginalPrice", {
                  required: "This field is required",
                })}
                className="border border-gray-200 outline-none focus:border-theme rounded w-full  p-2"
              />
              {errors.orginalPrice && (
                <p className="text-red-500">
                  <small>{errors?.orginalPrice?.message}</small>
                </p>
              )}
            </div>
            <div>
              <label className="font-medium text-sm lg:text-base">
                Resale Price
              </label>

              <input
                type="number"
                {...register("resalePrice", {
                  required: "This field is required",
                })}
                className="border border-gray-200 outline-none focus:border-theme rounded w-full  p-2"
              />
              {errors.resalePrice && (
                <p className="text-red-500">
                  <small>{errors?.resalePrice?.message}</small>
                </p>
              )}
            </div>

            <div>
              <label className="font-medium text-sm lg:text-base">
                Product Location
              </label>

              <input
                type="text"
                {...register("location", {
                  required: "This field is required",
                })}
                placeholder="dhaka"
                className="border border-gray-200 outline-none focus:border-theme rounded w-full  p-2"
              />
              {errors.location && (
                <p className="text-red-500">
                  <small>{errors?.location?.message}</small>
                </p>
              )}
            </div>
            <div>
              <label className="font-medium text-sm lg:text-base">
                Your phone number
              </label>
              <input
                type="tel"
                placeholder=""
                {...register("contactInfo", {
                  required: "This field is required",
                  pattern: {
                    value: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
                    message: "invalid number",
                  },
                })}
                className="border border-gray-200 outline-none focus:border-theme rounded w-full  p-2"
              />
              {errors.contactInfo && (
                <p className="text-red-500">
                  <small>{errors?.contactInfo?.message}</small>
                </p>
              )}
            </div>
            <div className="col-span-full xl:col-span-1">
              <label className="font-medium text-sm lg:text-base">
                Product Condition
              </label>

              <select
                {...register("condition", {
                  required: "This field is required",
                })}
                required
                className="p-2 w-full border border-gray-200 outline-none focus:outline-none rounded   "
              >
                <option className="capitalize" value="">
                  Select condition
                </option>
                <option className="capitalize" value="excellent">
                  excellent
                </option>
                <option className="capitalize" value="good">
                  good
                </option>
                <option className="capitalize" value="fair">
                  fair
                </option>
              </select>
              {errors.condition && (
                <p className="text-red-500">
                  <small>{errors?.condition?.message}</small>
                </p>
              )}
            </div>
            <div className="col-span-full">
              <label className="font-medium text-sm lg:text-base">
                Product Description
              </label>

              <textarea
                rows="4"
                {...register("description", {
                  required: "This field is required",
                })}
                className="border border-gray-200 outline-none focus:border-theme rounded w-full  p-2"
              ></textarea>
              {errors.description && (
                <p className="text-red-500">
                  <small>{errors?.description?.message}</small>
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="flex justify-center items-center py-2 px-3 border capitalize bg-primary text-white rounded hover:scale-95 mt-5"
          >
            <FaPlus className="mr-3"></FaPlus> Add product
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
