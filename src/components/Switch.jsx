import { css } from "@emotion/react";

export default function Switch({ label, value, onChange }) {
  const no = Math.floor(Math.random() * 10000);
  return (
    <label
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 700;
        width: 100%;
        font-size: clamp(12px, 1.4vw, 18px);
      `}
      htmlFor={`switch-${no}`}
    >
      {label || value}
      <label
        css={css`
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        `}
      >
        <input
          id={`switch-${no}`}
          css={css`
            display: none;
            &:checked + span {
              background-color: #e9772f;
            }

            &:focus + span {
              box-shadow: 0 0 1px #e9772f;
            }

            &:checked + span:before {
              -webkit-transform: translateX(26px);
              -ms-transform: translateX(26px);
              transform: translateX(26px);
            }
          `}
          type="checkbox"
          checked={value}
          onChange={onChange}
        />
        <span
          css={css`
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #f5c646;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 34px;

            &:before {
              position: absolute;
              content: "";
              height: 26px;
              width: 26px;
              left: 4px;
              bottom: 4px;
              background-color: white;
              -webkit-transition: 0.4s;
              transition: 0.4s;
              border-radius: 50%;
            }

            @media screen and (max-width: 768px) {
              transform: scale(0.8);

              &:before {
                transform: scale(0.9);
              }
            }

            @media screen and (max-width: 425px) {
              transform: scale(0.65);

              &:before {
                transform: scale(0.8);
              }
            }
          `}
        ></span>
      </label>
    </label>
  );
}
