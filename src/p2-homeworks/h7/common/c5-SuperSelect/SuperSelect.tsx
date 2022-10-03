import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
} from "react";
import styles from "./SuperSelect.module.css";
type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[];
  onChangeOption?: (option: any) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: any[] = options
    ? options.map((o, idx) => {
        return (
          <option className={styles.SuperSelect__option} key={idx}>
            {o}
          </option>
        );
      })
    : []; // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e);
    onChangeOption && onChangeOption(e.currentTarget.value);
    // onChange, onChangeOption
  };

  return (
    <select
      onChange={onChangeCallback}
      {...restProps}
      className={styles.SuperSelect}
    >
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;
