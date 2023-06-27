import { useReducer } from "react";
import "./Form.css";
import { motion } from "framer-motion";
import { Actions } from "../QrContext/Actions/Actions";
import { InputReducer } from "../QrContext/Actions/Actions";

const Form = () => {
   const [InputState, InputDispatch] = useReducer(InputReducer, {
    Link: "",
    File: "",
    Range: 0,
  });

  const HandleChangeInput = (e) => {
    InputDispatch({
      type: Actions.INPUT_TEXTS,
      FieldName: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <div>
      <div className="container">
        <form
          className="form__cont"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="inp__Link">
            <label
              htmlFor="Link"
              style={{ fontWeight: "600", color: "GrayText" }}
            >
              Link:
            </label>
            <input
            value={InputState.Link}
              type="text"
              name="Link"
              placeholder="Provide Link..."
              className="text__inp"
              onChange={HandleChangeInput}
            />
          </div>
          <div className="inp__img">
            <label
              htmlFor="Logo"
              style={{ fontWeight: "600", color: "GrayText" }}
            >
              Logo:
            </label>
            <input
            value={InputState.File}
              type="file"
              name="File"
              className="file__inp"
              onChange={HandleChangeInput}
            />
          </div>
          <div className="inp__img">
            <label
              htmlFor="Size"
              style={{ fontWeight: "600", color: "GrayText" }}
            >
              Size:
            </label>
            <input
            value={InputState.Range}
              type="range"
              name="Range"
              className="range__inp"
              onChange={HandleChangeInput}
            />
          </div>

          <div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="btn__submit"
            >
              Submit
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
