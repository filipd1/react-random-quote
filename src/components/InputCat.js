import { Button } from "./Button";

export const InputCat = ({
  cat,
  onSubmitHandle,
  onChangeHandle,
  onClickHandle,
  isDisabled,
}) => {
  return (
    <form onSubmit={onSubmitHandle}>
      <label>Choose a category:</label>
      <input
        type="text"
        value={cat}
        placeholder="random"
        onChange={onChangeHandle}
      />
      <Button
        value="Generate"
        color="blue"
        onClick={onClickHandle}
        isDis={isDisabled}
      />
    </form>
  );
};
