import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../../App.css";
import Button from "@material-ui/core/Button";
import { ShippingContext } from "../../../CartContext";

const AddressForm = ({ handleNext }) => {
  const [ShippingState, setShippingContext] = useContext(ShippingContext);

  return (
    <Formik
      initialValues={{
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
      }}
      validationSchema={Yup.object({
        //
        address: Yup.string()
          .max(60, "Deben ser 60 caracteres o menos")
          .required("requerido"),

        city: Yup.string()
          .max(15, "Deben ser 15 caracteres o menos")
          .required("requerido"),

        state: Yup.string()
          .max(15, "Deben ser 15 caracteres o menos")
          .required("requerido"),

        zipCode: Yup.string()
          .length(5)
          .max(99999, "Deben ser 9999 o menos")
          .min(1, "Deben ser al menos 0001")
          .required("requerido")
          .length(5),

        country: Yup.string()
          .max(20, "Deben ser 20 caracteres o menos")
          .required("requerido"),

        // //
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          setShippingContext({ ...ShippingState, ...values });
          handleNext();
        }, 400);
      }}
    >
      {({ errors, touched }) => (
        <div className="checkout-parent ">
          <div className="checkout-container">
            <h2>Address Info</h2>

            <Form className="checkout-form">
              <label htmlFor="country">Pais</label>
              <Field name="country" type="text" />
              <ErrorMessage name="country">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <br />
              <label htmlFor="city">Ciudad </label>
              <Field name="city" type="text" />
              <ErrorMessage name="city">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <br />
              <label htmlFor="state">Estado/Provincia/Region </label>
              <Field name="state" type="text" />
              <ErrorMessage name="state">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <br />
              <label htmlFor="zipCode">Codigo postal</label>
              <Field name="zipCode" type="number" />
              <ErrorMessage name="zipCode">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <br />
              <label htmlFor="address">Direccion </label>
              <Field name="address" type="text" />
              <ErrorMessage name="address">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <br />

              <Button
                variant="contained"
                className="checkout-btn"
                type="submit"
                color="primary"
              >
                Enviar
              </Button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default AddressForm;
