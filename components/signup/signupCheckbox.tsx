import React, { useState, useEffect } from "react";
import Checkbox from "../checkbox";
type CheckboxState = {
  ageChecked: boolean;
  finTransChecked: boolean;
  termOfUseChecked: boolean;
  adInformChecked: boolean;
  emailInformChecked: boolean;
  smsInformChecked: boolean;
  allChecked: boolean;
  essentialChecked: boolean;
};
const SignupCheckbox = () => {
  const [checkboxes, setCheckboxes] = useState({
    ageChecked: false,
    finTransChecked: false,
    termOfUseChecked: false,
    adInformChecked: false,
    emailInformChecked: false,
    smsInformChecked: false,
    allChecked: false,
    essentialChecked: false,
  });

  const handleCheckboxChange = (name: string) => {
    if (name === "allChecked") {
      const newState = Object.fromEntries(
        Object.entries(checkboxes).map(([key, value]) => [
          key,
          !checkboxes.allChecked,
        ])
      ) as CheckboxState;
      console.log(newState);
      setCheckboxes(newState);
    } else {
      setCheckboxes((prev) => {
        const newCheckboxes = {
          ...prev,
          [name]: !prev[name as keyof CheckboxState],
        };
        let isAllChecked = true;
        let isEssentialChecked = true;
        Object.entries(newCheckboxes).map(([key, value]) => {
          key !== "allChecked"
            ? (isAllChecked = isAllChecked && value)
            : isAllChecked;
          key === ("finTransChecked" || "termOfUseChecked" || "ageChecked")
            ? (isEssentialChecked = isEssentialChecked && value)
            : isEssentialChecked;
        });
        newCheckboxes.allChecked = isAllChecked;
        newCheckboxes.essentialChecked = isEssentialChecked;
        return newCheckboxes;
      });
    }
  };

  return (
    <div>
      <div className="my-5 w-11/12 m-auto flex text-black-400 font-bold [&>*]:mr-5">
        <Checkbox
          checked={checkboxes.allChecked}
          disabled={false}
          onChange={() => handleCheckboxChange("allChecked")}
        >
          모두 확인했으며 동의합니다.
        </Checkbox>
      </div>
      <div className="ml-14 text-sm text-gray-500">
        전체 동의 시 필수 및 선택 정보에 대한 동의가 포함되어 있습니다.
      </div>
      {/* 이용 약관 동의 */}
      <div className="my-5 border-2 border-gray-300 p-5 [&>*]:mb-3">
        <Checkbox
          checked={checkboxes.termOfUseChecked}
          disabled={false}
          onChange={() => handleCheckboxChange("termOfUseChecked")}
        >
          [필수] HanuMall 이용 약관 동의
        </Checkbox>
        <Checkbox
          checked={checkboxes.ageChecked}
          disabled={false}
          onChange={() => handleCheckboxChange("ageChecked")}
        >
          [필수] 만 14세 이상입니다.
        </Checkbox>
        <Checkbox
          checked={checkboxes.finTransChecked}
          disabled={false}
          onChange={() => handleCheckboxChange("finTransChecked")}
        >
          [필수] 전자금융거래 이용약관 동의
        </Checkbox>
        <Checkbox
          checked={checkboxes.adInformChecked}
          disabled={false}
          onChange={() => handleCheckboxChange("adInformChecked")}
        >
          [선택] 광고성 정보 수신 동의
        </Checkbox>
        <div className="pl-5 [&>*]:mt-3">
          <Checkbox
            checked={checkboxes.emailInformChecked}
            disabled={false}
            onChange={() => handleCheckboxChange("emailInformChecked")}
          >
            [선택] 이메일 수신 동의
          </Checkbox>
          <Checkbox
            checked={checkboxes.smsInformChecked}
            disabled={false}
            onChange={() => handleCheckboxChange("smsInformChecked")}
          >
            [선택] SMS, SNS 수신 동의
          </Checkbox>
        </div>
      </div>
    </div>
  );
};

export default SignupCheckbox;
