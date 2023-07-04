import { Layout } from "./Layout.jsx";
import styled from "styled-components";

export default {
	title: "Components/Layout",
	component: Layout,
	tags: ["autodocs"],
}

const HeaderStyled = styled.div`
	padding: 20px;
  	background-color: aquamarine;
`;

const MainStyled = styled.div`
  	height: 200vh;
	padding: 20px;
  	background-color: coral;
`;

const SideStyled = styled.ul`
  	height: 100vh;
	margin: 0;
  	padding: 20px;
  	background-color: darkcyan;
`;

export const Generic = {
	args: {
		footer: <HeaderStyled>this is my footer</HeaderStyled>,
		header: <HeaderStyled>this is my header</HeaderStyled>,
		left: (
			<SideStyled>
				<li>one</li>
				<li>two</li>
				<li>three</li>
			</SideStyled>
		),
		main: (
			<MainStyled>
				<h3>aech three</h3>
				<p>and a paragraph to go underneath</p>
			</MainStyled>
		),
		right: (
			<SideStyled>
				<li>one</li>
				<li>two</li>
				<li>three</li>
			</SideStyled>
		),
	},
}

export const NoHeader = {
	args: {
		...Generic.args,
		header: null,
	}
}

export const NoLeft = {
	args: {
		...Generic.args,
		left: null,
	}
}

export const NoRight = {
	args: {
		...Generic.args,
		right: null,
	}
}

export const NoFooter = {
	args: {
		...Generic.args,
		footer: null,
	}
}