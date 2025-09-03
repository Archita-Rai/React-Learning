import { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Username can not be empty";
  }

  return errors;
};

export default function CommentsForm({ addNewComment }) {
  // let [formData, setFormData] = useState({
  //   username: "",
  //   remarks: "",
  //   rating: 5,
  // });
  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // let handleInputChange = (event) => {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // };

  // let handleSubmit = (event) => {
  //   console.log(formData);
  //   addNewComment(formData);
  //   event.preventDefault();
  //   setFormData({
  //     username: "",
  //     remarks: "",
  //     rating: 5,
  //   });
  // };
  return (
    <div>
      <h4>Give a Comments </h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>&nbsp;&nbsp;
        <input
          placeholder="username"
          type="text"
          value={formik.values.username}
          name="username"
          onChange={formik.handleChange}
        />
        {formik.errors.username ? <p style={{color:"red"}}>{formik.errors.username}</p>:null}
        <br />
        <br />
        <label htmlFor="remark">Remarks</label>&nbsp;&nbsp;
        <textarea
          value={formik.values.remarks}
          placeholder="Add few remarks"
          id="remark"
          name="remarks"
          onChange={formik.handleChange}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating</label>&nbsp;&nbsp;
        <input
          placeholder="rating"
          type="number"
          min={1}
          max={5}
          value={formik.values.rating}
          name="rating"
          onChange={formik.handleChange}
        />
        <br />
        <br />
        <button type="submit">Add comment</button>
      </form>
    </div>
  );
}
