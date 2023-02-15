import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 } from "uuid";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsBackspace } from "react-icons/bs";
import * as Yup from "yup";
import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";

const addSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .max(20, "The name must have a maximum of 20 characters."),
  description: Yup.string().required("Description is required"),
  id: Yup.string(),
});

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleSubmit = (values) => {
    if (params.id) {
      dispatch(editTask(values));
    } else {
      dispatch(
        addTask({
          ...values,
          id: v4(),
        })
      );
    }

    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, []);

  const initialState = {
    title: task.title ? task.title : "",
    description: task.description ? task.description : "",
  };

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={task}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={addSchema}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col justify-center bg-zinc-800 max-w-sm p-4 mx-auto mt-[10%]">
            <div className="flex">
              <label
                htmlFor="title"
                className="block text-sm font-bold mb-1 flex-1"
              >
                Task:
              </label>
              <Link to={"/"}>
                <BsBackspace className="w-[23px] h-[24px] mb-4" />
              </Link>
            </div>
            <Field
              name={"title"}
              className="w-full p-2 rounded-md bg-zinc-600 mb-2"
            />
            {errors.title && touched.title && <div className="text-red-600">{errors.title}</div>}
            <label
              htmlFor="descrpition"
              className="block text-sm font-bold mb-1"
            >
              Description:
            </label>
            <Field
              name={"description"}
              as={"textarea"}
              className="w-full p-2 rounded-md bg-zinc-600 mb-2"
            />
            {errors.description && touched.description && (
              <div className="text-red-600">{errors.description}</div>
            )}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-indigo-600 w-20 px-1 py-2 rounded-md mt-4"
              >
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
    // <form
    //   onSubmit={() => (console.log(''))}
    //   className="flex flex-col justify-center bg-zinc-800 max-w-sm p-4 mx-auto mt-[10%]"
    // >
    //   <div className="flex">
    //     <label htmlFor="title" className="block text-sm font-bold mb-1 flex-1">
    //       Task:
    //     </label>
    //     <Link to={"/"}>
    //       <BsBackspace className="w-[23px] h-[24px] mb-4" />
    //     </Link>
    //   </div>
    //   <input
    //     name="title"
    //     type="text"
    //     value={task.title}
    //     placeholder="Title"
    //     onChange={handleChange}
    //     className="w-full p-2 rounded-md bg-zinc-600 mb-2"
    //   />
    //   <label htmlFor="descrpition" className="block text-sm font-bold mb-1">
    //     Description:
    //   </label>
    //   <textarea
    //     name="description"
    //     value={task.description}
    //     placeholder="Description"
    //     onChange={handleChange}
    //     className="w-full p-2 rounded-md bg-zinc-600 mb-2"
    //   ></textarea>
    //   <div className="flex justify-center">
    //     <button
    //       type="submit"
    //       className="bg-indigo-600 w-20 px-1 py-2 rounded-md mt-4"
    //     >
    //       Save
    //     </button>
    //   </div>
    // </form>
  );
};

export default TaskForm;
