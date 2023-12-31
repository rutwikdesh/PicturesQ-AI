import React, { useState } from "react";
import { Card, FormField, Loader } from "../components/index";
import { useNavigate } from "react-router-dom";

import { getRandomPrompt } from "../utils";

import { preview } from "../assets";

const CreatePost = () => {
  const navigate = useNavigate();
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const generateImg = () => {};

  const handleSubmit = () => {};

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);

    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
          Browse through a collection of imaginative and visually stunning
          images generated by PicturesQ AI.
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 mb-10">
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="An astronaut lounging in a tropical resort in space, vaporwave"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>

        <div className="relative w-64 h-64 border border-gray-300 text-gray-900 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 flex justify-center items-center bg-gray-50">
          {form.photo ? (
            <img
              src={form.photo}
              alt={form.prompt}
              className="w-full h-full object-contain"
            />
          ) : (
            <img
              src={preview}
              alt={preview}
              className="w-9/12 h-9/12 object-contain opacity-40"
            />
          )}

          {generatingImg && (
            <div className="absolute w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
              <Loader />
            </div>
          )}
        </div>

        <div className="mt-8">
          <button
            type="button"
            className="text-white bg-green-700 w-full sm:w-auto px-5 py-2.5 font-medium rounded-md text-center transition-all hover:scale-95"
            onClick={generateImg}
          >
            {generatingImg ? "Generating Image..." : "Generate"}
          </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px] mb-2">
            Once you have created the image you want, you can share it with
            others in the community
          </p>

          <button
            type="button"
            className="text-white bg-[#6469ff] w-full sm:w-auto px-5 py-2.5 font-medium rounded-md text-center transition-all hover:scale-95"
            onClick={generatingImg}
          >
            {loading ? "Sharing..." : "Share with the Community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
