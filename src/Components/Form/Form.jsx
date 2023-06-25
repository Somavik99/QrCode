import "./Form.css";
import { motion } from "framer-motion";

const Form = () => {
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
              type="text"
              name="Link"
              placeholder="Provide Link..."
              className="text__inp"
            />
          </div>
          <div className="inp__img">
            <label
              htmlFor="Logo"
              style={{ fontWeight: "600", color: "GrayText" }}
            >
              Logo:
            </label>
            <input type="file" name="File" className="file__inp" />
          </div>
          <div className="inp__img">
            <label
              htmlFor="Size"
              style={{ fontWeight: "600", color: "GrayText" }}
            >
              Size:
            </label>
            <input type="range" name="File" className="range__inp" />
          </div>
          <div className="qr__color">
            <label
              htmlFor="Color"
              style={{ fontWeight: "600", color: "GrayText" }}
            >
              Color:
            </label>
            <input type="color" name="File" className="color__inp" />
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
