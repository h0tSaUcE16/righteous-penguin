import PropTypes from "prop-types";
import React from "react";
import * as Styled from "./Layout.styled.js";

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
		<Styled.LayoutWrapper>
			{header && <Styled.HeaderLayout ref={headerRef}>{header}</Styled.HeaderLayout>}
			
			{left && (
				<Styled.LeftSideLayout
					ref={leftRef}
					$top={headerHeight}
				>
					{left}
				</Styled.LeftSideLayout>
			)}
			
			{main && (
				<Styled.MainLayout
					$left={leftWidth}
					$right={rightWidth}
					$top={headerHeight}
				>
					{main}
				</Styled.MainLayout>
			)}
			
			{right && (
				<Styled.RightSideLayout
					ref={rightRef}
					$top={headerHeight}
				>
					{right}
				</Styled.RightSideLayout>
			)}
			
			{footer && <Styled.FooterLayout>{footer}</Styled.FooterLayout>}
		</Styled.LayoutWrapper>
	);
}

Layout.propTypes = {
	footer: PropTypes.node,
	header: PropTypes.node,
	left: PropTypes.node,
	main: PropTypes.node,
	right: PropTypes.node,
};