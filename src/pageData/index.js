import React from "react";
import logo from "../Icon.svg";

import { useCMS, useForm, usePlugin } from "tinacms";

export function PageContent() {
  const pageData = {
    title: "Tina is not a CMS",
    body: "It is a toolkit for creating a custom CMS.",
  };
  const formConfig = {
    id: "tina-tutorial-index",
    label: "Edit Page",
    fields: [
      {
        name: "title",
        label: "Title",
        component: "text",
      },
      {
        name: "body",
        label: "Body",
        component: "textarea",
      },
      {
        name: "body1",
        label: "Body1",
        component: "textarea",
      },
    ],
    initialValues: pageData,
    onSubmit: async () => {
      window.alert("Saved!");
    },
  };

  // 3. Create the form
  const [editableData, form] = useForm(formConfig);

  console.log(editableData);
  // 4. Register it with the CMS
  usePlugin(form);

  const cms = useCMS();
  return (
    <section className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {/**
       * 5. Render the `editableData` returned from `useForm`
       */}
      <h1>{editableData.title}</h1>
      <p>{editableData.body}</p>
      <button onClick={() => cms.toggle()}>
        {cms.enabled ? "Exit Edit Mode" : "Edit This Site"}
      </button>
    </section>
  );
}
