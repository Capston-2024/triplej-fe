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
          name="degree"
          placeholder="Final degree name"
          size="short"
          status="default"
          options={educationLevelOptions}
          value={formData.degree}
          onChange={(value) =>
            handleInputChange({ target: { name: "degree", value } })
          }
        />
        <Dropdown
          label="대학교"
          name="college"
          placeholder="University"
          size="short"
          status="default"
          options={universityOptions}
          value={formData.college}
          onChange={(value) =>
            handleInputChange({ target: { name: "college", value } })
          }
        />
      </Card>
      <div>
        <Dropdown
          label="전공"
          name="major"
          placeholder={"Field of study and major"}
          size="long"
          status={status}
          options={majorOptions}
          value={formData.major}
          onChange={(value) =>
            handleInputChange({ target: { name: "major", value } })
          }
        />
      </div>
      <Card>
        <Dropdown
          label="현재 소유 비자"
          name="visa"
          placeholder="Visa"
          size="short"
          status="default"
          options={visaOptions}
          value={formData.visa}
          onChange={(value) =>
            handleInputChange({ target: { name: "visa", value } })
          }
        />
        <Dropdown
          label="TOPIK 등급"
          name="topik"
          placeholder="TOPIK"
          size="short"
          status="default"
          options={topikLevelOptions}
          value={formData.topik}
          onChange={(value) =>
            handleInputChange({ target: { name: "topik", value } })
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
