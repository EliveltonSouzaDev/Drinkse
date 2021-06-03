import { Button } from "./Button.styles";

function ButtonDefault({ corFundo, text }) {
  return <Button corFundo={corFundo}> {text}</Button>;
}

export default ButtonDefault;
