interface Props {
  action: () => void;
}

export const LoginButton = ({action}: Props) => {
  return (
    <button type="button" className={"btn-primary"} onClick={action}>
      Login
    </button>
  )
}
