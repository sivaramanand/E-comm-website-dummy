import React, { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import ConformationScreen from "./Final Output";
import ProgressBar from "./ProgressBar";
const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    state: "",
    city: "",
  });

  const totalSteps = 4; 
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <ProgressBar step={step} totalSteps={totalSteps} />
      {step === 1 && (
        <Page1
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <Page2
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <Page3
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 4 && <ConformationScreen formData={formData} prevStep={prevStep} />}

    </div>
  );
};

export default MultiStepForm;
