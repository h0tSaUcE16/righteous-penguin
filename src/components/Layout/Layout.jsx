import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const LayoutWrapper = styled.div.attrs({
	className: "styled-layout-wrapper",
})`
	width: 100%;
  	box-sizing: border-box;
  
  	& > * {
	  	box-sizing: border-box;
    }
`;

const HeaderLayout = styled.header.attrs({
	className: "styled-header-layout",
})`
  	width: 100%;
	position: fixed;
  	top: 0;
  	left: 0;
  	z-index: 3;
  	line-height: 20px;
`;

// const SolidRuleWrapper = styled.div.attrs({
// 	className: "styled-solid-rule-wrapper",
// })`
// 	position: absolute;
//   	bottom: 0;
//   	right: 0;
// `;
//
// const SolidRule = styled.div.attrs({
// 	className: "styled-solid-rule",
// })`
//   	background-color: black;
//
//   	${p => p.$kind?.toLowerCase() === "horizontal" && css`
//   		width: calc(100% - 20px);
// 	  	height: 1px;
// 	  	//margin: 0 auto;
//     `}
//
//     ${p => p.$kind?.toLowerCase() === "vertical" && css`
// 	  	width: 1px;
//   		height: calc(100% - 20px);
// 	  	//margin: auto 0;
//     `}
// `;

const SideLayout = styled.div.attrs({
	className: "styled-side-layout",
})`
  	width: 20%;
	position: fixed;
  	top: 0;
  	z-index: 2;

    ${p => p.$top && css`
		top: ${p.$top}px;
	`}
`;

const LeftSideLayout = styled(SideLayout).attrs({
	className: "styled-left-side-layout",
})`
    left: 0;
`;

const RightSideLayout = styled(SideLayout).attrs({
	className: "styled-right-side-layout",
})`
	right: 0;
`;

const MainLayout = styled.main.attrs({
	className: "styled-main-layout",
})`
  	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
  	z-index: 1;
	
	${p => p.$top && css`
		top: ${p.$top}px;
	`}
	
	${p => p.$left && css`
		left: ${p.$left}px;
		width: calc(100% - ${p.$left}px);
	`}
	
	${p => p.$right && css`
		right: ${p.$right}px;
		width: calc(100% - ${p.$right}px);
	`}
	
	${p => p.$left && p.$right && css`
		left: ${p.$left}px;
		right: ${p.$right}px;
		width: calc(100% - ${p.$left}px - ${p.$right}px);
	`}
`;

const FooterLayout = styled.footer.attrs({
	className: "styled-footer-layout",
})`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 3;
    line-height: 20px;
`;

export const Layout = ({
	footer,
	header,
	left,
	main,
	right,
}) => {
	const headerRef = React.useRef();
	const leftRef = React.useRef();
	const rightRef = React.useRef();
	const [headerHeight, setHeaderHeight] = React.useState(0);
	const [leftWidth, setLeftWidth] = React.useState(0);
	const [rightWidth, setRightWidth] = React.useState(0);
	
	React.useLayoutEffect(() => {
		setHeaderHeight(headerRef.current?.offsetHeight);
	}, [headerRef]);
	
	React.useLayoutEffect(() => {
		setLeftWidth(leftRef.current?.offsetWidth);
	}, [leftRef]);
	
	React.useLayoutEffect(() => {
		setRightWidth(rightRef.current?.offsetWidth);
	}, [rightRef]);
	
	return (
		<LayoutWrapper>
			{header && <HeaderLayout ref={headerRef}>{header}</HeaderLayout>}
			
			{left && (
				<LeftSideLayout
					ref={leftRef}
					$top={headerHeight}
				>
					{left}
				</LeftSideLayout>
			)}
			
			{main && (
				<MainLayout
					$left={leftWidth}
					$right={rightWidth}
					$top={headerHeight}
				>
					{main}
				</MainLayout>
			)}
			
			{right && (
				<RightSideLayout
					ref={rightRef}
					$top={headerHeight}
				>
					{right}
				</RightSideLayout>
			)}
			
			{footer && <FooterLayout>{footer}</FooterLayout>}
		</LayoutWrapper>
	);
}

Layout.propTypes = {
	footer: PropTypes.node,
	header: PropTypes.node,
	left: PropTypes.node,
	main: PropTypes.node,
	right: PropTypes.node,
};