import styled from "styled-components";
import { useState } from "react";
import Dropdown from "../Dropdown";
import {
  educationLevelOptions,
  majorOptions,
  topikLevelOptions,
  universityOptions,
  visaOptions,
} from "../../constants/options";

const JoinForm2 = ({ formData, setFormData }) => {
  const [status, setStatus] = useState("default");

  const handleInputChange = (e) => {
    if (e.target && e.target.name) {
      const { name, value } = e.target;
      setFormData((prev) => {
        const newData = { ...prev, [name]: value };
        return newData;
      });
    }
  };

  return (
    <InputContainer>
      <Card>
        <Dropdown
          label="최종학력"
          name="Degree"
          placeholder="Final degree name"
          size="short"
          status="default"
          options={educationLevelOptions}
          value={formData.Degree}
          onChange={(value) =>
            handleInputChange({ target: { name: "Degree", value } })
          }
        />
        <Dropdown
          label="대학교"
          name="College"
          placeholder="University"
          size="short"
          status="default"
          options={universityOptions}
          value={formData.College}
          onChange={(value) =>
            handleInputChange({ target: { name: "College", value } })
          }
        />
      </Card>
      <div>
        <Dropdown
          label="전공"
          name="Major"
          placeholder={"Field of study and major"}
          size="long"
          status={status}
          options={majorOptions}
          value={formData.Major}
          onChange={(value) =>
            handleInputChange({ target: { name: "Major", value } })
          }
        />
      </div>
      <Card>
        <Dropdown
          label="현재 소유 비자"
          name="Visa"
          placeholder="Visa"
          size="short"
          status="default"
          options={visaOptions}
          value={formData.Visa}
          onChange={(value) =>
            handleInputChange({ target: { name: "Visa", value } })
          }
        />
        <Dropdown
          label="TOPIK 등급"
          name="Topik"
          placeholder="TOPIK"
          size="short"
          status="default"
          options={topikLevelOptions}
          value={formData.Topik}
          onChange={(value) =>
            handleInputChange({ target: { name: "Topik", value } })
          }
        />
      </Card>
    </InputContainer>
  );
};
export default JoinForm2;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  gap: 40px;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
`;
