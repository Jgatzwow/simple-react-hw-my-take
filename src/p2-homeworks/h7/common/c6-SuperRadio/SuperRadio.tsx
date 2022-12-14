import React, {
  ChangeEvent,
  InputHTMLAttributes,
  DetailedHTMLProps,
} from "react";
import styles from "./SuperRadio.module.css";
type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: any[];
  onChangeOption?: (option: any) => void;
};

const SuperRadio: React.FC<SuperRadioPropsType> = ({
  type,
  name,
  options,
  value,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    onChangeOption && onChangeOption(e.currentTarget.name);
    // onChange, onChangeOption
  };

  const mappedOptions: any[] = options
    ? options.map(
        (
          o,
          i // map options with key
        ) => (
          <label key={name + "-" + i} className={styles.Label__Super__Radio}>
            <input
              className={styles.Super__Radio}
              type={"radio"}
              name={o}
              checked={o === value}
              value={value}
              onChange={onChangeCallback}
              {...restProps}
              // name, checked, value, onChange
            />
            {o}
          </label>
        )
      )
    : [];

  return <>{mappedOptions}</>;
};

export default SuperRadio;
