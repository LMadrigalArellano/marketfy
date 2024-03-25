interface Props {
  action: () => void;
  text: string;
}

export const PrimaryButton = ({action, text}: Props) => {
  return (
    <button type="button" className={"btn-primary"} onClick={action}>
      {text}
    </button>
  )
}
