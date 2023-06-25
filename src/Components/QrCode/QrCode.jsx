import "./QrOCode.css";
import { QRCodeCanvas } from "qrcode.react";
import { motion } from "framer-motion";
import Form from "../Form/Form";
const QrCode = () => {
  const HandleSubmit = (e) => {
    e.preventDefault();
  };

  const boxVariants = {
    qrBoxVariant: {
      hidden: {
        x: "-100vw",
      },
      visible: {
        x: 0,
        transition: {
          type: "spring",
          stiffness: 75,
          delay: 0.4,
        },
      },
    },

    FormBoxVariant: {
      FormHidden: {
        x: "100vw",
      },
      FormVisible: {
        x: 0,
        transition: {
          type: "spring",
          stiffness: 75,
          delay: 0.1,
        },
      },
    },
  };
  return (
    <div className="Form__group">
      <motion.form
        variants={boxVariants.qrBoxVariant}
        initial="hidden"
        animate="visible"
        className="Card"
        onSubmit={HandleSubmit}
      >
        <div className="Qr-Container">
          <div className="QrCode">
            <QRCodeCanvas
              bgColor="#2b7dfa"
              fgColor="#ffffff"
              style={{ width: "140px", height: "140px" }}
            />
          </div>

          <p
            style={{
              textAlign: "center",
              marginLeft: "-15px",
              marginBottom: "-18px",
              fontWeight: "bolder",
            }}
          >
            Improve your front-end skills by building projects <br />
          </p>
          <p
            style={{
              textAlign: "center",
              marginLeft: "-15px",
              paddingBottom: "10px",
              fontSize: "12px",
              color: "darkgray",
            }}
          >
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="gen-btn"
            style={{
              textAlign: "center",
              marginLeft: "-0.5px",
              marginRight: "20px",
              paddingBottom: "10px",
              fontSize: "12px",
              borderRadius: "10px",
              padding: "8px",
            }}
          >
            Generate QrCode
          </motion.button>
        </div>
      </motion.form>
      <motion.div
        variants={boxVariants.FormBoxVariant}
        initial="FormHidden"
        animate="FormVisible"
        className="form__CL"
      >
        <Form />
      </motion.div>
    </div>
  );
};

export default QrCode;
