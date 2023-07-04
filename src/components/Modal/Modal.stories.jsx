import { Modal } from "./Modal.jsx";
import styled from "styled-components";
import React from "react";

export default {
	title: "Components/Modal",
	component: Modal,
	tags: ["autodocs"],
};

export const Generic = {
	args: {
		children: <div>children!</div>,
	},
}

const MinimumHeight = styled.div`
	min-height: 200px;
  
  	.styled-modal-background {
	  	background: rgba(255, 55, 55, 0.6);
    }
  
  	.styled-modal-wrapper {
  		margin: 20px;
	  	padding: 20px;
    }
`;

export const Styled = () => (
	<MinimumHeight>
		<Modal>
			<div>this modal has been customized using the default classNames</div>
			<div>the modal is named "styled-modal-wrapper"</div>
			<div>the background is named "styled-modal-background"</div>
		</Modal>
	</MinimumHeight>
);

export const OpenOnButtonClick = () => {
	const [open, setOpen] = React.useState(false);
	const handleButtonClick = () => setOpen(true);
	const handleModalClose = () => setOpen(false);
	
	return (
		<>
			<button onClick={handleButtonClick}>click me to open</button>
			<Modal
				onRequestClose={handleModalClose}
				open={open}
			>
				<div>i am open</div>
			</Modal>
		</>
	)
};

export const NoBackgroundOption = {
	args: {
		noBackground: true,
		children: "Look ma, no background!"
	}
}

export const SideOption = {
	args: {
		kind: "side",
		children: "Look ma, I'm on the side!"
	}
}