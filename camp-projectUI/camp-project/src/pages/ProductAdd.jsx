import React from "react";
import { Formik, Form,ErrorMessage, Field} from "formik";
import * as Yup from "yup";
import {Button,FormField,Input } from "semantic-ui-react";
import TextInput from "../utulities/customFormControls/TextInput";

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 0 };

    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
      });

      return (
        <Formik inverted
        initialValues={initialValues} 
        validationSchema={schema}
        onSubmit = {(values)=>{
            console.log(values)
        }}
        >
          <Form className="ui form">

            <TextInput  name="productName" placeholder="Ürün Adı"/>
            <TextInput  name="unitPrice" placeholder="Ürün fiyatı"/>
            
            <Button color="green" type="submit">Ekle</Button>
          </Form>
        </Formik>
    );
  }