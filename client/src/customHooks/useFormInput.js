// const [email, setEmail] = useState("init vale");
// <input
// required
// placeholder="Enter Email"
// onChange={(e) => setEmail(e.target.value)}
// value={email}
// />

// const [pass, setPass] = useState("");
// <input
// required
// placeholder="Enter Pass"
// onChange={(e) => setPass(e.target.value)}
// value={pass}
// />

import { useState } from "react";

export const useFormInput = (initialValue, name) => {
  const [x, setX] = useState(initialValue);
  return {
    label: name,
    required: "required",
    placeholder: `Enter ${name}`,
    onChange: (e) => setX(e.target.value),
    value: x,
  };
};

// const email = useFormInput('', Email)

// <input {...email} />

// <input
//     required,
//     placeholder: `Enter Email`,
//     onChange: (e) => setX(e.target.value),
//     value: x,
//     />
