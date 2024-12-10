import { message } from "ant-design-vue";

export const passwordReg =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
export const validatePass = (_rule: any, value: string) => {
  //   if (!value) {
  //     return Promise.reject(new Error('Enter Password.'));
  // } else {
  //     if (!passwordReg.test(value)) {
  //         return Promise.reject(new Error('Enter strong Password including letters Lowercase, Uppercase, Numbers and Special characters.'));
  //     }
  // }
  if (value && !passwordReg.test(value)) {
    return Promise.reject(
      new Error(
        "Enter strong Password including letters Lowercase, Uppercase, Numbers and Special characters."
      )
    );
  }

  return Promise.resolve();
};
export const validateName = (_rule: any, value: string) => {
  if (!value) {
    return Promise.reject(new Error("Name is required."));
  } else {
    if (!/^[a-zA-Z\s]+$/.test(value)) {
      return Promise.reject(new Error("Invalid Character."));
    }
  }
  return Promise.resolve();
};
export const validatePhone = (_rule: any, value: string) => {
  if (!value) {
    return Promise.reject(new Error("Enter phone number."));
  } else {
    if (!/^\d{10,11}$/.test(value)) {
      return Promise.reject(new Error("Enter 10/11 digits."));
    }
  }
  return Promise.resolve();
};
export const validateEmail = (_rule: any, value: string) => {
  if (!value) {
    return Promise.reject(new Error("Email is required."));
  } else {
    if (!/^[a-zA-Z0-9_\.]+@[a-zA-Z0-9-]+[\.a-zA-Z]+$/.test(value)) {
      return Promise.reject(new Error("Please, enter valid email address."));
    }
  }
  return Promise.resolve();
};

/**
 * 复制函数
 */
export const textCopyFun = (context: any) => {
  let oInput = document.createElement("input");
  oInput.value = context;
  document.body.appendChild(oInput);
  oInput.select();
  document.execCommand("Copy");
  message.success("Job Link Copied.");
  oInput.remove();
};

export const formatDate = (dateString: string) => {
  const dateParts = dateString.split(" ");
  const monthMap: { [key: string]: string } = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  const day = dateParts[1].replace(",", "");
  const month = monthMap[dateParts[0]];
  const year = dateParts[2];

  return `${day.padStart(2, "0")}/${month}/${year}`;
};
