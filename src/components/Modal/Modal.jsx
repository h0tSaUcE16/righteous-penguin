import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const ModalBackground = styled.div.attrs({
	className: "styled-modal-background",
})`
	width: 100%;
  	height: 100%;
  	position: fixed;
  	top: 0;
  	left: 0;
  	z-index: 15; // TODO: implement mixin
  	background: rgba(0, 0, 0, 0.6);

  	${p => p.$noBackground && css`
	    background: unset;
	`}
`;

const ModalWrapper = styled.div.attrs({
	className: "styled-modal-wrapper",
})`
	background: white;

  	${p => p.$kind?.toLowerCase() === "side" && css`
		height: 100%;
		position: absolute;
	`}
`;

export const Modal = ({
	children,
	kind,
	noBackground,
	onRequestClose,
	open = true,
}) => {
	if (!open) return null;
	
	return (
		<ModalBackground
			$noBackground={noBackground}
			onClick={onRequestClose}
		>
			<ModalWrapper $kind={kind}>
				{children || "hello, world!"}
			</ModalWrapper>
		</ModalBackground>
	);
};

Modal.propTypes = {
	children: PropTypes.node,
	kind: PropTypes.side,
	noBackground: PropTypes.bool,
	onRequestClose: PropTypes.func,
	open: PropTypes.bool,
}