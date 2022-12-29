import PropTypes from "prop-types";
import styles from "./Button.module.css"; // ##1. 각각의 컴포넌트별로 NAME.module.css를 만들어 일반적인 css를 작성한다. 대신 class명칭을 준다 (ex .btn) 그리고 컴포넌트에서 css모듈을 임포트한다.

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>; // ##2. 임포트 한 컴포넌트의 css module를 사용하기 위해서는 className을 지정한다.
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
