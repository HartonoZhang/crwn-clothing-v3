import {
  FormInputContainer,
  FormInputLabelContainer,
  GroupContainer,
} from "./form-input.style";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer {...otherProps} />
      {label && (
        <FormInputLabelContainer
          className={otherProps.value.length ? "shrink" : ""}
        >
          {label}
        </FormInputLabelContainer>
      )}
    </GroupContainer>
  );
};

export default FormInput;
