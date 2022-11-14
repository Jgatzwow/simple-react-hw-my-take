import React, { useState } from "react";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import { postRequestHW } from "../api/requsetAPI";

const Request = () => {
  const [resp, setResp] = useState("");
  const [error, setError] = useState("");
  const [checked, setChecked] = useState(false);

  const postRequestHWHandler = async () => {
    try {
      const response = await postRequestHW(checked);
      console.log(response);
      setResp(response.data.info);
    } catch (error: any) {
      setError(error.response.data.info);
    }
  };
  const onChangeCheckboxHandler = (checkedVal: boolean) => {
    setChecked(checkedVal);
  };
  return (
    <>
      {resp && <div>{resp}</div>}
      {error && <div>{error}</div>}
      <div>
        <SuperButton onClick={postRequestHWHandler}> Send info </SuperButton>
      </div>
      <div>
        <SuperCheckbox
          checked={checked}
          onChangeChecked={onChangeCheckboxHandler}
        />
      </div>
    </>
  );
};

export default Request;
