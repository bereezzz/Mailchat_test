import React, { useRef, useEffect } from "react";
import "./EditableTextArea.css";

interface EditableTextAreaProps {
  value: string;
  onChange: (text: string) => void;
}

const EditableTextArea: React.FC<EditableTextAreaProps> = ({
  value,
  onChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTextChange = () => {
    if (containerRef.current) {
      const text = containerRef.current.innerText;
      onChange(text);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerText = value;
    }
  }, [value]);

  return (
    <div className="generalBlock">
      <div
        ref={containerRef}
        className="editableTextarea"
        contentEditable
        onInput={handleTextChange}
      />
      <div className="underInput">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M4.82841 10.4853L10.4853 4.82843C11.6568 3.65686 13.5563 3.65686 14.7279 4.82843C15.8995 6 15.8995 7.8995 14.7279 9.07107L8.01039 15.7886C7.4246 16.3744 6.47485 16.3744 5.88907 15.7886C5.30328 15.2028 5.30328 14.2531 5.88907 13.6673L11.8995 7.65686C12.0947 7.46159 12.0947 7.14501 11.8995 6.94975C11.7042 6.75449 11.3876 6.75449 11.1924 6.94975L5.18196 12.9602C4.20565 13.9365 4.20565 15.5194 5.18196 16.4957C6.15827 17.472 7.74118 17.472 8.71749 16.4957L15.435 9.77818C16.9971 8.21608 16.9971 5.68342 15.435 4.12132C13.8729 2.55922 11.3403 2.55922 9.77815 4.12132L4.1213 9.77818C3.92604 9.97344 3.92604 10.29 4.1213 10.4853C4.31656 10.6805 4.63315 10.6805 4.82841 10.4853Z"
            fill="#605E5C"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10.8164 10.1973L3.28515 11.4525C3.10876 11.4819 2.96149 11.6032 2.89894 11.7708L0.301044 18.7282C0.0523705 19.3676 0.721794 19.9777 1.33546 19.6708L19.3355 10.6708C19.8882 10.3944 19.8882 9.60557 19.3355 9.32918L1.33546 0.329181C0.721794 0.0223491 0.0523705 0.632391 0.301044 1.27184L2.89894 8.22923C2.96149 8.39675 3.10876 8.51812 3.28515 8.54752L10.8164 9.80272C10.9253 9.82088 10.9989 9.92393 10.9808 10.0329C10.9667 10.1172 10.9007 10.1832 10.8164 10.1973Z"
            fill="#407EC9"
          />
        </svg>
      </div>
    </div>
  );
};

export default EditableTextArea;
