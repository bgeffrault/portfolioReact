import { FC } from "react";

const Person: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="43"
      fill="none"
     viewBox="0 0 50 50"
    >
      <path
        fill="#8CA5CD"
        d="M25 25c6.906 0 12.5-5.594 12.5-12.5S31.906 0 25 0 12.5 5.594 12.5 12.5 18.094 25 25 25zm0 6.25c-8.344 0-25 4.188-25 12.5v3.125A3.134 3.134 0 003.125 50h43.75A3.134 3.134 0 0050 46.875V43.75c0-8.313-16.656-12.5-25-12.5z"
      ></path>
    </svg>
  );
};

export default Person;
